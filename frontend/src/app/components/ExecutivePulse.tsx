"use client";

import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

export default function ExecutivePulse({ onActionClick }: { onActionClick?: () => void }) {
    const { token } = useAuth();
    const [pulse, setPulse] = useState({
        readiness: 94.2,
        criticalIssue: 'Analyzing signals...',
        unresolvedRisks: 0,
        velocity: '98%'
    });

    useEffect(() => {
        const fetchSummary = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000'}/dashboard/summary`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (res.ok) {
                    const data = await res.json();
                    setPulse({
                        readiness: data.readiness_index,
                        criticalIssue: data.critical_finding,
                        unresolvedRisks: data.open_risks,
                        velocity: `${data.published_policies > 0 ? 98 : 0}%`
                    });
                }
            } catch (err) {
                console.error(err);
            }
        };
        if (token) fetchSummary();
    }, [token]);

    return (
        <div className="w-full animate-in fade-in zoom-in-95 duration-1000">
            <div className="glass-depth rounded-[2rem] border border-border bg-card/10 overflow-hidden shadow-2xl">
                <div className="flex flex-col md:flex-row items-stretch">

                    {/* Primary Status Meter */}
                    <div className="p-10 md:p-12 md:w-1/3 border-b md:border-b-0 md:border-r border-border/10 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.4)] animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/50">System Stability</span>
                        </div>
                        <div className="flex items-baseline gap-4">
                            <h2 className="text-8xl font-black font-heading tracking-tighter text-foreground italic">{pulse.readiness}</h2>
                            <span className="text-xl font-black text-muted-foreground/20 italic uppercase tracking-widest">Index</span>
                        </div>
                        <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mt-4">+1.2% Institutional Gain</p>
                    </div>

                    {/* Active Mandate */}
                    <div className="flex-1 p-10 md:p-12 space-y-8 relative overflow-hidden flex flex-col justify-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2" />

                        <div className="space-y-3 relative z-10">
                            <div className="text-[9px] font-black text-rose-500 uppercase tracking-[0.4em]">Remediation Mandate</div>
                            <h3 className="text-3xl font-black font-heading tracking-tight text-foreground leading-tight max-w-lg">
                                {pulse.criticalIssue}
                            </h3>
                        </div>

                        <div className="flex gap-4 relative z-10">
                            <button
                                onClick={onActionClick}
                                className="px-8 py-4 bg-primary text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
                            >
                                Execute Response
                            </button>
                            <button className="px-6 py-4 bg-muted text-muted-foreground/60 hover:text-foreground rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                                Delegate
                            </button>
                        </div>
                    </div>

                    {/* Tactical Telemetry */}
                    <div className="p-10 md:p-12 md:w-1/4 border-t md:border-t-0 md:border-l border-border/10 flex flex-col justify-center space-y-8 bg-white/[0.01]">
                        <div className="space-y-1">
                            <div className="text-[9px] font-black text-muted-foreground/30 uppercase tracking-[0.3em]">Open Risks</div>
                            <div className="text-2xl font-black text-foreground tabular-nums">{pulse.unresolvedRisks} Item<span className="text-muted-foreground/30">s</span></div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-[9px] font-black text-muted-foreground/30 uppercase tracking-[0.3em]">Vault Velocity</div>
                            <div className="text-2xl font-black text-primary tabular-nums">{pulse.velocity}</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
