import { useState, useEffect } from 'react';

// Programming Profiles Component
export const ProgrammingProfiles = () => {
    const profiles = [
        {
            name: "HackerRank",
            url: "https://www.hackerrank.com/profile/Prakash059",
            icon: "fab fa-hackerrank",
            color: "#00EA64",
            bgColor: "bg-green-50"
        },
        {
            name: "LeetCode",
            url: "https://leetcode.com/u/PrakashThavamurugan/",
            icon: "fas fa-code",
            color: "#FFA116",
            bgColor: "bg-orange-50"
        },
        {
            name: "GitHub",
            url: "https://github.com/Prakash059",
            icon: "fab fa-github",
            color: "#171515",
            bgColor: "bg-gray-50"
        }
    ];

    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            {/* Header */}
            <div className="flex items-center justify-center gap-3 text-3xl md:text-4xl font-bold mb-12">
                <i className="fas fa-code text-gray-700"></i>
                <h2>Programming <span className="text-[#4285F4]">Profiles</span></h2>
            </div>

            {/* Profile Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {profiles.map((profile, index) => (
                    <a
                        key={index}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                    >
                        <div className={`${profile.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                            <i 
                                className={`${profile.icon} text-3xl`}
                                style={{ color: profile.color }}
                            ></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                            {profile.name}
                        </h3>
                        <div className="flex items-center justify-center gap-2 text-[#4285F4] font-medium">
                            <span>Visit Profile</span>
                            <i className="fas fa-external-link-alt text-sm group-hover:translate-x-1 transition-transform duration-300"></i>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};