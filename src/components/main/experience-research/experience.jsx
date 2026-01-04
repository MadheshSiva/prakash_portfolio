import { useState } from "react";
import {experieceList} from "../../data/experience"
import {NavLink} from "react-router-dom"
import {ArrowForward} from '@mui/icons-material'
const ExperiencePage = () => {
    const [listExp, setListExp] = useState(experieceList)

    return(
        <article className="min-h-screen py-4 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center ">
                    <div className="inline-flex items-center justify-center gap-3 text-2xl md:text-4xl font-bold mb-4">
                        <i className="fas fa-briefcase text-blue-600"></i>
                        <h2 className="text-gray-800">
                            Experience & <span className="text-[#4285F4]">Research</span>
                        </h2>
                    </div>

                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Central Timeline Line */}
                    <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600"></div>

                    {/* Experience Cards */}
                    <div className="space-y-8">
                        {listExp.map((list, index) => (
                            <div key={index} className="relative pl-12 md:pl-20">
                                {/* Timeline Dot */}
                                <div className="absolute left-1 md:left-5 top-6 w-7 h-7 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10 ring-4 ring-blue-100"></div>

                                {/* Connecting Line to Card */}
                                <div className="absolute left-4 md:left-8 top-8 w-8 md:w-12 h-0.5 bg-blue-400"></div>

                                {/* Experience Card - NOT wrapped in NavLink */}
                                <div className="w-full border bg-[#39A2DB] px-6 py-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                                    {/* Card Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                <span className="underline">{list.company_name}</span> - <span>{list.role}</span>
                                            </h3>
                                            <div className="flex items-center gap-4 text-white text-sm opacity-90">
                                                <span className="flex items-center gap-1">
                                                    <i className="far fa-calendar mr-1"></i>
                                                    {list.period}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <i className="fas fa-map-marker-alt mr-1"></i>
                                                    {list.location}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Content Preview */}
                                    <div className="text-white text-sm mt-4 border-t border-white border-opacity-30 pt-4">
                                        <p className="line-clamp-2 opacity-90 mb-3">
                                            {list.about[0].aboutsone}
                                        </p>
                                        
                                        {/* Only this link is clickable for navigation */}
                                        <NavLink 
                                            to={`/experience-list/${list.company_name}`} 
                                            state={list}
                                            className="flex items-center  text-white text-sm font-semibold "
                                        >
                                             Details 
                                           <p className="hover:translate-x-1 duration-200 transition-all"><ArrowForward style={{fontSize : '1rem'}}/></p> 
                                        </NavLink>
                                    </div>

                                    {/* Company Logo */}
                                    {list.logo && (
                                        <div className="mt-4 flex items-center gap-2">
                                            <img 
                                                src={list.logo} 
                                                alt={`${list.company_name} logo`} 
                                                className="h-10 w-10 rounded-full object-cover bg-white p-1"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Summary */}
                {/* <div className="mt-16 text-center bg-white rounded-xl shadow-lg p-8">
                    <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        Data Scientist with more than 7 years of experience, seeking opportunities and 
                        collaborations in Machine Learning & Artificial Intelligence. Looking to work in 
                        an energetic environment to uphold myself and the team, utilizing and enhancing 
                        skills for organizational growth.
                    </p>
                </div> */}
            </div>
        </article>
    )
}

export default ExperiencePage;