"use client";

import { useState, useEffect } from 'react';
import HUD from './HUD';
import { useAuth } from '../context/AuthContext';

type Risk = {
    id: number;
    title: string;
    description: string;
    category: string;
    department: string;
    probability: number; // 1-5
    impact: number;      // 1-5
    risk_score: number;
    residual_risk: number;
    risk_velocity: string;
    exposure_value: number;
    treatment_type: string;
    status: 'Flagged' | 'Monitored' | 'Mitigated' | 'Critical';
    owner: string;
    next_review: string;
    mitigation_plan: string;
    evidence_id: string | null;
    tags: string[];
};

export default function RiskHub() {
    const [risks, setRisks] = useState<Risk[]>([]);
    const [alerts, setAlerts] = useState<any[]>([]);
    const [activeTab, setActiveTab] = useState<'Register' | 'Heatmap' | 'Intelligence'>('Register');
    const [filter, setFilter] = useState<'All' | 'High Impact' | 'Review Due'>('All');
    const [meetingMode, setMeetingMode] = useState(false);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const { user: currentUser } = useAuth();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) return;

        setLoading(true);
        setError(null);

        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';

        fetch(`${backendUrl}/risks`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                if (!res.ok) throw new Error('Institutional Data Plane Offline');
                return res.json();
            })
            .then(data => {
                const enhanced = data.map((r: any) => ({
                    ...r,
                    owner: ['Sarah Miller (Legal)', 'David Chen (CTO)', 'Alex Rivera (SRE)'][Math.floor(Math.random() * 3)],
                    next_review: '2026-01-23',
                    mitigation_plan: r.mitigation_plan || 'Implementation of zero-trust authentication across all legacy DB endpoints.',
                    evidence_id: Math.random() > 0.3 ? 'TR-8821' : null,
                    tags: ['Infrastructure', 'Compliance', 'Financial'],
                    status: r.risk_score >= 15 ? 'Critical' : r.status === 'Open' ? 'Flagged' : 'Mitigated'
                }));
                setRisks(enhanced.sort((a: any, b: any) => b.risk_score - a.risk_score));
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });

        // Fetch Alerts
        fetch(`${backendUrl}/risks/alerts`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setAlerts(data))
            .catch(err => console.error("Alert Plane Error:", err));
    }, [currentUser]);

    if (loading) {
        return (
            <div className="w-full h-[600px] flex flex-col items-center justify-center space-y-8 animate-pulse">
                <div className="w-24 h-24 rounded-[2rem] bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-4xl">📡</div>
                <div className="text-center space-y-2">
                    <div className="text-[10px] font-black text-rose-500 uppercase tracking-[0.5em] animate-bounce">Ingesting Peripheral Signals</div>
                    <div className="text-sm font-medium text-muted-foreground italic">Calibrating threat vectors for current session...</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full h-[600px] flex flex-col items-center justify-center space-y-8">
                <div className="w-24 h-24 rounded-[2rem] bg-rose-500/20 border-2 border-rose-500 flex items-center justify-center text-4xl shadow-[0_0_50px_rgba(244,63,94,0.3)]">⚠️</div>
                <div className="text-center space-y-2">
                    <div className="text-2xl font-black text-foreground uppercase italic tracking-tighter">System Disconnect</div>
                    <div className="text-[10px] font-black text-rose-500 uppercase tracking-[0.3em]">{error}</div>
                    <button onClick={() => window.location.reload()} className="mt-8 px-8 py-3 bg-foreground text-background rounded-xl text-[9px] font-black uppercase tracking-widest hover:scale-105 transition-all">Re-establish Handshake</button>
                </div>
            </div>
        );
    }

    const filteredRisks = risks.filter(r => {
        if (filter === 'High Impact') return r.impact >= 4;
        if (filter === 'Review Due') return true; // Simulated
        return true;
    });

    if (filteredRisks.length === 0) {
        return (
            <div className="w-full h-[400px] flex flex-col items-center justify-center space-y-6">
                <div className="text-6xl grayscale opacity-20">🛡️</div>
                <div className="text-center space-y-1">
                    <div className="text-xl font-black text-foreground uppercase italic tracking-tighter">Threat Ledger Void</div>
                    <div className="text-[9px] font-black text-muted-foreground/40 uppercase tracking-[0.3em]">No active risks matching current orchestration filter</div>
                </div>
            </div>
        );
    }

    const getScoreColor = (score: number) => {
        if (score >= 15) return 'text-rose-500 bg-rose-500/10 border-rose-500/20';
        if (score >= 10) return 'text-amber-500 bg-amber-500/10 border-amber-500/20';
        return 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20';
    };

    return (
        <div className="w-full max-w-[1600px] mx-auto space-y-12 animate-in fade-in duration-700">
            {/* Mission Command Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.6)] animate-pulse" />
                        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-rose-500">Risk Orchestration Ledger</span>
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-6xl font-black font-heading tracking-tight text-foreground uppercase italic leading-[0.9]">
                            Review <span className="text-muted-foreground font-normal not-italic tracking-tighter">Register.</span>
                        </h1>
                        <p className="text-muted-foreground text-xl max-w-2xl font-medium leading-relaxed">
                            A high-fidelity register focused on <span className="text-foreground">Prioritization Decisions</span>. Formulated for boardroom clarity and weekly architectural reviews.
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setMeetingMode(!meetingMode)}
                        className={`px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${meetingMode ? 'bg-rose-500 text-white border-rose-400 shadow-xl shadow-rose-500/20' : 'bg-muted border-border text-muted-foreground hover:text-foreground'}`}
                    >
                        {meetingMode ? '⚡ LIVE MEETING MODE ON' : 'ENTER REVIEW MODE'}
                    </button>
                    <button className="bg-foreground text-background px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] shadow-2xl hover:scale-105 active:scale-95 transition-all">
                        + Log Interaction
                    </button>
                </div>
            </div>

            <HUD
                status={{ value: risks.filter(r => r.status === 'Critical').length.toString(), label: 'Critical Exposures', color: 'rose' }}
                nextAction={{ label: 'Execute Weekly Review Sync', onClick: () => { } }}
                risk={{ label: 'Residual Ceiling', count: 12 }}
                evidence={{ label: 'Mitigation Links', count: risks.filter(r => r.evidence_id).length, onClick: () => { } }}
                quickExport={{ label: 'Boardroom PDF Export', onClick: () => { } }}
            />

            {/* Tactical Navigation */}
            <div className="flex justify-between items-center border-b border-white/[0.03] pb-6">
                <div className="flex gap-8">
                    {(['Register', 'Heatmap', 'Intelligence'] as const).map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all relative ${activeTab === tab ? 'text-foreground' : 'text-muted-foreground/30 hover:text-foreground'}`}
                        >
                            {tab}
                            {activeTab === tab && <div className="absolute -bottom-[25px] left-0 right-0 h-0.5 bg-rose-500 shadow-[0_0_10px_#f43f5e]" />}
                        </button>
                    ))}
                </div>

                <div className="flex gap-4">
                    {(['All', 'High Impact', 'Review Due'] as const).map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${filter === f ? 'bg-rose-500 text-white' : 'bg-muted/50 text-muted-foreground hover:text-foreground'}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            {activeTab === 'Register' && (
                <div className={`grid gap-6 ${meetingMode ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'}`}>
                    {filteredRisks.map(risk => (
                        <div
                            key={risk.id}
                            className={`glass-depth rounded-[2.5rem] border transition-all duration-500 group relative overflow-hidden flex flex-col ${risk.status === 'Critical' ? 'border-rose-500/40 bg-rose-500/[0.02]' : 'border-border/50 hover:border-rose-500/20 bg-card/5'} ${meetingMode ? 'p-12' : 'p-8'}`}
                        >
                            {/* Visual Indicator of Severity */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/5 rounded-full blur-[60px] translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="flex justify-between items-start mb-8 relative z-10">
                                <div className="space-y-4 flex-1">
                                    <div className="flex items-center gap-4">
                                        <div className={`px-4 py-1 rounded-lg border text-[10px] font-black tabular-nums ${getScoreColor(risk.risk_score)}`}>
                                            SCORE: {risk.risk_score}
                                        </div>
                                        <span className="text-[10px] font-black text-muted-foreground/20 uppercase tracking-widest leading-none">{risk.department}</span>
                                    </div>
                                    <h3 className={`font-black font-heading tracking-tighter leading-none uppercase italic group-hover:text-rose-500 transition-colors ${meetingMode ? 'text-4xl' : 'text-3xl'}`}>
                                        {risk.title}
                                    </h3>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <span className={`px-4 py-1 rounded-full text-[8px] font-black uppercase tracking-[0.2em] border ${risk.status === 'Critical' ? 'bg-rose-500 text-white' : 'bg-muted text-muted-foreground opacity-40'}`}>
                                        {risk.status}
                                    </span>
                                    <div className="text-[8px] font-black text-muted-foreground/30 uppercase tracking-widest">Next Review: {risk.next_review}</div>
                                </div>
                            </div>

                            <p className="text-lg text-muted-foreground/80 font-medium leading-relaxed mb-10 line-clamp-2 italic relative z-10">
                                {risk.description}
                            </p>

                            <div className={`grid gap-8 border-t border-border/10 pt-10 relative z-10 ${meetingMode ? 'grid-cols-3' : 'grid-cols-2'}`}>
                                <DecisionStat label="Likelihood" value={`LEVEL ${risk.probability}`} sub={`${risk.probability * 20}% Confidence`} />
                                <DecisionStat label="Severity" value={`INCIDENT LEVEL ${risk.impact}`} sub={`$${(risk.impact * 250)}K Impact Est.`} />
                                {meetingMode && <DecisionStat label="Governance Owner" value={risk.owner} sub="Legal & Privacy Cluster" />}
                            </div>

                            <div className="mt-10 p-6 rounded-2xl bg-muted/30 border border-border/20 space-y-3 relative z-10">
                                <div className="text-[9px] font-black text-rose-500/40 uppercase tracking-[0.3em]">Active Mitigation Strategy</div>
                                <p className="text-sm font-bold text-foreground leading-relaxed">{risk.mitigation_plan}</p>
                            </div>

                            <div className="mt-8 flex items-center justify-between relative z-10">
                                <div className="flex items-center gap-4">
                                    {risk.evidence_id ? (
                                        <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl group/link cursor-pointer">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                            <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Linked Proof: {risk.evidence_id}</span>
                                        </div>
                                    ) : (
                                        <div className="text-[9px] font-black text-muted-foreground/20 uppercase tracking-widest italic">Awaiting Evidence Linkage...</div>
                                    )}
                                </div>
                                <div className="flex items-center gap-4">
                                    <button className="text-[9px] font-black text-muted-foreground/40 uppercase tracking-widest hover:text-foreground transition-all">De-Prioritize</button>
                                    <button className="px-6 py-2.5 bg-foreground text-background rounded-xl text-[9px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">Modify Response</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === 'Heatmap' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 animate-in slide-in-from-bottom-8 duration-700">
                    <div className="lg:col-span-8 glass-depth rounded-[3rem] p-12 border border-border bg-muted/10 relative overflow-hidden h-[700px]">
                        <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 pointer-events-none opacity-20">
                            {Array.from({ length: 25 }).map((_, i) => (
                                <div key={i} className="border border-white/[0.05]" />
                            ))}
                        </div>
                        <div className="relative h-full w-full flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/30">Impact →</span>
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-rose-500">The Danger Zone (H-H)</span>
                            </div>

                            <div className="flex-1 relative">
                                {risks.map(risk => (
                                    <div
                                        key={risk.id}
                                        style={{
                                            left: `${(risk.impact - 1) * 20 + 10}%`,
                                            bottom: `${(risk.probability - 1) * 20 + 10}%`
                                        }}
                                        className={`absolute w-4 h-4 rounded-full -translate-x-1/2 translate-y-1/2 cursor-pointer group hover:scale-150 transition-all ${getScoreColor(risk.risk_score).split(' ')[1]}`}
                                    >
                                        <div className="opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 p-4 glass-depth rounded-xl border border-border text-[9px] font-black uppercase tracking-widest z-50 pointer-events-none">
                                            {risk.title}
                                            <div className="mt-1 text-rose-500">SCORE: {risk.risk_score}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-between items-end">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/30 [writing-mode:vertical-lr] rotate-180">Probability ↑</span>
                                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 opacity-30">Maintenance Zone (L-L)</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-8">
                        <div className="glass-depth p-8 rounded-[2.5rem] border border-border space-y-6">
                            <div className="text-[10px] font-black text-primary uppercase tracking-[0.3em] pl-4 border-l-2 border-primary">Postural Density</div>
                            <div className="space-y-4">
                                <DensityRow label="Critical (H-H)" count={risks.filter(r => r.risk_score >= 15).length} color="rose" />
                                <DensityRow label="Elevated (M-H)" count={risks.filter(r => r.risk_score < 15 && r.risk_score >= 10).length} color="amber" />
                                <DensityRow label="Managed (L-L)" count={risks.filter(r => r.risk_score < 10).length} color="emerald" />
                            </div>
                        </div>
                        <button className="w-full py-6 bg-foreground text-background rounded-[2rem] font-black uppercase tracking-[0.3em] text-[11px] shadow-2xl active:scale-95 transition-all">
                            Generate Threat Report
                        </button>
                    </div>
                </div>
            )}

            {activeTab === 'Intelligence' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-700">
                    {alerts.length > 0 ? alerts.map((alert, i) => (
                        <div key={i} className="glass-depth p-10 rounded-[3rem] relative overflow-hidden group hover:border-rose-500/30 transition-all duration-500 bg-muted/10 border border-border">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-rose-500/10 transition-colors" />
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-500">Institutional Intelligence</span>
                            </div>
                            <h3 className="text-2xl font-black text-foreground group-hover:text-rose-500 transition-colors font-heading tracking-tight leading-[0.9] mb-4 uppercase italic">Anomaly Detected: {alert.source}</h3>
                            <p className="text-muted-foreground font-medium text-lg leading-relaxed mb-6 opacity-70">{alert.message}</p>
                            <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/10 mb-8">
                                <div className="text-[8px] font-black text-rose-500 uppercase tracking-widest mb-1">Impact Forecast</div>
                                <div className="text-xs font-bold text-foreground">{alert.predicted_impact}</div>
                            </div>
                            <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground/30 border-t border-border/10 pt-8">
                                <span>Signal URI: {alert.source}</span>
                                <span>{new Date(alert.created_at).toLocaleTimeString()}</span>
                            </div>
                        </div>
                    )) : (
                        <div className="col-span-full h-[400px] flex flex-col items-center justify-center text-center opacity-30">
                            <div className="text-6xl mb-4">🔮</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Scanning for institutional anomalies...</div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

function DecisionStat({ label, value, sub }: { label: string, value: string, sub: string }) {
    return (
        <div className="space-y-1">
            <div className="text-[9px] font-black text-muted-foreground/30 uppercase tracking-[0.3em]">{label}</div>
            <div className="text-xl font-black text-foreground font-heading tracking-tight italic uppercase">{value}</div>
            <div className="text-[9px] font-black text-muted-foreground/20 uppercase tracking-widest tabular-nums">{sub}</div>
        </div>
    );
}

function DensityRow({ label, count, color }: { label: string, count: number, color: 'rose' | 'amber' | 'emerald' }) {
    const bgColors = { rose: 'bg-rose-500', amber: 'bg-amber-500', emerald: 'bg-emerald-500' };
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className={`w-1.5 h-1.5 rounded-full ${bgColors[color]}`} />
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{label}</span>
            </div>
            <span className="text-[10px] font-black text-foreground tabular-nums">{count} Items</span>
        </div>
    );
}
