"use client";

import { useEffect, useState } from 'react';
import HUD from './HUD';

type Integration = {
    name: string;
    category: string;
    description: string;
    status: string;
};

const getIcon = (name: string) => {
    if (name.includes("Google")) return <svg className="w-8 h-8" viewBox="0 0 24 24"><path fill="#DB4437" d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.53-6.033-5.632s2.701-5.632 6.033-5.632c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.79-1.677-4.184-2.702-6.735-2.702-5.522 0-10 4.478-10 10s4.478 10 10 10c8.396 0 10.202-6.884 9.427-11.466h-9.427z" /></svg>;
    if (name.includes("Azure")) return <svg className="w-8 h-8" viewBox="0 0 24 24"><path fill="#0072C6" d="M12 0l-12 10h12v12h12l-12-24z" /></svg>;
    if (name.includes("QuickBooks") || name.includes("Accounting")) return <svg className="w-8 h-8 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l-10 5v11l10 5 10-5v-11l-10-5zm0 18l-8-4v-8l8 4v8zm0-10l-8-4 8-4 8 4-8 4zm8 10l-8-4v-8l8 4v8z" /></svg>;
    if (name.includes("SAP")) return <div className="w-8 h-8 bg-blue-900 text-white font-black flex items-center justify-center rounded-lg">SAP</div>;
    if (name.includes("Salesforce")) return <svg className="w-8 h-8 text-sky-400" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08-2.76-1.91-3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" /></svg>;
    return <svg className="w-8 h-8 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
}

export default function IntegrationsList() {
    const [integrations, setIntegrations] = useState<Integration[]>([]);
    const [selectedInteg, setSelectedInteg] = useState<string | null>(null);
    const [config, setConfig] = useState({ url: '', apiKey: '' });
    const [connecting, setConnecting] = useState(false);
    const [filter, setFilter] = useState('All');

    const fetchIntegrations = () => {
        fetch('http://localhost:8000/integrations')
            .then(res => res.json())
            .then(data => setIntegrations(data))
            .catch(err => console.error("Failed to fetch integrations", err));
    };

    useEffect(() => {
        fetchIntegrations();
    }, []);

    const categories = ['All', 'SSO', 'Accounting', 'ERP', 'CRM'];
    const filteredIntegrations = filter === 'All'
        ? integrations
        : integrations.filter(i => i.category === filter || i.category.includes(filter));

    return (
        <div className="w-full max-w-[1600px] mx-auto space-y-12 animate-in fade-in duration-700">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_rgba(59,130,246,0.6)] animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Connectivity Grid</span>
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-5xl font-black font-heading tracking-tighter text-premium">Transmission Hub</h1>
                        <p className="text-muted-foreground text-lg max-w-2xl font-medium leading-relaxed">
                            Synchronize enterprise systems to automate evidence ingestion and cryptographic verification workflows.
                        </p>
                    </div>
                </div>

                <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/5">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${filter === cat
                                ? 'bg-primary text-white shadow-xl shadow-primary/20'
                                : 'text-white/40 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <HUD
                status={{ value: `${integrations.filter(i => i.status === 'Connected').length}/${integrations.length}`, label: 'Authorized Systems', color: 'primary' }}
                nextAction={{ label: 'Authorize Cloud Provider (Azure)', onClick: () => setSelectedInteg('Azure') }}
                risk={{ label: '2 Critical Streams Delayed', count: 2 }}
                evidence={{ label: 'Telemetry Logs Ingested', count: 142203, onClick: () => { } }}
                quickExport={{ label: 'Export Inventory Manifest', onClick: () => { } }}
            />

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredIntegrations.map((integ) => (
                    <div key={integ.name} className="glass-depth rounded-[2.5rem] p-10 group hover:border-primary/40 transition-all duration-500 cursor-default shadow-2xl relative overflow-hidden flex flex-col">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-all" />

                        <div className="mb-10 w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center p-3 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                            {getIcon(integ.name)}
                        </div>

                        <div className="space-y-2 mb-8">
                            <h4 className="text-2xl font-black text-white group-hover:text-primary transition-colors font-heading tracking-tight">{integ.name}</h4>
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">{integ.category}</span>
                            </div>
                        </div>

                        <p className="text-muted-foreground text-sm font-medium leading-relaxed mb-10 flex-1">
                            {integ.description}
                        </p>

                        <div className="pt-8 border-t border-white/[0.03] flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className={`w-1.5 h-1.5 rounded-full ${integ.status === 'Connected' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-white/10'}`} />
                                <span className={`text-[9px] font-black uppercase tracking-widest ${integ.status === 'Connected' ? 'text-emerald-500' : 'text-white/20'}`}>
                                    {integ.status}
                                </span>
                            </div>

                            <button
                                onClick={() => setSelectedInteg(integ.name)}
                                disabled={integ.status === 'Connected'}
                                className={`px-6 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${integ.status === 'Connected'
                                    ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                                    : 'bg-white/5 hover:bg-primary hover:text-white text-white border border-white/5 shadow-xl transition-all active:scale-95'
                                    }`}
                            >
                                {integ.status === 'Connected' ? 'Active' : 'Authorize'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Connection Modal Overlay */}
            {selectedInteg && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-3xl z-[100] flex items-center justify-center p-8 animate-in fade-in duration-300">
                    <div className="bg-card border border-white/5 rounded-[3rem] max-w-xl w-full p-12 shadow-[0_0_100px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-400">
                        <div className="flex flex-col items-center text-center space-y-6 mb-12">
                            <div className="w-20 h-20 rounded-[2rem] bg-white/[0.03] border border-white/5 flex items-center justify-center shadow-inner scale-125 mb-4">
                                {getIcon(selectedInteg)}
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-4xl font-black text-white font-heading tracking-tighter">System Handshake</h3>
                                <p className="text-muted-foreground text-sm font-medium">Provision connection to {selectedInteg}.</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-4">Endpoint URL</label>
                                <input
                                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white font-bold outline-none focus:border-primary/50 transition-all"
                                    placeholder="https://api.system.com/v1"
                                    value={config.url}
                                    onChange={e => setConfig({ ...config, url: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-4">Access Token</label>
                                <input
                                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white font-bold outline-none focus:border-primary/50 transition-all"
                                    type="password"
                                    placeholder="••••••••••••••••"
                                    value={config.apiKey}
                                    onChange={e => setConfig({ ...config, apiKey: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="flex gap-4 mt-12">
                            <button
                                onClick={() => setSelectedInteg(null)}
                                className="flex-1 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white/30 hover:bg-white/5 transition-all"
                            >
                                Abort
                            </button>
                            <button
                                onClick={async () => {
                                    setConnecting(true);
                                    const res = await fetch(`http://localhost:8000/integrations/${selectedInteg}/connect`, {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify(config)
                                    });
                                    if (res.ok) {
                                        fetchIntegrations();
                                        setSelectedInteg(null);
                                    }
                                    setConnecting(false);
                                }}
                                disabled={connecting || !config.url || !config.apiKey}
                                className="flex-[2] py-5 bg-primary rounded-2xl text-white text-[10px] font-black uppercase tracking-widest shadow-2xl shadow-primary/30 hover:opacity-90 transition-all glow-primary"
                            >
                                {connecting ? 'Syncing Handshake...' : 'Confirm Authentication'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
