import About_img from "../../assets/prakash_pic.jpeg"

const AboutPage = () => {
    return(
        <article className="max-w-5xl mx-auto px-6 py-12">
            {/* Header */}
            <div className="flex items-center justify-center gap-3 text-3xl md:text-4xl font-bold mb-12">
                <i className="fas fa-user-alt text-gray-700"></i>
                <h2>About <span className="text-[#4285F4]">Me</span></h2>
            </div>
            
            {/* Profile Image */}
            <div className="mb-12">
                <img 
                    src={About_img} 
                    alt="Prakash Thavamurugan" 
                    className="w-48 h-48 md:w-56 md:h-56 rounded-full mx-auto shadow-lg object-cover border-4 border-white/80"
                />
            </div>
            
            {/* Main Content */}
            <div className="space-y-8">
                {/* Introduction */}
                <div className="text-center space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                        I'm Prakash Thavamurugan
                    </h3>
                    <p className="text-lg md:text-xl text-[#4285F4] font-semibold">
                        Senior Data Scientist | GEN AI Engineer | Life Long Learner
                    </p>
                </div>
                
                {/* Professional Summary - Transparent Background */}
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-white/50">
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <i className="fas fa-briefcase text-[#4285F4] text-xl mt-1"></i>
                            <p className="text-gray-800 leading-relaxed font-medium">
                                Data Scientist at <a 
                                    href="https://llmatscale.ai" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-[#4285F4] font-bold hover:underline"
                                >
                                    LLM AI India Private Limited
                                </a> with more than 7 years of experience.
                            </p>
                        </div>
                        
                        <div className="flex items-start gap-3">
                            <i className="fas fa-search text-[#4285F4] text-xl mt-1"></i>
                            <p className="text-gray-800 leading-relaxed font-medium">
                                Looking for opportunities and collaborations in the field of Machine Learning & Artificial Intelligence. ✅
                            </p>
                        </div>
                        
                        <div className="flex items-start gap-3">
                            <i className="fas fa-rocket text-[#4285F4] text-xl mt-1"></i>
                            <p className="text-gray-800 leading-relaxed font-medium">
                                Seeking opportunities to work in an energetic environment where I can uphold myself & the team. 💪
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Objective - Transparent Background */}
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border-l-4 border-[#4285F4]">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <i className="fas fa-bullseye text-[#4285F4]"></i>
                        Objective
                    </h4>
                    <p className="text-gray-800 leading-relaxed font-medium">
                        Seeking a job in a more challenging and healthy work environment where I can utilize and enhance my skills and knowledge for organizational growth and commit myself to an organization.
                    </p>
                </div>
                
                {/* Call to Action */}
                <div className="text-center pt-6">
                    <button onClick={() => { const element = document.getElementById('contact'); if (element) element.scrollIntoView({ behavior: 'smooth' }); }} className="bg-[#4285F4] text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200">
                        <i className="fas fa-envelope mr-2"></i>
                        Get In Touch
                    </button>
                </div>
            </div>
        </article>
    )
}

export default AboutPage;