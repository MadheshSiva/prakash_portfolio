import { useState } from "react";
import {experieceList} from "../../data/experience"
import {NavLink} from "react-router-dom"

const ExperiencePage = () => {
const [listExp,setListExp] = useState(experieceList)
 
const experienceList = () => {
 
}
    return(
        <article>
            <div className="text-3xl flex items-center justify-center gap-2">
                <i className="fas fa-briefcase"></i>
                <h2>Experience & <span className="text-[#4285F4]">Research</span></h2>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8">
            {listExp.map((list, index) => (
                <NavLink to={`/experience-list/${list.company_name}`} state={list}>
<button className="border bg-[#39A2DB] px-3 py-5 rounded-lg w-[90%] text-ellipsis whitespace-nowrap transition hover:translate-x-4 duration-200 cursor-pointer" onClick={experienceList(list)} key={index} tabIndex={0}>
                   <h3 className="text-2xl my-2"><span className="underline">{list.company_name}</span> - <span>{list.role}</span></h3>
                   <p>{list.period}</p>
                </button>
                </NavLink>
                )) }
            </div>
           
        </article>
    )
}

export default ExperiencePage;