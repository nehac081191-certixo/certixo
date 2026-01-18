"use client";

import { useEffect, useState } from 'react';

type Stats = {
    total_documents: number;
    compliant_count: number;
    non_compliant_count: number;
    compliance_score: number;
};

export default function ComplianceStats({ refreshTrigger }: { refreshTrigger: number }) {
    const [stats, setStats] = useState<Stats>({
        total_documents: 0,
        compliant_count: 0,
        non_compliant_count: 0,
        compliance_score: 0
    });

    useEffect(() => {
        fetch('http://localhost:8000/stats')
            .then(res => res.json())
            .then(data => setStats(data))
            .catch(err => console.error("Failed to fetch stats", err));
    }, [refreshTrigger]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-[1600px] mx-auto animate-in fade-in duration-1000">
            {/* Primary Posture Score */}
            <div className="md:col-span-2 glass-depth rounded-[3rem] p-12 flex flex-col justify-between relative overflow-hidden group shadow-2xl border-l-[6px] border-primary bg-primary/[0.02]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none group-hover:bg-primary/20 transition-all duration-1000" />

                <div className="flex justify-between items-start z-10">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <h3 className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">Institutional Integrity</h3>
                        </div>
                        <div className="text-[11px] font-black text-muted-foreground/30 uppercase tracking-[0.3em]">Scored against SOC 2 / ISO 27001 v2025</div>
                    </div>
                    <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-xl text-primary font-black text-[9px] uppercase tracking-widest">Live Pulse</div>
                </div>

                <div className="flex items-baseline gap-4 z-10 pt-12 pb-8">
                    <span className="text-[9rem] font-black text-foreground font-heading tracking-tighter tabular-nums leading-none group-hover:text-primary transition-all duration-700">{stats.compliance_score}</span>
                    <div className="space-y-0">
                        <span className="text-4xl font-black text-muted-foreground/20 font-heading tracking-tighter uppercase leading-none block">%</span>
                        <span className="text-sm font-black text-emerald-500 uppercase tracking-widest block">+2.4% MoM</span>
                    </div>
                </div>

                <div className="space-y-4 relative z-10">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-muted-foreground/40">
                        <span>Baseline Scan Progress</span>
                        <span>100% Signal Strength</span>
                    </div>
                    <div className="w-full bg-muted h-2 rounded-full overflow-hidden border border-border/20">
                        <div
                            className="bg-primary h-full rounded-full transition-all duration-1000 shadow-[0_0_20px_rgba(59,130,246,0.6)] relative"
                            style={{ width: `${stats.compliance_score}%` }}
                        >
                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Evidence Velocity */}
            <PostureMetricCard
                label="Evidence Velocity"
                value={`${stats.total_documents}`}
                sub="Manual touchpoints eliminated"
                trend="98%"
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}
            />

            {/* Active Deficiencies */}
            <PostureMetricCard
                label="Critical Deficiencies"
                value={`${stats.non_compliant_count}`}
                sub="Remediation Engine Enabled"
                trend="Urgent"
                color="rose"
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>}
            />
        </div>
    );
}

function PostureMetricCard({ label, value, sub, trend, icon, color }: { label: string, value: string, sub: string, trend: string, icon: React.ReactNode, color?: 'rose' | 'emerald' }) {
    const isRose = color === 'rose';

    return (
        <div className={`glass-depth p-10 rounded-[3rem] group hover:border-primary/30 transition-all duration-500 cursor-default shadow-2xl relative overflow-hidden flex flex-col justify-between`}>
            <div className="flex justify-between items-start mb-12">
                <div className={`w-14 h-14 rounded-2xl ${isRose ? 'bg-rose-500/10 text-rose-500 border border-rose-500/20' : 'bg-muted border border-border'} flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500`}>
                    {icon}
                </div>
                <div className={`text-[10px] font-black uppercase tracking-widest ${isRose ? 'text-rose-500' : 'text-primary'}`}>{trend}</div>
            </div>
            <div className="space-y-1 relative z-10">
                <div className="text-6xl font-black text-foreground tracking-tighter tabular-nums group-hover:text-primary transition-colors font-heading leading-none">{value}</div>
                <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{label}</div>
            </div>
            <div className="mt-8 pt-6 border-t border-border/10 text-[9px] font-black text-muted-foreground/30 uppercase tracking-widest flex items-center gap-2 relative z-10">
                <div className={`w-1.5 h-1.5 rounded-full ${isRose ? 'bg-rose-500 animate-pulse' : 'bg-primary'}`} />
                {sub}
            </div>
        </div>
    );
}
