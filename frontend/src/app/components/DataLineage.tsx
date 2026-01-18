"use client";

import { useState, useEffect } from 'react';

type DataFlow = {
    id: number;
    source: string;
    destination: string;
    data_type: string;
    transport: string;
    status: string;
    last_detected: string;
};

export default function DataLineage() {
    const [flows, setFlows] = useState<DataFlow[]>([]);

    useEffect(() => {
        fetch('http://localhost:8000/data-lineage')
            .then(res => res.json())
            .then(setFlows)
            .catch(console.error);
    }, []);

    return (
        <div className="w-full max-w-[1600px] mx-auto space-y-12 animate-in fade-in duration-700">
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_rgba(59,130,246,0.6)] animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Map & Flow Architecture</span>
                </div>
                <div className="space-y-2">
                    <h1 className="text-5xl font-black font-heading tracking-tighter text-premium">Data Lineage</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl font-medium leading-relaxed">
                        Visualize the lifecycle and movement of sensitive identifiers across the enterprise network.
                        Detect unauthorized data exits and broken transmission vectors.
                    </p>
                </div>
            </div>

            <div className="glass-depth rounded-[2.5rem] p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="grid grid-cols-1 gap-6 relative z-10">
                    {flows.map(flow => (
                        <div key={flow.id} className="bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-12 group hover:border-primary/30 transition-all duration-500">

                            <div className="flex-1 flex items-center gap-10">
                                <div className="space-y-1">
                                    <div className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">Source Node</div>
                                    <div className="text-xl font-black text-white group-hover:text-primary transition-colors underline decoration-primary/20 underline-offset-8">{flow.source}</div>
                                </div>

                                <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-white/5 relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="px-4 py-1 bg-[#111] border border-white/5 rounded-full text-[9px] font-black uppercase tracking-widest text-primary shadow-2xl">
                                            {flow.transport}
                                        </div>
                                    </div>
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                                </div>

                                <div className="space-y-1 text-right">
                                    <div className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">Exit Vector</div>
                                    <div className="text-xl font-black text-white">{flow.destination}</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-12 border-t lg:border-t-0 lg:border-l border-white/[0.03] pt-6 lg:pt-0 lg:pl-12">
                                <div className="space-y-1">
                                    <div className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">Data Class</div>
                                    <span className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-black uppercase tracking-widest text-white/60">{flow.data_type}</span>
                                </div>

                                <div className="space-y-1">
                                    <div className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">Continuity</div>
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${flow.status === 'Active' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]'}`} />
                                        <span className={`text-[10px] font-black uppercase tracking-widest ${flow.status === 'Active' ? 'text-emerald-500' : 'text-amber-500'}`}>{flow.status}</span>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <div className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">Observability</div>
                                    <div className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-none">Latency: 14ms</div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {flows.length === 0 && (
                    <div className="p-24 text-center space-y-4">
                        <div className="w-16 h-16 bg-white/[0.02] border border-white/5 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                            <svg className="w-8 h-8 text-white/10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <h3 className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Establishing Graph Connections...</h3>
                    </div>
                )}
            </div>
        </div>
    );
}
