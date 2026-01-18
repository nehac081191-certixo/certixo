"use client";

import { useState, useEffect } from 'react';

export default function FileUploader({ onUploadSuccess }: { onUploadSuccess: () => void }) {
    const [file, setFile] = useState<File | null>(null);
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    // Dynamic State
    const [frameworks, setFrameworks] = useState<{ id: number, name: string }[]>([]);
    const [controls, setControls] = useState<{ id: number, code: string, name: string }[]>([]);

    const [selectedFrameworkId, setSelectedFrameworkId] = useState<number | null>(null);
    const [selectedControlId, setSelectedControlId] = useState<number | null>(null);

    // Fetch Frameworks on load
    useEffect(() => {
        fetch('http://localhost:8000/frameworks')
            .then(res => res.json())
            .then(data => {
                setFrameworks(data);
                if (data.length > 0) setSelectedFrameworkId(data[0].id);
            })
            .catch(err => console.error(err));
    }, []);

    // Fetch Controls when Framework changes
    useEffect(() => {
        if (!selectedFrameworkId) return;
        fetch(`http://localhost:8000/frameworks/${selectedFrameworkId}/controls`)
            .then(res => res.json())
            .then(data => {
                setControls(data);
                setSelectedControlId(null); // Reset control selection
            });
    }, [selectedFrameworkId]);

    const handleUpload = async () => {
        if (!file || !selectedControlId) return;
        setLoading(true);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('control_id', selectedControlId.toString());

        try {
            const res = await fetch('/api/verify-evidence', {
                method: 'POST',
                body: formData,
            });

            const data = await res.json();
            if (res.ok) {
                setResult(data.analysis);
                onUploadSuccess();
            } else {
                setResult('Error: ' + JSON.stringify(data));
            }
        } catch (e) {
            setResult('Error: ' + e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="glass-depth rounded-[3rem] p-12 max-w-4xl mx-auto shadow-2xl border border-white/5 animate-in fade-in zoom-in-95 duration-700">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-2xl shadow-primary/20">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                </div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Evidence Ingestion Pipeline</h2>
                <h3 className="text-4xl font-black font-heading tracking-tighter text-white">Artifact Verification</h3>
            </div>

            <div className="space-y-10">
                {/* Framework Selector */}
                <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-4">Regulatory Framework</label>
                    <div className="flex flex-wrap gap-3">
                        {frameworks.map((fw) => (
                            <button
                                key={fw.id}
                                onClick={() => setSelectedFrameworkId(fw.id)}
                                className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${selectedFrameworkId === fw.id
                                    ? 'bg-primary text-white border-primary shadow-xl shadow-primary/20'
                                    : 'bg-white/5 border-white/5 text-white/40 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {fw.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Control Selector */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-4">Internal Control Mapping</label>
                        <select
                            className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-white font-bold appearance-none outline-none focus:border-primary/50 transition-all cursor-pointer"
                            value={selectedControlId || ''}
                            onChange={(e) => setSelectedControlId(Number(e.target.value))}
                        >
                            <option value="">-- Select Audit Control --</option>
                            {controls.map(c => (
                                <option key={c.id} value={c.id} className="bg-[#0A0A0A]">
                                    {c.code}: {c.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-4">AI Verification Level</label>
                        <div className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-white/40 font-bold select-none italic">
                            Institutional Standard (High Precision)
                        </div>
                    </div>
                </div>

                {/* Dropzone */}
                <div className="border-2 border-dashed border-white/5 rounded-[2rem] p-16 text-center hover:border-primary/30 hover:bg-primary/5 transition-all cursor-pointer group relative"
                    onClick={() => document.getElementById('file-input')?.click()}>
                    <input
                        id="file-input"
                        type="file"
                        className="hidden"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                    <div className="space-y-4">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto text-white/20 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 group-hover:text-white transition-colors">
                            {file ? (
                                <span className="text-primary">{file.name} (READY)</span>
                            ) : (
                                <span>Inject Audit Evidence (PDF/DOCX)</span>
                            )}
                        </div>
                    </div>
                </div>

                <button
                    onClick={handleUpload}
                    disabled={!file || loading}
                    className="w-full py-6 bg-primary text-white rounded-[2rem] font-black uppercase tracking-[0.3em] text-[12px] shadow-2xl shadow-primary/40 hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-20 glow-primary"
                >
                    {loading ? 'Processing Neural Analysis...' : 'Commence Evidence Audit'}
                </button>

                {result && (
                    <div className="mt-12 p-10 bg-white/[0.02] rounded-[2rem] border border-white/5 animate-in slide-in-from-bottom-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                            <h3 className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Auditor Insights Output</h3>
                        </div>
                        <div className="prose prose-invert max-w-none text-white/80 font-medium leading-relaxed">
                            {result}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
