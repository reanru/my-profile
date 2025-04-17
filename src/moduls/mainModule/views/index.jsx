import React from 'react'

import { 
    FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaQuoteRight,
} from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";

import foto from "../../../assets/foto.jpg";
import resume from "../../../../resume.pdf";

import Navbar from "../parts/navbar";
import SectionAbout from "../parts/about";
import SectionSkills from "../parts/skills";
import SectionExperiences from "../parts/experiences";
import SectionProject from "../parts/projects";

export default function Index() {

    return (
        <div className="relative bg-gray-50 min-w-[375px]">
            {/* <div className="absolute inset-0 -z-10 bg-transparent bg-gradient-to-tl from-gray-100 via-gray-100 to-blue-100"></div> */}
            <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 md:py-16 lg:py-0 z-50">
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <header className="lg:sticky lg:top-0 lg:flex lg:flex-col lg:py-24 lg:justify-between text-left max-h-screen lg:w-[48%]">
                        <div className="space-y-8">
                            <div className="flex items-center gap-3">
                                <div className="border-2 border-gray-700 rounded-full min-w-20 min-h-20 w-20 h-20 overflow-auto">
                                    <img class="rounded-full object-cover h-full w-full" src={foto} alt="Default avatar" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="leading-9 lg:leading-12 text-2xl lg:text-3xl font-bold text-slate-800">Refandi Andika Runtu</span>
                                    <span className="text-lg font-semibold text-slate-600">Web Developer</span>
                                </div>
                            </div>
                            <div className="lg:max-w-96 text-xl lg:text-2xl font-thin bg-transparent bg-gradient-to-tl from-gray-100 via-gray-100 to-blue-50 p-3 shadow-lg">
                                <FaQuoteRight className="text-blue-950" />
                                <span>A personal website where I share my profile, skills, and projects as a Frontend Developer. It's built with React and Tailwind CSS.</span>
                            </div>
                        </div>

                        <Navbar />

                    </header>

                    <main className="lg:w-[52%]">
                        <div className="sticky top-0 bg-gray-50 flex items-center justify-between h-24">
                            <ul className="flex gap-4">
                                <li><a href="https://github.com/reanru" target="_blank"><FaGithub className="w-7 h-7 text-blue-950 hover:text-blue-600 transition-all duration-300" /></a></li>
                                <li><a href="https://linkedin.com/in/refandi-andika-runtu-59b67a1a5" target="_blank"><FaLinkedin className="w-7 h-7 text-blue-950 hover:text-blue-600 transition-all duration-300" /></a></li>
                                <li><a href="https://www.instagram.com/_anrru" target="_blank"><FaInstagram className="w-7 h-7 text-blue-950 hover:text-blue-600 transition-all duration-300" /></a></li>
                                <li><a href="https://www.facebook.com/share/162NKnEpbA/" target="_blank"><FaFacebook className="w-7 h-7 text-blue-950 hover:text-blue-600 transition-all duration-300" /></a></li>
                            </ul>

                            {/* <button className="px-2 py-1 bg-blue-400 rounded-2xl">Full Resume</button> */}
                            <a href={resume} target="_blank" className="group flex items-center font-semibold text-blue-500 px-3 py-1 hover:text-white hover:bg-blue-400 rounded-2xl transition-all duration-300">
                                Full Resume <FiArrowUpRight className="group-hover:mb-1 group-hover: transition-all duration-300" />
                            </a>

                        </div>

                        <div className="space-y-20 pb-24 px-4">

                            <SectionAbout />

                            <SectionSkills />
                            
                            <SectionExperiences />

                            <SectionProject />

                        </div>

                    </main>
                </div>
            </div>
        </div>
    )
}
