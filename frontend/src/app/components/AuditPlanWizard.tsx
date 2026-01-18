"use client";

import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

type ViewState = 'list' | 'wizard' | 'review';
type WizardStep = 'CONTEXT' | 'SCOPE' | 'SYSTEMS' | 'RISKS' | 'EVIDENCE_PLAN' | 'TIMELINE' | 'OWNERS_TASKS' | 'EXPORT';

const STEPS: WizardStep[] = ['CONTEXT', 'SCOPE', 'SYSTEMS', 'RISKS', 'EVIDENCE_PLAN', 'TIMELINE', 'OWNERS_TASKS', 'EXPORT'];

export default function AuditPlanStudio() {
    const { token } = useAuth();
    const [view, setView] = useState<ViewState>('list');
    const [plans, setPlans] = useState<any[]>([]);
    const [activePlan, setActivePlan] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isAILoading, setIsAILoading] = useState(false);

    // AI State
    const [aiSuggestion, setAiSuggestion] = useState<any>(null);
    const [aiQuestions, setAiQuestions] = useState<string[]>([]);
    const [aiWarnings, setAiWarnings] = useState<string[]>([]);

    // Controlled Copilot State
    const [askInput, setAskInput] = useState('');
    const [copilotChat, setCopilotChat] = useState<{ role: 'user' | 'ai', content: string, options?: string[] }[]>([
        { role: 'ai', content: 'I am your Audit Planning Copilot. How can I assist with your mandate configuration?' }
    ]);
    const [isAsking, setIsAsking] = useState(false);

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';

    useEffect(() => {
        if (token) fetchPlans();
    }, [token]);

    const fetchPlans = async () => {
        try {
            const res = await fetch(`${backendUrl}/audit/plans`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            // Map backend schema to frontend expectation
            const mapped = data.map((p: any) => ({
                id: p.id,
                framework: p.framework_id === 1 ? 'SOC2' : 'ISO27001', // Simple mapping for demo
                auditType: 'Type II',
                startDate: new Date(p.audit_period_start).toISOString().split('T')[0],
                endDate: new Date(p.audit_period_end).toISOString().split('T')[0],
                status: p.status.toLowerCase(),
                scope: { inScope: p.scope || [] }
            }));
            setPlans(mapped);
        } catch (err) {
            console.error(err);
        }
    };

    const handleCreateNew = () => {
        setActivePlan({
            framework: 'SOC2',
            auditType: 'TypeII',
            startDate: '2026-01-01',
            endDate: '2026-12-31',
            currentStep: 'CONTEXT',
            status: 'draft',
            scope: { inScope: [], outOfScope: [], regions: [], environments: [], dataTypes: [], assumptions: [], openQuestions: [] },
            systems: [],
            risks: [],
            evidencePlan: [],
            timeline: [],
            tasks: [],
        });
        setView('wizard');
    };

    const handleGenerateAIDraft = async () => {
        if (!activePlan) return;
        setIsAILoading(true);
        try {
            const res = await fetch(`/api/audit-plans/${activePlan.id || 'new'}/refine`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    step: activePlan.currentStep,
                    currentData: activePlan,
                    instruction: "Generate a comprehensive draft for a fintech institutional audit."
                })
            });
            const data = await res.json();
            setAiSuggestion(data.plan_patch);
            setAiQuestions(data.questions || []);
            setAiWarnings(data.warnings || []);
        } catch (err) {
            console.error(err);
        } finally {
            setIsAILoading(false);
        }
    };

    const applyAISuggestion = () => {
        if (!aiSuggestion) return;
        setActivePlan({ ...activePlan, ...aiSuggestion });
        setAiSuggestion(null);
    };

    const handleConfirmStep = async () => {
        if (!activePlan) return;
        const currentIndex = STEPS.indexOf(activePlan.currentStep);
        const nextStep = STEPS[currentIndex + 1];

        setIsLoading(true);
        try {
            const method = activePlan.id ? 'PATCH' : 'POST';
            const url = activePlan.id ? `/api/audit-plans/${activePlan.id}` : '/api/audit-plans';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...activePlan,
                    currentStep: nextStep || activePlan.currentStep,
                    status: nextStep ? 'in_progress' : 'ready'
                })
            });
            const saved = await res.json();
            setActivePlan(saved);

            if (!nextStep) {
                setView('review');
                fetchPlans();
            } else {
                setAiSuggestion(null);
                setAiQuestions([]);
                setAiWarnings([]);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleExport = async (id: string) => {
        try {
            const res = await fetch(`/api/audit-plans/${id}/export`, { method: 'POST' });
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `PBC_Index_${id}.md`;
            a.click();
        } catch (err) {
            console.error(err);
        }
    };

    const handleAskAI = async (query?: string) => {
        const text = query || askInput;
        if (!text.trim()) return;

        setCopilotChat(prev => [...prev, { role: 'user', content: text }]);
        setAskInput('');
        setIsAsking(true);

        try {
            // Mocking the controlled copilot behavior
            setTimeout(() => {
                const mockResponse = {
                    content: "To define the in-scope regions for SOC 2, should we focus on primary production zones or include disaster recovery sites?",
                    options: ["Primary AWS Regions", "DR/Failover Sites", "Full Global Footprint"]
                };
                setCopilotChat(prev => [...prev, { role: 'ai', content: mockResponse.content, options: mockResponse.options }]);
                setIsAsking(false);
            }, 1000);
        } catch (err) {
            console.error(err);
            setIsAsking(false);
        }
    };

    // --- RENDERERS ---

    if (view === 'list') {
        return (
            <div className="max-w-[1120px] mx-auto animate-in fade-in duration-500 pb-24">
                <header className="flex justify-between items-end mb-12">
                    <div className="space-y-4">
                        <h1 className="text-[32px] font-semibold tracking-tight">Audit Trajectories.</h1>
                        <p className="text-[#666666] text-[16px]">Automated GRC orchestration and institutional proof command.</p>
                    </div>
                    <button onClick={handleCreateNew} className="h-12 px-8 bg-foreground text-background rounded-xl text-[13px] font-bold hover:scale-105 transition-all">Orchestrate New Plan</button>
                </header>

                <div className="grid grid-cols-1 gap-4">
                    {plans.map(p => (
                        <div key={p.id} onClick={() => { setActivePlan(p); setView('review'); }} className="p-8 border border-[#EEEEEE] rounded-[2.5rem] bg-white group hover:border-primary/20 transition-all cursor-pointer shadow-sm flex items-center justify-between">
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <span className="text-[11px] font-black italic tracking-widest text-[#999999] uppercase">{p.framework}</span>
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${p.status === 'ready' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-amber-50 text-amber-600 border-amber-100'}`}>{p.status.toUpperCase()}</span>
                                </div>
                                <h3 className="text-[20px] font-semibold tracking-tight">SOC 2 - {p.auditType} ({p.startDate.split('-')[0]})</h3>
                                <p className="text-[14px] text-[#666666] italic">Review Period: {p.startDate} – {p.endDate}</p>
                            </div>
                            <div className="flex items-center gap-12">
                                <button onClick={(e) => { e.stopPropagation(); handleExport(p.id); }} className="p-3 bg-slate-50 border border-[#EEEEEE] rounded-xl text-[10px] font-bold text-[#999999] hover:text-foreground">Export Pack</button>
                                <div className="w-12 h-12 rounded-full border border-[#EEEEEE] flex items-center justify-center text-[#CCCCCC] group-hover:text-primary transition-all">→</div>
                            </div>
                        </div>
                    ))}
                    {plans.length === 0 && (
                        <div className="p-24 border-2 border-dashed border-[#EEEEEE] rounded-[4rem] text-center text-[#CCCCCC]">
                            No institutional trajectories registered.
                        </div>
                    )}
                </div>
            </div>
        );
    }

    if (view === 'wizard' && activePlan) {
        return (
            <div className="fixed inset-0 bg-white z-[100] flex animate-in fade-in duration-500 overflow-hidden">
                {/* Left: Progress */}
                <aside className="w-[300px] border-r border-[#EEEEEE] p-12 flex flex-col justify-between">
                    <div className="space-y-12">
                        <div className="space-y-2">
                            <div className="text-[11px] font-bold text-primary italic uppercase tracking-widest">Orchestration Studio</div>
                            <h2 className="text-xl font-bold tracking-tighter">SOC 2 Mandate</h2>
                        </div>
                        <nav className="space-y-8">
                            {STEPS.map((s, idx) => (
                                <div key={s} className="flex items-start gap-4">
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border ${activePlan.currentStep === s ? 'bg-primary border-primary text-white shadow-lg' : STEPS.indexOf(activePlan.currentStep) > idx ? 'bg-emerald-50 border-emerald-200 text-emerald-600' : 'text-[#CCCCCC] border-[#EEEEEE]'}`}>
                                        {STEPS.indexOf(activePlan.currentStep) > idx ? '✓' : idx + 1}
                                    </div>
                                    <div className={`text-[12px] font-bold uppercase tracking-widest ${activePlan.currentStep === s ? 'text-foreground' : 'text-[#CCCCCC]'}`}>{s.replace('_', ' ')}</div>
                                </div>
                            ))}
                        </nav>
                    </div>
                    <button onClick={() => setView('list')} className="text-[11px] font-bold text-[#999999] uppercase hover:text-foreground">Save & Abort</button>
                </aside>

                {/* Center: Workspace */}
                <main className="flex-1 bg-[#F9FAFB] flex flex-col">
                    <header className="px-16 py-8 border-b border-[#EEEEEE] bg-white flex justify-between items-center">
                        <div>
                            <h3 className="text-sm font-black italic tracking-widest text-[#999999] uppercase">{activePlan.currentStep.replace('_', ' ')}</h3>
                        </div>
                        <button onClick={handleConfirmStep} disabled={isLoading} className="h-10 px-6 bg-[#1A1A1A] text-white rounded-lg text-[12px] font-bold shadow-xl hover:scale-105 active:scale-95 transition-all">
                            {isLoading ? 'Synchronizing...' : 'Confirm Step →'}
                        </button>
                    </header>

                    <div className="flex-1 overflow-y-auto px-16 py-12">
                        <div className="max-w-[700px] mx-auto space-y-12">
                            {activePlan.currentStep === 'CONTEXT' && (
                                <div className="space-y-8 animate-in slide-in-from-bottom-2">
                                    <div className="grid grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold uppercase text-[#999999]">Framework</label>
                                            <select className="w-full h-12 px-4 rounded-xl border border-[#EEEEEE] bg-white outline-none font-medium text-sm shadow-sm" value={activePlan.framework} onChange={e => setActivePlan({ ...activePlan, framework: e.target.value })}>
                                                <option value="SOC2">SOC 2</option>
                                                <option value="ISO27001">ISO 27001</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold uppercase text-[#999999]">Audit Type</label>
                                            <select className="w-full h-12 px-4 rounded-xl border border-[#EEEEEE] bg-white outline-none font-medium text-sm shadow-sm" value={activePlan.auditType} onChange={e => setActivePlan({ ...activePlan, auditType: e.target.value })}>
                                                <option value="TypeI">Type I</option>
                                                <option value="TypeII">Type II</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold uppercase text-[#999999]">Period Start</label>
                                            <input type="date" className="w-full h-12 px-4 rounded-xl border border-[#EEEEEE] bg-white outline-none font-medium text-sm shadow-sm" value={activePlan.startDate} onChange={e => setActivePlan({ ...activePlan, startDate: e.target.value })} />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold uppercase text-[#999999]">Period End</label>
                                            <input type="date" className="w-full h-12 px-4 rounded-xl border border-[#EEEEEE] bg-white outline-none font-medium text-sm shadow-sm" value={activePlan.endDate} onChange={e => setActivePlan({ ...activePlan, endDate: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activePlan.currentStep === 'SCOPE' && (
                                <div className="space-y-8 animate-in slide-in-from-bottom-2">
                                    <div className="p-8 border border-[#EEEEEE] rounded-[2rem] bg-white space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold uppercase text-[#999999]">Institutional Perimeter (In-Scope)</label>
                                            <div className="flex flex-wrap gap-2">
                                                {activePlan.scope.inScope.map((s: string, i: number) => (
                                                    <span key={i} className="px-3 py-1 bg-slate-50 border border-[#EEEEEE] rounded-lg text-[12px] font-medium">{s}</span>
                                                ))}
                                                <input placeholder="+ Add entity" className="border-none bg-transparent outline-none text-[12px] p-1" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold uppercase text-[#999999]">Regions</label>
                                            <div className="flex flex-wrap gap-2">
                                                {activePlan.scope.regions.map((r: string, i: number) => (
                                                    <span key={i} className="px-3 py-1 bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-lg text-[12px] font-medium">{r}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Generic step placeholder */}
                            {activePlan.currentStep !== 'CONTEXT' && activePlan.currentStep !== 'SCOPE' && (
                                <div className="p-32 flex flex-col items-center justify-center text-center space-y-4">
                                    <span className="text-4xl text-primary animate-pulse">⚙️</span>
                                    <h4 className="text-lg font-bold tracking-tight">Synchronizing {activePlan.currentStep.replace('_', ' ')} module.</h4>
                                    <p className="text-sm text-[#999999] max-w-xs mx-auto leading-relaxed">Configuring logic gates and institutional proof parameters for the next audit trajectory phase.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </main>

                {/* Right: AI Panel */}
                <aside className="w-[400px] border-l border-[#EEEEEE] flex flex-col">
                    <header className="p-8 border-b border-[#EEEEEE] flex items-center gap-3">
                        <span className="text-xl">✨</span>
                        <h4 className="text-[12px] font-black italic tracking-widest text-[#999999] uppercase">AI Copilot Analysis</h4>
                    </header>
                    <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-[#FDFDFD]">
                        {!aiSuggestion && (
                            <div className="p-6 bg-white border border-[#EEEEEE] rounded-3xl space-y-6 shadow-sm">
                                <p className="text-[13px] leading-relaxed italic text-[#666666]">"I can synthesize a draft for this step based on institutional SOC 2 requirements."</p>
                                <button onClick={handleGenerateAIDraft} disabled={isAILoading} className="w-full py-4 bg-primary/10 text-primary border border-primary/20 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-primary/20 transition-all">
                                    {isAILoading ? 'Synthesizing...' : 'Generate AI Draft'}
                                </button>
                            </div>
                        )}

                        {aiSuggestion && (
                            <div className="space-y-6 animate-in slide-in-from-right-4">
                                <div className="p-6 bg-indigo-50 border border-indigo-100 rounded-3xl space-y-4 shadow-sm">
                                    <div className="text-[11px] font-black text-indigo-700 uppercase tracking-widest">Proposed Synthesis</div>
                                    <div className="text-[13px] leading-relaxed text-indigo-900 font-medium italic">
                                        "Draft generated for {activePlan.currentStep}. This incorporates standard fintech controls."
                                    </div>
                                    <button onClick={applyAISuggestion} className="w-full py-3 bg-indigo-600 text-white rounded-xl text-[11px] font-bold uppercase shadow-lg">Apply Patch</button>
                                </div>
                            </div>
                        )}

                        {aiQuestions.length > 0 && (
                            <div className="space-y-4 pt-4 border-t border-[#EEEEEE]">
                                <div className="text-[10px] font-black text-[#999999] uppercase tracking-widest">Clarification Required</div>
                                {aiQuestions.map((q, i) => (
                                    <div key={i} className="p-4 bg-amber-50 border border-amber-100 rounded-2xl text-[12px] font-medium text-amber-900 leading-relaxed italic animate-in slide-in-from-bottom-2">
                                        "{q}"
                                    </div>
                                ))}
                            </div>
                        )}

                        {aiWarnings.length > 0 && (
                            <div className="space-y-4 pt-4 border-t border-[#EEEEEE]">
                                <div className="text-[10px] font-black text-[#999999] uppercase tracking-widest">Auditor Precognition</div>
                                {aiWarnings.map((w, i) => (
                                    <div key={i} className="flex gap-3 text-[12px] font-medium text-rose-600 leading-relaxed italic animate-in slide-in-from-bottom-2">
                                        <span>⚠️</span>
                                        <span>{w}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Controlled Ask AI Console */}
                        <div className="pt-8 border-t border-[#EEEEEE] space-y-6">
                            <div className="flex items-center justify-between">
                                <h4 className="text-[10px] font-black italic tracking-widest text-[#999999] uppercase">Ask Copilot</h4>
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                            </div>

                            <div className="max-h-[300px] overflow-y-auto space-y-4 no-scrollbar">
                                {copilotChat.map((msg, i) => (
                                    <div key={i} className={`space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                                        <div className={`p-4 rounded-2xl text-[13px] leading-relaxed ${msg.role === 'ai' ? 'bg-white border border-[#EEEEEE] italic text-foreground shadow-sm' : 'bg-primary/5 text-primary font-medium text-right'}`}>
                                            {msg.content}
                                        </div>
                                        {msg.options && (
                                            <div className="flex flex-col gap-2 pt-1">
                                                {msg.options.map(opt => (
                                                    <button
                                                        key={opt}
                                                        onClick={() => handleAskAI(opt)}
                                                        className="px-4 py-2 bg-white border border-[#EEEEEE] rounded-xl text-[11px] font-bold text-primary hover:bg-primary/5 hover:border-primary/20 transition-all text-left"
                                                    >
                                                        {opt}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                {isAsking && (
                                    <div className="flex gap-2 p-4 italic text-[11px] text-[#999999]">
                                        Copilot is analyzing constraints...
                                    </div>
                                )}
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Ask about scope or evidence..."
                                    className="w-full h-12 pl-4 pr-10 rounded-xl border border-[#EEEEEE] bg-white text-[13px] outline-none focus:border-primary transition-all shadow-sm"
                                    value={askInput}
                                    onChange={e => setAskInput(e.target.value)}
                                    onKeyDown={e => e.key === 'Enter' && handleAskAI()}
                                />
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#CCCCCC] text-[10px]">↵</div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        );
    }

    if (view === 'review' && activePlan) {
        return (
            <div className="max-w-[1440px] mx-auto animate-in fade-in duration-500 pb-24 px-12 space-y-8 mt-4">
                <header className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setView('list')} className="p-3 hover:bg-muted-main rounded-xl transition-all">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <h1 className="text-[28px] font-bold tracking-tight">{activePlan.framework} Audit</h1>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-5 py-2.5 bg-primary text-white rounded-lg text-[13px] font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all">Mark Audit Complete</button>
                        <button onClick={() => handleExport(activePlan.id)} className="px-5 py-2.5 bg-white border border-border rounded-lg text-[13px] font-bold shadow-sm flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            Export Audit Report
                        </button>
                        <button className="p-2.5 border border-border rounded-lg bg-white">
                            <svg className="w-5 h-5 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="5" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="12" cy="19" r="2" /></svg>
                        </button>
                    </div>
                </header>

                {/* Top Info Cards */}
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-7 bg-white border border-border rounded-[1.5rem] p-10 grid grid-cols-3 gap-y-10 shadow-sm relative overflow-hidden">
                        <div className="space-y-1">
                            <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Owner</div>
                            <div className="text-sm font-bold text-primary">Institutional Lead</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Audit Date</div>
                            <div className="text-sm font-bold flex items-center gap-2">
                                <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                {activePlan.startDate}
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Audit Type</div>
                            <div className="inline-flex px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-black uppercase tracking-widest">{activePlan.auditType}</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Status</div>
                            <div className="inline-flex px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-amber-100">In Progress</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Audit Team</div>
                            <div className="w-8 h-8 rounded-full border-2 border-dashed border-border flex items-center justify-center text-muted-foreground text-sm">+</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Framework</div>
                            <div className="text-sm font-bold text-primary italic uppercase">{activePlan.framework}</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Entities</div>
                            <div className="inline-flex px-3 py-1 bg-primary/5 text-primary rounded-full text-[10px] font-black uppercase tracking-widest">Organization Wide</div>
                        </div>
                        <div className="space-y-1 col-span-2">
                            <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Observation Period</div>
                            <div className="text-sm font-bold flex items-center gap-2 italic">
                                <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                N/A
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-5 bg-white border border-border rounded-[1.5rem] p-10 space-y-8 shadow-sm">
                        <div className="space-y-2">
                            <div className="flex justify-between items-end">
                                <div className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">Audit Readiness</div>
                                <div className="text-[11px] font-black text-slate-400">92%</div>
                            </div>
                            <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '92%' }} />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-end">
                                <div className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">Policies</div>
                                <div className="text-[11px] font-black text-slate-400">100%</div>
                            </div>
                            <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '100%' }} />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-end">
                                <div className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">Automated Tests</div>
                                <div className="text-[11px] font-black text-slate-400">84%</div>
                            </div>
                            <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '84%' }} />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-end">
                                <div className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">Evidences</div>
                                <div className="text-[11px] font-black text-slate-400">76%</div>
                            </div>
                            <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '76%' }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="border-b border-border">
                    <div className="flex gap-12">
                        {['Requirements', 'Controls', 'Requests', 'Findings', 'Corrective Actions', 'Audit logs'].map((tab, i) => (
                            <button key={tab} className={`pb-6 text-[13px] font-bold tracking-tight transition-all relative ${i === 0 ? 'text-slate-900 border-b-2 border-slate-900' : 'text-muted-foreground uppercase opacity-70 hover:opacity-100 hover:text-slate-900'}`}>
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content - Requirements Accordion */}
                <div className="space-y-4">
                    {[
                        { id: 'CC1.0', title: 'Common Criteria for Confidentiality, Availability and Security', count: 5 },
                        { id: 'CC2.0', title: 'Common Criteria for Confidentiality, Availability and Security', count: 3 },
                        { id: 'CC3.0', title: 'Common Criteria for Confidentiality, Availability and Security', count: 4 },
                        { id: 'CC4.0', title: 'Common Criteria for Confidentiality, Availability and Security', count: 2 },
                    ].map(req => (
                        <div key={req.id} className="bg-white border border-border rounded-2xl p-6 flex justify-between items-center group cursor-pointer hover:border-slate-900 transition-all">
                            <div className="flex items-center gap-4">
                                <svg className="w-5 h-5 text-muted-foreground group-hover:text-slate-900 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                                <span className="text-[15px] font-bold text-slate-800">{req.id} – {req.title}</span>
                            </div>
                            <div className="w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] font-black flex items-center justify-center">
                                {req.count}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return null;
}
