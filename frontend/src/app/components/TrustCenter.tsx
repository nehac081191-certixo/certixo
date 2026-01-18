"use client";

import React, { useState } from 'react';

// --- Types ---
type TrustTab = 'Overview' | 'Documents' | 'Subprocessors' | 'Security' | 'Privacy' | 'Contact';

interface Certification {
    id: string;
    title: string;
    visibility: 'RESTRICTED' | 'PUBLIC';
    coverage: string;
    reportDate?: string;
    certId?: string;
    validThrough?: string;
    icon: string;
    actionLabel: string;
}

const CERTIFICATIONS: Certification[] = [
    {
        id: 'soc2',
        title: 'SOC 2 Type II report (2025)',
        visibility: 'RESTRICTED',
        coverage: 'Jan 1 – Dec 31, 2025',
        reportDate: 'Jan 10, 2026',
        icon: '🛡️',
        actionLabel: 'Request access'
    },
    {
        id: 'iso',
        title: 'ISO 27001:2022 certificate',
        visibility: 'PUBLIC',
        coverage: 'Global ISMS',
        certId: 'ISO-7742-BSI',
        validThrough: 'Mar 31, 2027',
        icon: '🌐',
        actionLabel: 'Download certificate'
    }
];

const QUICK_STATS = [
    { label: 'SOC 2 Type II', detail: 'Restricted · Jan–Dec 2025' },
    { label: 'ISO 27001', detail: 'Public · Valid through 2026' },
    { label: 'Pen test', detail: 'Restricted · Oct 2025' },
    { label: 'Availability', detail: '99.99% · Last 90 days' }
];

