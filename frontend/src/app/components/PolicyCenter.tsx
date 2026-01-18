"use client";

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useAuth } from '../context/AuthContext';

// --- Types ---
type PolicyStage = 'DRAFT' | 'REVIEW' | 'APPROVAL' | 'PUBLISHED' | 'EXPIRED';

interface Policy {
    id: number;
    title: string;
    content: string;
    stage: PolicyStage;
    category: string;
    version: string;
    lastUpdated: string;
    owner: string;
    compliancePercent: number;
    reviewers: string[];
}

const MOCK_POLICIES: Policy[] = [
    {
        id: 1,
        title: "Information Security Policy",
        content: "# Information Security Policy\nThis policy defines high-level security goals for Certixo. It covers encryption standards, access control, and incident reporting procedures...",
        stage: 'PUBLISHED',
        category: 'Core Governance',
        version: 'v4.2',
        lastUpdated: 'Jan 10, 2026',
        owner: 'Sarah Legal',
        compliancePercent: 100,
        reviewers: ['sarah.legal', 'mike.cto']
    },
    {
        id: 2,
        title: "Acceptable Use Standard",
        content: "# Acceptable Use Standard\nGuidelines for employee behavior regarding company assets, networks, and communication channels.",
        stage: 'REVIEW',
        category: 'Compliance',
        version: 'v2.0',
        lastUpdated: 'Jan 15, 2026',
        owner: 'Mike CTO',
        compliancePercent: 0,
        reviewers: ['hr.director', 'it.security']
    }
];

