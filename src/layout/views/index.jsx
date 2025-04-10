import React, { useEffect, useState } from 'react'

import { 
    FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaQuoteRight,
    FaHtml5, FaBootstrap, FaCss3Alt, FaFigma, FaLaptop, FaNodeJs
} from "react-icons/fa";

import { RiJavascriptFill, RiTailwindCssFill, RiReactjsFill } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";
import { SiRedux, SiPostman } from "react-icons/si";

import foto from "../../assets/foto.jpg";
import gamingShopImg from "../../assets/gaming-shop.jpg";
import weddingInvImg from "../../assets/wedding-invitation.jpg";
import realtimeChatImg from "../../assets/realtime-chat.jpg";
// import { data } from "react-router-dom";

export default function Index() {

    const skills = [
        { text : "HTML", icon : <FaHtml5 className="text-orange-500" /> },
        { text : "CSS", icon : <FaCss3Alt className="text-blue-500" /> },
        { text : "Javascript", icon : <RiJavascriptFill className="text-yellow-500" /> },
        { text : "Bootstrap", icon : <FaBootstrap className="text-purple-600" /> },
        { text : "Tailwind", icon : <RiTailwindCssFill className="text-blue-400" /> },
        { text : "Jquery", icon : <DiJqueryLogo className="text-blue-600" /> },
        { text : "React.js", icon : <RiReactjsFill className="text-blue-400" /> },
        { text : "State Management", icon : <SiRedux className="text-purple-600" /> },
        { text : "Node.js Basics", icon : <FaNodeJs className="text-lime-500" /> },
        { text : "RESTful API Integration", icon : <SiPostman className="text-orange-600" /> },
        { text : "User Interface Design", icon : <FaFigma /> },
        { text : "Responsive Design", icon : <FaLaptop /> },
    ]

    const projects = [
        { image : gamingShopImg, name: "Gaming Shop", description : "This static website was developed using a free template from <strong>www.templatemo.com</strong> as part of my learning process. The main focus of this project was to improve my skills in implementing precise layouts and building responsive, optimized designs across various devices, including mobile and desktop." },
        { image : weddingInvImg, name: "Simple Wedding Invitation", description : "This website was developed based on several design references I found online (specific sources were not documented). I customized and modified various design elements to better align with the component structure I implemented. The main focus of this project was to sharpen my skills in implementing precise layouts and building responsive, optimized designs across different devices, including mobile and desktop." },
        { image : realtimeChatImg, name: "Simple Realtime Chat", description : "This project is a simple real-time chat application that I developed as part of my learning journey. The main goal was to understand how real-time, bidirectional communication works using WebSocket (or other real-time technologies like Firebase/Socket.IO). Through this project, I explored managing chat state, building a modular component structure, and implementing a responsive and user-friendly interface." }
    ]

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
        // Menambahkan event listener untuk scroll
        window.addEventListener('scroll', handleScroll);
        
        // Membersihkan event listener saat komponen unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    
    

    return (
        // <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
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

                    </header>

                    <main className="lg:w-[52%]">
                        <div className="sticky top-0 bg-gray-50 flex items-center h-24">
                            <ul className="flex gap-4">
                                <li><FaGithub className="w-7 h-7 text-blue-950 hover:text-blue-600 transition-all duration-300" /></li>
                                <li><FaLinkedin className="w-7 h-7 text-blue-950 hover:text-blue-600 transition-all duration-300" /></li>
                                <li><FaInstagram className="w-7 h-7 text-blue-950 hover:text-blue-600 transition-all duration-300" /></li>
                                <li><FaFacebook className="w-7 h-7 text-blue-950 hover:text-blue-600 transition-all duration-300" /></li>
                            </ul>
                        </div>

                        <div className="space-y-20 pb-24 px-4">
                            <div id="about" className="section text-lg text-gray-900 space-y-4">
                                <div className="flex items-center gap-2">
                                    <div className="h-4 w-1 rounded-full bg-blue-950"></div>
                                    <span className="text-lg font-medium text-blue-950">About</span>
                                </div>

                                <div>
                                    <p>
                                        I graduated in 2021 from Manado State University with a degree in Informatics Engineering. 
                                        Since college, I’ve had a strong interest in web programming and have continued to develop my skills in this area.
                                    </p>

                                    <br />

                                    <p>
                                        My career as a web developer began with learning Laravel, along with the basics of HTML, CSS, JavaScript, and PHP. 
                                        I applied these technologies in several projects, including my final project for graduation.
                                    </p>

                                    <br />
                                    
                                    <p>
                                        Later on, I started working with React.js in a professional environment, and it has become my primary tool for frontend development to this day. In addition to my full-time work, I also take on small freelance projects and personal side projects to further sharpen my skills and broaden my experience.
                                    </p>
                                </div>

                            </div>

                            <div id="skills" className="section space-y-4">
                                <div className="flex items-center gap-2">
                                    <div className="h-4 w-1 rounded-full bg-blue-950"></div>
                                    <span className="text-lg font-medium text-blue-950">My Skills</span>
                                </div>
                                <div className="flex flex-wrap gap-2 ">
                                    { skills.map( (data,key) => (
                                        <div key={key} className="flex items-center bg-white text-blue-950 gap-2 py-1 px-2  border-blue-950 rounded-lg shadow-md hover:shadow-blue-300 hover:cursor-pointer transition-all duration-150">
                                            <span className="text-xl">{ data.icon }</span>
                                            <span className="font-semibold">{data.text}</span>
                                        </div>
                                    )) }
                                </div>
                            </div>
                            
                            <div id="experience" className="section space-y-4">
                                <div className="flex items-center gap-2">
                                    <div className="h-4 w-1 rounded-full bg-blue-950"></div>
                                    <span className="text-lg font-medium text-blue-950">Work Experience</span>
                                </div>
                                <div className="bg-white p-5 flex flex-col rounded-2xl shadow-lg hover:shadow-blue-300 hover:cursor-pointer transition-all duration-150">
                                    <span className="text-lg font-semibold text-blue-950">Frontend Web Developer - PT. Psyche Indonesia (2021 - 2025)</span>
                                    <span className="text-md font-semibold text-gray-500">Manado, Sulawesi Utara, Indonesia</span>

                                    <ul class="ml-5 mt-4 list-disc text-md text-gray-800">
                                        <li>Developed and maintained website content, ensuring accuracy of information, functionality, and quality.</li>
                                        <li>Implemented responsive web designs for mobile devices.</li>
                                        <li>Integrated web applications with back-end systems using RESTful APIs.</li>
                                        <li>Troubleshot, tested and remedied issues before software deployment.</li>
                                        <li>Utilized version control systems such as Git for source code management.</li>
                                        <li>Performed regular maintenance tasks on existing sites including bug fixes and security updates.</li>
                                        <li>Researched new tools and techniques that could be used to enhance customer experience online.</li>
                                        <li>Provided technical support during the testing phase of web projects.</li>
                                        <li>Integrated third party services into website using API integrations.</li>
                                        <li>Delivered end-user training on content management systems allowing staff to make easy updates and maintenance to website without developer assistance.</li>
                                    </ul>

                                    {/* <div className="flex flex-wrap mt-4 gap-1">
                                        <div className="flex items-center bg-blue-100 text-sm text-blue-950 gap-2 py-1 px-3 rounded-full">
                                            <span className="font-semibold">React.js</span>
                                        </div>
                                        <div className="flex items-center bg-blue-100 text-sm text-blue-950 gap-2 py-1 px-3 rounded-full">
                                            <span className="font-semibold">React.js</span>
                                        </div>
                                        <div className="flex items-center bg-blue-100 text-sm text-blue-950 gap-2 py-1 px-3 rounded-full">
                                            <span className="font-semibold">React.js</span>
                                        </div>
                                        <div className="flex items-center bg-blue-100 text-sm text-blue-950 gap-2 py-1 px-3 rounded-full">
                                            <span className="font-semibold">React.js</span>
                                        </div>
                                    </div> */}
                                </div>
                            </div>

                            <div id="projects" className="section space-y-4">
                                <div className="flex items-center gap-2">
                                    <div className="h-4 w-1 rounded-full bg-blue-950"></div>
                                    <span className="text-lg font-medium text-blue-950">Projects Created</span>
                                </div>

                                <div className="space-y-6">
                                    { projects.map((data,key) => (
                                        <div key={key} className="hover:bg-blue-50 hover:p-4 gap-3 flex rounded-2xl hover:shadow-lg hover:shadow-blue-300 hover:cursor-pointer transition-all duration-400">

                                            <div className="border-2 border-gray-300 min-h-16 min-w-28 h-16 w-28 bg-gray-400 rounded-lg overflow-auto">
                                                <img className="object-cover h-full w-full" src={data.image} alt="" />
                                            </div>

                                            <div className="flex flex-col">
                                                <span className="font-semibold text-blue-950">{data.name}</span>
                                                <span className="text-sm text-gray-500" dangerouslySetInnerHTML={{__html : data.description}} />
                                            </div>
                                        </div>
                                    )) }
                                </div>

                            </div>
                        </div>

                    </main>
                </div>
            </div>
        </div>
    )
}
