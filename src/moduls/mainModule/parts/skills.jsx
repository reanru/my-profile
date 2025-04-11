import React from 'react'

import { 
    FaHtml5, FaBootstrap, FaCss3Alt, FaFigma, FaLaptop, FaNodeJs
} from "react-icons/fa";

import { RiJavascriptFill, RiTailwindCssFill, RiReactjsFill } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";
import { SiRedux, SiPostman } from "react-icons/si";

export default function Skills() {

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

    return (
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
    )
}
