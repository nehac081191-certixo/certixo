"use client";

import { useState, useEffect } from 'react';

type Employee = {
    id: number;
    full_name: string;
    email: string;
    department: string;
    title: string;
    location: string;
    skills: string;
    trainings: { training: { title: string }, status: string }[];
};

export default function PeopleHub() {
    const [people, setPeople] = useState<Employee[]>([]);
    const [activeTab, setActiveTab] = useState<'Directory' | 'LMS' | 'Skills'>('Directory');

    useEffect(() => {
        fetch('http://localhost:8000/people')
            .then(res => res.json())
            .then(setPeople)
            .catch(console.error);
    }, []);

    // Derived states
    const allSkills = Array.from(new Set(people.flatMap(p => p.skills ? p.skills.split(', ') : [])));

    return (
        <div className="w-full max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-white">People Hub</h2>
                    <p className="text-gray-400 text-sm">Skills, Competencies, and Learning Management.</p>
                </div>
                <div className="flex gap-3">
                    <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        Connect Active Directory
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                        + Add Employee
                    </button>
                </div>
            </div>

            {/* Hub Switcher */}
            <div className="flex gap-4 border-b border-white/5 pb-1 mb-8">
                {['Directory', 'LMS', 'Skills'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab as any)}
                        className={`px-4 py-2 text-sm font-medium transition-all ${activeTab === tab
                                ? 'text-teal-400 border-b-2 border-teal-500'
                                : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {activeTab === 'Directory' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {people.map(emp => (
                        <div key={emp.id} className="bg-[#111] border border-white/5 rounded-xl p-6 hover:border-teal-500/30 transition-all group">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-teal-600 to-blue-600 flex items-center justify-center text-lg font-bold text-white">
                                        {emp.full_name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">{emp.full_name}</div>
                                        <div className="text-xs text-gray-400">{emp.title}</div>
                                    </div>
                                </div>
                                <div className="text-xs bg-white/5 px-2 py-1 rounded text-gray-400">{emp.location}</div>
                            </div>
                            <div className="space-y-3">
                                <div className="text-xs">
                                    <span className="text-gray-500 uppercase font-bold tracking-wider">Department</span>
                                    <div className="text-gray-300">{emp.department}</div>
                                </div>
                                <div className="text-xs">
                                    <span className="text-gray-500 uppercase font-bold tracking-wider">Core Skills</span>
                                    <div className="flex flex-wrap gap-1 mt-1">
                                        {emp.skills?.split(', ').map(skill => (
                                            <span key={skill} className="bg-teal-500/10 text-teal-400 px-1.5 py-0.5 rounded border border-teal-500/20">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
                                <span className="text-xs text-gray-500">{emp.email}</span>
                                <button className="text-xs text-teal-400 hover:text-teal-300 opacity-0 group-hover:opacity-100 transition-opacity">View Profile →</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === 'LMS' && (
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-white/5 p-4 rounded-lg">
                            <div className="text-gray-400 text-xs mb-1">Completion Rate</div>
                            <div className="text-2xl font-bold text-white">78%</div>
                            <div className="w-full bg-white/10 h-1 mt-2 rounded-full overflow-hidden">
                                <div className="bg-green-500 h-full w-[78%]"></div>
                            </div>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg">
                            <div className="text-gray-400 text-xs mb-1">Overdue Trainings</div>
                            <div className="text-2xl font-bold text-red-500">12</div>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg">
                            <div className="text-gray-400 text-xs mb-1">Active Courses</div>
                            <div className="text-2xl font-bold text-blue-400">14</div>
                        </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-4">Assigned Programs</h3>
                    <div className="bg-[#0A0A0A] border border-white/5 rounded-xl overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-white/5 text-gray-400 text-xs uppercase font-semibold">
                                <tr>
                                    <th className="p-4">Employee</th>
                                    <th className="p-4">Course</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4">Due Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-sm text-gray-300">
                                {people.flatMap(p => p.trainings.map(t => ({ ...t, empName: p.full_name }))).map((record, i) => (
                                    <tr key={i} className="hover:bg-white/5">
                                        <td className="p-4 font-medium text-white">{record.empName}</td>
                                        <td className="p-4">{record.training.title}</td>
                                        <td className="p-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${record.status === 'Completed' ? 'bg-green-500/10 text-green-500' :
                                                    'bg-yellow-500/10 text-yellow-500'
                                                }`}>
                                                {record.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-gray-500">Oct 24, 2024</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {activeTab === 'Skills' && (
                <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-8">
                    <h3 className="text-lg font-bold text-white mb-6">Organizational Competency Matrix</h3>
                    <div className="flex flex-wrap gap-2">
                        {allSkills.map(skill => (
                            <div key={skill} className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-4 w-48 transition-all cursor-pointer">
                                <div className="text-teal-400 font-bold mb-1">{skill}</div>
                                <div className="text-xs text-gray-400">
                                    {people.filter(p => p.skills?.includes(skill)).length} People
                                </div>
                                <div className="flex -space-x-2 mt-3">
                                    {people.filter(p => p.skills?.includes(skill)).slice(0, 3).map(p => (
                                        <div key={p.id} className="w-6 h-6 rounded-full bg-gray-700 border border-black text-[10px] flex items-center justify-center text-white" title={p.full_name}>
                                            {p.full_name.charAt(0)}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
