"use client";

import { useState, useEffect } from 'react';

type Control = {
    id: number;
    code: string;
    name: string;
    description: string;
    automation_status: string;
    integration_source: string | null;
    last_evidence_value: string | null;
    status: 'Pass' | 'Fail' | 'Neutral';
    remediation_ticket: string | null;
    owner: string;
    last_updated: string;
    evidence_count: number;
    exceptions: string[];
};

type Framework = {
    id: number;
    name: string;
    description: string;
    controls: Control[];
};

export default function ControlExplorer() {
    const [frameworks, setFrameworks] = useState<Framework[]>([]);
    const [selectedFramework, setSelectedFramework] = useState<Framework | null>(null);
    const [selectedControl, setSelectedControl] = useState<Control | null>(null);
    const [filter, setFilter] = useState<'all' | 'failing' | 'exceptions'>('all');

    useEffect(() => {
        fetch('http://localhost:8000/frameworks')
            .then(res => res.json())
            .then(data => {
                // Mocking additional fields for the redesign
                const enhanced = data.map((f: any) => ({
                    ...f,
                    controls: f.controls.map((c: any) => ({
                        ...c,
                        owner: ['SecOps', 'DevOps', 'Engineering', 'HR'][Math.floor(Math.random() * 4)],
                        last_updated: '2h ago',
                        evidence_count: Math.floor(Math.random() * 12) + 1,
                        exceptions: Math.random() > 0.8 ? ['Region: AP-SOUTH-1'] : []
                    }))
                }));
                setFrameworks(enhanced);
                if (enhanced.length > 0) setSelectedFramework(enhanced[0]);
            })
            .catch(console.error);
    }, []);

    const filteredControls = selectedFramework?.controls.filter(c => {
        if (filter === 'failing') return c.status === 'Fail';
        if (filter === 'exceptions') return c.exceptions.length > 0;
        return true;
    }) || [];

    const coveragePercent = selectedFramework
        ? Math.round((selectedFramework.controls.filter(c => c.status === 'Pass').length / selectedFramework.controls.length) * 100)
        : 0;

    return (
        <div className="w-full max-w-[1600px] mx-auto space-y-12 animate-in fade-in duration-700">
            {/* Header: Postural Health Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Governance Orchestration</span>
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-6xl font-black font-heading tracking-tighter text-premium">Control Maps.</h1>
                        <p className="text-muted-foreground text-lg max-w-2xl font-medium leading-relaxed">
                            A high-density directory of <span className="text-foreground">verifiable truth</span>. Connect audit requirements to institutional reality.
                        </p>
                    </div>

                    <div className="flex gap-4 pt-4">
                        {frameworks.map(f => (
                            <button
                                key={f.id}
                                onClick={() => { setSelectedFramework(f); setSelectedControl(null); }}
                                className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${selectedFramework?.id === f.id ? 'bg-primary text-white border-primary shadow-xl shadow-primary/20 scale-105' : 'bg-white/5 border-white/5 text-muted-foreground hover:text-foreground'}`}
                            >
                                {f.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-4 glass-depth p-10 rounded-[3rem] border border-border bg-card/10 flex flex-col justify-between h-full">
                    <div className="space-y-2">
                        <div className="text-[10px] font-black text-muted-foreground/30 uppercase tracking-widest">Postural Coverage</div>
                        <div className="flex items-end gap-3 leading-none">
                            <div className="text-7xl font-black font-heading tracking-tighter text-foreground italic">{coveragePercent}%</div>
                            <div className="text-sm font-black text-emerald-500 mb-2 uppercase tracking-widest">+2.4% MoM</div>
                        </div>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden mt-6">
                        <div className="h-full bg-primary transition-all duration-1000" style={{ width: `${coveragePercent}%` }} />
                    </div>
                </div>
            </div>

            {/* Filter Hub */}
            <div className="flex items-center justify-between border-b border-white/[0.03] pb-8">
                <div className="flex gap-6">
                    {(['all', 'failing', 'exceptions'] as const).map(t => (
                        <button
                            key={t}
                            onClick={() => setFilter(t)}
                            className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all relative ${filter === t ? 'text-primary' : 'text-muted-foreground/40 hover:text-foreground'}`}
                        >
                            {t} Items
                            {filter === t && <div className="absolute -bottom-[33px] left-0 right-0 h-0.5 bg-primary shadow-[0_0_10px_#3b82f6]" />}
                        </button>
                    ))}
                </div>
                <div className="text-[9px] font-black text-muted-foreground/30 uppercase tracking-widest">
                    Showing {filteredControls.length} / {selectedFramework?.controls.length || 0} Controls
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Master List: High-Density Node Grid */}
                <div className={`space-y-4 ${selectedControl ? 'lg:col-span-4' : 'lg:col-span-12'} transition-all duration-500`}>
                    <div className={selectedControl ? 'flex flex-col gap-4' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}>
                        {filteredControls.map(control => (
                            <div
                                key={control.id}
                                onClick={() => setSelectedControl(control)}
                                className={`glass-depth p-8 rounded-[2rem] border transition-all cursor-pointer group relative overflow-hidden ${selectedControl?.id === control.id ? 'border-primary ring-1 ring-primary/20 bg-primary/[0.03]' : 'border-border/50 hover:border-primary/40 bg-card/5'}`}
                            >
                                {selectedControl?.id === control.id && (
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] translate-x-12 -translate-y-12" />
                                )}

                                <div className="space-y-6 relative z-10">
                                    <div className="flex justify-between items-start">
                                        <div className="text-2xl font-black font-heading tracking-tighter text-primary">{control.code}</div>
                                        <StatusDot status={control.status} />
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-lg font-black text-foreground group-hover:text-primary transition-colors tracking-tight leading-tight">{control.name}</h3>
                                        <p className="text-[10px] font-medium text-muted-foreground/50 leading-relaxed line-clamp-2 italic">{control.description}</p>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-border/10">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-muted border border-border flex items-center justify-center text-[8px] font-black">{control.owner.charAt(0)}</div>
                                            <span className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">{control.owner}</span>
                                        </div>
                                        <div className="text-[8px] font-black text-muted-foreground/20 uppercase tracking-widest">{control.last_updated}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Detail View: The Drill-Down */}
                {selectedControl && (
                    <div className="lg:col-span-8 animate-in slide-in-from-right-8 duration-500">
                        <div className="glass-depth rounded-[3rem] border border-primary/20 bg-primary/[0.01] overflow-hidden sticky top-24">
                            <div className="p-12 space-y-12">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <span className="px-4 py-1.5 bg-primary text-white text-[10px] font-black rounded-lg">{selectedControl.code}</span>
                                            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{selectedFramework?.name} Framework</span>
                                        </div>
                                        <h2 className="text-4xl font-black font-heading tracking-tighter text-foreground">{selectedControl.name}</h2>
                                    </div>
                                    <button
                                        onClick={() => setSelectedControl(null)}
                                        className="h-12 w-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-all hover:bg-muted"
                                    >✕</button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <DetailStat label="Collection Method" value={selectedControl.automation_status} />
                                    <DetailStat label="Source Entity" value={selectedControl.integration_source || 'Manual Attestation'} />
                                    <DetailStat label="Evidence Count" value={`${selectedControl.evidence_count} Artifacts`} />
                                </div>

                                <div className="space-y-6">
                                    <div className="text-[10px] font-black text-primary uppercase tracking-[0.3em] pl-4 border-l-2 border-primary">Operational Context</div>
                                    <p className="text-xl text-muted-foreground/80 font-medium leading-relaxed max-w-3xl">
                                        {selectedControl.description}
                                    </p>
                                </div>

                                {selectedControl.status === 'Fail' && (
                                    <div className="p-8 rounded-[2rem] bg-rose-500/5 border border-rose-500/10 space-y-4 animate-pulse">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]" />
                                            <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest">Active Disruption Detected</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-lg font-black text-foreground">Discrepancy: {selectedControl.last_evidence_value}</div>
                                            <button className="px-8 py-4 bg-rose-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-rose-500/20 active:scale-95 transition-all">Remediate Disruption</button>
                                        </div>
                                    </div>
                                )}

                                {selectedControl.exceptions.length > 0 && (
                                    <div className="p-8 rounded-[2rem] bg-amber-500/5 border border-amber-500/10 space-y-2">
                                        <div className="text-[9px] font-black text-amber-500 uppercase tracking-widest">Authorized Exceptions</div>
                                        <div className="text-sm font-black text-foreground">{selectedControl.exceptions[0]} • Expiration: 2026-06-12</div>
                                    </div>
                                )}

                                <div className="pt-8 border-t border-border/10 flex gap-4">
                                    <button className="flex-1 py-5 bg-muted border border-border rounded-2xl text-[10px] font-black uppercase tracking-widest hover:text-foreground">View Integrity Log</button>
                                    <button className="flex-1 py-5 bg-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20">Audit-Ready Evidence</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function StatusDot({ status }: { status: 'Pass' | 'Fail' | 'Neutral' }) {
    const colors = {
        Pass: 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]',
        Fail: 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]',
        Neutral: 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]'
    };
    return (
        <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${colors[status]} ${status !== 'Neutral' ? 'animate-pulse' : ''}`} />
            <span className={`text-[9px] font-black uppercase tracking-widest ${status === 'Pass' ? 'text-emerald-500' : status === 'Fail' ? 'text-rose-500' : 'text-amber-500'}`}>
                {status === 'Pass' ? 'Compliant' : status === 'Fail' ? 'Non-Compliant' : 'Warning'}
            </span>
        </div>
    );
}

function DetailStat({ label, value }: { label: string, value: string }) {
    return (
        <div className="space-y-1">
            <div className="text-[9px] font-black text-muted-foreground/30 uppercase tracking-widest">{label}</div>
            <div className="text-base font-black text-foreground tabular-nums">{value}</div>
        </div>
    );
}
