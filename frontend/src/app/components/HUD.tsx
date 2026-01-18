"use client";

type HUDProps = {
    status: {
        label: string;
        value: string;
        color?: 'emerald' | 'amber' | 'rose' | 'primary' | 'indigo';
    };
    nextAction: {
        label: string;
        onClick: () => void;
    };
    risk: {
        label: string;
        count?: number;
    };
    evidence: {
        label: string;
        count: number;
        onClick: () => void;
    };
    quickExport: {
        label: string;
        onClick: () => void;
    };
};

export default function HUD({ status, nextAction, risk, evidence, quickExport }: HUDProps) {
    return (
        <div className="grid grid-cols-12 gap-6 animate-in fade-in slide-in-from-top-8 duration-700">
            {/* Compliance Progress Card */}
            <div className="col-span-12 lg:col-span-7 bg-white border border-border rounded-[2rem] p-10 shadow-sm relative overflow-hidden group">
                <div className="flex justify-between items-center mb-10">
                    <div className="flex items-center gap-2">
                        <h3 className="text-[17px] font-bold text-slate-900">Compliance Progress</h3>
                        <div className="p-1 rounded-full border border-slate-200 text-slate-300">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                    </div>
                    <button className="text-[12px] font-bold text-primary hover:underline transition-all">View Compliance Trend</button>
                </div>

                <div className="flex flex-col items-center justify-center py-10 relative">
                    <div className="relative w-[300px] h-[300px]">
                        {/* Main Donut SVG */}
                        <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#F1F5F9" strokeWidth="6" />
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#10B981" strokeWidth="6" strokeDasharray="282.7" strokeDashoffset="0" strokeLinecap="round" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-[11px] font-black uppercase text-slate-400 tracking-tighter">Compliant</span>
                            <span className="text-5xl font-black text-slate-900 leading-none">100 %</span>
                        </div>
                        {/* Status Label on Path */}
                        <div className="absolute bottom-10 right-0 flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-100 shadow-sm">
                            <span className="w-2 h-0.5 bg-emerald-500 rounded-full" />
                            <span className="text-[11px] font-bold text-slate-500 uppercase">Compliant: 115</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-16 mt-16 w-full max-w-[500px]">
                        <SmallDonut label="Policies" value="100%" color="#10B981" />
                        <SmallDonut label="Evidences" value="100%" color="#10B981" />
                        <SmallDonut label="Controls" value="100%" color="#10B981" />
                    </div>
                </div>
            </div>

            {/* Jobs That Need Your Attention Card */}
            <div className="col-span-12 lg:col-span-5 bg-white border border-border rounded-[2rem] p-10 shadow-sm flex flex-col items-center justify-center text-center space-y-6">
                <div className="self-start w-full text-left mb-10">
                    <h3 className="text-[17px] font-bold text-slate-900">Jobs that need your attention</h3>
                </div>

                <div className="py-20 flex flex-col items-center space-y-8 opacity-40">
                    <div className="relative">
                        <svg width="180" height="180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="100" cy="100" r="80" fill="#F1F5F9" />
                            <rect x="70" y="80" width="60" height="50" rx="4" fill="#E2E8F0" />
                            <rect x="90" y="60" width="40" height="40" rx="4" fill="#CBD5E1" />
                            <circle cx="120" cy="110" r="25" stroke="#94A3B8" strokeWidth="2" fill="white" />
                            <line x1="135" y1="125" x2="155" y2="145" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    </div>
                    <span className="text-[14px] font-bold text-slate-400">All good here.</span>
                </div>
            </div>
        </div>
    );
}

function SmallDonut({ label, value, color }: { label: string, value: string, color: string }) {
    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="relative w-16 h-16">
                <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#F1F5F9" strokeWidth="8" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke={color} strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="0" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
            </div>
            <div className="text-center">
                <div className="text-[12px] font-black text-slate-900 leading-none">{value}</div>
                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">{label}</div>
            </div>
        </div>
    );
}

import React from 'react';
