"use client";

import React, { useState } from 'react';
import FileUploader from './FileUploader';

type ArtifactStatus = 'VALID' | 'STALE' | 'FAILED' | 'PENDING';

type EvidenceArtifact = {
    id: string;
    source: 'aws' | 'github' | 'gcp' | 'okta' | 'manual';
    name: string;
    collectionDate: string;
    freshness: string; // e.g. "Every 24h"
    mapping: string[]; // e.g. ["CC1.1", "CC6.1"]
    status: ArtifactStatus;
    failureReason?: string;
};

export default function EvidenceVault() {
    const [filter, setFilter] = useState<'all' | 'failed' | 'manual'>('all');
    const [showUpload, setShowUpload] = useState(false);

    const artifacts: EvidenceArtifact[] = [
        { id: '1', source: 'aws', name: 'S3 Bucket Policy Snapshots', collectionDate: '2026-01-16 14:00', freshness: '24h', mapping: ['CC6.1', 'CC6.6'], status: 'VALID' },
        { id: '2', source: 'github', name: 'PR Review Logs (Main Branch)', collectionDate: '2026-01-15 09:00', freshness: '1h', mapping: ['CC3.2'], status: 'FAILED', failureReason: 'API Token Expired' },
        { id: '3', source: 'manual', name: 'Executive Risk Review Q4', collectionDate: '2025-12-01', freshness: 'Quarterly', mapping: ['CC4.1'], status: 'STALE' },
        { id: '4', source: 'okta', name: 'MFA Status Report', collectionDate: '2026-01-16 10:00', freshness: '24h', mapping: ['CC6.7'], status: 'VALID' },
        { id: '5', source: 'gcp', name: 'Cloud SQL Backup Logs', collectionDate: '2026-01-16 00:00', freshness: '24h', mapping: ['CC7.5'], status: 'VALID' },
    ];

    const filteredArtifacts = artifacts.filter(a => {
        if (filter === 'failed') return a.status === 'FAILED';
        if (filter === 'manual') return a.source === 'manual';
        return true;
    });

    const stats = {
        total: artifacts.length,
        failed: artifacts.filter(a => a.status === 'FAILED').length,
        automated: Math.round((artifacts.filter(a => a.source !== 'manual').length / artifacts.length) * 100)
    };

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700 max-w-7xl mx-auto">
            {/* 1. PIPELINE HEADER */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass-depth p-8 rounded-[2.5rem] border border-border space-y-4">
                    <div className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-[0.3em]">Institutional Pulse</div>
                    <div className="flex items-end gap-3 leading-none">
                        <div className="text-5xl font-black font-heading tracking-tighter text-foreground italic">{stats.total}</div>
                        <div className="text-[11px] font-black text-muted-foreground/30 mb-1 uppercase tracking-widest">Active Artifacts</div>
                    </div>
                </div>
                <div className="glass-depth p-8 rounded-[2.5rem] border border-rose-500/10 bg-rose-500/[0.01] space-y-4">
                    <div className="text-[10px] font-black text-rose-500/50 uppercase tracking-[0.3em]">Critical Disruptions</div>
                    <div className="flex items-end gap-3 leading-none">
                        <div className="text-5xl font-black font-heading tracking-tighter text-rose-500 italic">{stats.failed}</div>
                        <div className="text-[11px] font-black text-muted-foreground/30 mb-1 uppercase tracking-widest">Pipeline Failures</div>
                    </div>
                </div>
                <div className="glass-depth p-8 rounded-[2.5rem] border border-primary/10 bg-primary/[0.01] space-y-4">
                    <div className="text-[10px] font-black text-primary/50 uppercase tracking-[0.3em]">Automation Velocity</div>
                    <div className="flex items-end gap-3 leading-none">
                        <div className="text-5xl font-black font-heading tracking-tighter text-primary italic">{stats.automated}%</div>
                        <div className="text-[11px] font-black text-muted-foreground/30 mb-1 uppercase tracking-widest">Zero-Touch Sync</div>
                    </div>
                </div>
            </div>

            {/* 2. PIPELINE VISUALIZATION */}
            <div className="glass-depth p-10 rounded-[3rem] border border-border/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                    <PipelineNode icon="🔌" label="104 Sources" status="CONNECTED" />
                    <PipelineConnector status="active" />
                    <PipelineNode icon="⚙️" label="Processing" status="320/sec" />
                    <PipelineConnector status="active" />
                    <PipelineNode icon="🛡️" label="Audit Validation" status="88.4%" />
                    <PipelineConnector status="warning" />
                    <PipelineNode icon="🏦" label="Evidence Vault" status="4.2TB Verified" />
                </div>
            </div>

            {/* 3. ARTIFACT LISTING */}
            <div className="space-y-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${filter === 'all' ? 'bg-foreground text-background shadow-xl' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            All Proofs
                        </button>
                        <button
                            onClick={() => setFilter('failed')}
                            className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${filter === 'failed' ? 'bg-rose-500 text-white shadow-xl shadow-rose-500/20' : 'text-muted-foreground hover:text-rose-500'}`}
                        >
                            Failures ({stats.failed})
                        </button>
                        <button
                            onClick={() => setFilter('manual')}
                            className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${filter === 'manual' ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'text-muted-foreground hover:text-primary'}`}
                        >
                            Manual
                        </button>
                    </div>
                    <button
                        onClick={() => setShowUpload(true)}
                        className="px-8 py-4 bg-primary text-white rounded-[2rem] text-[10px] font-black uppercase tracking-widest shadow-2xl shadow-primary/20 hover:scale-105 transition-all"
                    >
                        + Upload Manual Proof
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {filteredArtifacts.map(artifact => (
                        <div key={artifact.id} className="glass-depth p-8 rounded-[2rem] border border-border/50 hover:border-primary/30 transition-all flex flex-col md:flex-row items-center justify-between group">
                            <div className="flex items-center gap-8 flex-1">
                                <SourceIcon source={artifact.source} />
                                <div className="space-y-1">
                                    <div className="text-xl font-black font-heading tracking-tight text-foreground group-hover:text-primary transition-colors italic uppercase">{artifact.name}</div>
                                    <div className="flex gap-4">
                                        <div className="text-[9px] font-black text-muted-foreground/30 uppercase tracking-widest">Mapping: {artifact.mapping.join(', ')}</div>
                                        <div className="text-[9px] font-black text-muted-foreground/30 uppercase tracking-widest">Sync: {artifact.freshness}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-12">
                                <div className="text-right space-y-1">
                                    <div className="text-[9px] font-black text-muted-foreground/40 uppercase tracking-widest">Last Check</div>
                                    <div className="text-xs font-black text-foreground tabular-nums">{artifact.collectionDate}</div>
                                </div>
                                <StatusBadge status={artifact.status} />
                                <button className={`px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${artifact.status === 'FAILED' ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20' : 'bg-muted border border-border text-muted-foreground hover:text-foreground'}`}>
                                    {artifact.status === 'FAILED' ? 'Fix Now' : 'View Ledger'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* MANUAL UPLOAD MODAL */}
            {showUpload && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background/80 backdrop-blur-3xl">
                    <div className="w-full max-w-2xl relative">
                        <button onClick={() => setShowUpload(false)} className="absolute -top-12 right-0 text-white/40 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">Close [Esc]</button>
                        <FileUploader onUploadSuccess={() => setShowUpload(false)} />
                    </div>
                </div>
            )}
        </div>
    );
}

function PipelineNode({ icon, label, status }: { icon: string, label: string, status: string }) {
    return (
        <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 rounded-[1.5rem] bg-card border border-border flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div className="space-y-1">
                <div className="text-[10px] font-black text-foreground uppercase tracking-widest">{label}</div>
                <div className="text-[8px] font-black text-primary uppercase tracking-[0.2em]">{status}</div>
            </div>
        </div>
    );
}

function PipelineConnector({ status }: { status: 'active' | 'warning' }) {
    return (
        <div className="hidden md:block flex-1 h-px bg-border relative">
            <div className={`absolute inset-0 h-full ${status === 'active' ? 'bg-primary' : 'bg-amber-500'} animate-shimmer`} style={{ width: '40%' }} />
        </div>
    );
}

function SourceIcon({ source }: { source: string }) {
    const icons = {
        aws: '☁️',
        github: '🐙',
        gcp: '⚡',
        okta: '🔑',
        manual: '📁'
    };
    return (
        <div className="w-12 h-12 rounded-2xl bg-muted border border-border flex items-center justify-center text-xl shadow-inner">
            {icons[source as keyof typeof icons]}
        </div>
    );
}

function StatusBadge({ status }: { status: ArtifactStatus }) {
    const colors = {
        VALID: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
        STALE: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
        FAILED: 'bg-rose-500/10 text-rose-500 border-rose-500/20',
        PENDING: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20'
    };
    return (
        <div className={`px-4 py-1.5 rounded-lg border text-[9px] font-black uppercase tracking-widest ${colors[status]}`}>
            {status}
        </div>
    );
}
