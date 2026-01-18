'use client';

import React, { useState, useEffect } from 'react';
import { FileText, Shield, Calendar, Download, Zap, CheckCircle, Clock, Search } from 'lucide-react';

export default function EvidenceCenter() {
    const [tasks, setTasks] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isGenerating, setIsGenerating] = useState(false);

    useEffect(() => {
        const fetchTasks = async () => {
            setIsLoading(true);
            try {
                const res = await fetch('/api/evidence/tasks');
                const data = await res.json();
                if (Array.isArray(data)) {
                    setTasks(data);
                } else {
                    setTasks([]);
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchTasks();
    }, []);

    const stats = {
        notUploaded: tasks.filter(t => t.status === 'Not Uploaded').length,
        draft: tasks.filter(t => t.status === 'Draft').length,
        attention: tasks.filter(t => t.status === 'Needs Attention').length,
        uploaded: tasks.filter(t => t.status === 'Uploaded').length,
        total: tasks.length
    };

    return (
        <div className="p-12 max-w-[1600px] mx-auto space-y-10 animate-in fade-in duration-500">
            <header className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <h1 className="text-[28px] font-bold tracking-tight text-slate-900 leading-none">Evidence Tasks</h1>
                    <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-lg text-[13px] font-bold">{stats.total}</span>
                    <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                    </button>
                </div>
                <button className="px-6 py-3 bg-primary text-white rounded-xl text-[13px] font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2">
                    <Zap size={16} />
                    Auto-Generate Proofs
                </button>
            </header>

            {/* Status Summary Cards */}
            <div className="grid grid-cols-4 gap-6">
                <StatusCard label="Not Uploaded" count={stats.notUploaded.toString()} />
                <StatusCard label="Draft" count={stats.draft.toString()} />
                <StatusCard label="Needs Attention" count={stats.attention.toString()} status="warning" />
                <StatusCard label="Uploaded" count={`${stats.uploaded} / ${stats.total}`} status="success" />
            </div>

            {/* Filter Bar */}
            <div className="flex justify-between items-center bg-white border border-border p-4 rounded-2xl shadow-sm">
                <div className="flex gap-4">
                    <FilterSelect label="Assignee" />
                    <FilterSelect label="Department" />
                    <FilterSelect label="Framework" />
                    <FilterSelect label="Entities" />
                </div>
                <button className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-slate-900 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                </button>
            </div>

            {/* Table Area */}
            <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
                <div className="p-4 border-b border-border flex justify-between items-center">
                    <div className="relative w-[400px]">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            placeholder="Search by name, entities or approver"
                            className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-100 rounded-xl text-[13px] focus:bg-white focus:border-primary transition-all outline-none"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50/50 border-b border-border">
                            <tr>
                                <th className="px-6 py-4 text-[11px] font-black uppercase text-slate-400 tracking-widest">Evidence Registry</th>
                                <th className="px-6 py-4 text-[11px] font-black uppercase text-slate-400 tracking-widest">Status</th>
                                <th className="px-6 py-4 text-[11px] font-black uppercase text-slate-400 tracking-widest">Assignee</th>
                                <th className="px-6 py-4 text-[11px] font-black uppercase text-slate-400 tracking-widest">Department</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {isLoading ? (
                                <tr><td colSpan={4} className="p-20 text-center animate-pulse text-slate-300 font-bold uppercase text-[12px] tracking-widest">Hydrating Evidence Vault...</td></tr>
                            ) : tasks.map((task) => (
                                <tr key={task.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="font-bold text-slate-700 text-[14px] leading-tight mb-0.5">{task.name}</div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{task.framework || 'N/A'}</div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${task.status === 'Uploaded' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                                            {task.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-[10px] font-black border border-slate-200">
                                            {task.assignee ? task.assignee[0] : '?'}
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-[13px] font-bold text-slate-500">{task.department}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function StatusCard({ label, count, status = 'default' }: any) {
    const statusIcons: any = {
        warning: <AlertCircle size={14} className="text-rose-500" />,
        success: <CheckCircle2 size={14} className="text-emerald-500" />,
        default: <AlertCircle size={14} className="text-slate-300" />
    };

    return (
        <div className="bg-white border border-border p-8 rounded-3xl space-y-4 shadow-sm relative overflow-hidden group hover:border-slate-300 transition-all">
            <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest ${status === 'warning' ? 'bg-rose-50 text-rose-600' : status === 'success' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                    {label}
                </span>
                {statusIcons[status]}
            </div>
            <div className="text-4xl font-black tracking-tighter text-slate-900 group-hover:scale-110 transition-transform origin-left">{count}</div>
        </div>
    );
}

function FilterSelect({ label, badge, hasBadge }: any) {
    return (
        <button className="px-4 py-2 border border-border bg-white rounded-xl text-[12px] font-bold text-slate-600 hover:border-slate-900 transition-all flex items-center gap-2">
            {label}
            <svg className="w-3 h-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
            {hasBadge && <span className="w-4 h-4 bg-slate-900 text-white rounded-full flex items-center justify-center text-[8px]">{badge}</span>}
        </button>
    );
}

import { Plus, RefreshCw, AlertCircle, CheckCircle2 } from 'lucide-react';
