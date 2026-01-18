"use client";

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import HUD from './HUD';

type AuditLog = {
    id: number;
    filename: string;
    category: string;
    status: string;
    analysis_result: string;
    created_at: string;
};

export default function HistoryList({ refreshTrigger }: { refreshTrigger: number }) {
    const [history, setHistory] = useState<AuditLog[]>([]);
    const [selectedLog, setSelectedLog] = useState<AuditLog | null>(null);
    const [isSyncing, setIsSyncing] = useState(false);

    useEffect(() => {
        setIsSyncing(true);
        fetch('http://localhost:8000/history')
            .then(res => res.json())
            .then(data => {
                setHistory(data);
                setTimeout(() => setIsSyncing(false), 800);
            })
            .catch(err => {
                console.error("Failed to fetch history", err);
                setIsSyncing(false);
            });
    }, [refreshTrigger]);

    return (
        <div className="w-full max-w-[1400px] mx-auto space-y-10 animate-in fade-in duration-500">
            {/* Header / HUD Interaction */}
            <div className="flex flex-col gap-10">
                <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-4">
                        <div className={`w-2 h-2 rounded-full ${isSyncing ? 'bg-primary animate-ping' : 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]'}`} />
                        <h3 className="text-[10px] font-black text-foreground uppercase tracking-[0.4em]">Accountability Stream</h3>
                        {isSyncing && <span className="text-[8px] font-bold text-muted-foreground italic lowercase">Synchronizing ledger...</span>}
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/40">Integrity Check:</span>
                        <div className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-black text-emerald-500">
                            100% IMMUTABLE
                        </div>
                    </div>
                </div>

                <HUD
                    status={{ value: `${history.filter(h => h.status === 'Compliant').length}/${history.length}`, label: 'Compliant Chain', color: 'emerald' }}
                    nextAction={{ label: 'Verify Next Block', onClick: () => { } }}
                    risk={{ label: 'Outstanding Deficiencies', count: history.filter(h => h.status === 'Non-Compliant').length }}
                    evidence={{ label: 'Hashed Artifacts', count: history.length, onClick: () => { } }}
                    quickExport={{ label: 'Export Evidence Bundle', onClick: () => { } }}
                />
            </div>

            {/* The Stream */}
            <div className="relative">
                {/* Vertical Connector Line */}
                <div className="absolute left-[31px] top-0 bottom-0 w-px bg-gradient-to-b from-border/50 via-border to-transparent" />

                <div className="space-y-4">
                    {history.map((log) => (
                        <div key={log.id}
                            onClick={() => setSelectedLog(log)}
                            className="group relative flex items-center gap-8 pl-4 transition-all hover:translate-x-1 cursor-pointer">

                            {/* Status Node */}
                            <div className={`relative z-10 w-9 h-9 rounded-full border-4 border-background flex items-center justify-center transition-all ${log.status === 'Compliant' ? 'bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.3)]' :
                                log.status === 'Non-Compliant' ? 'bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.3)]' :
                                    'bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.3)]'
                                }`}>
                                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            </div>

                            {/* Artifact Card */}
                            <div className="flex-1 glass-depth rounded-2xl border border-border group-hover:border-primary/30 p-5 flex items-center justify-between transition-all bg-white/[0.01] group-hover:bg-white/[0.03]">
                                <div className="flex items-center gap-6">
                                    <div className="text-[10px] font-mono text-muted-foreground/30 w-16">
                                        ID-{log.id.toString().padStart(3, '0')}
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-sm font-black text-foreground group-hover:text-primary transition-colors tracking-tight">
                                            {log.filename}
                                        </h4>
                                        <div className="flex items-center gap-3">
                                            <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/40">{log.category}</span>
                                            <div className="w-1 h-1 rounded-full bg-border" />
                                            <span className="text-[9px] font-medium text-muted-foreground">{new Date(log.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-8">
                                    <div className={`text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border ${log.status === 'Compliant' ? 'bg-emerald-500/5 text-emerald-500 border-emerald-500/10' :
                                        log.status === 'Non-Compliant' ? 'bg-rose-500/5 text-rose-500 border-rose-500/10' :
                                            'bg-amber-500/5 text-amber-500 border-amber-500/10'
                                        }`}>
                                        {log.status === 'Compliant' ? 'Verified' : log.status === 'Non-Compliant' ? 'Conflict' : 'Analyzing'}
                                    </div>
                                    <svg className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Success State / Empty State */}
                {history.length > 0 && !isSyncing && (
                    <div className="mt-12 ml-[31px] pl-12 border-t border-border/20 pt-8 animate-in fade-in slide-in-from-top-4 duration-1000">
                        <div className="flex items-center gap-3 text-emerald-500/50">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="text-[9px] font-black uppercase tracking-[0.3em]">End of Verified Ledger</span>
                        </div>
                    </div>
                )}

                {history.length === 0 && !isSyncing && (
                    <div className="py-32 text-center space-y-6">
                        <div className="w-24 h-24 bg-muted/20 border border-dashed border-border rounded-[2.5rem] flex items-center justify-center mx-auto relative overflow-hidden group">
                            <div className="absolute inset-0 bg-primary/5 group-hover:translate-y-0 translate-y-full transition-transform duration-500" />
                            <svg className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-sm font-black text-foreground uppercase tracking-widest italic">Awaiting Artifacts</h3>
                            <p className="text-[10px] text-muted-foreground font-medium max-w-xs mx-auto">No auditable transactions have traversed the system in this session.</p>
                        </div>
                        <button className="px-6 py-2 border border-primary/20 bg-primary/5 text-primary text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-primary/10 transition-all">Initialize Capture</button>
                    </div>
                )}
            </div>

            {/* Premium Detail Modal (Enhanced) */}
            {selectedLog && (
                <div className="fixed inset-0 z-[150] flex items-center justify-center p-8 bg-background/90 backdrop-blur-3xl animate-in fade-in duration-300"
                    onClick={() => setSelectedLog(null)}>
                    <div className="bg-card border border-border rounded-[2.5rem] w-full max-w-4xl max-h-[85vh] flex flex-col shadow-[0_0_80px_rgba(0,0,0,0.6)] overflow-hidden animate-in zoom-in-95 duration-400"
                        onClick={e => e.stopPropagation()}>
                        <div className="p-10 border-b border-border flex justify-between items-center bg-white/[0.01]">
                            <div className="flex items-center gap-6">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${selectedLog.status === 'Compliant' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'bg-rose-500 text-white shadow-lg shadow-rose-500/20'
                                    }`}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black text-foreground font-heading tracking-tight leading-none">{selectedLog.filename}</h2>
                                    <div className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground mt-2">Verified Ledger Entry • {selectedLog.category}</div>
                                </div>
                            </div>
                            <button onClick={() => setSelectedLog(null)} className="w-10 h-10 rounded-xl bg-muted hover:bg-muted/80 flex items-center justify-center transition-all">
                                <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>

                        <div className="p-12 overflow-y-auto custom-scrollbar">
                            <div className="prose prose-sm prose-invert max-w-none prose-p:text-foreground/80 prose-strong:text-foreground prose-code:bg-white/5 prose-code:p-1 prose-code:rounded">
                                <ReactMarkdown>{selectedLog.analysis_result}</ReactMarkdown>
                            </div>
                        </div>

                        <div className="p-8 border-t border-border flex justify-between bg-muted/20">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                <span className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">Certified Immutable by Certixo Governance Engine</span>
                            </div>
                            <button className="text-[9px] font-black uppercase tracking-widest text-primary hover:underline">Download Notarized Copy</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
