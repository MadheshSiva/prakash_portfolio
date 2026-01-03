import {useState, useEffect} from "react";

export const SkillsAbilities = () => {
    const [isVisible, setIsVisible] = useState(false);

    const skills = [
        { name: "Problem Solving", value: 80, icon: "fas fa-lightbulb", color: "#FF6B6B" },
        { name: "Generative AI", value: 85, icon: "fas fa-robot", color: "#4ECDC4" },
        { name: "Vector DB", value: 85, icon: "fas fa-database", color: "#45B7D1" },
        { name: "MLOps", value: 80, icon: "fas fa-cogs", color: "#96CEB4" },
        { name: "LLMOps", value: 80, icon: "fas fa-brain", color: "#FFEAA7" },
        { name: "Machine Learning", value: 90, icon: "fas fa-chart-line", color: "#DFE6E9" },
        { name: "Deep Learning", value: 80, icon: "fas fa-network-wired", color: "#74B9FF" },
        { name: "Python", value: 80, icon: "fab fa-python", color: "#3776AB" },
        { name: "DBMS & SQL", value: 80, icon: "fas fa-server", color: "#00758F" },
        { name: "Git/VCS", value: 80, icon: "fab fa-git-alt", color: "#F05032" },
        { name: "AWS", value: 90, icon: "fab fa-aws", color: "#FF9900" },
        { name: "GCP", value: 90, icon: "fab fa-google", color: "#4285F4" },
        { name: "Azure", value: 80, icon: "fab fa-microsoft", color: "#0089D6" },
        { name: "NoSQL", value: 80, icon: "fas fa-fire", color: "#E74C3C" },
        { name: "Probability", value: 80, icon: "fas fa-dice", color: "#9B59B6" },
        { name: "Statistics", value: 80, icon: "fas fa-chart-bar", color: "#16A085" }
    ];

    useEffect(() => {
        // Trigger animation after component mounts
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            {/* Header */}
            <div className="flex items-center justify-center gap-3 text-3xl md:text-4xl font-bold mb-12">
                <i className="fas fa-tools text-gray-700"></i>
                <h2>Skills & <span className="text-[#4285F4]">Abilities</span></h2>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
                        style={{ animationDelay: `${index * 50}ms` }}
                    >
                        {/* Skill Header */}
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <div 
                                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                                    style={{ backgroundColor: `${skill.color}20` }}
                                >
                                    <i 
                                        className={`${skill.icon} text-lg`}
                                        style={{ color: skill.color }}
                                    ></i>
                                </div>
                                <span className="font-bold text-gray-800 text-lg">
                                    {skill.name}
                                </span>
                            </div>
                            <span 
                                className="font-bold text-xl"
                                style={{ color: skill.color }}
                            >
                                {skill.value}%
                            </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out"
                                style={{
                                    width: isVisible ? `${skill.value}%` : '0%',
                                    backgroundColor: skill.color,
                                    boxShadow: `0 0 10px ${skill.color}50`
                                }}
                            >
                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};