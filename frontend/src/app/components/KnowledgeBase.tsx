'use client';

import React, { useState } from 'react';

const guides = [
    {
        tag: "SOC 2",
        title: "The Startup's Guide to SOC 2 Type II",
        desc: "Everything you need to know about Trust Services Criteria and auditor readiness.",
        readTime: "8 min read",
        icon: "📄",
        content: {
            overview: "SOC 2 is a voluntary compliance standard for service organizations, developed by the AICPA, which specifies how organizations should manage customer data. It is based on five 'Trust Services Criteria.'",
            points: [
                { title: "Security", desc: "Common Criteria: Protection against unauthorized access, use, or modification." },
                { title: "Availability", desc: "Ensures systems are available for operation and use as agreed." },
                { title: "Processing Integrity", desc: "Systems must be complete, valid, accurate, timely, and authorized." },
                { title: "Confidentiality", desc: "Information designated as confidential is protected as committed." },
                { title: "Privacy", desc: "Personal info is collected, used, retained, disclosed and disposed of correctly." }
            ],
            checklist: ["Map your data assets", "Conduct a gap analysis", "Automate evidence collection", "Select an Auditor"]
        }
    },
    {
        tag: "ISO 27001",
        title: "Setting the Foundation for Global Trust",
        desc: "A step-by-step roadmap to building an Information Security Management System (ISMS).",
        readTime: "12 min read",
        icon: "🌍",
        content: {
            overview: "ISO/IEC 27001 is an international standard on how to manage information security. It details requirements for establishing, implementing, maintaining and continually improving an ISMS.",
            points: [
                { title: "Risk Assessment", desc: "Identify vulnerabilities and threats to your business information." },
                { title: "Annex A Controls", desc: "114 controls divided into 14 domains like Access Control and Crypto." },
                { title: "Management Review", desc: "Leadership must stay engaged in security effectiveness." },
                { title: "Continuous Improvement", desc: "Regular internal audits and corrective actions are mandatory." }
            ],
            checklist: ["Define ISMS Scope", "Risk Treatment Plan", "Statement of Applicability", "Stage 1 & 2 Audits"]
        }
    },
    {
        tag: "HIPAA",
        title: "Health-Tech Compliance: A Beginner's Roadmap",
        desc: "Safeguarding PHI and meeting the Technical Safeguards without slowing down development.",
        readTime: "10 min read",
        icon: "🏥",
        content: {
            overview: "The Health Insurance Portability and Accountability Act (HIPAA) sets the standard for protecting sensitive patient data (PHI) in the United States.",
            points: [
                { title: "Security Rule", desc: "Focuses on safeguarding Electronic Protected Health Information (ePHI)." },
                { title: "Privacy Rule", desc: "Focuses on the right of individuals to control their health information." },
                { title: "Technical Safeguards", desc: "Encryption, access controls, and audit logs are non-negotiable." },
                { title: "BAAs", desc: "Business Associate Agreements with any vendor touching your PHI." }
            ],
            checklist: ["Encrypt all PHI at rest/transit", "Formalize BAA templates", "Access control policy", "Breach notification plan"]
        }
    },
    {
        tag: "GDPR",
        title: "Privacy by Design for Early-Stage Teams",
        desc: "How to implement data protection principles into your code from day one.",
        readTime: "7 min read",
        icon: "🔒",
        content: {
            overview: "General Data Protection Regulation (GDPR) is the toughest privacy and security law in the world, imposing obligations onto organizations anywhere that target or collect data related to people in the EU.",
            points: [
                { title: "Lawfulness & Transparency", desc: "Have a clear legal basis for processing any personal data." },
                { title: "Purpose Limitation", desc: "Only collect data for specified, explicit, and legitimate purposes." },
                { title: "Data Minimization", desc: "Only collect what is absolutely necessary for the task at hand." },
                { title: "Right to Erasure", desc: "Users must be able to request 'Right to be forgotten' easily." }
            ],
            checklist: ["Update Privacy Policy", "DPA for EU vendors", "Data mapping (RoPA)", "Consent management"]
        }
    }
];

