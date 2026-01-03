import { useLocation, useNavigate } from "react-router-dom"
import placeIcon from "../../assets/location-dot-solid.svg"

const ExperienceList = () => {
    const location = useLocation()
    const navigate = useNavigate()
    
    console.log(location)
    const expList = [location.state]
    console.log(expList)
    
    const handleBack = () => {
        navigate(-1) // Go back to previous page
    }
    
    return (
        <article className="min-h-screen py-12 px-4">
            {expList.length > 0 && expList[0] && (
                <div className="max-w-5xl mx-auto">
                    {/* Back Button */}
                    <button 
                        onClick={handleBack}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 transition-all hover:gap-3"
                    >
                        <i className="fas fa-arrow-left"></i>
                        <span>Back to Experience</span>
                    </button>

                    {/* Main Card Container */}
                    <div className=" p-8 md:p-12">
                        {/* Header Section with Logo and Company Name */}
                        <div className="flex items-center gap-6 mb-6 pb-6 border-b-2 border-blue-100">
                            {expList[0].logo !== "" && (
                                <img 
                                    src={expList[0].logo} 
                                    alt={`${expList[0].company_name} logo`} 
                                    className="w-20 h-20 rounded-lg object-cover shadow-md bg-white p-2" 
                                />
                            )}
                            <h1 className="text-4xl md:text-5xl text-[#39A2DB] font-bold">
                                {expList[0].company_name}
                            </h1>
                        </div>

                        {/* Role and Details Section */}
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8 bg-blue-50 rounded-lg p-6">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                    {expList[0].role}
                                </h2>
                            </div>
                            <div className="flex flex-col items-start md:items-end gap-2">
                                <p className="flex items-center gap-2 text-gray-700 font-semibold">
                                    <i className="far fa-calendar text-blue-600"></i>
                                    {expList[0].period}
                                </p>
                                <p className="flex items-center gap-2 text-gray-700 font-semibold">
                                    <img src={placeIcon} alt="location" className="w-4 h-4" />
                                    {expList[0].location}
                                </p>
                            </div>
                        </div>

                        {/* Key Achievements Section */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <i className="fas fa-trophy text-yellow-500"></i>
                                Key Achievements & Responsibilities
                            </h3>
                            
                            {expList[0]?.about.length > 0 && expList[0].about.map((aboutList, index) => (
                                <ul key={index} className="space-y-4">
                                    {aboutList.aboutsone && (
                                        <li className="flex gap-4 items-start">
                                            <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm mt-1">
                                                1
                                            </span>
                                            <p className="text-gray-700 leading-relaxed flex-1 pt-1">
                                                {aboutList.aboutsone}
                                            </p>
                                        </li>
                                    )}
                                    {aboutList.aboutstwo && (
                                        <li className="flex gap-4 items-start">
                                            <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm mt-1">
                                                2
                                            </span>
                                            <p className="text-gray-700 leading-relaxed flex-1 pt-1">
                                                {aboutList.aboutstwo}
                                            </p>
                                        </li>
                                    )}
                                    {aboutList.aboutsthree && (
                                        <li className="flex gap-4 items-start">
                                            <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm mt-1">
                                                3
                                            </span>
                                            <p className="text-gray-700 leading-relaxed flex-1 pt-1">
                                                {aboutList.aboutsthree}
                                            </p>
                                        </li>
                                    )}
                                    {aboutList.aboutsfour && (
                                        <li className="flex gap-4 items-start">
                                            <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm mt-1">
                                                4
                                            </span>
                                            <p className="text-gray-700 leading-relaxed flex-1 pt-1">
                                                {aboutList.aboutsfour}
                                            </p>
                                        </li>
                                    )}
                                    {aboutList.aboutsfive && (
                                        <li className="flex gap-4 items-start">
                                            <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm mt-1">
                                                5
                                            </span>
                                            <p className="text-gray-700 leading-relaxed flex-1 pt-1">
                                                {aboutList.aboutsfive}
                                            </p>
                                        </li>
                                    )}
                                </ul>
                            ))}
                        </div>
                    </div>

                    {/* Back Button at Bottom */}
                    <div className="mt-8 text-center">
                        <button 
                            onClick={handleBack}
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:gap-3 shadow-lg"
                        >
                            <i className="fas fa-arrow-left"></i>
                            <span>Back to All Experiences</span>
                        </button>
                    </div>
                </div>
            )}
        </article>
    )
}

export default ExperienceList;