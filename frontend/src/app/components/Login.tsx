"use client";

import { useState, useEffect } from 'react';

type User = {
    id: number;
    email: string;
    full_name: string;
    company: string;
    role: string;
};

export default function Login({ onLogin, onClose }: { onLogin: (user: User) => void, onClose?: () => void }) {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 2000));

        Promise.race([
            fetch('http://localhost:8000/users'),
            timeout
        ])
            .then(res => (res as Response).json())
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    setUsers(data);
                } else {
                    throw new Error("No users found");
                }
            })
            .catch(err => {
                console.log("Using fallback users due to:", err);
                setUsers([
                    { id: 1, email: "superadmin@certixo.com", full_name: "System Super Admin", company: "Certixo HQ", role: "certixo_admin" },
                    { id: 2, email: "admin@techcorp.io", full_name: "TechCorp Admin", company: "TechCorp Global", role: "tenant_admin" },
                    { id: 3, email: "auditor@deloitte.com", full_name: "External Auditor", company: "Review Partners", role: "external_auditor" },
                    { id: 4, email: "dev@techcorp.io", full_name: "Lead Engineer", company: "TechCorp Global", role: "contributor" }
                ]);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="min-h-screen bg-black/90 flex items-center justify-center p-4 relative z-50">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 w-full max-w-md bg-[#111] border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-xl animate-in zoom-in-95 duration-200">
                {onClose && (
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
                    >
                        ✕
                    </button>
                )}
                <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg mx-auto flex items-center justify-center text-xl font-bold text-white mb-4 shadow-lg shadow-blue-500/20">
                        C
                    </div>
                    <h1 className="text-2xl font-bold text-white">Welcome to Certixo</h1>
                    <p className="text-gray-400 mt-2 text-sm">Select a persona to continue</p>
                </div>

                {loading ? (
                    <div className="text-center text-gray-500 py-8">Loading users...</div>
                ) : (
                    <div className="space-y-3">
                        {users.map(u => (
                            <button
                                key={u.id}
                                onClick={() => onLogin(u)}
                                className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-blue-500/30 transition-all group group-hover:shadow-lg"
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="font-semibold text-white group-hover:text-blue-400 transition-colors">{u.full_name}</div>
                                        <div className="text-xs text-gray-500">{u.company} • {u.role}</div>
                                    </div>
                                    <div className="text-gray-600 group-hover:text-blue-400">→</div>
                                </div>
                            </button>
                        ))}
                    </div>
                )}

                <div className="mt-8 text-center border-t border-white/5 pt-6">
                    <p className="text-xs text-gray-600">Enterprise Grade Compliance & Audit Automation</p>
                </div>
            </div>
        </div>
    );
}
