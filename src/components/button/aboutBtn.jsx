import {useState} from "react"
import "../header/header.css"

const AboutBtn = () => {
    const[focus,setFocus] = useState(false)
    const aboutBtn = () => {
       setFocus(true)
       const element = document.getElementById('about');
       if (element) {
           element.scrollIntoView({ behavior: 'smooth' });
       }
     // setTimeout(() =>{
     //     setFocus(false)
     // },4000)
       }
    
    return(
        <div>
            <button className={` text-white font-medium text-xl px-6 py-3 rounded-full bg-[#4285F4] hover:bg-blue-700 transition duration-300 ${focus ? "focus:outline-[2.6px] focus:outline-[#1822db] focus:outline focus:outline-offset-2" : "focus:outline-0 "}   border-0 `} tabIndex={0} onClick={aboutBtn}>About Me <i className="fas fa-arrow-circle-down"></i></button>
        </div>
    )
}

export default AboutBtn;