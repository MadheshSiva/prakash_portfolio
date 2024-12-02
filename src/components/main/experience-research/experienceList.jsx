import { useLocation } from "react-router"
import placeIcon from "../../assets/location-dot-solid.svg"


const ExperienceList = () => {
    const location = useLocation()
    console.log(location)
    const expList = [location.state]
    console.log(expList)
    return (
        <article>

            {expList.length > 0 &&
                <div className="w-[75%] mx-auto mt-16">
                    <div className="flex items-center gap-4">
                        {expList[0].logo !== "" && <img src={expList[0].logo} alt="" className="w-16" />}
                        
                        <h1 className="text-4xl text-[#39A2DB] font-bold">{expList[0].company_name}</h1>
                    </div>
                    <div className="flex justify-between mt-3 ">
                       <h2 className="text-xl  font-semibold">{expList[0].role}</h2>
                       <div>
                        <p className="text-sm text-slate-600 mt-1">{expList[0].period}</p>
                        <p className="text-sm text-slate-600 flex items-center gap-1"> <img src={placeIcon} alt="" className="w-[0.7rem]"/> {expList[0].location}</p>
                       </div>
                    </div>
                    <ul className="list-disc w-[95%] mx-auto mt-3">
                    {expList[0]?.about.length > 0 && expList[0].about.map((aboutList) => (
                         <>
                            <li className="">{aboutList.aboutsone}</li>
                            <li className="my-2">{aboutList.aboutstwo}</li>
                            <li>{aboutList.aboutsthree}</li>
                            <li className="my-2">{aboutList.aboutsfour}</li>
                           {aboutList.aboutsfive && <li>{aboutList.aboutsfive}</li>} 
                         </>
                         
                        ))}
                    </ul>
                   
                </div>}

        </article>
    )
}

export default ExperienceList;