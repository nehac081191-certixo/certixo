"use client";

import React, { useState, useEffect } from 'react';

export default function AuditExportModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const [step, setStep] = useState<'selection' | 'generating' | 'success'>('selection');
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (step === 'generating') {
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setStep('success');
                        return 100;
                    }
                    return prev + 2;
                });
            }, 50);
            return () => clearInterval(interval);
        }
    }, [step]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background/80 backdrop-blur-3xl animate-in fade-in duration-500">
            <div className="w-full max-w-3xl glass-depth rounded-[3rem] border border-border shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden relative">
                <button onClick={onClose} className="absolute top-8 right-8 text-muted-foreground hover:text-foreground transition-colors z-20">✕</button>

                {step === 'selection' && (
                    <div className="p-16 space-y-12 animate-in slide-in-from-bottom-8 duration-700">
                        <div className="space-y-4 text-center">
                            <h2 className="text-4xl font-black font-heading tracking-tighter text-foreground uppercase italic">Generate Notarized Bundle</h2>
                            <p className="text-muted-foreground font-medium">Select artifacts to include in the immutable audit package.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ExportOption
                                title="SOC 2 Type II"
                                desc="Full evidence chain for all Trust Service Criteria (Security, Availability)."
                                icon="🏛️"
                            />
                            <ExportOption
                                title="ISO 27001:2022"
                                desc="Annex A controls + Statement of Applicability notarization."
                                icon="🌍"
                            />
                        </div>

                        <button
                            onClick={() => setStep('generating')}
                            className="w-full py-6 bg-primary text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-2xl shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all glow-primary"
                        >
                            Initialize Notarization Sequence
                        </button>
                    </div>
                )}

                {step === 'generating' && (
                    <div className="p-20 flex flex-col items-center justify-center text-center space-y-12 animate-in zoom-in-95 duration-500">
                        <div className="relative w-32 h-32 flex items-center justify-center">
                            <svg className="w-full h-full -rotate-90">
                                <circle cx="64" cy="64" r="60" fill="none" stroke="currentColor" strokeWidth="8" className="text-primary/10" />
                                <circle
                                    cx="64" cy="64" r="60"
                                    fill="none" stroke="currentColor" strokeWidth="8"
                                    strokeDasharray={377}
                                    strokeDashoffset={377 - (377 * progress) / 100}
                                    className="text-primary transition-all duration-300"
                                />
                            </svg>
                            <div className="absolute text-2xl animate-pulse">🔒</div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-black font-heading tracking-tight text-foreground uppercase italic">Certifying Evidence Chain</h3>
                            <div className="flex flex-col gap-2">
                                <div className="text-[10px] font-black text-primary uppercase tracking-[0.4em] animate-pulse">Hashing Artifact ID: 0x82...{Math.floor(Math.random() * 1000)}</div>
                                <div className="text-[10px] font-black text-muted-foreground/30 uppercase tracking-[0.2em]">Verifying Immutability Engine • {progress}%</div>
                            </div>
                        </div>
                    </div>
                )}

                {step === 'success' && (
                    <div className="p-20 text-center space-y-12 animate-in slide-in-from-bottom-8 duration-700">
                        <div className="w-24 h-24 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center text-4xl mx-auto shadow-2xl shadow-emerald-500/20">
                            ✨
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-4xl font-black font-heading tracking-tighter text-foreground uppercase italic">Bundle Verified</h2>
                            <p className="text-muted-foreground font-medium max-w-md mx-auto">
                                The audit package has been notarized and is ready for institutional export.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <button className="flex-1 py-5 bg-muted border border-border rounded-xl text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-foreground">View Ledger</button>
                            <button className="flex-1 py-5 bg-emerald-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-emerald-500/20">Download (.ZIP)</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function ExportOption({ title, desc, icon }: { title: string, desc: string, icon: string }) {
    const [selected, setSelected] = useState(false);
    return (
        <div
            onClick={() => setSelected(!selected)}
            className={`p-8 rounded-[2rem] border transition-all cursor-pointer group ${selected ? 'border-primary bg-primary/[0.03] shadow-xl' : 'border-border bg-muted/20 hover:border-primary/40'}`}
        >
            <div className="text-3xl mb-6 group-hover:scale-110 transition-transform">{icon}</div>
            <h4 className="text-lg font-black text-foreground mb-2 tracking-tight">{title}</h4>
            <p className="text-xs font-medium text-muted-foreground leading-relaxed">{desc}</p>
        </div>
    );
}
