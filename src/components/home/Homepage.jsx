import React from "react";
import PortfolioHeader from "../header/header";
import AsidePage from "../aside/asidepage";
import AboutPage from "../main/about/aboutPage";
import AboutBtn from "../button/aboutBtn";
import ExperiencePage from "../main/experience-research/experience";
import ContactForm from "../main/contact/contactUs";
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
                <section>
                    <h2 className="text-[2rem] text-center"><i className="far fa-address-book"></i> Get in<span className="text-[#007bff]">Touch</span> </h2>
                    <ContactForm/>
                </section>
            </main>
        </div>
    )
}


export default HomePage;