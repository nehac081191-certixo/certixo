'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Shield, Database, Cloud, AlertCircle, FileText, CheckSquare, Zap } from 'lucide-react';

export default function AssetsDashboard() {
    const [stats, setStats] = useState({
        total: 1240,
        encrypted: 1180,
        unowned: 12,
        syncActive: 4,
        healthScore: 94
    });

    return (
        <div className="p-12 max-w-7xl mx-auto space-y-12">
            <header className="space-y-1">
                <h1 className="text-4xl font-black tracking-tighter text-slate-900 uppercase italic">Fleet Command</h1>
                <p className="text-slate-500 font-medium">Real-time coverage metrics and institutional readiness of your asset perimeter.</p>
            </header>

            {/* Top Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <MetricCard title="Total Inventory" value={stats.total} icon={<Database size={20} />} trend="+5.2%" />
                <MetricCard title="Audit Readiness" value={`${stats.healthScore}%`} icon={<Shield size={20} />} trend="Stable" />
                <MetricCard title="Critical Gaps" value={stats.unowned} icon={<AlertCircle size={20} />} inverted trend="-2.1%" />
                <MetricCard title="Active Adapters" value={stats.syncActive} icon={<Zap size={20} />} trend="Syncing" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Visualizer Placeholder */}
                <div className="lg:col-span-2 bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-100/50 p-12 flex flex-col justify-between overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-12 opacity-5">
                        <Cloud size={240} />
                    </div>
                    <div className="space-y-4 relative z-10">
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500">Coverage Analysis</div>
                        <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-none max-w-sm">94.2% of your fleet is audit-ready.</h2>
                        <p className="max-w-md text-slate-500 font-medium">Auto-discovery adapters identified 42 new EC2 nodes in US-EAST-1 over the last 24 hours. Automated mapping assistant verified encryption signals for 40 nodes.</p>
                    </div>
                    <div className="pt-12 flex gap-4">
                        <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl shadow-slate-200">Generate Evidence Pack</button>
                        <button className="px-8 py-4 bg-slate-50 text-slate-400 rounded-2xl font-black uppercase tracking-widest text-[11px] border border-slate-100 hover:bg-white transition-all">Review Asset Gaps</button>
                    </div>
                </div>

                {/* Task List / Drift */}
                <div className="space-y-8">
                    <section className="bg-slate-900 text-white rounded-[2.5rem] p-8 space-y-6 shadow-2xl shadow-indigo-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                <FileText size={18} />
                            </div>
                            <h3 className="text-xl font-black tracking-tighter uppercase">Recent Alerts</h3>
                        </div>
                        <div className="space-y-4">
                            <AlertItem text="Encryption drift detected on S3:customer-pii-vault" type="CRITICAL" />
                            <AlertItem text="Unmapped asset discovered via SAP OData" type="WARNING" />
                            <AlertItem text="New ServiceNow CI 'LDAP-CONTROLLER' synced" type="INFO" />
                        </div>
                    </section>

                    <section className="bg-emerald-500 text-white rounded-[2.5rem] p-8 space-y-4">
                        <div className="flex items-center justify-between">
                            <CheckSquare size={24} />
                            <ArrowUpRight size={20} />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-2xl font-black tracking-tighter uppercase italic">SOC 2 Bound</h4>
                            <p className="text-[11px] font-bold opacity-80 uppercase tracking-widest">Type II Evidence Collection Active</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

function MetricCard({ title, value, icon, trend, inverted = false }: any) {
    return (
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 hover:border-slate-900 transition-colors group">
            <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all">
                    {icon}
                </div>
                <div className={`text-[10px] font-black px-2 py-0.5 rounded ${inverted ? 'bg-rose-50 text-rose-500' : 'bg-emerald-50 text-emerald-500'}`}>
                    {trend}
                </div>
            </div>
            <div className="space-y-1">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{title}</div>
                <div className="text-3xl font-black tracking-tighter text-slate-900">{value}</div>
            </div>
        </div>
    );
}

function AlertItem({ text, type }: any) {
    const colors = type === 'CRITICAL' ? 'text-rose-400' : type === 'WARNING' ? 'text-amber-400' : 'text-indigo-400';
    return (
        <div className="flex gap-3 items-start group">
            <div className={`w-1 h-1 rounded-full mt-2 shrink-0 ${colors.replace('text', 'bg')}`} />
            <span className="text-[11px] font-bold leading-relaxed group-hover:text-white/80 transition-colors uppercase tracking-tight">{text}</span>
        </div>
    );
}