export default function TrustCenter() {
    const [activeTab, setActiveTab] = useState<TrustTab>('Overview');

    return (
        <div className="min-h-screen bg-white text-[#1A1A1A] font-sans selection:bg-primary/10">
            {/* 1) Top App Bar */}
            <header className="h-[72px] border-b border-[#EEEEEE] bg-white sticky top-0 z-50">
                <div className="max-w-[1120px] mx-auto h-full flex items-center justify-between px-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-lg">C</div>
                        <span className="text-[16px] font-semibold tracking-tight">Certixo Trust Center</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="h-10 px-4 rounded-lg bg-[#F5F5F5] text-[13px] font-semibold hover:bg-[#EEEEEE] transition-colors">
                            Download DPA
                        </button>
                        <button className="h-10 px-4 rounded-lg bg-[#1A1A1A] text-white text-[13px] font-semibold hover:bg-[#333333] transition-all shadow-sm">
                            Request SOC 2 Type II
                        </button>
                    </div>
                </div>
            </header>

            {/* 2) Top Tabs Navigation */}
            <nav className="h-[48px] border-b border-[#EEEEEE] bg-white">
                <div className="max-w-[1120px] mx-auto h-full flex items-center px-4 gap-6">
                    {(['Overview', 'Documents', 'Subprocessors', 'Security', 'Privacy', 'Contact'] as TrustTab[]).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`h-full text-[14px] font-medium transition-all relative px-1 ${activeTab === tab ? 'text-primary' : 'text-[#666666] hover:text-[#1A1A1A]'
                                }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
                            )}
                        </button>
                    ))}
                </div>
            </nav>

            {/* Centered Content Container */}
            <main className="max-w-[1120px] mx-auto px-4 py-8">
                {activeTab === 'Overview' && (
                    <div className="space-y-12 animate-in fade-in duration-500">
                        {/* Section 1 — Page Intro */}
                        <div className="max-w-[640px] space-y-3">
                            <h1 className="text-[32px] font-semibold tracking-tight leading-[40px]">Trust Center</h1>
                            <p className="text-[16px] text-[#666666]">
                                Security and compliance documentation for customers and partners.
                            </p>
                            <div className="text-[12px] text-[#999999]">Last updated: Jan 16, 2026</div>
                        </div>

                        {/* Section 2 — Trust Summary Chips */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                            {QUICK_STATS.map((stat, i) => (
                                <div key={i} className="h-[56px] min-w-[260px] border border-[#EEEEEE] rounded-xl px-[14px] py-[12px] flex flex-col justify-center bg-white">
                                    <div className="text-[14px] font-medium leading-none mb-1">{stat.label}</div>
                                    <div className="text-[12px] text-[#666666] leading-none">{stat.detail}</div>
                                </div>
                            ))}
                        </div>

                        {/* Section 3 — Key Certifications */}
                        <section className="space-y-6 pt-4">
                            <h3 className="text-[18px] font-semibold">Key certifications</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {CERTIFICATIONS.map((cert) => (
                                    <div key={cert.id} className="h-[160px] border border-[#EEEEEE] rounded-2xl p-5 bg-white flex flex-col justify-between hover:border-primary/20 transition-all">
                                        <div className="flex justify-between items-start">
                                            <div className="text-2xl">{cert.icon}</div>
                                            <div className={`text-[11px] font-semibold px-[10px] py-[6px] rounded-full border ${cert.visibility === 'RESTRICTED'
                                                    ? 'bg-amber-50 text-amber-700 border-amber-200'
                                                    : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                                }`}>
                                                {cert.visibility}
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-[16px] font-semibold leading-tight">{cert.title}</h4>
                                            <p className="text-[13px] text-[#666666]">Coverage: {cert.coverage}</p>
                                            <p className="text-[13px] text-[#666666]">
                                                {cert.reportDate ? `Report date: ${cert.reportDate}` : `Certificate ID: ${cert.certId}`}
                                            </p>
                                        </div>
                                        <div className="pt-2">
                                            <button className="h-9 px-4 rounded-lg border border-[#EEEEEE] text-[12px] font-semibold hover:bg-gray-50 transition-colors">
                                                {cert.actionLabel}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 4 — Documents Preview */}
                        <section className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-[18px] font-semibold">Documents</h3>
                                <button onClick={() => setActiveTab('Documents')} className="text-[12px] font-semibold text-primary hover:underline">View all</button>
                            </div>
                            <div className="border border-[#EEEEEE] rounded-xl overflow-hidden bg-white">
                                <table className="w-full text-left text-[13px]">
                                    <thead className="bg-[#F8FAFC] border-b border-[#EEEEEE]">
                                        <tr>
                                            <th className="px-6 py-4 font-semibold text-[#666666]">Document</th>
                                            <th className="px-6 py-4 font-semibold text-[#666666]">Access</th>
                                            <th className="px-6 py-4 font-semibold text-[#666666]">Last updated</th>
                                            <th className="px-6 py-4 font-semibold text-[#666666] text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#EEEEEE]">
                                        <DocumentRow name="Data Processing Addendum" access="Public" date="Jan 2025" />
                                        <DocumentRow name="Vulnerability Management Policy" access="Public" date="Dec 2024" />
                                        <DocumentRow name="Business Continuity Plan" access="Restricted" date="Feb 2026" />
                                        <DocumentRow name="Penetration Test Summary" access="Restricted" date="Oct 2025" />
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Section 5 — Subprocessors Preview */}
                        <section className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-[18px] font-semibold">Subprocessors</h3>
                                <button onClick={() => setActiveTab('Subprocessors')} className="text-[12px] font-semibold text-primary hover:underline">View all</button>
                            </div>
                            <div className="border border-[#EEEEEE] rounded-xl overflow-hidden bg-white">
                                <table className="w-full text-left text-[13px]">
                                    <thead className="bg-[#F8FAFC] border-b border-[#EEEEEE]">
                                        <tr>
                                            <th className="px-6 py-3 font-semibold text-[#666666]">Vendor</th>
                                            <th className="px-6 py-3 font-semibold text-[#666666]">Purpose</th>
                                            <th className="px-6 py-3 font-semibold text-[#666666]">Region</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#EEEEEE]">
                                        <tr>
                                            <td className="px-6 py-4 font-medium">Amazon Web Services</td>
                                            <td className="px-6 py-4 text-[#666666]">IaaS & Hosting</td>
                                            <td className="px-6 py-4 text-[#666666]">US-West-2</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-medium">Cloudflare</td>
                                            <td className="px-6 py-4 text-[#666666]">CDN & DNS</td>
                                            <td className="px-6 py-4 text-[#666666]">Global</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-medium">Stripe</td>
                                            <td className="px-6 py-4 text-[#666666]">Payments</td>
                                            <td className="px-6 py-4 text-[#666666]">US</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Section 6 — Contact (footer card) */}
                        <section className="h-[88px] rounded-2xl border border-[#EEEEEE] px-8 flex items-center justify-between bg-white">
                            <div className="text-[14px] font-medium">Need something specific?</div>
                            <div className="text-[14px]">
                                Contact us at <a href="mailto:security@certixo.com" className="text-primary font-semibold hover:underline">security@certixo.com</a>
                            </div>
                        </section>
                    </div>
                )}

                {activeTab !== 'Overview' && (
                    <div className="py-24 text-center space-y-4 border rounded-[2rem] border-dashed border-[#EEEEEE] bg-[#F8FAFC]/50 mt-8">
                        <div className="text-4xl">📁</div>
                        <h2 className="text-xl font-semibold text-[#999999] italic">Documentation for {activeTab} is being finalized.</h2>
                        <button onClick={() => setActiveTab('Overview')} className="text-primary text-sm font-semibold hover:underline">Return to Overview</button>
                    </div>
                )}
            </main>
        </div>
    );
}

function DocumentRow({ name, access, date }: { name: string, access: string, date: string }) {
    return (
        <tr className="hover:bg-[#FDFDFD] transition-all">
            <td className="px-6 py-4 font-medium">{name}</td>
            <td className="px-6 py-4">
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${access === 'Public' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                    }`}>
                    {access}
                </span>
            </td>
            <td className="px-6 py-4 text-[#666666]">{date}</td>
            <td className="px-6 py-4 text-right">
                <button className="text-[12px] font-semibold text-primary hover:underline">
                    {access === 'Public' ? 'Download' : 'Request access'}
                </button>
            </td>
        </tr>
    );
}
