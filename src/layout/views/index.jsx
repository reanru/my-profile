import React from 'react'

import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaQuoteRight } from "react-icons/fa";

export default function Index() {
    return (
        // <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
        <div className="relative">
            {/* <div className="absolute inset-0 -z-10 bg-transparent bg-gradient-to-tl from-gray-100 via-gray-100 to-blue-100"></div> */}
            <div className="max-w-7xl mx-auto z-50">
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <header className="lg:sticky lg:top-0 lg:flex lg:flex-col lg:py-24 lg:justify-between text-left max-h-screen w-full">
                        <div className="space-y-6">
                            <div className="max-w-96 text-2xl font-thin bg-transparent bg-gradient-to-tl from-gray-100 via-gray-100 to-blue-50 p-3 shadow-lg">
                                <FaQuoteRight className="text-blue-950" />
                                <span>A personal website where I share my profile, skills, and projects as a Frontend Developer. It's built with React and Tailwind CSS.</span>
                            </div>


                            <div className="flex flex-col">
                                <span className="leading-10 text-3xl font-bold text-slate-800">Refandi Andika Runtu</span>
                                <span className="text-lg font-semibold text-slate-700">Web Developer</span>
                            </div>
                        </div>


                        <div className="">
                            <ul className="list-none text-sm font-semibold uppercase">
                                <li className="group flex items-center gap-2 h-10 w-min text-blue-950 hover:text-blue-600 transition-all duration-300"><div className="h-2 w-1 group-hover:h-6 rounded-full bg-blue-950 group-hover:bg-blue-600 transition-all duration-300"></div> <span>About</span></li>
                                <li className="group flex items-center gap-2 h-10 w-min text-blue-950 hover:text-blue-600 transition-all duration-300"><div className="h-2 w-1 group-hover:h-6 rounded-full bg-blue-950 group-hover:bg-blue-600 transition-all duration-300"></div> <span>Skills</span></li>
                                <li className="group flex items-center gap-2 h-10 w-min text-blue-950 hover:text-blue-600 transition-all duration-300"><div className="h-2 w-1 group-hover:h-6 rounded-full bg-blue-950 group-hover:bg-blue-600 transition-all duration-300"></div> <span>Experience</span></li>
                                <li className="group flex items-center gap-2 h-10 w-min text-blue-950 hover:text-blue-600 transition-all duration-300"><div className="h-2 w-1 group-hover:h-6 rounded-full bg-blue-950 group-hover:bg-blue-600 transition-all duration-300"></div> <span>Projects</span></li>
                            </ul>
                        </div>

                    </header>
                    <main className="w-full">
                        <div className="sticky top-0 bg-white flex items-center h-24">
                            <ul className="flex gap-4">
                                <li><FaGithub className="w-7 h-7 text-blue-950 hover:text-blue-600 transition-all duration-300" /></li>
                                <li><FaLinkedin className="w-7 h-7 text-blue-950 hover:text-blue-600 transition-all duration-300" /></li>
                                <li><FaInstagram className="w-7 h-7 text-blue-950 hover:text-blue-600 transition-all duration-300" /></li>
                                <li><FaFacebook className="w-7 h-7 text-blue-950 hover:text-blue-600 transition-all duration-300" /></li>
                            </ul>
                        </div>

                        <div className="text-lg">
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

                        {/* <p>
                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                            Where does it come from?
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                            Where can I get some?
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                        </p>
                        <p>
                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                            Where does it come from?
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                            Where can I get some?
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                        </p> */}
                    </main>
                </div>
            </div>
        </div>
    )
}
