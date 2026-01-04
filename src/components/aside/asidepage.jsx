import React, { useState, useEffect } from "react";
import Porfile_img from "../assets/prakash_pic.jpeg"

const AsidePage = ({ setIsMobileMenuOpen }) => {
    const [activeSection, setActiveSection] = useState('');
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const sections = ['about', 'profiles', 'skills', 'experience', 'education'];

        const updateActiveSection = () => {
            if (isScrolling) return;
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const centerY = scrollY + windowHeight / 2;

            let closestSection = '';
            let minDistance = Infinity;

            sections.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = scrollY + rect.top;
                    const elementBottom = scrollY + rect.bottom;
                    const elementCenter = (elementTop + elementBottom) / 2;
                    const distance = Math.abs(centerY - elementCenter);
                    if (distance < minDistance) {
                        minDistance = distance;
                        closestSection = id;
                    }
                }
            });

            if (closestSection) setActiveSection(closestSection);
        };

        const handleScroll = () => {
            updateActiveSection();
        };

        window.addEventListener('scroll', handleScroll);
        updateActiveSection(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolling]);

    const scrollToSection = (id) => {
        setIsScrolling(true);
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            let scrollTimer;
            const handleScroll = () => {
                clearTimeout(scrollTimer);
                scrollTimer = setTimeout(() => {
                    setIsScrolling(false);
                    window.removeEventListener('scroll', handleScroll);
                }, 100);
            };
            window.addEventListener('scroll', handleScroll);
        } else {
            setIsScrolling(false);
        }
    };

    return(
       <section className="text-center relative">
            {/* Close button for mobile */}
            <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="md:hidden absolute top-4 right-4 text-white text-xl"
            >
                <i className="fas fa-times"></i>
            </button>
            <article className="mt-12">
             <img src={Porfile_img} alt="profile_img" className="w-3/6 rounded-full mx-auto object-cover border-[3px]  outline-white"/>
             <h1 className="font-bold text-[30px] tracking-wider mt-4">Prakash</h1>
            </article>
            <nav>
              <ul className="">
                  <li className={`font-semibold text-[14px] tracking-wider mt-4 cursor-pointer ${activeSection === 'about' ? 'text-yellow-400' : 'text-white'}`} onClick={() => scrollToSection('about')}>About</li>
                  <li className={`font-semibold text-[14px] tracking-wider mt-8 cursor-pointer ${activeSection === 'profiles' ? 'text-yellow-400' : 'text-white'}`} onClick={() => scrollToSection('profiles')}>Programming Profiles</li>
                  <li className={`font-semibold text-[14px] tracking-wider my-8 cursor-pointer ${activeSection === 'skills' ? 'text-yellow-400' : 'text-white'}`} onClick={() => scrollToSection('skills')}>Skills</li>
                  <li className={`font-semibold text-[14px] tracking-wider cursor-pointer ${activeSection === 'experience' ? 'text-yellow-400' : 'text-white'}`} onClick={() => scrollToSection('experience')}>Experience & Research</li>
                  <li className={`font-semibold text-[14px] tracking-wider mt-8 cursor-pointer ${activeSection === 'education' ? 'text-yellow-400' : 'text-white'}`} onClick={() => scrollToSection('education')}>Education</li>
              </ul>
            </nav>
        </section>
     )
}

export default AsidePage;