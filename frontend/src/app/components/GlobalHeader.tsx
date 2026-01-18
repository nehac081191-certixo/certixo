"use client";

import React from 'react';

type GlobalHeaderProps = {
    title: string;
    description?: string;
    actions?: React.ReactNode;
    breadcrumb?: string;
    theme: 'light' | 'dark';
    onThemeToggle: () => void;
};

export default function GlobalHeader({ title, description, actions, breadcrumb, theme, onThemeToggle }: GlobalHeaderProps) {
    return (
        <div className="flex flex-col space-y-2 mb-12">
            <div className="flex justify-between items-start">
                <div className="space-y-1 pt-1">
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground opacity-60">
                            {breadcrumb || 'Workspace'}
                        </span>
                    </div>
                    <h2 className="text-[32px] font-bold tracking-tight text-foreground leading-none">
                        {title}
                    </h2>
                </div>

                <div className="flex items-center gap-3">
                    {/* Entity Selector - Scrut Style */}
                    <div className="flex items-center gap-2 bg-white border border-border p-1.5 rounded-xl shadow-sm">
                        <button className="flex items-center gap-3 px-3 py-2 bg-slate-50 border border-slate-100 rounded-lg group hover:bg-white transition-all">
                            <svg className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                            <span className="text-[12px] font-bold text-slate-700">All Entities</span>
                            <svg className="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        <button className="p-2 text-slate-300 hover:text-slate-900 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                        </button>
                    </div>

                    <div className="w-[1px] h-8 bg-border mx-1" />

                    <button
                        onClick={onThemeToggle}
                        className={`w-10 h-10 rounded-xl border flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-sm ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'}`}
                    >
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                    {actions}
                </div>
            </div>
            {description && (
                <div className="pt-2">
                    <p className="text-[15px] font-medium text-muted-foreground leading-relaxed max-w-2xl">
                        {description}
                    </p>
                </div>
            )}
        </div>
    );
}
