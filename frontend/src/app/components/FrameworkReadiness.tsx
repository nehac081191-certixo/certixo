"use client";

import { useState, useEffect } from 'react';

type Control = {
    id: number;
    code: string;
    name: string;
    description: string;
    status: string;
    automation_status: string;
    integration_source: string | null;
    last_evidence_value: string | null;
    remediation_ticket: string | null;
};

type FrameworkData = {
    id: number;
    name: string;
    description: string;
    progress: number;
    controls_total: number;
    controls_compliant: number;
    status: 'on-track' | 'at-risk' | 'complete';
    controls: Control[];
};

export default function FrameworkReadiness({ onExportClick }: { onExportClick?: () => void }) {
    const [frameworks, setFrameworks] = useState<FrameworkData[]>([]);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    useEffect(() => {
        fetch('http://localhost:8000/frameworks')
            .then(res => res.json())
            .then(data => {
                const mapped = data.map((f: any) => {
                    const total = f.controls.length;
                    const compliant = f.controls.filter((c: any) => c.status === 'Pass').length;
                    const progress = total > 0 ? Math.round((compliant / total) * 100) : 0;
                    return { ...f, progress, controls_total: total, controls_compliant: compliant, status: progress > 80 ? 'on-track' : 'at-risk' };
                });
                setFrameworks(mapped);
            })
            .catch(console.error);
    }, []);

    // EMPTY STATE: If no frameworks found
    if (frameworks.length === 0) {
        return (
            <div className="p-20 border-2 border-dashed border-border rounded-[2rem] text-center space-y-4">
                <div className="text-4xl">🏛️</div>
                <div className="space-y-1">
                    <h4 className="text-sm font-black text-foreground uppercase tracking-widest">Sentinel Idle</h4>
                    <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-[0.2em]">Add a compliance framework to begin institutional monitoring.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6 animate-in fade-in duration-700">
            <div className="flex justify-between items-center px-6">
                <h3 className="text-[10px] font-black text-muted-foreground/30 uppercase tracking-[0.4em]">Certification Horizon</h3>
                <button onClick={onExportClick} className="text-[9px] font-black text-primary uppercase tracking-widest hover:underline">Generate Global Package</button>
            </div>

            <div className="flex flex-col gap-2">
                {frameworks.map(f => (
                    <div key={f.id} className="group">
                        <div
                            onClick={() => setSelectedId(selectedId === f.id ? null : f.id)}
                            className={`p-8 rounded-[1.5rem] border transition-all cursor-pointer flex items-center justify-between ${selectedId === f.id ? 'bg-primary/[0.03] border-primary/30' : 'bg-card/5 border-border/50 hover:bg-card/20'}`}
                        >
                            <div className="flex items-center gap-10">
                                <div className="space-y-1">
                                    <div className="text-xl font-black text-foreground tracking-tighter uppercase italic">{f.name}</div>
                                    <div className="text-[9px] font-medium text-muted-foreground/40 uppercase tracking-widest">{f.controls_compliant}/{f.controls_total} Nodes Verified</div>
                                </div>
                                <div className="h-10 w-px bg-border/20 hidden md:block" />
                                <div className="hidden md:block space-y-2 w-48">
                                    <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-muted-foreground/30">
                                        <span>Readiness</span>
                                        <span>{f.progress}%</span>
                                    </div>
                                    <div className="h-1 bg-muted rounded-full overflow-hidden">
                                        <div className="h-full bg-primary transition-all duration-1000" style={{ width: `${f.progress}%` }} />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className={`text-[10px] font-black px-4 py-1.5 rounded-lg border ${f.status === 'on-track' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-rose-500/10 text-rose-500 border-rose-500/20'}`}>
                                    {f.status === 'on-track' ? 'GOVERNANCE: STABLE' : 'ACTION REQUIRED'}
                                </div>
                                <div className={`text-[10px] text-muted-foreground/20 transition-transform ${selectedId === f.id ? 'rotate-180' : ''}`}>▼</div>
                            </div>
                        </div>

                        {/* Progressive Disclosure: Failed Checks */}
                        {selectedId === f.id && f.progress < 100 && (
                            <div className="mt-2 mx-8 p-6 bg-rose-500/[0.02] border border-rose-500/10 rounded-b-[1.5rem] border-t-0 animate-in slide-in-from-top-4 duration-300">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                                        <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest">Critical Gap: {f.name === 'SOC 2' ? 'MFA missing for 3 core admins' : 'Review of risk ledger overdue'}</span>
                                    </div>
                                    <button className="text-[9px] font-black text-foreground hover:text-primary uppercase tracking-widest">Remediate Source</button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
