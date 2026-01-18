'use client';

import React, { useState } from 'react';

interface Question {
    id: number;
    text: string;
    options: {
        label: string;
        value: string;
        icon: string;
        description: string;
    }[];
}

const questions: Question[] = [
    {
        id: 1,
        text: "Where is your primary customer base located?",
        options: [
            { label: "North America", value: "us", icon: "🇺🇸", description: "Primary focus on US/Canada markets." },
            { label: "European Union", value: "eu", icon: "🇪🇺", description: "Subject to strict GDPR sovereignty." },
            { label: "Asia Pacific", value: "apac", icon: "🌏", description: "Cross-border data regulations." },
            { label: "Global Reach", value: "global", icon: "🌐", description: "Omni-channel international presence." }
        ]
    },
    {
        id: 2,
        text: "What type of sensitive data do you handle?",
        options: [
            { label: "Identity & PII", value: "pii", icon: "👤", description: "Personal identifiers and user profiles." },
            { label: "Healthcare Data", value: "phi", icon: "🏥", description: "Medical records or HIPAA-governed info." },
            { label: "Fintech & Payments", value: "pci", icon: "💳", description: "Cardholder data and transaction flows." },
            { label: "B2B Infrastructure", value: "none", icon: "📊", description: "Internal logs and commercial metadata." }
        ]
    },
    {
        id: 3,
        text: "What is your target client profile?",
        options: [
            { label: "Fortune 500", value: "ent", icon: "🏢", description: "Requires deep third-party risk vetting." },
            { label: "High-Growth SaaS", value: "startup", icon: "🚀", description: "Needs speed and trust certificates." },
            { label: "Federal / Public", value: "gov", icon: "🏛️", description: "Requires FedRAMP/StateRAMP alignment." },
            { label: "Mass Market", value: "smb", icon: "🏡", description: "Broad security foundation needed." }
        ]
    }
];

export default function FrameworkFinder() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (questionId: number, value: string) => {
        const nextAnswers = { ...answers, [questionId]: value };
        setAnswers(nextAnswers);

        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            setShowResult(true);
        }
    };

    const getRecommendation = () => {
        const { 1: loc, 2: data, 3: target } = answers;

        if (data === 'phi') return { name: "HIPAA / HITRUST", desc: "Highest-tier health data protection." };
        if (data === 'pci') return { name: "PCI DSS v4.0", desc: "Essential for financial transaction security." };
        if (loc === 'eu' || (data === 'pii' && loc === 'global')) return { name: "GDPR + ISO 27001", desc: "The definitive global sovereignty standard." };
        if (target === 'ent' || loc === 'us') return { name: "SOC 2 Type II", desc: "The industry standard for SaaS trust." };

        return { name: "ISO 27001:2022", desc: "Comprehensive international security management." };
    };

    const reset = () => {
        setStep(0);
        setAnswers({});
        setShowResult(false);
    };

    if (showResult) {
        const rec = getRecommendation();
        return (
            <div className="bg-white rounded-[3rem] border border-slate-200 p-12 text-center space-y-10 animate-in zoom-in-95 duration-500 shadow-[0_40px_100px_rgba(79,70,229,0.1)]">
                <div className="w-24 h-24 bg-indigo-600 rounded-[2rem] flex items-center justify-center text-4xl mx-auto shadow-2xl shadow-indigo-200 animate-pulse">
                    ✨
                </div>
                <div className="space-y-4">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-600">Strategic Recommendation</h3>
                    <h2 className="text-6xl font-black font-heading tracking-tighter text-slate-950 uppercase italic">{rec.name}</h2>
                    <p className="text-lg text-slate-500 font-medium max-w-sm mx-auto leading-relaxed">{rec.desc}</p>
                </div>
                <div className="pt-8 flex flex-col gap-5">
                    <button className="px-12 py-6 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[13px] shadow-2xl hover:bg-slate-800 hover:-translate-y-1 transition-all active:translate-y-0">
                        Initialize Mission Roadmap
                    </button>
                    <button onClick={reset} className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors">
                        Recalibrate Assessment
                    </button>
                </div>
            </div>
        );
    }

    const currentQuestion = questions[step];

    return (
        <div className="bg-white rounded-[3rem] border border-slate-100 p-12 space-y-12 relative overflow-hidden shadow-xl shadow-slate-100">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-2 bg-slate-50">
                <div
                    className="h-full bg-indigo-600 transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1)"
                    style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                />
            </div>

            <div className="flex justify-between items-center px-2">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[10px] font-black text-indigo-600">
                        {step + 1}
                    </div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                        Requirement Node
                    </div>
                </div>
                <div className="flex gap-2">
                    {questions.map((_, i) => (
                        <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === step ? 'bg-indigo-600 w-12' : 'bg-slate-100 w-4'}`} />
                    ))}
                </div>
            </div>

            <div className="space-y-4 text-center">
                <h2 className="text-4xl font-black font-heading tracking-tight text-slate-950 leading-[1.1] uppercase italic">
                    {currentQuestion.text}
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {currentQuestion.options.map((opt) => (
                    <button
                        key={opt.value}
                        onClick={() => handleAnswer(currentQuestion.id, opt.value)}
                        className="p-8 rounded-[2rem] border border-slate-100 bg-white hover:border-indigo-600 hover:bg-indigo-50/20 text-left group transition-all duration-300 flex items-center gap-8 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity text-4xl">
                            {opt.icon}
                        </div>
                        <div className="text-4xl group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
                            {opt.icon}
                        </div>
                        <div>
                            <div className="text-[13px] font-black text-slate-950 uppercase tracking-tight">{opt.label}</div>
                            <div className="text-[11px] font-medium text-slate-400 mt-1">{opt.description}</div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
