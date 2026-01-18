"use client";

import { useState, useEffect } from 'react';

type DriftCheck = {
    id: number;
    name: string;
    description: string;
    integration_type: string;
    status: string;
    last_run: string;
};

type Alert = {
    id: number;
    message: string;
    severity: string;
    created_at: string;
};

export default function DriftMonitor() {
    const [checks, setChecks] = useState<DriftCheck[]>([]);
    const [alerts, setAlerts] = useState<Alert[]>([]);
    const [scanning, setScanning] = useState(false);

    useEffect(() => {
        fetchStatus();
    }, []);

    const fetchStatus = () => {
        fetch('http://localhost:8000/drift/status')
            .then(res => res.json())
            .then(data => {
                setChecks(data.checks);
                setAlerts(data.alerts);
            })
            .catch(console.error);
    };

    const runScan = async () => {
        setScanning(true);
        try {
            await fetch('http://localhost:8000/drift/scan', { method: 'POST' });
            fetchStatus();
        } finally {
            setScanning(false);
        }
    };

    return (
        <div className="glass-depth rounded-[2.5rem] p-10 h-fit transition-all duration-500 border border-border shadow-2xl">
            <div className="flex justify-between items-center mb-10 font-sans">
                <div className="space-y-1">
                    <h3 className="text-[10px] font-black text-rose-500 uppercase tracking-[0.3em] flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full bg-rose-500 ${scanning ? 'animate-ping' : ''}`} />
                        Continuous Monitoring
                    </h3>
                </div>
                <button
                    onClick={runScan}
                    disabled={scanning}
                    className="bg-muted hover:bg-muted/80 text-[9px] font-black uppercase tracking-widest px-6 py-3 rounded-xl border border-border transition-all active:scale-95 disabled:opacity-50 text-muted-foreground"
                >
                    {scanning ? 'Calibrating...' : 'Trigger Scan'}
                </button>
            </div>

            {/* Alerts Feed */}
            {alerts.length > 0 && (
                <div className="mb-10 space-y-4 font-sans">
                    {alerts.slice(0, 3).map(alert => (
                        <div key={alert.id} className="bg-rose-500/5 border border-rose-500/10 p-5 rounded-2xl flex gap-5 items-start animate-in slide-in-from-top-4 duration-500">
                            <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500 shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                            </div>
                            <div className="space-y-1">
                                <div className="text-xs font-black text-foreground uppercase tracking-widest">{alert.severity} Signal Detected</div>
                                <div className="text-[11px] text-muted-foreground font-medium leading-relaxed">{alert.message}</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Checks Grid */}
            <div className="space-y-4 font-sans">
                {checks.map(check => (
                    <div key={check.id} className="flex items-center justify-between p-5 rounded-2xl bg-muted/20 border border-border group hover:border-primary/40 transition-all cursor-default">
                        <div className="flex items-center gap-6">
                            <div className="w-12 h-12 rounded-xl bg-muted/60 border border-border flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                                {check.integration_type === 'AWS' ? (
                                    <span className="text-amber-500 font-black text-[10px]">AWS</span>
                                ) : (
                                    <span className="text-muted-foreground/50 font-black text-[10px]">GRC</span>
                                )}
                            </div>
                            <div className="space-y-1">
                                <div className="text-sm font-black text-foreground group-hover:text-primary transition-colors tracking-tight font-heading">{check.name}</div>
                                <div className="text-[9px] font-black text-muted-foreground/30 uppercase tracking-widest">Latency: 42ms • Verified</div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className={`absolute inset-0 rounded-full blur-[8px] opacity-40 ${check.status === 'Passing' ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                            <div className={`relative w-2 h-2 rounded-full ${check.status === 'Passing' ? 'bg-emerald-500' : 'bg-rose-500'}`}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