export default function PolicyCenter() {
    const { token } = useAuth();
    const [policies, setPolicies] = useState<Policy[]>([]);
    const [activePolicy, setActivePolicy] = useState<Policy | null>(null);
    const [view, setView] = useState<'catalog' | 'viewer' | 'editor'>('catalog');
    const [isGenerating, setIsGenerating] = useState(false);
    const [isRefining, setIsRefining] = useState(false);
    const [showGenModal, setShowGenModal] = useState(false);
    const [genParams, setGenParams] = useState({ topic: '', complexity: 'Enterprise', tone: 'Strict' });
    const [refinePrompt, setRefinePrompt] = useState('');
    const [filter, setFilter] = useState('All');
    const [loading, setLoading] = useState(true);

    const fetchPolicies = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000'}/policies`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (res.ok) {
                const data = await res.json();
                // Map backend fields to frontend interface if necessary
                const mapped: Policy[] = data.map((p: any) => ({
                    id: p.id,
                    title: p.title,
                    content: p.content,
                    stage: (p.status || 'DRAFT').toUpperCase() as PolicyStage,
                    category: p.category || 'Compliance',
                    version: String(p.version),
                    lastUpdated: new Date(p.updated_at).toLocaleDateString(),
                    owner: 'System',
                    compliancePercent: 0,
                    reviewers: []
                }));
                setPolicies(mapped);
            }
        } catch (error) {
            console.error("Failed to fetch policies:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (token) fetchPolicies();
    }, [token]);

    const categories = ['All', ...Array.from(new Set(policies.map(p => p.category)))];

    const handleGenerate = async () => {
        setIsGenerating(true);
        try {
            const res = await fetch('/api/ai-proxy/policies/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(genParams)
            });
            const data = await res.json();
            const newPolicy: Policy = {
                id: Date.now(),
                title: genParams.topic || 'New AI Policy',
                content: data.content,
                stage: 'DRAFT',
                category: 'Uncategorized',
                version: 'v1.0',
                lastUpdated: new Date().toLocaleDateString(),
                owner: 'AI Auditor',
                compliancePercent: 0,
                reviewers: []
            };
            setPolicies([newPolicy, ...policies]);
            setActivePolicy(newPolicy);
            setView('editor');
            setShowGenModal(false);
        } catch (error) {
            console.error(error);
        } finally {
            setIsGenerating(false);
        }
    };

    const handleRefine = async () => {
        if (!activePolicy || !refinePrompt) return;
        setIsRefining(true);
        try {
            const res = await fetch('/api/ai-proxy/policies/refine', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    content: activePolicy.content,
                    instruction: refinePrompt
                })
            });
            const data = await res.json();
            setActivePolicy({ ...activePolicy, content: data.content });
            setRefinePrompt('');
        } catch (error) {
            console.error(error);
        } finally {
            setIsRefining(false);
        }
    };

    const getStageStyles = (stage: PolicyStage) => {
        switch (stage) {
            case 'PUBLISHED': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
            case 'REVIEW': return 'bg-amber-50 text-amber-700 border-amber-200';
            case 'APPROVAL': return 'bg-indigo-50 text-indigo-700 border-indigo-200';
            case 'DRAFT': return 'bg-slate-50 text-slate-700 border-slate-200';
            case 'EXPIRED': return 'bg-rose-50 text-rose-700 border-rose-200';
        }
    };

    // --- VIEWS ---

    if (view === 'editor' && activePolicy) {
        return (
            <div className="max-w-[1440px] mx-auto animate-in fade-in duration-500 min-h-screen bg-white">
                <header className="h-20 border-b border-[#EEEEEE] px-8 flex items-center justify-between sticky top-0 bg-white z-50">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setView('catalog')} className="text-[#666666] hover:text-[#1A1A1A]">←</button>
                        <h2 className="text-xl font-semibold tracking-tight">AI Author: {activePolicy.title}</h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleRefine}
                            disabled={isRefining || !refinePrompt}
                            className="h-10 px-6 rounded-lg bg-indigo-50 text-indigo-600 text-[13px] font-bold hover:bg-indigo-100 transition-all disabled:opacity-50"
                        >
                            {isRefining ? 'AI Refining...' : 'Refine with AI'}
                        </button>
                        <button
                            onClick={() => {
                                setPolicies(policies.map(p => p.id === activePolicy.id ? activePolicy : p));
                                setView('viewer');
                            }}
                            className="h-10 px-6 rounded-lg bg-[#1A1A1A] text-white text-[13px] font-bold hover:bg-[#333333] transition-all"
                        >
                            Save & Preview
                        </button>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 h-[calc(100vh-80px)] overflow-hidden">
                    {/* Writing Zone */}
                    <div className="lg:col-span-12 flex">
                        <div className="flex-1 p-12 border-r border-[#EEEEEE] overflow-y-auto bg-[#FDFDFD]">
                            <textarea
                                value={activePolicy.content}
                                onChange={(e) => setActivePolicy({ ...activePolicy, content: e.target.value })}
                                placeholder="# Policy Header..."
                                className="w-full h-full bg-transparent border-none outline-none resize-none font-mono text-[14px] leading-relaxed text-[#1A1A1A] focus:ring-0"
                            />
                        </div>

                        {/* AI Assistance Sidebar */}
                        <div className="w-[400px] p-8 space-y-8 bg-white overflow-y-auto">
                            <div className="space-y-4">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-[#999999]">AI Refinement</h3>
                                <textarea
                                    value={refinePrompt}
                                    onChange={(e) => setRefinePrompt(e.target.value)}
                                    placeholder="e.g. 'Make this more strict for ISO 27001' or 'Add a section about vendor audits'..."
                                    className="w-full h-32 p-4 bg-[#F8FAFC] border border-[#EEEEEE] rounded-xl text-[13px] outline-none focus:border-indigo-400"
                                />
                                <div className="flex flex-wrap gap-2 text-[11px] font-bold">
                                    <button onClick={() => setRefinePrompt('Make it more professional and strictly compliant.')} className="px-3 py-1.5 rounded-lg border border-[#EEEEEE] hover:border-indigo-400">Professionalize</button>
                                    <button onClick={() => setRefinePrompt('Synthesize a new Roles & Responsibilities section.')} className="px-3 py-1.5 rounded-lg border border-[#EEEEEE] hover:border-indigo-400">+ Roles</button>
                                    <button onClick={() => setRefinePrompt('Add specific SOC 2 Trust Service Criteria mapping.')} className="px-3 py-1.5 rounded-lg border border-[#EEEEEE] hover:border-indigo-400">SOC 2 Alignment</button>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-[#EEEEEE] space-y-4">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-[#999999]">Policy Metadata</h3>
                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-[#666666]">CATEGORY</label>
                                        <select
                                            value={activePolicy.category}
                                            onChange={(e) => setActivePolicy({ ...activePolicy, category: e.target.value })}
                                            className="w-full bg-white border border-[#EEEEEE] rounded-lg px-3 py-2 text-[13px] font-semibold"
                                        >
                                            <option>Core Governance</option>
                                            <option>Compliance</option>
                                            <option>Operations</option>
                                            <option>Uncategorized</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-[#666666]">STAGE</label>
                                        <div className="flex gap-2">
                                            {['DRAFT', 'REVIEW', 'APPROVAL'].map(s => (
                                                <button
                                                    key={s}
                                                    onClick={() => setActivePolicy({ ...activePolicy, stage: s as PolicyStage })}
                                                    className={`px-3 py-1.5 rounded-lg border text-[10px] font-black tracking-widest transition-all ${activePolicy.stage === s ? 'bg-primary text-white border-primary' : 'bg-white text-[#666666] border-[#EEEEEE]'}`}
                                                >
                                                    {s}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (view === 'viewer' && activePolicy) {
        return (
            <div className="max-w-[1120px] mx-auto animate-in fade-in duration-500 pb-24">
                <div className="flex justify-between items-center mb-12">
                    <button
                        onClick={() => { setActivePolicy(null); setView('catalog'); }}
                        className="flex items-center gap-2 text-[13px] font-semibold text-[#666666] hover:text-[#1A1A1A] transition-colors"
                    >
                        <span>←</span> Back to Policy Center
                    </button>
                    <div className="flex gap-3">
                        <button onClick={() => setView('editor')} className="h-10 px-6 rounded-lg bg-[#1A1A1A] text-white text-[13px] font-semibold hover:bg-[#333333] transition-all">Edit Policy</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8 space-y-8">
                        <div className="space-y-4 border-b border-[#EEEEEE] pb-8">
                            <div className={`inline-flex px-2 py-0.5 rounded-full text-[11px] font-semibold border ${getStageStyles(activePolicy.stage)}`}>
                                {activePolicy.stage}
                            </div>
                            <h1 className="text-[32px] font-semibold tracking-tight leading-tight">{activePolicy.title}</h1>
                            <div className="flex gap-6 text-[13px] text-[#666666]">
                                <span>Version: <strong>{activePolicy.version}</strong></span>
                                <span>Last Verified: <strong>{activePolicy.lastUpdated}</strong></span>
                                <span>Owner: <strong>{activePolicy.owner}</strong></span>
                            </div>
                        </div>
                        <div className="prose prose-slate max-w-none text-[#1A1A1A] leading-relaxed">
                            <ReactMarkdown>{activePolicy.content}</ReactMarkdown>
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-6">
                        <div className="p-6 rounded-2xl border border-[#EEEEEE] bg-white space-y-6">
                            <h3 className="text-[14px] font-semibold">Governance Details</h3>
                            <div className="space-y-4">
                                <DetailItem label="Lifecycle State" value={activePolicy.stage} />
                                <DetailItem label="Acknowledgement Rate" value={`${activePolicy.compliancePercent}%`} />
                                <DetailItem label="Compliance Category" value={activePolicy.category} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-[1120px] mx-auto animate-in fade-in duration-500 pb-24">
            {/* Header section */}
            <div className="flex justify-between items-start mb-12">
                <div className="space-y-3">
                    <h1 className="text-[32px] font-semibold tracking-tight">Policy Center</h1>
                    <p className="text-[16px] text-[#666666] max-w-[640px]">
                        The institutional source of truth. Manage foundational security and operational governance policies through AI-assisted authoring.
                    </p>
                </div>
                <button
                    onClick={() => setShowGenModal(true)}
                    className="h-10 px-6 rounded-lg bg-[#1A1A1A] text-white text-[13px] font-semibold hover:bg-[#333333] transition-all flex items-center gap-2"
                >
                    <span className="text-lg">✨</span> Author Policy with AI
                </button>
            </div>

            {/* Summary Chips */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-12">
                <SummaryChip label="Active Policies" value={String(policies.length)} detail="Audit-Ready Vault" />
                <SummaryChip label="In Review" value="4" detail="Pending SIGs" />
                <SummaryChip label="Acknowledgment" value="94.2%" detail="Global Target" />
                <SummaryChip label="Last Audit" value="Jan 2026" detail="Synchronized" />
            </div>

            {/* Navigation Tabs */}
            <div className="flex gap-8 border-b border-[#EEEEEE] mb-8">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`pb-4 text-[14px] font-medium transition-all relative ${filter === cat ? 'text-primary' : 'text-[#666666] hover:text-[#1A1A1A]'
                            }`}
                    >
                        {cat}
                        {filter === cat && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />}
                    </button>
                ))}
            </div>

            {/* Policy Tiles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {policies.filter(p => filter === 'All' || p.category === filter).map(policy => (
                    <div
                        key={policy.id}
                        onClick={() => { setActivePolicy(policy); setView('viewer'); }}
                        className="h-[170px] border border-[#EEEEEE] rounded-2xl p-6 bg-white flex flex-col justify-between hover:border-primary/20 transition-all cursor-pointer group"
                    >
                        <div className="flex justify-between items-start">
                            <div className="text-[11px] font-semibold text-[#999999] uppercase tracking-wider">{policy.category}</div>
                            <div className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${getStageStyles(policy.stage)}`}>
                                {policy.stage}
                            </div>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-[17px] font-semibold tracking-tight group-hover:text-primary transition-colors">{policy.title}</h4>
                            <div className="flex gap-4 text-[12px] text-[#666666] italic">
                                <span>Version {policy.version}</span>
                                <span className="text-[#EEEEEE]">|</span>
                                <span>Updated: {policy.lastUpdated}</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2">
                            <span className="text-[12px] font-semibold text-primary group-hover:underline">View details →</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* AUTHORING MODAL */}
            {showGenModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-md" onClick={() => setShowGenModal(false)} />
                    <div className="bg-white rounded-[2.5rem] w-full max-w-xl relative z-10 shadow-2xl overflow-hidden">
                        <div className="p-12 space-y-8">
                            <div className="space-y-2 text-center text-slate-900">
                                <div className="text-4xl">✨</div>
                                <h3 className="text-2xl font-bold tracking-tight">Author Policy with AI</h3>
                                <p className="text-sm text-gray-500">Synthesize auditor-ready institutional documentation in seconds.</p>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-[#666666]">Title of Policy</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Asset Management Policy"
                                        className="w-full bg-[#F8FAFC] border border-[#EEEEEE] rounded-xl px-4 py-3 text-slate-900 text-sm font-semibold outline-none focus:border-indigo-400"
                                        onChange={(e) => setGenParams({ ...genParams, topic: e.target.value })}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-[#666666]">Complexity</label>
                                        <select
                                            className="w-full bg-[#F8FAFC] border border-[#EEEEEE] rounded-xl px-4 py-3 text-slate-900 text-sm font-semibold outline-none"
                                            onChange={(e) => setGenParams({ ...genParams, complexity: e.target.value })}
                                        >
                                            <option>Startup</option>
                                            <option>Growth</option>
                                            <option>Enterprise</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-[#666666]">Tone</label>
                                        <select
                                            className="w-full bg-[#F8FAFC] border border-[#EEEEEE] rounded-xl px-4 py-3 text-slate-900 text-sm font-semibold outline-none"
                                            onChange={(e) => setGenParams({ ...genParams, tone: e.target.value })}
                                        >
                                            <option>Strict</option>
                                            <option>Friendly</option>
                                            <option>Legalistic</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleGenerate}
                                disabled={isGenerating || !genParams.topic}
                                className="w-full py-4 bg-[#1A1A1A] text-white rounded-xl font-bold text-sm hover:bg-[#333333] transition-all disabled:opacity-50"
                            >
                                {isGenerating ? 'Synthesizing Policy...' : 'Generate AI Draft'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function SummaryChip({ label, value, detail }: { label: string, value: string, detail: string }) {
    return (
        <div className="h-[64px] border border-[#EEEEEE] rounded-xl px-4 py-3 flex flex-col justify-center bg-white">
            <div className="flex justify-between items-baseline">
                <span className="text-[14px] font-semibold">{value}</span>
                <span className="text-[10px] text-[#999999] uppercase font-bold">{label}</span>
            </div>
            <div className="text-[11px] text-[#666666] italic">{detail}</div>
        </div>
    );
}

function DetailItem({ label, value }: { label: string, value: string }) {
    return (
        <div className="flex justify-between items-center text-[13px]">
            <span className="text-[#666666]">{label}</span>
            <span className="font-semibold text-[#1A1A1A]">{value}</span>
        </div>
    );
}
