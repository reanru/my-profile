import React, { useEffect, useState } from 'react'

export default function Navbar() {

    const [activeSection, setActiveSection] = useState('');

    // Fungsi untuk menangani perubahan scroll
    const handleScroll = () => {
        const sections = document.querySelectorAll('.section');
        let currentSection = '';
        
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom >= 0) {
                currentSection = section.id;
            }
            // console.log('check ', section);
        });

        setActiveSection(currentSection);
    };

    useEffect(() => {
        setActiveSection('about');

        // Scroll otomatis saat reload halaman
        window.scrollTo({top: 0,behavior: "smooth"});

        // Menambahkan event listener untuk scroll
        window.addEventListener('scroll', handleScroll);
        
        // Membersihkan event listener saat komponen unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="hidden lg:block">
            <ul className="list-none text-sm font-semibold uppercase">
                <li className={"group flex items-center gap-2 h-10 w-min hover:text-blue-500 transition-all duration-300 "+(activeSection === "about" ? "text-blue-500":"text-blue-950")}>
                    <div className={"h-2 w-1 group-hover:h-6 rounded-full group-hover:bg-blue-500 transition-all duration-300 "+(activeSection === "about" ? "h-6 bg-blue-500":"bg-blue-950")}></div> <a href="#about">About</a>
                </li>
                <li className={"group flex items-center gap-2 h-10 w-min hover:text-blue-500 transition-all duration-300 "+(activeSection === "skills" ? "text-blue-500":"text-blue-950")}>
                    <div className={"h-2 w-1 group-hover:h-6 rounded-full group-hover:bg-blue-500 transition-all duration-300 "+(activeSection === "skills" ? "h-6 bg-blue-500":"bg-blue-950")}></div> <a href="#skills">Skills</a>
                </li>
                <li className={"group flex items-center gap-2 h-10 w-min hover:text-blue-500 transition-all duration-300 "+(activeSection === "experience" ? "text-blue-500":"text-blue-950")}>
                    <div className={"h-2 w-1 group-hover:h-6 rounded-full group-hover:bg-blue-500 transition-all duration-300 "+(activeSection === "experience" ? "h-6 bg-blue-500":"bg-blue-950")}></div> <a href="#experience">Experience</a>
                </li>
                <li className={"group flex items-center gap-2 h-10 w-min hover:text-blue-500 transition-all duration-300 "+(activeSection === "projects" ? "text-blue-500":"text-blue-950")}>
                    <div className={"h-2 w-1 group-hover:h-6 rounded-full group-hover:bg-blue-500 transition-all duration-300 "+(activeSection === "projects" ? "h-6 bg-blue-500":"bg-blue-950")}></div> <a href="#projects">Projects</a>
                </li>
            </ul>
        </div>
    )
}
