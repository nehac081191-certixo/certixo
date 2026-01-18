"use client";

import { useState, useEffect } from 'react';

type InventoryItem = {
    id: number;
    name: string;
    category: string;
    type: string;
    owner: string;
    department: string;
    classification: string;
    status: string;
    serial_number?: string;
    location?: string;
    risk_score: number;
    integration_source?: string;
};

export default function AssetInventory() {
    const [items, setItems] = useState<InventoryItem[]>([]);
    const [filter, setFilter] = useState("All");
    const [isAdding, setIsAdding] = useState(false);
    const [syncing, setSyncing] = useState<string | null>(null);
    const [newItem, setNewItem] = useState({
        name: '',
        category: 'Hardware',
        type: 'Laptop',
        owner: '',
        classification: 'Internal',
        serial_number: '',
        location: '',
        department: 'IT'
    });

    useEffect(() => {
        fetchInventory();
    }, []);

    const fetchInventory = () => {
        fetch('http://localhost:8000/inventory')
            .then(res => res.json())
            .then(setItems)
            .catch(console.error);
    };

    const handleSync = async (source: string) => {
        setSyncing(source);
        try {
            await fetch('http://localhost:8000/inventory/sync', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ source })
            });
            fetchInventory();
        } finally {
            setTimeout(() => setSyncing(null), 1000);
        }
    };

    const handleAssess = async (id: number) => {
        await fetch(`http://localhost:8000/inventory/assess/${id}`, { method: 'POST' });
        fetchInventory();
    };

    const handleAdd = async () => {
        await fetch('http://localhost:8000/inventory', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newItem)
        });
        setIsAdding(false);
        setNewItem({ name: '', category: 'Hardware', type: 'Laptop', owner: '', classification: 'Internal', serial_number: '', location: '', department: 'IT' });
        fetchInventory();
    };

    const filteredItems = filter === "All" ? items : items.filter(i => i.category === filter);

    return (
        <div className="w-full max-w-[1600px] mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-12">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500">Global Asset Manifest</span>
                    </div>
                    <h2 className="text-5xl font-black font-heading tracking-tighter text-premium uppercase italic">Asset <span className="text-muted-foreground not-italic font-normal">Hub.</span></h2>
                    <p className="text-muted-foreground text-lg max-w-xl font-medium leading-relaxed">Centralized telemetry for hardware, software, and cloud infrastructure with automated risk mapping.</p>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsAdding(true)}
                        className="bg-foreground text-background px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-2xl hover:scale-105 active:scale-95 transition-all"
                    >
                        + Manual Registry
                    </button>
                </div>
            </div>

            {/* Integration Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { name: 'Jamf', type: 'Hardware Sync', color: 'blue', icon: '💻' },
                    { name: 'Okta', type: 'SaaS Inventory', color: 'purple', icon: '☁️' },
                    { name: 'AWS', type: 'Cloud Resources', color: 'orange', icon: '⚡' }
                ].map(integration => (
                    <div key={integration.name} className="glass-depth p-8 rounded-[2.5rem] border border-border group hover:border-emerald-500/30 transition-all cursor-default relative overflow-hidden shadow-lg">
                        <div className="flex justify-between items-start mb-6">
                            <div className="text-3xl">{integration.icon}</div>
                            <div className={`text-[10px] font-black uppercase tracking-widest text-emerald-500`}>{integration.type}</div>
                        </div>
                        <h3 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tight">{integration.name} <span className="text-muted-foreground/30 font-light font-sans ml-2">Integration</span></h3>
                        <button
                            onClick={() => handleSync(integration.name)}
                            disabled={syncing === integration.name}
                            className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-3 ${syncing === integration.name ? 'bg-emerald-500/20 text-emerald-500' : 'bg-muted border border-border text-muted-foreground hover:bg-emerald-500 hover:text-white hover:border-emerald-400'}`}
                        >
                            {syncing === integration.name ? 'Ingesting Data...' : 'Sync Pull Now'}
                        </button>
                    </div>
                ))}
            </div>

            {/* Hub Switcher */}
            <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
                {['All', 'Hardware', 'Software', 'Data', 'Document'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setFilter(tab)}
                        className={`px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all whitespace-nowrap ${filter === tab
                            ? 'bg-emerald-500 border-emerald-400 text-white shadow-xl shadow-emerald-500/20'
                            : 'bg-muted border-border text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                            }`}
                    >
                        {tab === 'All' ? 'Complete Fleet' : `${tab} Domain`}
                    </button>
                ))}
            </div>

            {isAdding && (
                <div className="p-10 glass-depth rounded-[3rem] border border-emerald-500/20 animate-in slide-in-from-top-8 space-y-8">
                    <h3 className="text-2xl font-black text-foreground uppercase italic tracking-tighter">New Asset Registry</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2 col-span-1 md:col-span-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/50 ml-2">Asset Identifier</label>
                            <input
                                placeholder="e.g. Production Aurora Cluster"
                                className="w-full bg-muted/40 border border-border rounded-2xl p-5 text-foreground font-bold outline-none focus:border-emerald-500/50 transition-all font-heading"
                                value={newItem.name}
                                onChange={e => setNewItem({ ...newItem, name: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/50 ml-2">Domain</label>
                            <select
                                className="w-full bg-muted/40 border border-border rounded-2xl p-5 text-foreground font-bold outline-none focus:border-emerald-500/50 transition-all"
                                value={newItem.category}
                                onChange={e => setNewItem({ ...newItem, category: e.target.value })}
                            >
                                <option value="Hardware">Hardware</option>
                                <option value="Software">Software/SaaS</option>
                                <option value="Data">Data Store</option>
                                <option value="Document">Document</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-end gap-4">
                        <button onClick={() => setIsAdding(false)} className="px-8 py-3 text-muted-foreground hover:text-foreground font-black uppercase tracking-widest text-[10px]">Cancel</button>
                        <button onClick={handleAdd} className="px-10 py-3 bg-emerald-500 text-white rounded-xl font-black uppercase tracking-widest text-[10px] shadow-lg shadow-emerald-500/20">Commit to Ledger</button>
                    </div>
                </div>
            )}

            <div className="glass-depth rounded-[3rem] border border-border overflow-hidden shadow-2xl">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-muted/30 text-muted-foreground/50 text-[9px] font-black uppercase tracking-[0.3em]">
                        <tr>
                            <th className="p-8 border-b border-border">Asset Manifest</th>
                            <th className="p-8 border-b border-border">Mapping & Spec</th>
                            <th className="p-8 border-b border-border">Custody</th>
                            <th className="p-8 border-b border-border">Source</th>
                            <th className="p-8 border-b border-border text-center">Risk Index</th>
                            <th className="p-8 border-b border-border">Validation</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-sm text-muted-foreground">
                        {filteredItems.map(item => (
                            <tr key={item.id} className="group hover:bg-muted/10 transition-colors">
                                <td className="p-8">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-[10px] font-black shadow-inner ${item.category === 'Hardware' ? 'bg-blue-500/10 text-blue-500' :
                                            item.category === 'Software' ? 'bg-purple-500/10 text-purple-500' :
                                                item.category === 'Data' ? 'bg-emerald-500/10 text-emerald-500' :
                                                    'bg-amber-500/10 text-amber-500'
                                            }`}>
                                            {item.category.substring(0, 2).toUpperCase()}
                                        </div>
                                        <div>
                                            <div className="text-foreground font-black font-heading tracking-tight uppercase group-hover:text-emerald-500 transition-colors">{item.name}</div>
                                            <div className="text-[10px] text-muted-foreground/40 uppercase tracking-widest mt-1">{item.type}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-8">
                                    <div className="space-y-1">
                                        <div className="text-sm text-foreground/70 font-medium">{item.location || 'Global/Cloud'}</div>
                                        {item.serial_number && <div className="text-[9px] font-mono text-muted-foreground/30">SN: {item.serial_number}</div>}
                                    </div>
                                </td>
                                <td className="p-8">
                                    <div className="space-y-1">
                                        <div className="text-sm text-foreground font-bold tracking-tight">{item.owner}</div>
                                        <div className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/40">{item.department}</div>
                                    </div>
                                </td>
                                <td className="p-8">
                                    <span className={`px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest border ${item.integration_source === 'Manual' ? 'border-border text-muted-foreground/30' : 'border-emerald-500/20 text-emerald-500 bg-emerald-500/5'
                                        }`}>
                                        {item.integration_source || 'Unknown'}
                                    </span>
                                </td>
                                <td className="p-8">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-full max-w-[100px] h-1.5 bg-muted rounded-full overflow-hidden border border-border/10">
                                            <div
                                                className={`h-full transition-all duration-1000 ${item.risk_score > 70 ? 'bg-rose-500' :
                                                    item.risk_score > 40 ? 'bg-amber-500' :
                                                        'bg-emerald-500'
                                                    }`}
                                                style={{ width: `${item.risk_score}%` }}
                                            />
                                        </div>
                                        <span className={`text-[10px] font-black ${item.risk_score > 70 ? 'text-rose-500' :
                                            item.risk_score > 40 ? 'text-amber-500' :
                                                'text-emerald-500'
                                            }`}>
                                            {item.risk_score}% Criticality
                                        </span>
                                    </div>
                                </td>
                                <td className="p-8">
                                    <button
                                        onClick={() => handleAssess(item.id)}
                                        className="px-6 py-2.5 rounded-xl border border-border bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-emerald-500 hover:border-emerald-400 text-[9px] font-black uppercase tracking-widest transition-all"
                                    >
                                        Run Risk Scan
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
