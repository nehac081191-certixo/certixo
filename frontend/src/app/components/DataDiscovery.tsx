"use client";

import { useState, useEffect } from 'react';

type DiscoveryJob = {
    id: number;
    source_name: string;
    status: number;
    scan_type: string;
    sensitive_count: number;
    findings: any;
    last_run: string;
};

export default function DataDiscovery() {
    const [jobs, setJobs] = useState<DiscoveryJob[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/data-discovery')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                setLoading(false);
            })
            .catch(console.error);
    }, []);

    const getStatusBadge = (status: number) => {
        switch (status) {
            case 0: return <span className="bg-white/5 text-white/40 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Queued</span>;
            case 1: return <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest animate-pulse">Scanning...</span>;
            case 2: return <span className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">Success</span>;
            case 3: return <span className="bg-rose-500/10 text-rose-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-rose-500/20">Critical Error</span>;
            default: return null;
        }
    };

    return (
        <div className="w-full max-w-[1600px] mx-auto space-y-12 animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_rgba(59,130,246,0.6)] animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Leakage Intelligence</span>
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-5xl font-black font-heading tracking-tighter text-premium">Data Discovery</h1>
                        <p className="text-muted-foreground text-lg max-w-2xl font-medium leading-relaxed">
                            Deep-scan cloud storage and databases to identify PII exposure, sensitive document leakage, and cryptographic drift.
                        </p>
                    </div>
                </div>
                <button className="bg-primary text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-primary/30 hover:opacity-90 active:scale-95 transition-all glow-primary flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    Start Analysis
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {jobs.map(job => (
                    <div key={job.id} className="glass-depth rounded-[2.5rem] p-10 group hover:border-primary/40 transition-all duration-500 flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -mr-24 -mt-24" />

                        <div className="flex justify-between items-start mb-8 relative z-10">
                            <div className="space-y-1">
                                <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors font-heading tracking-tight leading-none">{job.source_name}</h3>
                                <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">{job.scan_type} Signature Scan</div>
                            </div>
                            {getStatusBadge(job.status)}
                        </div>

                        <div className="grid grid-cols-2 gap-8 mb-8 relative z-10">
                            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                                <div className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em] mb-2">Leaks Detected</div>
                                <div className={`text-4xl font-black tabular-nums ${job.sensitive_count > 50 ? 'text-rose-500' : job.sensitive_count > 0 ? 'text-amber-500' : 'text-emerald-500'}`}>
                                    {job.sensitive_count}
                                </div>
                            </div>
                            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                                <div className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em] mb-2">Last Run</div>
                                <div className="text-xl font-black text-white/80">
                                    {new Date(job.last_run).toLocaleDateString()}
                                </div>
                            </div>
                        </div>

                        {job.status === 2 && job.sensitive_count > 0 && (
                            <div className="pt-8 border-t border-white/[0.03] space-y-4">
                                <div className="text-[10px] font-black text-white/20 uppercase tracking-widest">Finding Distribution</div>
                                <div className="flex gap-4">
                                    {Object.entries(job.findings).map(([key, val]: [string, any]) => (
                                        <div key={key} className="flex flex-col">
                                            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{key}</span>
                                            <span className="text-lg font-black text-white">{val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="mt-auto pt-8 flex gap-4">
                            <button className="flex-1 py-4 bg-white/5 border border-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Review Matches</button>
                            <button className="flex-1 py-4 bg-primary/10 border border-primary/20 text-primary rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all">Remediate</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
