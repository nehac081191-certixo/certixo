"use client";

import { useState } from 'react';
import AuditPlanManager from './AuditPlanManager';
import HUD from './HUD';

export default function AIAuditorPlane() {
    const [loading, setLoading] = useState<string | null>(null);
    const [result, setResult] = useState<any>(null);

    const runIntentMatch = async () => {
        setLoading('intent');
        try {
            const res = await fetch('/api/ai-proxy/ai-auditor/intent-match', {
                method: 'POST'
            });
            setResult({ type: 'intent', data: await res.json() });
        } catch (error) {
            console.error("Error running intent match:", error);
            // Optionally handle error state here
        } finally {
            setLoading(null);
        }
    };

    const runAnomalyScan = async () => {
        setLoading('anomaly');
        const res = await fetch('/api/ai-proxy/ai-auditor/anomaly-scan', {
            method: 'POST'
        });
        setResult({ type: 'anomaly', data: await res.json() });
        setLoading(null);
    };

    const runDryRun = async () => {
        setLoading('dry-run');
        const res = await fetch('/api/ai-proxy/ai-auditor/dry-run', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ framework_name: 'SOC 2' })
        });
        setResult({ type: 'dry-run', data: await res.json() });
        setLoading(null);
    };

    return (
        <div className="w-full max-w-[1600px] mx-auto space-y-12 animate-in fade-in duration-700">
            {/* Header Area */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_rgba(59,130,246,0.6)] animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Autonomous Agentic Plane</span>
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-5xl font-black font-heading tracking-tighter text-premium">AI Auditor Command</h1>
                        <p className="text-muted-foreground text-lg max-w-2xl font-medium leading-relaxed">
                            Deploy the <span className="text-foreground">Certixo Auditor Agent</span> to perform high-density inspections, intent mapping, and official compliance audits.
                        </p>
                    </div>
                </div>
            </div>

            <HUD
                status={{ value: 'Active', label: 'Agentic Scoping Phase', color: 'emerald' }}
                nextAction={{ label: 'Execute SOC 2 Dry Run', onClick: () => { } }}
                risk={{ label: '2 Vibe Mismatches Found', count: 2 }}
                evidence={{ label: 'Policy Intent Mappings', count: 14, onClick: () => { } }}
                quickExport={{ label: 'Export Agent Manifest', onClick: () => { } }}
            />

            {/* Audit Mission Control */}
            <AuditPlanManager />

            <div className="pt-12 border-t border-border/10">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Specialized Agentic Capabilities</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <CapabilityCard
                        title="Intent Matcher"
                        desc='Compare "Access Control Policy" against real-world AWS/Azure configurations to find "Vibe Mismatches".'
                        icon="🎯"
                        loading={loading === 'intent'}
                        onClick={runIntentMatch}
                    />
                    <CapabilityCard
                        title="Anomaly Spotter"
                        desc="Scan 100% of telemetry logs (140k+ rows) to identify outliers and unauthorized lateral movement."
                        icon="🌊"
                        loading={loading === 'anomaly'}
                        onClick={runAnomalyScan}
                    />
                    <CapabilityCard
                        title="Audit Dry Run"
                        desc="Execute a pre-audit 'Mock Review'. The AI Auditor will grill the team and flag weak evidence before auditors arrive."
                        icon="⚖️"
                        loading={loading === 'dry-run'}
                        onClick={runDryRun}
                    />
                </div>

                {/* Result Plane */}
                {result && (
                    <div className="mt-12 glass-depth rounded-[2.5rem] border border-border overflow-hidden animate-in slide-in-from-bottom-8 duration-500">
                        <div className="p-10 border-b border-border flex justify-between items-center bg-muted/20">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl">🤖</div>
                                <div>
                                    <h4 className="text-xl font-black font-heading text-foreground">
                                        {result.type === 'intent' && 'Document Intent Analysis Output'}
                                        {result.type === 'anomaly' && 'Log-Wide Anomaly Report'}
                                        {result.type === 'dry-run' && 'Mock Auditor: Final Assessment'}
                                    </h4>
                                    <div className="text-[9px] font-black uppercase tracking-widest text-primary">Agentic Intelligence Verified</div>
                                </div>
                            </div>
                            <button onClick={() => setResult(null)} className="text-muted-foreground hover:text-foreground transition-colors">✕</button>
                        </div>

                        <div className="p-12 space-y-10">
                            {result.type === 'intent' && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                    <div className="space-y-4">
                                        <div className="text-[10px] font-black text-muted-foreground/50 uppercase tracking-widest">Policy Intent Mapped</div>
                                        <div className="p-6 rounded-2xl bg-muted/40 border border-border text-[11px] font-medium text-muted-foreground leading-relaxed italic">
                                            "{result.data.policy_intent}"
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="text-[10px] font-black text-rose-500 uppercase tracking-widest flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Vibe Mismatch Detected
                                        </div>
                                        <div className="p-6 rounded-2xl bg-rose-500/5 border border-rose-500/20 text-xs font-black text-foreground leading-relaxed">
                                            {result.data.mismatch}
                                        </div>
                                        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 text-[11px] font-medium text-primary">
                                            <span className="font-black">RECOMENDATION:</span> {result.data.recommendation}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {result.type === 'anomaly' && (
                                <div className="space-y-8">
                                    <div className="flex items-center justify-between">
                                        <div className="text-[10px] font-black text-muted-foreground/30 uppercase tracking-widest">Deep Scan Metrics</div>
                                        <div className="text-[10px] font-black text-primary uppercase tracking-widest">{result.data.logs_scanned.toLocaleString()} Logs Analyzed</div>
                                    </div>
                                    <div className="grid gap-4">
                                        {result.data.anomalies.map((a: any) => (
                                            <div key={a.id} className="p-6 rounded-2xl bg-muted/20 border border-border flex justify-between items-center group hover:border-rose-500/40 transition-all">
                                                <div className="flex items-center gap-6">
                                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-[10px] font-black ${a.severity === 'Critical' ? 'bg-rose-500/10 text-rose-500' : 'bg-amber-500/10 text-amber-500'}`}>
                                                        {a.source}
                                                    </div>
                                                    <div className="space-y-1">
                                                        <div className="text-sm font-black text-foreground group-hover:text-primary transition-colors">{a.desc}</div>
                                                        <div className="text-[9px] font-black text-muted-foreground/50 uppercase tracking-widest">Signal Strength: 100% • Agent Verified</div>
                                                    </div>
                                                </div>
                                                <span className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest border ${a.severity === 'Critical' ? 'bg-rose-500/10 text-rose-500 border-rose-500/20' : 'bg-amber-500/10 text-amber-500 border-amber-500/20'}`}>
                                                    {a.severity}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {result.type === 'dry-run' && (
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                                    <div className="lg:col-span-1 space-y-8">
                                        <div className="p-10 rounded-[2.5rem] bg-muted/20 border border-border text-center space-y-4">
                                            <div className="text-[10px] font-black text-muted-foreground/30 uppercase tracking-widest">Mock Readiness Score</div>
                                            <div className={`text-7xl font-black font-heading tracking-tighter ${result.data.mock_auditor_score > 80 ? 'text-emerald-500' : 'text-rose-500'}`}>
                                                {result.data.mock_auditor_score}
                                            </div>
                                            <div className="text-[9px] font-black uppercase tracking-widest text-primary flex items-center justify-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full" /> {result.data.readiness_verdict}
                                            </div>
                                        </div>
                                        <button className="w-full py-5 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-primary/20 hover:opacity-90 active:scale-95 transition-all">Download Mock Report</button>
                                    </div>
                                    <div className="lg:col-span-2 space-y-6">
                                        <div className="text-[10px] font-black text-rose-500 uppercase tracking-widest">The Auditor's Grilling Findings</div>
                                        <div className="space-y-4">
                                            {result.data.grilling_findings.map((f: string, i: number) => (
                                                <div key={i} className="p-6 rounded-2xl bg-muted/20 border-l-4 border-rose-500 border-y border-r border-border flex gap-5">
                                                    <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-500 font-black text-xs shrink-0">!</div>
                                                    <p className="text-[11px] font-medium text-foreground/70 leading-relaxed italic">"{f}"</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function CapabilityCard({ title, desc, icon, onClick, loading }: { title: string, desc: string, icon: string, onClick: () => void, loading: boolean }) {
    return (
        <div className="glass-depth p-10 rounded-[2.5rem] border border-border group hover:border-primary/20 transition-all cursor-default relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
                <div className="flex justify-between items-start">
                    <div className="w-16 h-16 rounded-2xl bg-muted/40 border border-border flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-inner">
                        {icon}
                    </div>
                    {loading && <div className="w-2 h-2 rounded-full bg-primary animate-ping" />}
                </div>
                <div className="space-y-2">
                    <h4 className="text-xl font-black font-heading tracking-tight text-foreground group-hover:text-primary transition-colors">{title}</h4>
                    <p className="text-sm font-medium text-muted-foreground leading-relaxed">{desc}</p>
                </div>
            </div>
            <button
                onClick={onClick}
                disabled={loading}
                className="mt-10 w-full py-4 bg-muted border border-border rounded-xl text-[9px] font-black uppercase tracking-widest text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all disabled:opacity-50"
            >
                {loading ? 'Processing Analysis...' : 'Deploy Agent'}
            </button>
        </div>
    );
}
