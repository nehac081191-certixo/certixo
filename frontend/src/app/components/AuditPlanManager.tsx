"use client";

import { useState, useEffect } from 'react';

type Framework = {
    id: number;
    name: string;
    description: string;
};

type AuditPlan = {
    id: number;
    title: string;
    framework_id: number;
    status: string;
    created_at: string;
};

type Recommendation = {
    name: string;
    reason: string;
    priority: string;
};

export default function AuditPlanManager() {
    const [plans, setPlans] = useState<AuditPlan[]>([]);
    const [frameworks, setFrameworks] = useState<Framework[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [aiLoading, setAiLoading] = useState(false);

    // Mission Initialization State
    const [mode, setMode] = useState<'Standard' | 'AI-Guided'>('Standard');
    const [companyContext, setCompanyContext] = useState('');
    const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
    const [aiSteps, setAiSteps] = useState<string[]>([]);

    // Form State
    const [title, setTitle] = useState('');
    const [frameworkId, setFrameworkId] = useState<number | ''>('');
    const [periodStart, setPeriodStart] = useState('');
    const [periodEnd, setPeriodEnd] = useState('');

    // Interaction History State
    const [history, setHistory] = useState<{
        timestamp: string;
        brief: string;
        recommendations?: Recommendation[];
        steps?: { framework: string, roadmap: string[] }
    }[]>([]);
    const [showHistory, setShowHistory] = useState(false);

    useEffect(() => {
        fetchPlans();
        fetchFrameworks();
        // Load history from local storage if available
        const savedHistory = localStorage.getItem('audit_ai_history');
        if (savedHistory) setHistory(JSON.parse(savedHistory));
    }, []);

    const saveToHistory = (entry: Partial<typeof history[0]>) => {
        const newEntry = {
            timestamp: new Date().toISOString(),
            brief: entry.brief || companyContext,
            ...entry
        } as typeof history[0];

        const updated = [newEntry, ...history].slice(0, 10); // Keep last 10
        setHistory(updated);
        localStorage.setItem('audit_ai_history', JSON.stringify(updated));
    };

    const fetchPlans = async () => {
        const res = await fetch('http://localhost:8000/audit/plans');
        setPlans(await res.json());
    };

    const fetchFrameworks = async () => {
        const res = await fetch('http://localhost:8000/frameworks');
        setFrameworks(await res.json());
    };

    const handleGetRecommendations = async () => {
        setAiLoading(true);
        try {
            const res = await fetch('/api/ai-proxy/audit/recommend-framework', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ company_context: companyContext })
            });
            const recs = await res.json();
            setRecommendations(recs);
            saveToHistory({ recommendations: recs });
        } catch (err) {
            console.error(err);
        } finally {
            setAiLoading(false);
        }
    };

    const selectRecommendation = (recName: string) => {
        const matched = frameworks.find(f => f.name.toLowerCase().includes(recName.toLowerCase()));
        if (matched) {
            setFrameworkId(matched.id);
            setTitle(`${matched.name} Audit Mission - ${new Date().getFullYear()}`);
            generateSteps(matched.name);
        }
    };

    const generateSteps = async (frameworkName: string) => {
        setAiLoading(true);
        try {
            const res = await fetch('/api/ai-proxy/audit/generate-steps', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ framework_name: frameworkName, context: companyContext })
            });
            const steps = await res.json();
            setAiSteps(steps);
            saveToHistory({ steps: { framework: frameworkName, roadmap: steps } });
        } catch (err) {
            console.error(err);
        } finally {
            setAiLoading(false);
        }
    };

    const handleCreatePlan = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await fetch('http://localhost:8000/audit/plans', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title,
                    framework_id: frameworkId,
                    audit_period_start: new Date(periodStart).toISOString(),
                    audit_period_end: new Date(periodEnd).toISOString(),
                    scope: aiSteps.length > 0 ? aiSteps : ["General Scope"]
                })
            });
            setShowModal(false);
            fetchPlans();
            // Reset form
            setTitle(''); setFrameworkId(''); setPeriodStart(''); setPeriodEnd(''); setAiSteps([]); setRecommendations([]);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const startAuditRun = async (planId: number) => {
        setLoading(true);
        try {
            await fetch(`/api/ai-proxy/audit/plans/${planId}/start`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            });
            fetchPlans();
            alert("Audit mission initialized. Certixo AI is now orchestrating the scoping phase.");
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-2xl font-black font-heading text-foreground">Mission Control</h3>
                    <p className="text-muted-foreground text-sm font-medium">Orchestrate official compliance audits and track readiness lifecycles.</p>
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 transition-all"
                >
                    Create Audit Plan
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {plans.map(plan => (
                    <div key={plan.id} className="glass-depth p-8 rounded-[2rem] border border-border flex flex-col justify-between group hover:border-primary/20 transition-all">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <div className="text-[9px] font-black text-primary uppercase tracking-[0.2em] mb-1">
                                    {frameworks.find(f => f.id === plan.framework_id)?.name || 'Standard Framework'}
                                </div>
                                <h4 className="text-xl font-black font-heading text-foreground">{plan.title}</h4>
                            </div>
                            <span className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest border ${plan.status === 'Planning' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' : 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                                }`}>
                                {plan.status}
                            </span>
                        </div>
                        <div className="flex justify-between items-center mt-auto">
                            <div className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest">
                                Created {new Date(plan.created_at).toLocaleDateString()}
                            </div>
                            <button
                                onClick={() => startAuditRun(plan.id)}
                                className="px-6 py-2.5 bg-muted border border-border rounded-xl text-[9px] font-black uppercase tracking-widest text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                            >
                                Start Mission
                            </button>
                        </div>
                    </div>
                ))}
                {plans.length === 0 && (
                    <div className="lg:col-span-2 p-20 rounded-[3rem] border-2 border-dashed border-border flex flex-col items-center justify-center text-center space-y-4">
                        <div className="text-4xl text-muted-foreground/20">📋</div>
                        <div className="space-y-2">
                            <h4 className="text-xl font-black font-heading text-muted-foreground">No active audit missions</h4>
                            <p className="text-sm font-medium text-muted-foreground/60 max-w-sm mx-auto">Initialize an official Audit Plan to begin autonomous evidence collection and gap testing.</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Guided Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background/80 backdrop-blur-md">
                    <div className="glass-depth w-full max-w-2xl rounded-[3rem] border border-border overflow-hidden animate-in zoom-in-95 duration-300 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
                        <div className="p-10 border-b border-border flex justify-between items-center bg-muted/20">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">✨</div>
                                <h3 className="text-xl font-black font-heading text-foreground">Mission Initialization</h3>
                            </div>
                            <div className="flex bg-muted rounded-xl p-1 gap-1">
                                <button onClick={() => setMode('Standard')} className={`px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${mode === 'Standard' ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}>Standard</button>
                                <button onClick={() => setMode('AI-Guided')} className={`px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${mode === 'AI-Guided' ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}>AI-Guided</button>
                            </div>
                        </div>

                        <form onSubmit={handleCreatePlan} className="p-10 space-y-8 overflow-y-auto max-h-[80vh]">
                            {/* AI History Toggle */}
                            {history.length > 0 && (
                                <div className="space-y-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowHistory(!showHistory)}
                                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground/40 hover:text-primary transition-colors"
                                    >
                                        <svg className={`w-3 h-3 transition-transform ${showHistory ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                                        Interaction History ({history.length})
                                    </button>

                                    {showHistory && (
                                        <div className="space-y-4 animate-in slide-in-from-top-2 duration-300">
                                            {history.map((entry, idx) => (
                                                <div key={idx} className="p-5 rounded-2xl bg-muted/20 border border-border text-[11px] space-y-3">
                                                    <div className="flex justify-between items-center opacity-40">
                                                        <span className="font-mono">{new Date(entry.timestamp).toLocaleTimeString()}</span>
                                                        <span className="font-black uppercase tracking-tighter">Memory Ledger</span>
                                                    </div>
                                                    <div className="font-medium italic leading-relaxed text-muted-foreground">"{entry.brief}"</div>
                                                    {entry.recommendations && (
                                                        <div className="flex flex-wrap gap-2 pt-2">
                                                            {entry.recommendations.map((r, i) => (
                                                                <span key={i} className="px-2 py-1 rounded-md bg-primary/10 text-primary font-black text-[8px] uppercase">{r.name}</span>
                                                            ))}
                                                        </div>
                                                    )}
                                                    {entry.steps && (
                                                        <div className="pt-2 border-t border-border/10">
                                                            <div className="text-[9px] font-black text-rose-500 uppercase tracking-widest mb-1">{entry.steps.framework} Roadmap</div>
                                                            <div className="grid gap-1">
                                                                {entry.steps.roadmap.map((s, i) => (
                                                                    <div key={i} className="text-[9px] opacity-60">• {s}</div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {mode === 'AI-Guided' && recommendations.length === 0 && (
                                <div className="space-y-6 animate-in fade-in duration-500">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-2 italic">Consultant Briefing</label>
                                        <textarea
                                            value={companyContext}
                                            onChange={e => setCompanyContext(e.target.value)}
                                            placeholder="Describe your company, industry, and core compliance needs (e.g., 'We are an AI SaaS startup in SF, selling to Enterprise banks. We need to prove security maturity.')"
                                            className="w-full bg-muted/40 border border-border rounded-2xl px-6 py-5 text-sm font-medium focus:border-primary focus:outline-none transition-all min-h-[140px] leading-relaxed"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={handleGetRecommendations}
                                        disabled={aiLoading || !companyContext}
                                        className="w-full py-5 bg-foreground text-background text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-xl hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center gap-3"
                                    >
                                        {aiLoading ? 'Analyzing Compliance Landscape...' : 'Generate AI Recommendations'}
                                    </button>
                                </div>
                            )}

                            {mode === 'AI-Guided' && recommendations.length > 0 && frameworkId === '' && (
                                <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-primary italic">Strategic Recommendations</div>
                                    <div className="grid gap-4">
                                        {recommendations.map((rec, i) => (
                                            <div key={i} onClick={() => selectRecommendation(rec.name)} className="p-6 rounded-2xl bg-muted/30 border border-border group hover:border-primary cursor-pointer transition-all">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h5 className="font-black text-foreground group-hover:text-primary transition-colors">{rec.name}</h5>
                                                    <span className={`px-3 py-1 rounded-md text-[8px] font-black uppercase tracking-widest ${rec.priority === 'High' ? 'bg-rose-500/10 text-rose-500' : 'bg-primary/10 text-primary'}`}>{rec.priority} Priority</span>
                                                </div>
                                                <p className="text-xs text-muted-foreground leading-relaxed">{rec.reason}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <button onClick={() => setRecommendations([])} className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/60 hover:text-primary transition-colors">← Back to briefing</button>
                                </div>
                            )}

                            {(mode === 'Standard' || frameworkId !== '') && (
                                <div className="space-y-8 animate-in fade-in duration-500">
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Mission Title</label>
                                            <input required value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g., Annual SOC 2 Type II" className="w-full bg-muted/40 border border-border rounded-2xl px-6 py-4 text-sm font-medium focus:border-primary focus:outline-none transition-all" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Target Framework</label>
                                            <select required value={frameworkId} onChange={e => { setFrameworkId(Number(e.target.value)); if (mode === 'AI-Guided') generateSteps(frameworks.find(f => f.id === Number(e.target.value))?.name || '') }} className="w-full bg-muted/40 border border-border rounded-2xl px-6 py-4 text-sm font-medium focus:border-primary focus:outline-none appearance-none">
                                                <option value="">Select Platform Standard</option>
                                                {frameworks.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
                                            </select>
                                        </div>

                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Period Start</label>
                                                <input required type="date" value={periodStart} onChange={e => setPeriodStart(e.target.value)} className="w-full bg-muted/40 border border-border rounded-2xl px-6 py-4 text-sm font-medium focus:outline-none" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Period End</label>
                                                <input required type="date" value={periodEnd} onChange={e => setPeriodEnd(e.target.value)} className="w-full bg-muted/40 border border-border rounded-2xl px-6 py-4 text-sm font-medium focus:outline-none" />
                                            </div>
                                        </div>

                                        {aiSteps.length > 0 && (
                                            <div className="space-y-4 pt-4">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-primary italic">AI-Generated Mission Roadmap</label>
                                                <div className="space-y-2">
                                                    {aiSteps.map((step, i) => (
                                                        <div key={i} className="flex gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10 text-xs font-medium text-foreground italic">
                                                            <span className="text-primary font-black not-italic">{i + 1}.</span>
                                                            "{step}"
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex gap-4 pt-4">
                                        <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-4 bg-muted text-muted-foreground text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-muted/80 transition-all">Abort</button>
                                        <button type="submit" disabled={loading} className="flex-1 py-4 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-primary/20 hover:opacity-90 disabled:opacity-50 transition-all">
                                            {loading ? 'Initializing Mission...' : 'Finalize Mission'}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
