'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function OnboardingContent() {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const [step, setStep] = useState(1);
    const [invitation, setInvitation] = useState<{ org_name: string, email: string } | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        tax_id: '',
        legal_address: '',
        industry: 'Technology',
        employee_count: 50,
        admin_name: '',
        admin_password: ''
    });

    useEffect(() => {
        if (token) {
            fetch(`http://localhost:8000/onboarding/validate/${token}`)
                .then(res => {
                    if (!res.ok) throw new Error('Invalid or expired token');
                    return res.json();
                })
                .then(data => {
                    setInvitation(data);
                    setLoading(false);
                })
                .catch(err => {
                    setError(err.message);
                    setLoading(false);
                });
        } else {
            setError('No invitation token provided');
            setLoading(false);
        }
    }, [token]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:8000/onboarding/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    token,
                    ...formData,
                    admin_name: formData.admin_name || invitation?.org_name + ' Admin'
                })
            });
            if (!res.ok) throw new Error('Submission failed');
            setSubmitted(true);
        } catch (err: any) {
            setError(err.message);
        }
    };

    if (loading) return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="animate-spin w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full" />
        </div>
    );

    if (error) return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-12 text-center space-y-6">
            <div className="text-6xl text-rose-500">⚠️</div>
            <h1 className="text-4xl font-black font-heading tracking-tighter text-slate-950 uppercase italic">Access Denied</h1>
            <p className="text-slate-500 font-medium max-w-md">{error}</p>
            <a href="/" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[11px]">Return Home</a>
        </div>
    );

    if (submitted) return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-12 text-center space-y-8">
            <div className="w-24 h-24 bg-emerald-500 rounded-[2.5rem] flex items-center justify-center text-4xl text-white shadow-2xl shadow-emerald-100 animate-bounce">
                ✓
            </div>
            <div className="space-y-4">
                <h1 className="text-5xl font-black font-heading tracking-tighter text-slate-950 uppercase italic">Onboarding Submitted</h1>
                <p className="text-xl text-slate-500 font-medium max-w-lg mx-auto">
                    Your details have been received. The Certixo Governance team will review your application and activate your instance within 24 hours.
                </p>
            </div>
            <div className="pt-8 flex flex-col items-center gap-4">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600">Expected Activation</div>
                <div className="text-2xl font-black text-slate-900 tracking-tight">Jan 16, 2026 • 14:00 GMT</div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 p-8 md:p-24 flex items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
                <div className="h-full bg-indigo-600 transition-all duration-1000" style={{ width: `${(step / 3) * 100}%` }} />
            </div>

            <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[3.5rem] shadow-2xl shadow-indigo-100/50 border border-slate-100 overflow-hidden">
                {/* Visual Side */}
                <div className="bg-slate-900 p-16 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px] -mr-32 -mt-32" />
                    <div className="space-y-8 relative z-10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black">C</div>
                            <span className="text-2xl font-black font-heading tracking-tighter uppercase italic leading-none">Certixo.</span>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-4xl font-black font-heading tracking-tighter leading-none opacity-40">STEP 0{step}</h2>
                            <h1 className="text-5xl font-black font-heading tracking-tighter leading-[0.9] uppercase italic">
                                {step === 1 ? "BUSINESS IDENTITY" : step === 2 ? "KYC VERIFICATION" : "ADMIN CONFIG"}
                            </h1>
                        </div>
                    </div>

                    <div className="space-y-6 opacity-60">
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400">Enterprise Protocol</div>
                        <p className="text-sm font-medium leading-relaxed">
                            Complete your organizational profile to establish your sovereign governance workspace. All data is encrypted and SOC 2 compliant.
                        </p>
                    </div>
                </div>

                {/* Form Side */}
                <div className="p-16 flex flex-col justify-center bg-white">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {step === 1 && (
                            <div className="space-y-6 animate-in slide-in-from-right-8 duration-500">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Company Name</label>
                                    <input
                                        type="text"
                                        disabled
                                        value={invitation?.org_name}
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-slate-900"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Company Industry</label>
                                    <select
                                        value={formData.industry}
                                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                                        className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl font-bold text-slate-900 focus:border-indigo-600 transition-colors"
                                    >
                                        <option>Technology</option>
                                        <option>Fintech</option>
                                        <option>Healthcare</option>
                                        <option>E-commerce</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Employee Count</label>
                                    <input
                                        type="number"
                                        placeholder="E.g. 250"
                                        value={formData.employee_count}
                                        onChange={(e) => setFormData({ ...formData, employee_count: parseInt(e.target.value) })}
                                        className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl font-bold text-slate-900 focus:border-indigo-600 transition-colors"
                                    />
                                </div>
                                <button type="button" onClick={() => setStep(2)} className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-slate-800 transition-all">Continue to KYC</button>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-6 animate-in slide-in-from-right-8 duration-500">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Tax Identification Number (TIN)</label>
                                    <input
                                        type="text"
                                        placeholder="E.g. 12-3456789"
                                        value={formData.tax_id}
                                        onChange={(e) => setFormData({ ...formData, tax_id: e.target.value })}
                                        className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl font-bold text-slate-900 focus:border-indigo-600 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Legal Business Address</label>
                                    <textarea
                                        rows={3}
                                        placeholder="Full registered address"
                                        value={formData.legal_address}
                                        onChange={(e) => setFormData({ ...formData, legal_address: e.target.value })}
                                        className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl font-bold text-slate-900 focus:border-indigo-600 transition-colors"
                                    />
                                </div>
                                <div className="flex gap-4">
                                    <button type="button" onClick={() => setStep(1)} className="flex-1 py-5 bg-slate-100 text-slate-500 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-slate-200 transition-all">Back</button>
                                    <button type="button" onClick={() => setStep(3)} className="flex-2 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-slate-800 transition-all">Next Step</button>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-6 animate-in slide-in-from-right-8 duration-500">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Admin Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        value={formData.admin_name}
                                        onChange={(e) => setFormData({ ...formData, admin_name: e.target.value })}
                                        className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl font-bold text-slate-900 focus:border-indigo-600 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Create Passphrase</label>
                                    <input
                                        type="password"
                                        placeholder="********"
                                        value={formData.admin_password}
                                        onChange={(e) => setFormData({ ...formData, admin_password: e.target.value })}
                                        className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl font-bold text-slate-900 focus:border-indigo-600 transition-colors"
                                    />
                                </div>
                                <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl">
                                    <p className="text-[10px] font-bold text-indigo-600 leading-relaxed">
                                        By submitting, you represent that you are authorized to bind this organization to Certixo's Enterprise Master Service Agreement.
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <button type="button" onClick={() => setStep(2)} className="flex-1 py-5 bg-slate-100 text-slate-500 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-slate-200 transition-all">Back</button>
                                    <button type="submit" className="flex-2 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl shadow-indigo-100 hover:scale-[1.02] transition-all">Submit Protocol</button>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default function OnboardingPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="animate-spin w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full" />
            </div>
        }>
            <OnboardingContent />
        </Suspense>
    );
}
