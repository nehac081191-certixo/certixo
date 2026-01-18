"use client";

import React, { useState, useEffect } from 'react';
import FileUploader from "./components/FileUploader";
import HistoryList from "./components/HistoryList";
import IntegrationsList from "./components/IntegrationsList";
import PolicyCenter from "./components/PolicyCenter";
import UserManagement from "./components/UserManagement";
import Copilot from "./components/Copilot";
import { useAuth } from './context/AuthContext';
import { useRouter } from 'next/navigation';
import TrustCenter from "./components/TrustCenter";
import AccessReview from "./components/AccessReview";
import VendorManager from "./components/VendorManager";
import DriftMonitor from "./components/DriftMonitor";
import DataDiscovery from "./components/DataDiscovery";
import DataLineage from "./components/DataLineage";
import EvidenceVault from "./components/EvidenceVault";
import AssetInventory from "./components/AssetInventory";
import PeopleHub from "./components/PeopleHub";
import RiskHub from "./components/RiskHub";
import FrameworkReadiness from "./components/FrameworkReadiness";
import AuditHealth from "./components/AuditHealth";
import ControlExplorer from "./components/ControlExplorer";
import AIAuditorPlane from "./components/AIAuditorPlane";
import FrameworkFinder from "./components/FrameworkFinder";
import KnowledgeBase from "./components/KnowledgeBase";
import EnterpriseAdmin from "./components/EnterpriseAdmin";
import ExecutivePulse from "./components/ExecutivePulse";
import EvidencePipeline from "./components/EvidencePipeline";
import AuditExportModal from "./components/AuditExportModal";
import GlobalHeader from "./components/GlobalHeader";
import HUD from "./components/HUD";
import AuditPlanWizard from "./components/AuditPlanWizard";
import AssetsDashboard from "./(trust)/assets/dashboard/page";
import AssetInventoryPage from "./(trust)/assets/inventory/page";
import IntegrationsHub from "./(trust)/assets/integrations/page";
import EvidenceCenter from "./(trust)/assets/evidence/page";

// Icons (Premium SVGs)
const DashboardIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>;
const AnalyzeIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>;
const ConnectIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>;
const PolicyIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>;
const UsersIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>;
const TrustIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
const DiscoveryIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>;
const LineageIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path></svg>;
const AssetsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>;
const PeopleIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>;
const RiskIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>;

