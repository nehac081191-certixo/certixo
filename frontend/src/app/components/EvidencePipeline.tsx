"use client";

import React from 'react';

type Evidence = {
    id: string;
    name: string;
    frameworks: string[];
    status: 'Valid' | 'Expired' | 'Expiring Soon' | 'In Review';
    lastUpdated: string;
    owner: string;
};

export default function EvidencePipeline() {
    const evidenceList: Evidence[] = [
        { id: '1', name: 'AWS CloudTrail Logs (Q4)', frameworks: ['SOC 2', 'ISO 27001'], status: 'Valid', lastUpdated: '2h ago', owner: 'DevOps' },
        { id: '2', name: 'Penetration Test Report 2025', frameworks: ['SOC 2'], status: 'Expiring Soon', lastUpdated: '12d ago', owner: 'SecOps' },
        { id: '3', name: 'Employee Training Records', frameworks: ['ISO 27001'], status: 'Expired', lastUpdated: '1y ago', owner: 'HR' },
        { id: '4', name: 'Backup Verification Logs', frameworks: ['SOC 2', 'ISO 27001'], status: 'In Review', lastUpdated: 'Just now', owner: 'SRE' },
    ];

    return (
        <div className="glass-depth rounded-[2.5rem] p-10 h-full border border-border shadow-2xl space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div className="space-y-1">
                    <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Evidence Pipeline
                    </h3>
                </div>
                <div className="text-[9px] font-black text-muted-foreground/30 uppercase tracking-[0.2em]">Layer 0 Lifecycle</div>
            </div>

            <div className="space-y-4">
                {evidenceList.map(item => (
                    <div key={item.id} className="p-6 rounded-2xl bg-muted/20 border border-border hover:border-primary/20 transition-all group cursor-pointer">
                        <div className="flex justify-between items-start mb-4">
                            <div className="space-y-1">
                                <div className="text-sm font-black text-foreground group-hover:text-primary transition-colors tracking-tight font-heading">{item.name}</div>
                                <div className="flex gap-2">
                                    {item.frameworks.map(f => (
                                        <span key={f} className="text-[8px] font-black text-muted-foreground/40 border border-border px-2 py-0.5 rounded uppercase">{f}</span>
                                    ))}
                                </div>
                            </div>
                            <span className={`text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${item.status === 'Valid' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                                    item.status === 'Expired' ? 'bg-rose-500/10 text-rose-500 border-rose-500/20' :
                                        item.status === 'Expiring Soon' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                                            'bg-indigo-500/10 text-indigo-500 border-indigo-500/20'
                                }`}>
                                {item.status}
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-[9px] font-black text-muted-foreground/30 uppercase tracking-widest">
                                Owner: <span className="text-foreground/60">{item.owner}</span>
                            </div>
                            <div className="text-[9px] font-black text-muted-foreground/30 uppercase tracking-widest">
                                {item.lastUpdated}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className="w-full py-4 bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-primary hover:text-white transition-all">
                Sync Evidence Vault
            </button>
        </div>
    );
}
