'use client';

import React, { useState, useEffect } from 'react';
import { Search, Filter, Download, Box, ShieldCheck, Tag, User, Globe, ChevronRight, X, AlertTriangle, Zap, CheckCircle2 } from 'lucide-react';

function AssetGapAnalysis({ assetId }: { assetId: string }) {
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`/api/assets/${assetId}/gaps`)
            .then(res => res.json())
            .then(d => {
                setData(d);
                setIsLoading(false);
            });
    }, [assetId]);

    if (isLoading) return <div className="text-[10px] font-black uppercase text-slate-400 animate-pulse">Running Institutional Audit Scan...</div>;
    if (!data) return null;

    return (
        <section className="bg-slate-900 text-white p-8 rounded-[2rem] space-y-8 shadow-2xl shadow-indigo-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
                <Zap size={80} />
            </div>

            <div className="flex justify-between items-end">
                <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-widest text-indigo-400">AI Gap Finder</div>
                    <h4 className="text-xl font-black tracking-tight uppercase italic">Readiness: {data.readinessScore}%</h4>
                </div>
                <div className="text-[9px] font-black uppercase tracking-tighter opacity-50 italic">Verified @ {new Date(data.analysisTimestamp).toLocaleTimeString()}</div>
            </div>

            <div className="space-y-4">
                {data.gaps.map((gap: any, idx: number) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                        <div className="flex justify-between items-center">
                            <span className={`text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-widest ${gap.severity === 'CRITICAL' ? 'bg-rose-500' :
                                gap.severity === 'HIGH' ? 'bg-orange-500' : 'bg-blue-500'
                                }`}>
                                {gap.severity} Discrepancy
                            </span>
                        </div>
                        <p className="text-[11px] font-bold leading-tight uppercase tracking-tight text-white/90">{gap.message}</p>
                        <div className="pt-2 flex items-start gap-2 text-[10px] text-indigo-300 font-medium italic">
                            <CheckCircle2 size={12} className="shrink-0 mt-0.5" />
                            <span>REC: {gap.recommendation}</span>
                        </div>
                    </div>
                ))}
                {data.gaps.length === 0 && (
                    <div className="py-4 text-center space-y-2">
                        <ShieldCheck className="mx-auto text-emerald-400" size={32} />
                        <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Zero Critical Gaps. Audit Ready.</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default function AssetInventory() {
    const [assets, setAssets] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [selectedAsset, setSelectedAsset] = useState<any | null>(null);

    useEffect(() => {
        fetchAssets();
    }, [search]);

    const fetchAssets = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(`/api/assets?q=${search}`);
            const data = await res.json();
            setAssets(data);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-12 max-w-[1600px] mx-auto space-y-10 animate-in fade-in duration-500">
            <header className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <h1 className="text-[28px] font-bold tracking-tight text-slate-900">Cloud Assets</h1>
                    <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-lg text-[13px] font-bold">120+</span>
                    <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                    </button>
                </div>
                <div className="flex gap-4">
                    <button className="px-6 py-3 bg-white border border-border rounded-xl text-[13px] font-bold shadow-sm flex items-center gap-2 hover:bg-slate-50 transition-all">
                        <Download size={16} />
                        Export Snapshot
                    </button>
                    <button className="px-6 py-3 bg-primary text-white rounded-xl text-[13px] font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2">
                        <Box size={16} />
                        Connect New Asset
                    </button>
                </div>
            </header>

            {/* Selection Suite */}
            <div className="flex justify-between items-center bg-white border border-border p-4 rounded-2xl shadow-sm">
                <div className="relative w-[450px]">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        placeholder="Search by ARNs, tags, owners or environment..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-100 rounded-xl text-[13px] focus:bg-white focus:border-primary transition-all outline-none"
                    />
                </div>
                <div className="flex gap-4">
                    <FilterButton label="Cloud Provider" />
                    <FilterButton label="Environment" />
                    <FilterButton label="Encryption" />
                    <button className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-slate-900 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    </button>
                </div>
            </div>

            <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full text-left">
                    <thead className="bg-slate-50/50 border-b border-border">
                        <tr>
                            <th className="px-8 py-4 text-[11px] font-black uppercase text-slate-400 tracking-widest leading-loose">Asset Identity</th>
                            <th className="px-8 py-4 text-[11px] font-black uppercase text-slate-400 tracking-widest leading-loose">Provider</th>
                            <th className="px-8 py-4 text-[11px] font-black uppercase text-slate-400 tracking-widest leading-loose">Environment</th>
                            <th className="px-8 py-4 text-[11px] font-black uppercase text-slate-400 tracking-widest leading-loose">Compliance Status</th>
                            <th className="px-8 py-4 w-12 text-right"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {isLoading ? (
                            <tr><td colSpan={5} className="p-20 text-center animate-pulse text-slate-300 font-bold uppercase text-[12px] tracking-widest">Discovering Nodes...</td></tr>
                        ) : assets.map(asset => (
                            <tr key={asset.id} onClick={() => setSelectedAsset(asset)} className="group cursor-pointer hover:bg-slate-50/50 transition-colors">
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                                            <Box size={18} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900 text-[14px] leading-tight mb-0.5">{asset.name}</div>
                                            <div className="text-[11px] font-bold text-slate-400 font-mono tracking-tighter opacity-80">{asset.externalId.substring(0, 32)}...</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-slate-700 text-[13px]">{asset.type}</span>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-primary opacity-60 mt-0.5">{asset.integration.displayName}</span>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-black uppercase tracking-widest border border-slate-200">
                                        {asset.environment || 'PROD'}
                                    </span>
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-2">
                                        {asset.encryptionStatus ? (
                                            <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[10px] font-black uppercase tracking-widest border border-emerald-100 flex items-center gap-1.5">
                                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                                                Compliant
                                            </span>
                                        ) : (
                                            <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-lg text-[10px] font-black uppercase tracking-widest border border-amber-100 flex items-center gap-1.5">
                                                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
                                                Manual Review
                                            </span>
                                        )}
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-right">
                                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-slate-900 transition-all group-hover:translate-x-1" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Asset Detail Drawer */}
            {selectedAsset && (
                <div className="fixed inset-0 z-[100] flex justify-end">
                    <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-sm animate-in fade-in" onClick={() => setSelectedAsset(null)} />
                    <div className="relative w-full max-w-2xl bg-white h-screen shadow-2xl border-l border-border animate-in slide-in-from-right duration-300 flex flex-col">
                        <div className="p-8 border-b border-border flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                                    <Box size={24} />
                                </div>
                                <h2 className="text-[20px] font-bold tracking-tight text-slate-900">Asset Profile</h2>
                            </div>
                            <button onClick={() => setSelectedAsset(null)} className="p-3 hover:bg-slate-50 rounded-xl transition-all">
                                <X size={24} className="text-slate-400" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-10 space-y-12 no-scrollbar">
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-primary opacity-60">Identity</div>
                                    <h3 className="text-[28px] font-bold tracking-tight text-slate-900 leading-tight leading-none">{selectedAsset.name}</h3>
                                    <div className="font-mono text-[12px] text-slate-400 bg-slate-50 p-2 rounded-lg border border-slate-100 break-all">{selectedAsset.externalId}</div>
                                </div>
                            </div>

                            <AssetGapAnalysis assetId={selectedAsset.id} />

                            <section className="space-y-6">
                                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-border pb-2 leading-none">Institutional Controls</div>
                                <div className="grid grid-cols-2 gap-y-10">
                                    <DetailItem label="Asset Owner" value={selectedAsset.owner || 'Institutional Lead'} />
                                    <DetailItem label="Data Classification" value={selectedAsset.dataClassification || 'Restricted'} />
                                    <DetailItem label="Environment" value={selectedAsset.environment || 'Production'} />
                                    <DetailItem label="Geography" value="Global (US-East-1)" />
                                </div>
                            </section>

                            <section className="space-y-2">
                                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-border pb-2 leading-none mb-4">Discovery Metadata</div>
                                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg">
                                    <div className="p-4 bg-slate-800 border-b border-white/5 flex justify-between items-center">
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Raw Provider Payload</span>
                                        <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">JSON</span>
                                    </div>
                                    <div className="p-6 font-mono text-[11px] text-slate-300 overflow-x-auto leading-relaxed max-h-[300px] no-scrollbar">
                                        <pre>{JSON.stringify(selectedAsset.rawPayload, null, 2)}</pre>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className="p-8 border-t border-border bg-slate-50/50 flex gap-4">
                            <button className="flex-1 py-4 bg-white border border-border text-slate-900 rounded-xl font-bold text-[13px] hover:bg-slate-50 transition-all shadow-sm">Audit Lineage</button>
                            <button className="flex-1 py-4 bg-primary text-white rounded-xl font-bold text-[13px] shadow-lg shadow-primary/20 hover:opacity-90 transition-all">Link Related Controls</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function DetailItem({ label, value }: { label: string, value: string }) {
    return (
        <div className="space-y-1">
            <div className="text-[11px] font-bold text-slate-400">{label}</div>
            <div className="text-[15px] font-bold text-slate-900">{value}</div>
        </div>
    );
}

function FilterButton({ label }: { label: string }) {
    return (
        <button className="px-4 py-2 border border-border bg-white rounded-xl text-[12px] font-bold text-slate-600 hover:border-slate-900 transition-all flex items-center gap-2">
            {label}
            <svg className="w-3 h-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
        </button>
    );
}
