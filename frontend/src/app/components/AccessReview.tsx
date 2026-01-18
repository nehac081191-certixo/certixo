"use client";

import { useState, useEffect } from 'react';

type AccessReview = {
    id: number;
    name: string;
    status: string;
    due_date: string;
    created_at: string;
};

type AccessItem = {
    id: number;
    user_name: string;
    user_email: string;
    system: string;
    role: string;
    status: string;
    reviewed_at?: string;
};

export default function AccessReview() {
    const [reviews, setReviews] = useState<AccessReview[]>([]);
    const [activeReviewId, setActiveReviewId] = useState<number | null>(null);
    const [items, setItems] = useState<AccessItem[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = () => {
        fetch('http://localhost:8000/access-reviews')
            .then(res => res.json())
            .then(setReviews)
            .catch(console.error);
    };

    const fetchItems = (id: number) => {
        setLoading(true);
        setActiveReviewId(id);
        fetch(`http://localhost:8000/access-reviews/${id}/items`)
            .then(res => res.json())
            .then(setItems)
            .finally(() => setLoading(false));
    };

    const startReview = async () => {
        const name = `Q${Math.ceil((new Date().getMonth() + 1) / 3)} ${new Date().getFullYear()} User Access Review`;
        await fetch('http://localhost:8000/access-reviews/start', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
        });
        fetchReviews();
    };

    const decideItem = async (itemId: number, decision: "Keep" | "Revoke") => {
        // Optimistic UI update
        setItems(prev => prev.map(i => i.id === itemId ? { ...i, status: decision } : i));

        await fetch(`http://localhost:8000/access-reviews/items/${itemId}/decide`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ decision })
        });
    };

    return (
        <div className="w-full max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-white">Access Reviews</h2>
                    <p className="text-gray-400 text-sm">Automated User Access Certifications (UAR)</p>
                </div>
                <button
                    onClick={startReview}
                    className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all hover:scale-105"
                >
                    + Start New Campaign
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left: Campaign List */}
                <div className="bg-[#111] border border-white/10 rounded-xl p-4 h-fit">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Campaigns</h3>
                    <div className="space-y-2">
                        {reviews.map(r => (
                            <div
                                key={r.id}
                                onClick={() => fetchItems(r.id)}
                                className={`p-4 rounded-lg cursor-pointer transition-all border ${activeReviewId === r.id
                                        ? 'bg-blue-600/10 border-blue-500/50 text-white'
                                        : 'bg-white/5 border-transparent hover:bg-white/10 text-gray-300'
                                    }`}
                            >
                                <div className="font-semibold text-sm">{r.name}</div>
                                <div className="flex justify-between items-center mt-2">
                                    <span className={`text-xs px-2 py-0.5 rounded ${r.status === 'Completed' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-500'
                                        }`}>
                                        {r.status}
                                    </span>
                                    <span className="text-xs text-gray-500">{new Date(r.created_at).toLocaleDateString()}</span>
                                </div>
                            </div>
                        ))}
                        {reviews.length === 0 && <div className="text-gray-500 text-sm text-center py-4">No reviews found. Start one!</div>}
                    </div>
                </div>

                {/* Right: Review Items */}
                <div className="lg:col-span-2 bg-[#111] border border-white/10 rounded-xl p-6 min-h-[400px]">
                    {!activeReviewId ? (
                        <div className="h-full flex flex-col items-center justify-center text-gray-500">
                            <svg className="w-12 h-12 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <p>Select a campaign to view access items</p>
                        </div>
                    ) : (
                        <div>
                            <h3 className="text-lg font-bold text-white mb-6 flex justify-between items-center">
                                Review Entitlements
                                <span className="text-sm font-normal text-gray-400">
                                    {items.filter(i => i.status !== 'Pending').length} / {items.length} Reviewed
                                </span>
                            </h3>

                            {loading ? (
                                <div className="text-center py-12 text-gray-500">Loading entitlements...</div>
                            ) : (
                                <div className="space-y-4">
                                    {items.map(item => (
                                        <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-700 to-gray-800 flex items-center justify-center font-bold text-gray-400 text-sm">
                                                    {item.user_name.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="text-white font-medium">{item.user_name}</div>
                                                    <div className="text-xs text-gray-400">{item.user_email}</div>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <span className="text-[10px] bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded border border-blue-500/20">{item.system}</span>
                                                        <span className="text-[10px] text-gray-500">Role: <strong className="text-gray-300">{item.role}</strong></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                {item.status === 'Pending' ? (
                                                    <>
                                                        <button
                                                            onClick={() => decideItem(item.id, 'Revoke')}
                                                            className="px-4 py-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all text-sm font-medium border border-red-500/20"
                                                        >
                                                            Revoke
                                                        </button>
                                                        <button
                                                            onClick={() => decideItem(item.id, 'Keep')}
                                                            className="px-4 py-2 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500 hover:text-white transition-all text-sm font-medium border border-green-500/20"
                                                        >
                                                            Keep Access
                                                        </button>
                                                    </>
                                                ) : (
                                                    <div className={`px-4 py-2 rounded-lg text-sm font-bold border ${item.status === 'Keep'
                                                            ? 'bg-green-500/10 text-green-500 border-green-500/20'
                                                            : 'bg-red-500/10 text-red-500 border-red-500/20'
                                                        }`}>
                                                        {item.status === 'Keep' ? '✓ Access Kept' : '✕ Revoked'}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
