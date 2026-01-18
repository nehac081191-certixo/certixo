"use client";

import { useState, useEffect } from 'react';

type IntegrationHealth = {
    name: string;
    status: 'Operational' | 'Degraded' | 'Failing';
    latency: string;
    last_sync: string;
};

export default function AuditHealth() {
    const [integrations, setIntegrations] = useState<IntegrationHealth[]>([
        { name: 'AWS Production', status: 'Operational', latency: '24ms', last_sync: '1m ago' },
        { name: 'GitHub Enterprise', status: 'Operational', latency: '42ms', last_sync: '5m ago' },
        { name: 'Google Workspace', status: 'Degraded', latency: '1.2s', last_sync: '12m ago' },
        { name: 'SAP S/4HANA', status: 'Failing', latency: 'inf', last_sync: '2h ago' }
    ]);

    return (
        <div className="glass-depth rounded-[2.5rem] p-10 h-full border border-border shadow-2xl space-y-10 group">
            <div className="flex justify-between items-center">
                <div className="space-y-1">
                    <h3 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em] flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Automation Health
                    </h3>
                </div>
                <div className="text-[9px] font-black text-muted-foreground/30 uppercase tracking-[0.2em]">Live Telemetry</div>
            </div>

            <div className="grid gap-6">
                {integrations.map(integ => (
                    <div key={integ.name} className="flex items-center justify-between p-6 rounded-2xl bg-muted/40 border border-border hover:border-primary/40 transition-all group/item">
                        <div className="flex items-center gap-5">
                            <div className="w-10 h-10 rounded-xl bg-muted/60 border border-border flex items-center justify-center font-black text-[10px] text-muted-foreground group-hover/item:text-primary transition-colors">
                                {integ.name.substring(0, 2)}
                            </div>
                            <div className="space-y-1">
                                <div className="text-sm font-black text-foreground group-hover/item:text-primary transition-colors tracking-tight font-heading">{integ.name}</div>
                                <div className="text-[9px] font-black text-muted-foreground/40 uppercase tracking-widest">{integ.latency} • {integ.last_sync}</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                            <span className={`text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${integ.status === 'Operational' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                                integ.status === 'Degraded' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                                    'bg-rose-500/10 text-rose-500 border-rose-500/20'
                                }`}>
                                {integ.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <button className="w-full py-5 bg-muted border border-border rounded-2xl text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-all">
                Configure Transmissions
            </button>
        </div>
    );
}
