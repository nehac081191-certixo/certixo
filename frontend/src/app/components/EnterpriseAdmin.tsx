'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

export default function EnterpriseAdmin() {
    const { user } = useAuth();
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';
    const isCertixoAdmin = user?.role === 'certixo_admin';
    const [pendingOrgs, setPendingOrgs] = useState<any[]>([]);
    const [showInviteModal, setShowInviteModal] = useState(false);
    const [inviteData, setInviteData] = useState({ email: '', org_name: '', role: 'contributor' });
    const [inviteLink, setInviteLink] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isCertixoAdmin) {
            fetchPending();
        }
    }, [isCertixoAdmin]);

    const fetchPending = async () => {
        const token = localStorage.getItem('token');
        const res = await fetch(`${backendUrl}/admin/pending-approvals`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (res.ok) {
            const data = await res.json();
            setPendingOrgs(data);
        }
    };

    const handleInvite = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const token = localStorage.getItem('token');

        if (isCertixoAdmin) {
            const res = await fetch(`${backendUrl}/admin/invite-tenant`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ email: inviteData.email, org_name: inviteData.org_name })
            });

            if (res.ok) {
                const data = await res.json();
                setInviteLink(`/onboarding?token=${data.token}`);
            }
        }
        setLoading(false);
    };

    const handleApprove = async (id: number) => {
        const token = localStorage.getItem('token');
        await fetch(`${backendUrl}/admin/approve-tenant/${id}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        fetchPending();
    };

    return (
        <div className="space-y-12 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div className="space-y-2">
                    <h2 className="text-4xl font-black font-heading tracking-tighter text-white uppercase italic">
                        {isCertixoAdmin ? "Enterprise Control Plane" : "Organization Hub"}
                    </h2>
                    <p className="text-white/40 font-medium">
                        {isCertixoAdmin ? "Global governance of tenant organizations and onboarding procedures." : "Manage your organization's workforce and external auditor access."}
                    </p>
                </div>
                <button
                    onClick={() => { setShowInviteModal(true); setInviteLink(''); }}
                    className="px-8 py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl shadow-primary/20 hover:scale-105 transition-all"
                >
                    + {isCertixoAdmin ? "Invite New Tenant" : "Invite Member"}
                </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass-depth p-8 rounded-[2.5rem] border border-white/5 space-y-4">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                        {isCertixoAdmin ? "Active Tenants" : "Internal Members"}
                    </div>
                    <div className="text-5xl font-black tracking-tighter">{isCertixoAdmin ? "142" : "12"}</div>
                </div>
                <div className="glass-depth p-8 rounded-[2.5rem] border border-white/5 border-amber-500/20 space-y-4">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500/60">
                        {isCertixoAdmin ? "Pending Approval" : "External Auditors"}
                    </div>
                    <div className="text-5xl font-black tracking-tighter text-amber-500">{isCertixoAdmin ? pendingOrgs.length : "1"}</div>
                </div>
                <div className="glass-depth p-8 rounded-[2.5rem] border border-white/5 space-y-4">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Instance Health</div>
                    <div className="text-5xl font-black tracking-tighter text-emerald-500">99.2%</div>
                </div>
            </div>

            {/* Main Table View */}
            <div className="glass-depth rounded-[2.5rem] border border-white/5 overflow-hidden">
                <div className="p-8 border-b border-white/5 bg-white/[0.02] flex justify-between items-center">
                    <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-white/40">
                        {isCertixoAdmin ? "Onboarding Queue" : "Organization Roster"}
                    </h3>
                    {!isCertixoAdmin && (
                        <div className="flex gap-4">
                            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">● {user?.company} Enterprise Instance</span>
                        </div>
                    )}
                </div>
                <div className="overflow-x-auto">
                    {isCertixoAdmin ? (
                        <table className="w-full text-left">
                            <thead className="table-header-elevated">
                                <tr>
                                    <th>Organization</th>
                                    <th>KYC Highlights</th>
                                    <th>Submitted At</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {pendingOrgs.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="p-12 text-center text-white/20 font-bold italic">No pending onboarding requests</td>
                                    </tr>
                                ) : pendingOrgs.map((org) => (
                                    <tr key={org.id} className="hover:bg-white/[0.01] transition-colors group">
                                        <td className="p-8">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 font-black">
                                                    {org.name[0]}
                                                </div>
                                                <div>
                                                    <div className="font-black text-white">{org.name}</div>
                                                    <div className="text-[10px] uppercase text-white/40 tracking-widest">{org.domain}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-8">
                                            <div className="space-y-1">
                                                <div className="text-xs font-bold text-white/60">TIN: {org.tax_id}</div>
                                                <div className="text-[9px] uppercase tracking-widest text-white/20">{org.industry} • {org.employee_count} Employees</div>
                                            </div>
                                        </td>
                                        <td className="p-8">
                                            <div className="text-xs font-bold text-white/40">{new Date(org.onboarded_at).toLocaleDateString()}</div>
                                        </td>
                                        <td className="p-8">
                                            <button
                                                onClick={() => handleApprove(org.id)}
                                                className="px-6 py-3 bg-emerald-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20"
                                            >
                                                Approve Tenant
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <table className="w-full text-left">
                            <thead className="table-header-elevated">
                                <tr>
                                    <th>Member</th>
                                    <th>Role</th>
                                    <th>Permissions</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                <tr className="hover:bg-white/[0.01] transition-colors">
                                    <td className="p-8 flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black">{user?.full_name[0]}</div>
                                        <div>
                                            <div className="font-black text-white">{user?.full_name} (You)</div>
                                            <div className="text-[10px] text-white/40">{user?.email}</div>
                                        </div>
                                    </td>
                                    <td className="p-8">
                                        <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-[9px] font-black uppercase tracking-widest border border-indigo-500/20">Tenant Admin</span>
                                    </td>
                                    <td className="p-8 text-xs font-bold text-white/60 text-emerald-400">Full Workspace Access</td>
                                    <td className="p-8 text-emerald-500 text-[10px] font-black uppercase">Active</td>
                                </tr>
                                <tr className="hover:bg-white/[0.01] transition-colors">
                                    <td className="p-8 flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 font-black">M</div>
                                        <div>
                                            <div className="font-black text-white">Marc Andreessen</div>
                                            <div className="text-[10px] text-white/40">marc@a16z.com</div>
                                        </div>
                                    </td>
                                    <td className="p-8">
                                        <span className="px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full text-[9px] font-black uppercase tracking-widest border border-amber-500/20">External Auditor</span>
                                    </td>
                                    <td className="p-8 text-xs font-bold text-white/60">Read-Only Evidence Review</td>
                                    <td className="p-8 text-white/20 text-[10px] font-black uppercase italic">Invited</td>
                                </tr>
                                <tr className="hover:bg-white/[0.01] transition-colors border-t border-white/5">
                                    <td colSpan={4} className="p-8 text-center bg-white/[0.01]">
                                        <button
                                            onClick={() => setShowInviteModal(true)}
                                            className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-primary transition-colors"
                                        >
                                            + Invite Contributors or External Auditors
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            {/* Invite Modal */}
            {showInviteModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-6 animate-in fade-in duration-300">
                    <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setShowInviteModal(false)} />
                    <div className="relative bg-[#0f172a] w-full max-w-lg rounded-[3rem] border border-white/10 p-12 space-y-8 shadow-2xl">
                        <div className="space-y-2">
                            <h3 className="text-3xl font-black font-heading tracking-tighter text-white uppercase italic">
                                {isCertixoAdmin ? "Governance Invite" : "Invite Hub"}
                            </h3>
                            <p className="text-white/40 text-sm">
                                {isCertixoAdmin ? "Issue a secure onboarding link to a new tenant admin." : "Add a contributor or external auditor to your instance."}
                            </p>
                        </div>

                        {!inviteLink ? (
                            <form onSubmit={handleInvite} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-white/20">Recipient Email</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="user@company.com"
                                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold focus:border-primary transition-all"
                                        onChange={(e) => setInviteData({ ...inviteData, email: e.target.value })}
                                    />
                                </div>
                                {!isCertixoAdmin && (
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-white/20">Role Access</label>
                                        <select
                                            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold focus:border-primary transition-all"
                                            onChange={(e) => setInviteData({ ...inviteData, role: e.target.value })}
                                        >
                                            <option value="contributor">Contributor</option>
                                            <option value="external_auditor">External Auditor (Review Only)</option>
                                        </select>
                                    </div>
                                )}
                                {isCertixoAdmin && (
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-white/20">Organization Name</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Enterprise Corp"
                                            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold focus:border-primary transition-all"
                                            onChange={(e) => setInviteData({ ...inviteData, org_name: e.target.value })}
                                        />
                                    </div>
                                )}
                                <button
                                    disabled={loading}
                                    className="w-full py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:scale-[1.02] transition-all disabled:opacity-50"
                                >
                                    {loading ? "Generating Payload..." : isCertixoAdmin ? "Generate Invite Payload" : "Send Organization Invite"}
                                </button>
                            </form>
                        ) : (
                            <div className="space-y-6 animate-in zoom-in-95 duration-500">
                                <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl space-y-3">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Payload Generated Successfully</div>
                                    <div className="bg-black/50 p-4 rounded-xl font-mono text-[11px] text-white/60 break-all border border-white/5">
                                        {isCertixoAdmin ? `http://localhost:3001${inviteLink}` : "Invite Email Sent to Recipient"}
                                    </div>
                                </div>
                                <button
                                    onClick={() => {
                                        if (isCertixoAdmin) navigator.clipboard.writeText(`http://localhost:3001${inviteLink}`);
                                        setShowInviteModal(false);
                                    }}
                                    className="w-full py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:scale-[1.02] transition-all"
                                >
                                    {isCertixoAdmin ? "Copy Link & Close" : "Done"}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
