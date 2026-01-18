"use client";

import { useState, useEffect } from 'react';

type Vendor = {
    id: number;
    name: string;
    service_type: string;
    risk_level: string;
    status: string;
    has_soc2: boolean;
    has_iso27001: boolean;
    has_gdpr: boolean;
    gstin: string | null;
    gst_filing_status: string;
    assessment_score: number;
    criticality: string;
    ai_analysis: string | null;
    owner: string;
};

export default function VendorManager() {
    const [vendors, setVendors] = useState<Vendor[]>([]);
    const [isAdding, setIsAdding] = useState(false);
    const [newVendor, setNewVendor] = useState({ name: '', service_type: 'SaaS', risk_level: 'Low', owner: '', gstin: '' });
    const [assessingId, setAssessingId] = useState<number | null>(null);

    useEffect(() => {
        fetchVendors();
    }, []);

    const fetchVendors = () => {
        fetch('http://localhost:8000/vendors')
            .then(res => res.json())
            .then(setVendors)
            .catch(console.error);
    };

    const handleAdd = async () => {
        const res = await fetch('http://localhost:8000/vendors', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newVendor)
        });
        const vendor = await res.json();
        setIsAdding(false);
        setNewVendor({ name: '', service_type: 'SaaS', risk_level: 'Low', owner: '', gstin: '' });

        // Trigger Automated AI Assessment
        triggerAssessment(vendor.id);
        fetchVendors();
    };

    const triggerAssessment = async (vendorId: number) => {
        setAssessingId(vendorId);
        await fetch(`http://localhost:8000/vendors/${vendorId}/assess`, { method: 'POST' });
        setAssessingId(null);
        fetchVendors();
    };

    return (
        <div className="w-full max-w-[1600px] mx-auto space-y-12 animate-in fade-in duration-700">
            {/* Strategy Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_rgba(59,130,246,0.6)] animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Supply Chain Plane</span>
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-5xl font-black font-heading tracking-tighter text-premium">Vendor Risk Matrix</h1>
                        <p className="text-muted-foreground text-lg max-w-2xl font-medium leading-relaxed">
                            Orchestrate third-party lifecycle management with <span className="text-primary font-bold">Automated AI Auditor</span> evaluation of artifacts and compliance data.
                        </p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => setIsAdding(true)}
                        className="bg-primary text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-primary/30 hover:opacity-90 active:scale-95 flex items-center gap-3 transition-all glow-primary"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"></path></svg>
                        Onboard & AI Assess
                    </button>
                </div>
            </div>

            {/* Strategic Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <SummaryCard label="Vendor Criticality" value="Critical" sub="Tier 1 Assets" color="rose" />
                <SummaryCard label="Avg Assessment" value={`${(vendors.reduce((acc, v) => acc + v.assessment_score, 0) / (vendors.length || 1)).toFixed(0)}%`} sub="Risk Baseline" color="emerald" />
                <SummaryCard label="GST Verification" value="Synced" sub="Live API Feed" color="blue" />
                <SummaryCard label="AI Auditor Status" value="Online" sub="Watching All Nodes" color="primary" />
            </div>

            {isAdding && (
                <div className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-3xl flex items-center justify-center p-8 animate-in fade-in duration-300">
                    <div className="w-full max-w-2xl bg-card border border-white/5 rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-400">
                        <div className="p-12 space-y-10">
                            <div className="space-y-4 text-center">
                                <h2 className="text-4xl font-black font-heading tracking-tighter text-white">Vendor Onboarding</h2>
                                <p className="text-muted-foreground text-lg font-medium">Provision entity & trigger <span className="text-primary">AI Auditor Analysis</span>.</p>
                            </div>

                            <div className="space-y-6">
                                <FormBox label="Legal Entity Name" value={newVendor.name} onChange={v => setNewVendor({ ...newVendor, name: v })} placeholder="e.g. Acme Corp" />

                                <div className="grid grid-cols-2 gap-6">
                                    <FormBox label="Internal Owner" value={newVendor.owner} onChange={v => setNewVendor({ ...newVendor, owner: v })} placeholder="email@company.com" />
                                    <FormBox label="GSTIN Identification" value={newVendor.gstin} onChange={v => setNewVendor({ ...newVendor, gstin: v })} placeholder="22AAAAA0000A1Z5" />
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <SelectBox label="Service Topology" value={newVendor.service_type} onChange={v => setNewVendor({ ...newVendor, service_type: v })}
                                        options={['SaaS', 'PaaS', 'IaaS', 'Professional Services']} />
                                    <SelectBox label="Risk Tier" value={newVendor.risk_level} onChange={v => setNewVendor({ ...newVendor, risk_level: v })}
                                        options={['Low', 'Medium', 'High', 'Critical']} />
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button onClick={() => setIsAdding(false)} className="flex-1 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] text-muted-foreground hover:bg-white/5 transition-all">Revoke</button>
                                <button onClick={handleAdd} className="flex-[2] py-6 bg-primary rounded-2xl text-white font-black uppercase tracking-[0.2em] text-[10px] hover:opacity-90 shadow-2xl shadow-primary/20 transition-all glow-primary">Deploy & Assess</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {vendors.map(vendor => (
                    <div key={vendor.id} className="glass-depth rounded-[2.5rem] p-10 group hover:border-primary/40 transition-all duration-500 flex flex-col relative overflow-hidden h-full">
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors`} />

                        <div className="flex justify-between items-start mb-10 relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center font-black text-xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                                {vendor.name.substring(0, 1)}
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <span className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest border ${vendor.risk_level === 'Critical' ? 'bg-rose-500/10 text-rose-500 border-rose-500/20' :
                                        vendor.risk_level === 'High' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                                            'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                                    }`}>
                                    {vendor.risk_level} Intensity
                                </span>
                                <span className={`text-[8px] font-black uppercase tracking-widest ${vendor.status === 'Onboarding' ? 'text-amber-500' : 'text-primary/60'}`}>{vendor.status}</span>
                            </div>
                        </div>

                        <div className="space-y-1 mb-8 relative z-10">
                            <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors font-heading tracking-tight leading-none">{vendor.name}</h3>
                            <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">{vendor.service_type} • Owner: {vendor.owner}</div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-10 relative z-10">
                            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
                                <div className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em] mb-2">Score</div>
                                {assessingId === vendor.id ? (
                                    <div className="h-8 flex items-center gap-1">
                                        {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} />)}
                                    </div>
                                ) : (
                                    <div className={`text-3xl font-black tabular-nums ${vendor.assessment_score > 80 ? 'text-emerald-500' : vendor.assessment_score > 40 ? 'text-amber-500' : 'text-rose-500'}`}>
                                        {vendor.assessment_score}%
                                    </div>
                                )}
                            </div>
                            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                                <div className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em] mb-2">GST Status</div>
                                <div className={`text-[10px] font-black uppercase tracking-widest ${vendor.gst_filing_status === 'Filed' ? 'text-emerald-500' : 'text-rose-500'}`}>
                                    {vendor.gst_filing_status || 'NOT SYNCED'}
                                </div>
                            </div>
                        </div>

                        {vendor.ai_analysis && (
                            <div className="mb-8 p-6 bg-primary/[0.04] border border-primary/20 rounded-2xl relative z-10">
                                <div className="text-[8px] font-black text-primary uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-primary" /> AI Auditor Summary
                                </div>
                                <p className="text-[11px] font-medium text-white/70 leading-relaxed italic">
                                    "{vendor.ai_analysis}"
                                </p>
                            </div>
                        )}

                        <div className="mt-auto pt-8 border-t border-white/[0.03] flex gap-4 relative z-10">
                            <button onClick={() => triggerAssessment(vendor.id)} className="flex-1 py-4 bg-white/5 border border-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Re-Assess</button>
                            <button className="flex-1 py-4 bg-primary/10 border border-primary/20 text-primary rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all">Audit Trail</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function SummaryCard({ label, value, sub, color }: { label: string, value: string, sub: string, color: string }) {
    const colorMap: any = {
        rose: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
        emerald: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
        blue: 'text-primary bg-primary/10 border-primary/20',
        primary: 'text-primary bg-primary/10 border-primary/20',
        amber: 'text-amber-500 bg-amber-500/10 border-amber-500/20'
    };
    return (
        <div className="glass-depth p-8 rounded-[2.5rem] space-y-4 group hover:border-primary/30 transition-all">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">{label}</div>
            <div className={`text-4xl font-black font-heading tracking-tighter ${colorMap[color].split(' ')[0]}`}>{value}</div>
            <div className="text-[9px] font-black uppercase tracking-widest opacity-20">{sub}</div>
        </div>
    );
}

function FormBox({ label, value, onChange, placeholder }: { label: string, value: string, onChange: (v: string) => void, placeholder: string }) {
    return (
        <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-4">{label}</label>
            <input
                className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-6 text-white focus:border-primary/50 outline-none font-bold text-lg placeholder:text-white/10 transition-all hover:bg-white/[0.05]"
                value={value}
                onChange={e => onChange(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    );
}

function SelectBox({ label, value, onChange, options }: { label: string, value: string, onChange: (v: string) => void, options: string[] }) {
    return (
        <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-4">{label}</label>
            <select
                className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-6 text-white focus:border-primary/50 outline-none appearance-none font-bold text-lg cursor-pointer transition-all hover:bg-white/[0.05]"
                value={value}
                onChange={e => onChange(e.target.value)}
            >
                {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
        </div>
    );
}
