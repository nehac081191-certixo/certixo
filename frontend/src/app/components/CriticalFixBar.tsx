"use client";

import React from 'react';

type CriticalFixBarProps = {
    alerts: {
        id: number;
        title: string;
        body: string;
        type: 'critical' | 'warning' | 'info';
    }[];
    onResolve?: (id: number) => void;
};

export default function CriticalFixBar({ alerts, onResolve }: CriticalFixBarProps) {
    if (alerts.length === 0) return null;

    const criticalCount = alerts.filter(a => a.type === 'critical').length;

    return (
        <div className="w-full bg-rose-500/10 border-y border-rose-500/20 backdrop-blur-xl animate-in slide-in-from-top duration-500">
            <div className="max-w-[1600px] mx-auto px-12 py-3 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-500">Urgent Attention Required</span>
                    </div>
                    <div className="h-4 w-px bg-rose-500/20" />
                    <p className="text-[11px] font-bold text-foreground/80">
                        {criticalCount > 0
                            ? `${criticalCount} critical security gaps are currently blocking your audit readiness.`
                            : "System configuration drift detected in primary cloud provider."}
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                        {alerts.slice(0, 3).map((a, i) => (
                            <div key={i} className={`w-6 h-6 rounded-full border-2 border-background flex items-center justify-center text-[10px] font-black ${a.type === 'critical' ? 'bg-rose-500 text-white' : 'bg-amber-500 text-white'
                                }`}>
                                !
                            </div>
                        ))}
                    </div>
                    <button className="px-6 py-2 bg-rose-500 text-white text-[9px] font-black uppercase tracking-widest rounded-lg hover:opacity-90 transition-all shadow-lg shadow-rose-500/20">
                        Remediate All
                    </button>
                </div>
            </div>
        </div>
    );
}
