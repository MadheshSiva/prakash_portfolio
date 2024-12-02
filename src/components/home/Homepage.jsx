import React from "react";
import PortfolioHeader from "../header/header";
import AsidePage from "../aside/asidepage";
import AboutPage from "../main/about/aboutPage";
import AboutBtn from "../button/aboutBtn";
import ExperiencePage from "../main/experience-research/experience";
const HomePage = () => {
    return (
        <div className="relative flex ">
            <aside className="w-[25%] bg-[#4285F4] h-screen sticky top-0">
               <AsidePage/>
            </aside>
            <main className="w-[75%]">
                <PortfolioHeader />
                <section className="mt-20 ml-2">
                    <AboutBtn/>
                </section>
                <section className="mt-64">
                <AboutPage/>
                </section>
                <section>
                    <ExperiencePage/>
                </section>
                
            </main>
        </div>
    )
}


export default HomePage;