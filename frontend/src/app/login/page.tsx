"use client";

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000'}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (res.ok) {
                const data = await res.json();
                await login(data.access_token);
            } else {
                const err = await res.json();
                setError(err.detail || 'Invalid credentials');
            }
        } catch (err) {
            setError('Connection failed. Please check your backend.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black">
            <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="glass-depth p-12 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-3xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />

                    <div className="space-y-8 text-center mb-10">
                        <div className="flex justify-center">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                                🛡️
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-4xl font-black font-heading tracking-tighter bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                                Institutional Access
                            </h1>
                            <p className="text-muted-foreground text-sm font-medium">
                                Secure gateway to Certixo V3 Compliance Plane
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#666666] ml-4">Corporate Identity</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="email@company.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-medium text-white focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#666666] ml-4">Credentials</label>
                                <input
                                    required
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-medium text-white focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-[11px] font-black uppercase tracking-widest text-center animate-shake">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-[0_20px_40px_-15px_rgba(79,70,229,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:grayscale"
                        >
                            {loading ? 'Authenticating...' : 'Establish Session'}
                        </button>
                    </form>

                    <div className="mt-10 text-center space-y-4">
                        <div className="text-[9px] font-black uppercase tracking-widest text-[#444444]">
                            Zero Trust Perimeter Protected
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