export default function Home() {
    const { user, logout, isLoading } = useAuth();
    const router = useRouter();
    const [refreshKey, setRefreshKey] = useState(0);
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');
    const [activeTab, setActiveTab] = useState<'dashboard' | 'ai-auditor' | 'audit-plan' | 'policies' | 'controls' | 'risks' | 'trust' | 'discovery' | 'lineage' | 'inventory' | 'asset-dashboard' | 'integrations-hub' | 'evidence-pipeline' | 'users' | 'people' | 'enterprise' | 'settings'>('dashboard');
    const [isAuditExportOpen, setIsAuditExportOpen] = useState(false);

    React.useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#050505] flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-600 rounded-full animate-spin" />
            </div>
        );
    }

    if (!user) {
        // Landing Page styling remains but with V3 typography care
        return (
            <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
                <header className="px-12 py-8 flex justify-between items-center border-b border-slate-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-black">C</div>
                        <span className="text-2xl font-black font-heading tracking-tighter uppercase italic">Certixo.</span>
                    </div>
                    <div className="flex gap-8 items-center">
                        <button onClick={() => router.push('/login')} className="text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">Login</button>
                        <button onClick={() => router.push('/login')} className="px-8 py-4 bg-indigo-600 text-white rounded-xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all">Get Started</button>
                    </div>
                </header>

                <main className="pt-32 pb-24 px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[10px] font-black uppercase tracking-widest text-indigo-600">
                            The Modern GRC Engine
                        </div>
                        <h1 className="text-8xl font-black font-heading tracking-tighter leading-[1] uppercase italic">
                            Compliance <br /> at <span className="text-indigo-600">Velocity.</span>
                        </h1>
                        <p className="text-xl text-slate-500 max-w-xl font-medium leading-relaxed">
                            Continuous readiness for SOC 2, ISO 27001, and HIPAA. Automated evidence collection with real-time discrepancy resolution.
                        </p>
                        <button onClick={() => router.push('/login')} className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[12px] shadow-2xl shadow-indigo-200 hover:scale-105 transition-all">
                            Start Free Audit
                        </button>
                    </div>
                    <div className="relative">
                        <div className="bg-slate-50 rounded-[3rem] aspect-[4/3] border border-slate-200 shadow-2xl overflow-hidden p-8 flex items-center justify-center">
                            <div className="w-full h-full bg-white rounded-2xl shadow-inner border border-slate-100 p-8 space-y-4">
                                <div className="h-4 w-1/2 bg-slate-100 rounded-full" />
                                <div className="h-4 w-3/4 bg-slate-50 rounded-full" />
                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    <div className="h-32 bg-slate-50 rounded-2xl" />
                                    <div className="h-32 bg-indigo-50 border border-indigo-100 rounded-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    // Authenticated V3 Dashboard
    return (
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#0A0C10] text-white' : 'bg-[#F8FAFC] text-slate-900'} font-sans antialiased transition-colors duration-700`}>
            {/* Sidebar */}
            <aside className={`fixed left-0 top-0 h-full w-[280px] border-r z-40 transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0D0F14] border-white/5' : 'bg-white border-slate-100'}`}>
                <div className="p-8 space-y-12 h-full flex flex-col">
                    <div className="flex items-center gap-3 px-2">
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-black shadow-lg shadow-primary/20">C</div>
                        <div className="flex flex-col">
                            <span className="text-xl font-black font-heading tracking-tighter uppercase italic leading-none">Certixo.</span>
                            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-primary/60 mt-1">V3 Automation</span>
                        </div>
                    </div>

                    <nav className="space-y-8 flex-1 overflow-y-auto no-scrollbar pr-2">
                        <div className="space-y-2">
                            <div className="px-5 mb-2 text-[8px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">Orchestration</div>
                            <NavButton active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} icon={<DashboardIcon />} label="Dashboard" />
                            <NavButton active={activeTab === 'ai-auditor'} onClick={() => setActiveTab('ai-auditor')} icon={<ConnectIcon />} label="AI Copilot" />
                        </div>

                        <div className="space-y-2">
                            <div className="px-5 mb-2 text-[8px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">Compliance</div>
                            <NavButton active={activeTab === 'audit-plan'} onClick={() => setActiveTab('audit-plan')} icon={<AnalyzeIcon />} label="Audit Center" />
                            <NavButton active={activeTab === 'evidence-pipeline'} onClick={() => setActiveTab('evidence-pipeline')} icon={<PolicyIcon />} label="Evidence Tasks" />
                        </div>

                        <div className="space-y-2">
                            <div className="px-5 mb-2 text-[8px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">Architecture</div>
                            <NavButton active={activeTab === 'policies'} onClick={() => setActiveTab('policies')} icon={<PolicyIcon />} label="Policies" />
                            <NavButton active={activeTab === 'controls'} onClick={() => setActiveTab('controls')} icon={<AnalyzeIcon />} label="Controls" />
                            <NavButton active={activeTab === 'risks'} onClick={() => setActiveTab('risks')} icon={<RiskIcon />} label="Risk" />
                        </div>

                        <div className="space-y-2">
                            <div className="px-5 mb-2 text-[8px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">Infrastructure</div>
                            <NavButton active={activeTab === 'asset-dashboard'} onClick={() => setActiveTab('asset-dashboard')} icon={<DashboardIcon />} label="Fleet View" />
                            <NavButton active={activeTab === 'inventory'} onClick={() => setActiveTab('inventory')} icon={<AssetsIcon />} label="Asset Vault" />
                            <NavButton active={activeTab === 'integrations-hub'} onClick={() => setActiveTab('integrations-hub')} icon={<ConnectIcon />} label="Cloud Sync" />
                            <NavButton active={activeTab === 'discovery'} onClick={() => setActiveTab('discovery')} icon={<DiscoveryIcon />} label="Discovery" />
                        </div>

                        <div className="space-y-2">
                            <div className="px-5 mb-2 text-[8px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">Identity & Trust</div>
                            <NavButton active={activeTab === 'people'} onClick={() => setActiveTab('people')} icon={<PeopleIcon />} label="Personnel" />
                            <NavButton active={activeTab === 'trust'} onClick={() => setActiveTab('trust')} icon={<TrustIcon />} label="Public Desk" />
                        </div>

                        {((user as any).role === 'certixo_admin' || (user as any).role === 'tenant_admin') && (
                            <div className="space-y-2">
                                <div className="px-5 mb-2 text-[8px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">Governance</div>
                                {(user as any).role === 'certixo_admin' && <NavButton active={activeTab === 'enterprise'} onClick={() => setActiveTab('enterprise')} icon={<AnalyzeIcon />} label="Enterprise" />}
                                <NavButton active={activeTab === 'users'} onClick={() => setActiveTab('users')} icon={<UsersIcon />} label="Members" />
                            </div>
                        )}
                    </nav>

                    <div className="pt-8 border-t border-border/10 space-y-4">
                        <div className="flex items-center gap-3 px-4 group cursor-pointer" onClick={() => logout()}>
                            <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-[10px] font-black uppercase italic group-hover:bg-primary group-hover:text-white transition-all">{(user as any).full_name.charAt(0)}</div>
                            <div className="flex-1 overflow-hidden">
                                <div className="text-[10px] font-black truncate uppercase tracking-tight">{(user as any).full_name}</div>
                                <div className="text-[8px] font-black text-muted-foreground truncate uppercase">{(user as any).role}</div>
                            </div>
                        </div>
                        <button onClick={() => setActiveTab('settings')} className="w-full py-4 rounded-xl border border-border text-[9px] font-black uppercase tracking-widest hover:bg-foreground/5 transition-all text-muted-foreground active:scale-[0.98]">System Control</button>
                    </div>
                </div>
            </aside>

            {/* Main Stage */}
            <main className="ml-[280px] p-12 relative min-h-screen">
                <div className="max-w-[1600px] mx-auto space-y-16">
                    <GlobalHeader
                        title={activeTab === 'dashboard' ? 'Operational Hub' : activeTab}
                        breadcrumb="Institution"
                        theme={theme}
                        onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        actions={
                            <button onClick={() => setIsAuditExportOpen(true)} className="px-8 py-4 bg-foreground text-background rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">Export Audit Manifest</button>
                        }
                    />

                    {activeTab === 'dashboard' && (
                        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-2 duration-700">
                            <HUD
                                status={{ label: 'Aggregated Health', value: '94.2%', color: 'emerald' }}
                                nextAction={{ label: 'Remediate S3 Public Access Discrepancy (APAC)', onClick: () => setActiveTab('controls') }}
                                risk={{ label: 'Unmitigated Threats', count: 3 }}
                                evidence={{ label: 'Synchronized Evidence', count: 1242, onClick: () => setActiveTab('inventory') }}
                                quickExport={{ label: 'Audit Export', onClick: () => setIsAuditExportOpen(true) }}
                            />

                            <section className="space-y-10">
                                <div className="space-y-2">
                                    <div className="text-[10px] font-black text-primary uppercase tracking-[0.4em] pl-4 border-l-2 border-primary">Continuous Orchestration</div>
                                    <h3 className="text-3xl font-black font-heading tracking-tighter uppercase italic">Framework Pulse.</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    <FrameworkCard name="SOC 2 Type II" desc="Infrastructure Security standards." icon="🔒" color="blue" />
                                    <FrameworkCard name="ISO 27001" desc="ISMS Management Standards." icon="🌐" color="emerald" />
                                    <FrameworkCard name="HIPAA Health" desc="PHI Sovereignty architecture." icon="🏥" color="rose" />
                                    <FrameworkCard name="GDPR Privacy" desc="EU Personal Data compliance." icon="🇪🇺" color="indigo" />
                                </div>
                            </section>

                            <section className="glass-depth p-12 rounded-[3.5rem] border border-border bg-card/5">
                                <details open className="group">
                                    <summary className="list-none flex justify-between items-end cursor-pointer">
                                        <div className="space-y-2">
                                            <div className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-[0.4em]">Audit Trail</div>
                                            <h3 className="text-2xl font-black font-heading tracking-tighter uppercase italic">Institutional Proof.</h3>
                                        </div>
                                        <div className="text-[9px] font-black text-muted-foreground group-open:rotate-180 transition-transform px-4 italic uppercase tracking-widest">History ▼</div>
                                    </summary>
                                    <div className="pt-12">
                                        <HistoryList refreshTrigger={refreshKey} />
                                    </div>
                                </details>
                            </section>
                        </div>
                    )}

                    {activeTab === 'ai-auditor' && <AIAuditorPlane />}
                    {activeTab === 'audit-plan' && <AuditPlanWizard />}
                    {activeTab === 'policies' && <PolicyCenter />}
                    {activeTab === 'controls' && <ControlExplorer />}
                    {activeTab === 'risks' && <RiskHub />}
                    {activeTab === 'asset-dashboard' && <AssetsDashboard />}
                    {activeTab === 'inventory' && <AssetInventoryPage />}
                    {activeTab === 'integrations-hub' && <IntegrationsHub />}
                    {activeTab === 'evidence-pipeline' && <EvidenceCenter />}
                    {activeTab === 'users' && <UserManagement />}
                    {activeTab === 'discovery' && <DataDiscovery />}
                    {activeTab === 'lineage' && <DataLineage />}
                    {activeTab === 'trust' && <TrustCenter />}
                    {activeTab === 'people' && <PeopleHub />}
                    {activeTab === 'enterprise' && <EnterpriseAdmin />}
                    {activeTab === 'settings' && (
                        <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
                            <div className="text-center space-y-4">
                                <h3 className="text-5xl font-black font-heading tracking-tighter uppercase italic leading-none">Appearance.</h3>
                                <p className="text-lg font-medium text-muted-foreground">Calibration of the institutional sensory system.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div onClick={() => setTheme('dark')} className={`glass-depth p-12 rounded-[3.5rem] border transition-all cursor-pointer group hover:scale-[1.02] ${theme === 'dark' ? 'border-primary shadow-2xl' : 'border-border/10 opacity-50'}`}>
                                    <div className="w-20 h-20 rounded-[2rem] bg-[#0D0F14] border border-white/10 flex items-center justify-center text-4xl mb-10 group-hover:rotate-12 transition-transform">🌌</div>
                                    <h4 className="text-3xl font-black mb-3 uppercase italic leading-none">Obsidian</h4>
                                </div>
                                <div onClick={() => setTheme('light')} className={`glass-depth p-12 rounded-[3.5rem] border transition-all cursor-pointer group hover:scale-[1.02] ${theme === 'light' ? 'border-primary shadow-2xl' : 'border-border/10 opacity-50'}`}>
                                    <div className="w-20 h-20 rounded-[2rem] bg-white border border-slate-100 flex items-center justify-center text-4xl mb-10 group-hover:-rotate-12 transition-transform">☀️</div>
                                    <h4 className="text-3xl font-black mb-3 uppercase italic leading-none">Paper</h4>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <AuditExportModal isOpen={isAuditExportOpen} onClose={() => setIsAuditExportOpen(false)} />
            </main>
        </div>
    );
}

function NavButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-[10.5px] font-black uppercase tracking-[0.1em] transition-all relative group h-[48px] ${active
                ? 'bg-primary/5 text-primary'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted-main'
                }`}
        >
            {active && <div className="absolute left-[-2px] top-[8px] bottom-[8px] w-[3px] bg-primary rounded-r-lg shadow-[2px_0_10px_rgba(124,58,237,0.3)]" />}
            <span className={`transition-all ${active ? 'text-primary' : 'opacity-40 group-hover:opacity-100'}`}>{icon}</span>
            <span className="tracking-tighter">{label}</span>
        </button>
    );
}

function FrameworkCard({ name, desc, icon, color }: { name: string, desc: string, icon: string, color: string }) {
    const colorStyles: any = {
        blue: 'bg-blue-500/10 border-blue-500/20 text-blue-500',
        emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500',
        rose: 'bg-rose-500/10 border-rose-500/20 text-rose-500',
        indigo: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-500',
    };

    return (
        <div className="glass-depth p-10 rounded-[2.5rem] border border-border group hover:border-primary/20 transition-all cursor-default relative overflow-hidden">
            <div className={`w-14 h-14 rounded-2xl ${colorStyles[color]} flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform shadow-inner`}>{icon}</div>
            <h4 className="text-xl font-black font-heading tracking-tight text-foreground mb-2 leading-none uppercase italic">{name}</h4>
            <p className="text-sm font-medium text-muted-foreground leading-relaxed italic opacity-70">{desc}</p>
        </div>
    );
}
