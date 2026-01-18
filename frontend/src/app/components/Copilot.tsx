"use client";

import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Copilot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string }[]>([
        { role: 'ai', content: 'Hello! I am your Certixo Compliance Copilot. Ask me anything about your policies, audits, or frameworks.' }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = input;
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setInput('');
        setLoading(true);

        try {
            const res = await fetch('/api/ai-proxy/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query: userMsg })
            });
            const data = await res.json();
            setMessages(prev => [...prev, { role: 'ai', content: data.response }]);
        } catch (e) {
            setMessages(prev => [...prev, { role: 'ai', content: "Sorry, I encountered an error connecting to the server." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            {/* Chat Window */}
            {isOpen && (
                <div className="pointer-events-auto mb-4 w-96 max-h-[600px] h-[500px] glass-depth rounded-[2rem] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
                    <div className="p-6 border-b border-white/10 bg-white/5 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                            <span className="font-black text-foreground text-[11px] uppercase tracking-widest">Compliance Copilot</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">✕</button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                        {messages.map((m, i) => (
                            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] font-medium leading-relaxed ${m.role === 'user'
                                    ? 'bg-primary text-primary-foreground rounded-br-none shadow-lg shadow-primary/20'
                                    : 'bg-muted text-foreground rounded-bl-none border border-white/5'
                                    }`}>
                                    {m.role === 'ai' ? (
                                        <div className="prose prose-invert prose-sm max-w-none prose-headings:text-foreground prose-p:text-foreground">
                                            <ReactMarkdown>
                                                {m.content}
                                            </ReactMarkdown>
                                        </div>
                                    ) : m.content}
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div className="flex justify-start">
                                <div className="bg-muted p-4 rounded-2xl rounded-bl-none border border-white/5">
                                    <div className="flex gap-1.5">
                                        <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                        <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                        <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-6 border-t border-white/10 bg-white/5">
                        <div className="flex gap-3">
                            <input
                                type="text"
                                className="flex-1 bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-all placeholder:text-muted-foreground"
                                placeholder="Ask about compliance..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            />
                            <button
                                onClick={handleSend}
                                disabled={loading || !input.trim()}
                                className="w-12 h-12 bg-primary flex items-center justify-center rounded-xl text-primary-foreground hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M12 5l7 7-7 7"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="pointer-events-auto h-14 w-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
            >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                ) : (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                )}
            </button>
        </div>
    );
}