export default function KnowledgeBase() {
    const [selectedGuide, setSelectedGuide] = useState<typeof guides[0] | null>(null);

    return (
        <section id="platform" className="py-32 px-12 bg-slate-50/50 border-y border-slate-100 relative">
            <div className="max-w-7xl mx-auto space-y-20">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-[10px] font-black uppercase tracking-widest text-indigo-600">
                            Knowledge Base
                        </div>
                        <h2 className="text-5xl font-black font-heading tracking-tighter text-slate-950">LEARNING CENTER <br /> FOR EARLY STARTERS.</h2>
                        <p className="text-lg text-slate-500 max-w-xl font-medium leading-relaxed">
                            Deep dives into the frameworks that power global trust. Expertly curated guides for teams starting their compliance journey.
                        </p>
                    </div>
                    <button className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:border-indigo-600 transition-all shadow-sm">
                        View All Resources
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {guides.map((guide, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedGuide(guide)}
                            className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-indigo-600/20 hover:shadow-2xl hover:shadow-indigo-600/5 transition-all cursor-pointer flex flex-col justify-between h-full"
                        >
                            <div className="space-y-6">
                                <div className="flex justify-between items-start">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-2xl group-hover:bg-indigo-50 transition-colors">
                                        {guide.icon}
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-slate-50 text-[9px] font-black text-slate-400 uppercase tracking-widest group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-all">
                                        {guide.tag}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-black font-heading tracking-tight text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">
                                        {guide.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                        {guide.desc}
                                    </p>
                                </div>
                            </div>
                            <div className="pt-8 flex items-center justify-between border-t border-slate-50 mt-8">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{guide.readTime}</span>
                                <span className="text-indigo-600 text-sm font-black group-hover:translate-x-2 transition-transform">→</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Guide Detail Modal/Overlay */}
                {selectedGuide && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 animate-in fade-in duration-300">
                        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-xl" onClick={() => setSelectedGuide(null)} />
                        <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[3.5rem] shadow-2xl border border-slate-100 animate-in slide-in-from-bottom-8 duration-500 custom-scrollbar">
                            <div className="sticky top-0 right-0 p-8 flex justify-end bg-white/10 backdrop-blur-md">
                                <button
                                    onClick={() => setSelectedGuide(null)}
                                    className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-950"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="px-12 pb-20 space-y-12">
                                <div className="space-y-6">
                                    <div className="w-20 h-20 rounded-3xl bg-indigo-50 flex items-center justify-center text-4xl shadow-inner">
                                        {selectedGuide.icon}
                                    </div>
                                    <h2 className="text-6xl font-black font-heading tracking-tighter text-slate-950 uppercase italic leading-none">
                                        {selectedGuide.title}
                                    </h2>
                                    <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                                        {selectedGuide.content.overview}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="space-y-8">
                                        <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-indigo-600">Core Principles</h4>
                                        <div className="space-y-6">
                                            {selectedGuide.content.points.map((p, idx) => (
                                                <div key={idx} className="space-y-2 border-l-2 border-slate-50 pl-6 hover:border-indigo-600 transition-colors">
                                                    <div className="text-lg font-black text-slate-900">{p.title}</div>
                                                    <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-10 bg-slate-50 rounded-[2.5rem] space-y-8 border border-slate-100">
                                        <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-900">Readiness Checklist</h4>
                                        <div className="space-y-4">
                                            {selectedGuide.content.checklist.map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-4 text-sm font-bold text-slate-600">
                                                    <div className="w-5 h-5 rounded-full bg-indigo-600/10 flex items-center justify-center text-indigo-600 text-[10px]">✓</div>
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                        <button className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-xl shadow-indigo-100 hover:scale-[1.02] transition-all">
                                            Download Knowledge PDF
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Technical Blog Snippet */}
                <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] -mr-24 -mt-24" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-black font-heading tracking-tighter">THE ENGINEERING PERSPECTIVE.</h3>
                            <p className="text-white/60 font-medium leading-relaxed">
                                Our technical blog dives deep into automated evidence collection, infrastructure-as-code security, and the mechanics of our AI Auditor.
                            </p>
                        </div>
                        <div className="flex lg:justify-end gap-6">
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-2 hover:bg-white/10 transition-all cursor-pointer flex-1 max-w-[200px]">
                                <div className="text-[9px] font-black text-indigo-400 uppercase tracking-widest">DevOps</div>
                                <div className="text-sm font-bold">AWS Config for SOC 2</div>
                            </div>
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-2 hover:bg-white/10 transition-all cursor-pointer flex-1 max-w-[200px]">
                                <div className="text-[9px] font-black text-indigo-400 uppercase tracking-widest">Automation</div>
                                <div className="text-sm font-bold">Live Evidence Pipelines</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
