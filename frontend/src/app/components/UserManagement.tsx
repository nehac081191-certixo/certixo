"use client";

import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

type User = {
    id: number;
    email: string;
    full_name: string;
    role: string;
    is_active: boolean;
    created_at: string;
};

export default function UserManagement() {
    const { token } = useAuth();
    const [users, setUsers] = useState<User[]>([]);
    const [showInvite, setShowInvite] = useState(false);
    const [newUser, setNewUser] = useState({ email: '', full_name: '', role: 'Viewer' });
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';

    useEffect(() => {
        if (token) {
            fetch(`${backendUrl}/users`, {
                headers: { 'Authorization': `Bearer ${token}` }
            })
                .then(res => res.json())
                .then(setUsers)
                .catch(console.error);
        }
    }, [token]);

    const handleInvite = async () => {
        if (!newUser.email || !newUser.full_name) return;

        const res = await fetch(`${backendUrl}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(newUser)
        });

        if (res.ok) {
            const user = await res.json();
            setUsers([...users, user]);
            setShowInvite(false);
            setNewUser({ email: '', full_name: '', role: 'Viewer' });
        }
    };

    return (
        <div className="w-full max-w-[1600px] mx-auto space-y-12 animate-in fade-in duration-700">
            {/* Command Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_rgba(59,130,246,0.6)] animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Identity Plane</span>
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-5xl font-black font-heading tracking-tighter text-premium">Team & Access</h1>
                        <p className="text-muted-foreground text-lg max-w-2xl font-medium leading-relaxed">
                            Manage security personas, cryptographically verified access roles, and organizational permission hierarchies.
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setShowInvite(true)}
                        className="bg-primary text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-primary/30 hover:opacity-90 active:scale-95 flex items-center gap-3 transition-all glow-primary"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"></path></svg>
                        Invite Identity
                    </button>
                </div>
            </div>

            {/* Identity Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <IdentityStat label="Total Personas" value={users.length} sub="Active identifiers" icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>} />
                <IdentityStat label="Privileged" value={users.filter(u => u.role === 'Admin').length} sub="Full authority" color="amber" icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>} />
                <IdentityStat label="External Auditors" value={users.filter(u => u.role === 'Auditor').length} sub="Restricted view" color="blue" icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>} />
                <IdentityStat label="Security Uptime" value="100%" sub="System baseline" color="emerald" icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>} />
            </div>

            {/* Identity Grid Table */}
            <div className="glass-depth rounded-[2.5rem] overflow-hidden shadow-2xl transition-all border border-white/5">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="table-header-elevated">
                            <tr>
                                <th className="px-10 py-6 text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Identity Profile</th>
                                <th className="px-10 py-6 text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Access Role</th>
                                <th className="px-10 py-6 text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Lifecycle Status</th>
                                <th className="px-10 py-6 text-right"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/[0.03]">
                            {users.map(user => (
                                <tr key={user.id} className="group hover:bg-white/[0.02] transition-all cursor-pointer">
                                    <td className="px-10 py-8">
                                        <div className="flex items-center gap-6">
                                            <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-lg font-black text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:scale-105 shadow-inner">
                                                {user.full_name.charAt(0)}
                                            </div>
                                            <div className="space-y-1">
                                                <div className="text-lg font-black text-white group-hover:text-primary transition-colors tracking-tight font-heading leading-none">{user.full_name}</div>
                                                <div className="text-[10px] font-black text-white/20 uppercase tracking-widest">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8">
                                        <span className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${user.role === 'Admin' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20 group-hover:bg-amber-500 group-hover:text-white' :
                                            user.role === 'Auditor' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white' :
                                                'bg-white/5 text-muted-foreground border-white/10 group-hover:bg-white/10 group-hover:text-white'
                                            }`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-10 py-8">
                                        <div className="flex items-center gap-4">
                                            <div className="relative">
                                                <div className={`absolute inset-0 rounded-full blur-[8px] opacity-40 ${user.is_active ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                                                <div className={`relative w-2.5 h-2.5 rounded-full ${user.is_active ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                                            </div>
                                            <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${user.is_active ? 'text-emerald-500' : 'text-rose-500'}`}>
                                                {user.is_active ? 'Active Identifier' : 'Deactivated'}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8 text-right">
                                        <button className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/20 hover:text-primary hover:bg-primary/10 transition-all active:scale-90">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 12h.01M12 12h.01M12 12h.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {users.length === 0 && (
                        <div className="p-20 text-center text-muted-foreground font-black uppercase tracking-widest text-[10px] animate-pulse">Syncing Identifiers...</div>
                    )}
                </div>
            </div>

            {/* Invitation Overlay */}
            {showInvite && (
                <div className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-3xl flex items-center justify-center p-8 animate-in fade-in duration-300">
                    <div className="w-full max-w-2xl bg-card border border-white/5 rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-400 relative">
                        <div className="p-12 space-y-10">
                            <div className="space-y-4 text-center">
                                <h2 className="text-4xl font-black font-heading tracking-tighter text-white">Generate Invitation</h2>
                                <p className="text-muted-foreground text-lg font-medium">Provision a new cryptographic security identity.</p>
                            </div>

                            <div className="space-y-6">
                                <FormBox label="Identity Full Name" value={newUser.full_name} onChange={v => setNewUser({ ...newUser, full_name: v })} placeholder="e.g. John Wick" />
                                <FormBox label="Primary Email Endpoint" value={newUser.email} onChange={v => setNewUser({ ...newUser, email: v })} placeholder="name@company.com" />

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-4">Access Authority</label>
                                    <select
                                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-6 text-white focus:border-primary/50 outline-none appearance-none font-bold text-lg cursor-pointer transition-all hover:bg-white/[0.05]"
                                        value={newUser.role}
                                        onChange={e => setNewUser({ ...newUser, role: e.target.value })}
                                    >
                                        <option value="Viewer">Viewer (Read Only)</option>
                                        <option value="Editor">Editor (Write Access)</option>
                                        <option value="Admin">Administrator (Root)</option>
                                        <option value="Auditor">Compliance Auditor</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button onClick={() => setShowInvite(false)} className="flex-1 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] text-muted-foreground hover:bg-white/5 transition-all">Revoke</button>
                                <button onClick={handleInvite} className="flex-[2] py-6 bg-primary rounded-2xl text-white font-black uppercase tracking-[0.2em] text-[10px] hover:opacity-90 shadow-2xl shadow-primary/20 transition-all glow-primary">Confirm & Provision</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function IdentityStat({ label, value, sub, icon, color }: { label: string, value: string | number, sub: string, icon: React.ReactNode, color?: string }) {
    const colorMap: any = {
        amber: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
        blue: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
        emerald: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
        default: 'bg-white/[0.02] text-white border-white/5'
    };
    const style = color ? colorMap[color] : colorMap.default;

    return (
        <div className="glass-depth p-8 rounded-[2.5rem] group hover:border-primary/30 transition-all duration-500 cursor-default">
            <div className="flex justify-between items-start mb-10">
                <div className={`w-14 h-14 rounded-2xl ${style} flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500`}>
                    {icon}
                </div>
                <div className="text-[8px] font-black text-white/10 uppercase tracking-[0.3em] font-mono">SYS_ID: {Math.random().toString(36).substring(7).toUpperCase()}</div>
            </div>
            <div className="space-y-1">
                <div className="text-4xl font-black text-white tracking-tighter tabular-nums group-hover:text-primary transition-colors font-heading leading-none">{value}</div>
                <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">{label}</div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/[0.03] text-[9px] font-black text-white/20 uppercase tracking-widest flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                {sub}
            </div>
        </div>
    );
}

function FormBox({ label, value, onChange, placeholder }: { label: string, value: string, onChange: (v: string) => void, placeholder: string }) {
    return (
        <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-4">{label}</label>
            <input
                className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-6 text-white focus:border-primary/50 outline-none font-bold text-lg placeholder:text-white/10 transition-all hover:bg-white/[0.05]"
                value={value}
                onChange={e => onChange(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    );
}
