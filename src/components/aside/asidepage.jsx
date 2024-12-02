import React from "react";
import Porfile_img from "../assets/prakash_pic.jpeg"

const AsidePage = () => {
    return(
       <section className="text-center">
           <article className="mt-12">
            <img src={Porfile_img} alt="profile_img" className="w-3/6 rounded-full mx-auto object-cover border-[3px]  outline-white"/>
            <h1 className="font-bold text-[30px] tracking-wider mt-4">Prakash</h1>
           </article>
           <nav>
            <ul className="">
                <li className="font-semibold text-[14px] tracking-wider mt-4">About</li>
                <li className="font-semibold text-[14px] tracking-wider mt-8">Profiles</li>
                <li className="font-semibold text-[14px] tracking-wider my-8">Skills</li>
                <li className="font-semibold text-[14px] tracking-wider">Experience & Research</li>
                <li className="font-semibold text-[14px] tracking-wider mt-8">Education</li>
            </ul>
           </nav>
       </section> 
    )
}

export default AsidePage;