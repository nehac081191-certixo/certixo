'use client';

import React, { useState, useEffect } from 'react';
import { Plus, RefreshCw, CheckCircle2, AlertCircle, ExternalLink, Shield, Settings2, Zap } from 'lucide-react';

export default function IntegrationsHub() {
    const [integrations, setIntegrations] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isConnecting, setIsConnecting] = useState(false);

    // Form for new connection
    const [newConn, setNewConn] = useState({
        provider: 'AWS',
        displayName: '',
        config: { accessKeyId: '', secretAccessKey: '', region: 'us-east-1' }
    });

    useEffect(() => {
        fetchIntegrations();
    }, []);

    const fetchIntegrations = async () => {
        setIsLoading(true);
        try {
            const res = await fetch('/api/integrations');
            const data = await res.json();
            setIntegrations(data);
        } finally {
            setIsLoading(false);
        }
    };

    const handleConnect = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsConnecting(true);
        try {
            const res = await fetch('/api/integrations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newConn)
            });
            if (res.ok) {
                setNewConn({ provider: 'AWS', displayName: '', config: { accessKeyId: '', secretAccessKey: '', region: 'us-east-1' } });
                fetchIntegrations();
            } else {
                const err = await res.json();
                alert(err.error);
            }
        } finally {
            setIsConnecting(false);
        }
    };

    const handleSync = async (id: string) => {
        await fetch(`/api/integrations/${id}/sync`, { method: 'POST' });
        // Polling or simple refresh for demo
        setTimeout(fetchIntegrations, 2000);
    };

    return (
        <div className="p-12 max-w-7xl mx-auto space-y-12">
            <header className="flex justify-between items-end border-b border-slate-100 pb-8">
                <div className="space-y-1">
                    <h1 className="text-4xl font-black tracking-tighter text-slate-900 uppercase italic">Integrations Hub</h1>
                    <p className="text-slate-500 font-medium">Connect enterprise providers to maintain continuous asset discovery.</p>
                </div>
                <div className="flex gap-4">
                    <div className="px-4 py-2 bg-emerald-50 rounded-full flex items-center gap-2 border border-emerald-100">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700">All Nodes Healthy</span>
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Connection Pane */}
                <div className="lg:col-span-1 space-y-8">
                    <section className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                                <Plus size={20} />
                            </div>
                            <h2 className="text-xl font-black tracking-tight uppercase">New Connection</h2>
                        </div>

                        <form onSubmit={handleConnect} className="space-y-4">
                            <div className="space-y-1">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Provider</label>
                                <select
                                    value={newConn.provider}
                                    onChange={(e) => setNewConn({ ...newConn, provider: e.target.value })}
                                    className="w-full h-12 px-4 rounded-xl border border-slate-200 font-bold focus:ring-2 ring-slate-900 ring-offset-2 transition-all"
                                >
                                    <option value="AWS">AWS Cloud</option>
                                    <option value="SERVICENOW">ServiceNow CMDB</option>
                                    <option value="SAP_ERP">SAP / ERP OData</option>
                                    <option value="CSV">Bulk CSV Fallback</option>
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Display Name</label>
                                <input
                                    placeholder="e.g. AWS Production Fleet"
                                    value={newConn.displayName}
                                    onChange={(e) => setNewConn({ ...newConn, displayName: e.target.value })}
                                    className="w-full h-12 px-4 rounded-xl border border-slate-200 font-bold outline-none focus:border-slate-900"
                                />
                            </div>

                            <div className="pt-4 space-y-4">
                                <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-2xl space-y-2 group cursor-pointer hover:bg-indigo-600 transition-all hover:text-white" onClick={() => alert('AI Mapping Assistant: Recommending Owner -> CostCenter, Environment -> EnvTag based on provider heuristics.')}>
                                    <div className="flex items-center gap-2">
                                        <Zap size={14} className="text-indigo-600 group-hover:text-white" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">AI Mapping Suggestions</span>
                                    </div>
                                    <p className="text-[10px] font-medium opacity-70">Automate field alignment from provider payload to canonical schema.</p>
                                </div>
                                <button
                                    disabled={isConnecting}
                                    className="w-full py-4 bg-slate-900 text-white rounded-xl font-black uppercase tracking-widest text-[11px] shadow-lg shadow-slate-200 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                                >
                                    {isConnecting ? <RefreshCw className="animate-spin" size={14} /> : 'Establish Handshake'}
                                </button>
                            </div>
                        </form>
                    </section>
                </div>

                {/* Integrations Table */}
                <div className="lg:col-span-2 space-y-6">
                    {isLoading ? (
                        <div className="h-64 flex items-center justify-center">
                            <RefreshCw className="animate-spin text-slate-300" size={32} />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-4">
                            {integrations.map(conn => (
                                <div key={conn.id} className="group bg-white p-6 rounded-3xl border border-slate-100 hover:border-slate-900 transition-all flex items-center justify-between">
                                    <div className="flex items-center gap-6">
                                        <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 font-black text-xs">
                                            {conn.provider.slice(0, 3)}
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-3">
                                                <h3 className="text-lg font-black tracking-tight">{conn.displayName}</h3>
                                                {conn.status === 'CONNECTED' ? (
                                                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded text-[9px] font-black uppercase tracking-widest border border-emerald-100">Live</span>
                                                ) : (
                                                    <span className="px-2 py-0.5 bg-rose-50 text-rose-600 rounded text-[9px] font-black uppercase tracking-widest border border-rose-100">Disrupted</span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-4 text-[11px] text-slate-400 font-bold uppercase tracking-tighter">
                                                <span>{conn._count.assets} discovered assets</span>
                                                <span className="w-1 h-1 rounded-full bg-slate-200" />
                                                <span>Health: <span className="text-slate-900">{conn.healthStatus}</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                            onClick={() => handleSync(conn.id)}
                                            className="p-3 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all"
                                            title="Immediate Sync"
                                        >
                                            <RefreshCw size={18} />
                                        </button>
                                        <button className="p-3 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all">
                                            <Settings2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                            {integrations.length === 0 && (
                                <div className="p-16 border-2 border-dashed border-slate-100 rounded-[3rem] text-center space-y-4">
                                    <Shield className="mx-auto text-slate-200" size={48} />
                                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No active nodes connected.</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
