import { useState } from 'react';

// Accomplishments Component
export const Accomplishments = () => {
    const accomplishments = [
        {
            title: "GSS - Global Startup Winner",
            icon: "fas fa-trophy",
            color: "#FFD700",
            image: "/path/to/gss-image.jpg", // Replace with actual image path
            description: "Won the prestigious Global Startup Summit competition, showcasing innovative solutions in AI and machine learning."
        },
        {
            title: "Corporate Trainer - ML Bootcamp",
            icon: "fas fa-chalkboard-teacher",
            color: "#4285F4",
            image: "/path/to/trainer-image.jpg", // Replace with actual image path
            description: "Conducted comprehensive Machine Learning bootcamp for LVA, training aspiring data scientists and ML engineers."
        }
    ];

    const certifications = [
        { name: "AWS Associate Solution Architect", icon: "fab fa-aws", color: "#FF9900" },
        { name: "GCP Professional Data Engineer", icon: "fab fa-google", color: "#4285F4" }
    ];

    const contributions = [
        { title: "Toastmaster International", icon: "fas fa-microphone", color: "#E74C3C" },
        { title: "GEN AI & Technical Books", icon: "fas fa-book", color: "#9B59B6" }
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="flex items-center justify-center gap-3 text-3xl md:text-4xl font-bold mb-12">
                <i className="fas fa-medal text-gray-700"></i>
                <h2>Accomplishments</h2>
            </div>

            {/* Major Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {accomplishments.map((item, index) => (
                    <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 overflow-hidden hover:shadow-2xl transition-all duration-300">
                        <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                            <i className={`${item.icon} text-7xl`} style={{ color: item.color }}></i>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                                <i className={item.icon} style={{ color: item.color }}></i>
                                {item.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Certifications */}
            <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <i className="fas fa-certificate text-[#4285F4]"></i>
                    Certifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                        <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center">
                                    <i className={`${cert.icon} text-3xl`} style={{ color: cert.color }}></i>
                                </div>
                                <h4 className="font-bold text-gray-800 text-lg">{cert.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Other Contributions */}
            <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <i className="fas fa-hands-helping text-[#4285F4]"></i>
                    Contributions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contributions.map((contrib, index) => (
                        <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <i className={`${contrib.icon} text-3xl`} style={{ color: contrib.color }}></i>
                                <h4 className="font-bold text-gray-800 text-lg">{contrib.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Education Component
export const Education = () => {
    const education = [
        {
            degree: "Bachelor of Engineering (Computer Science)",
            period: "2013 - 2017",
            score: "CGPA: 7.7",
            icon: "fas fa-graduation-cap",
            color: "#4285F4"
        },
        {
            degree: "Higher Secondary Education",
            period: "2013",
            score: "91%",
            icon: "fas fa-school",
            color: "#34A853"
        },
        {
            degree: "High School",
            period: "2011",
            score: "96%",
            icon: "fas fa-book-reader",
            color: "#FBBC04"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="flex items-center justify-center gap-3 text-3xl md:text-4xl font-bold mb-12">
                <i className="fas fa-user-graduate text-gray-700"></i>
                <h2>Education</h2>
            </div>

            <div className="relative">
                {/* Timeline line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#4285F4] via-[#34A853] to-[#FBBC04]"></div>

                {education.map((edu, index) => (
                    <div key={index} className={`relative mb-8 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
                        <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 w-full md:w-5/6">
                                <div className="flex items-start gap-4">
                                    <div 
                                        className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: `${edu.color}20` }}
                                    >
                                        <i className={`${edu.icon} text-2xl`} style={{ color: edu.color }}></i>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-gray-800 text-xl mb-2">{edu.degree}</h3>
                                        <div className="flex flex-wrap gap-4 text-gray-600">
                                            <span className="flex items-center gap-2">
                                                <i className="fas fa-calendar-alt" style={{ color: edu.color }}></i>
                                                {edu.period}
                                            </span>
                                            <span className="flex items-center gap-2 font-bold" style={{ color: edu.color }}>
                                                <i className="fas fa-chart-line"></i>
                                                {edu.score}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Timeline dot */}
                        <div 
                            className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg"
                            style={{ backgroundColor: edu.color }}
                        ></div>
                    </div>
                ))}
            </div>

            {/* LinkedIn */}
            <div className="mt-12 text-center">
                <a 
                    href="https://www.linkedin.com/in/prakash-thavamurugan-3207a47a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#0077B5] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                    <i className="fab fa-linkedin text-2xl"></i>
                    Connect on LinkedIn
                    <i className="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    );
};

// AI Projects Component
export const AIProjects = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const projects = {
        supervised: [
            { name: "Linear Regression", category: "Regression", icon: "fas fa-chart-line" },
            { name: "Logistic Regression", category: "Classification", icon: "fas fa-project-diagram" },
            { name: "Decision Tree", category: "Classification", icon: "fas fa-sitemap" },
            { name: "Random Forest", category: "Classification", icon: "fas fa-tree" },
            { name: "KNN Classifier", category: "Classification", icon: "fas fa-map-marked-alt" },
            { name: "Bagging & Boosting", category: "Classification", icon: "fas fa-layer-group" }
        ],
        unsupervised: [
            { name: "K-Means Clustering", category: "Clustering", icon: "fas fa-circle-notch" }
        ],
        recommendation: [
            { name: "Matrix Factorization", category: "Recommender", icon: "fas fa-star" }
        ],
        timeseries: [
            { name: "ARIMA Model", category: "Time Series", icon: "fas fa-clock" },
            { name: "SARIMAX Model", category: "Time Series", icon: "fas fa-history" },
            { name: "Prophet Model", category: "Time Series", icon: "fas fa-chart-area" }
        ],
        nlp: [
            { name: "News Classification", category: "NLP", icon: "fas fa-newspaper" }
        ],
        genai: [
            { name: "Myfashion GPT", category: "Multimodal Search", icon: "fas fa-tshirt" },
            { name: "Bedrock MultiAgent", category: "Agent Orchestration", icon: "fas fa-users-cog" },
            { name: "Agentic AI Evaluation", category: "LLM as Judge", icon: "fas fa-gavel" },
            { name: "Youtube to Blog", category: "Content Generation", icon: "fab fa-youtube" },
            { name: "Crew AI with Bedrock", category: "MultiAgent", icon: "fas fa-robot" },
            { name: "Agentic AI with MCP", category: "Model Context Protocol", icon: "fas fa-brain" }
        ],
        mlops: [
            { name: "MLOps Course Project 1", category: "Deployment", icon: "fas fa-rocket" },
            { name: "MLOps Course Project 2", category: "Pipeline", icon: "fas fa-cogs" }
        ],
        dataanalysis: [
            { name: "Code Basics Project 1", category: "Analytics", icon: "fas fa-chart-bar" },
            { name: "Code Basics Project 2", category: "Analytics", icon: "fas fa-chart-pie" }
        ]
    };

    const categories = [
        { id: 'all', name: 'All Projects', icon: 'fas fa-th', color: '#4285F4' },
        { id: 'supervised', name: 'Supervised Learning', icon: 'fas fa-brain', color: '#34A853' },
        { id: 'unsupervised', name: 'Unsupervised Learning', icon: 'fas fa-project-diagram', color: '#FBBC04' },
        { id: 'genai', name: 'Gen AI', icon: 'fas fa-magic', color: '#EA4335' },
        { id: 'mlops', name: 'MLOps', icon: 'fas fa-tools', color: '#9B59B6' },
        { id: 'nlp', name: 'NLP', icon: 'fas fa-language', color: '#E74C3C' }
    ];

    const getAllProjects = () => {
        return Object.entries(projects).flatMap(([key, items]) => 
            items.map(item => ({ ...item, type: key }))
        );
    };

    const getFilteredProjects = () => {
        if (activeCategory === 'all') return getAllProjects();
        return projects[activeCategory] || [];
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="flex items-center justify-center gap-3 text-3xl md:text-4xl font-bold mb-12">
                <i className="fas fa-project-diagram text-gray-700"></i>
                <h2>AI <span className="text-[#4285F4]">Projects</span></h2>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                            activeCategory === cat.id
                                ? 'bg-white/90 backdrop-blur-sm shadow-lg scale-105'
                                : 'bg-white/60 backdrop-blur-sm hover:bg-white/80'
                        }`}
                        style={{
                            color: activeCategory === cat.id ? cat.color : '#666',
                            borderWidth: '2px',
                            borderColor: activeCategory === cat.id ? cat.color : 'transparent'
                        }}
                    >
                        <i className={cat.icon}></i>
                        {cat.name}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getFilteredProjects().map((project, index) => (
                    <div
                        key={index}
                        className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <i className={`${project.icon} text-xl text-[#4285F4]`}></i>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-gray-800 mb-2 group-hover:text-[#4285F4] transition-colors duration-300">
                                    {project.name}
                                </h3>
                                <span className="inline-block px-3 py-1 bg-blue-50 text-[#4285F4] text-sm rounded-full font-medium">
                                    {project.category}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Example Main Page Usage
const ProfileSection = () => {
    return (
        <div className="min-h-screen">
            <Accomplishments />
            <Education />
            <AIProjects />
        </div>
    );
};

export default ProfileSection;