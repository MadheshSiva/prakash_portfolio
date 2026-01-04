import React, { useState } from "react";
import PortfolioHeader from "../header/header";
import AsidePage from "../aside/asidepage";
import AboutPage from "../main/about/aboutPage";
import AboutBtn from "../button/aboutBtn";
import ExperiencePage from "../main/experience-research/experience";
import ContactForm from "../main/contact/contactUs";
import { ProgrammingProfiles } from "../main/programs/programingSkills";
import { SkillsAbilities } from "../main/skills/skills";
import ProfileSection from "../main/profileSection/profileSection";
const HomePage = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <div className="relative flex flex-col md:flex-row">
            {/* Mobile Menu Button */}
            <div className="md:hidden fixed top-4 right-4 z-50">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="bg-[#4285F4] text-white p-2 rounded-md shadow-lg"
                >
                    <i className="fas fa-bars text-xl"></i>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="absolute left-0 top-0 w-64 h-full bg-[#4285F4] shadow-lg" onClick={(e) => e.stopPropagation()}>
                        <AsidePage setIsMobileMenuOpen={setIsMobileMenuOpen} />
                    </div>
                </div>
            )}

            <aside className="hidden md:block w-full md:w-[25%] bg-[#4285F4] h-screen sticky top-0">
               <AsidePage/>
            </aside>
            <main className="w-full md:w-[75%]">
                <PortfolioHeader />
                <section id="about-btn" className="mt-20 ml-2 md:ml-2">
                    <AboutBtn/>
                </section>
                <section id="about" className="mt-64">
                <AboutPage/>
                </section>
                <section id="profiles">
                    <ProgrammingProfiles/>
                </section>
                <section id="skills">
                    <SkillsAbilities/>
                </section>
                <section id="experience">
                    <ExperiencePage/>
                </section>
                <section>
                    <ProfileSection/>
                </section>
                <section id="contact">
                    <h2 className="text-[2rem] text-center cursor-pointer" onClick={() => { const element = document.getElementById('contact-form'); if (element) element.scrollIntoView({ behavior: 'smooth' }); }}><i className="far fa-address-book"></i> Get in<span className="text-[#007bff]">Touch</span> </h2>
                    <ContactForm/>
                </section>
            </main>
        </div>
    )
}


export default HomePage;