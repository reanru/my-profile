import React from 'react'

import siSkripsiImg from "../../../assets/si-skripsi.jpg";
import posBangunganImg from "../../../assets/pos-bangunan.jpg";
import bkpsdmMinahasaImg from "../../../assets/bkpsdm-minahasa.jpg";
import amasCooperativeImg from "../../../assets/amas-cooperative.jpg";
import gamingShopImg from "../../../assets/gaming-shop.jpg";
import weddingInvImg from "../../../assets/wedding-invitation.jpg";
import realtimeChatImg from "../../../assets/realtime-chat.jpg";

import Description from "../molekuls/projects/description";

import { FaRegEye} from "react-icons/fa";

export default function Projects() {

    const projects = [
        { 
            image : siSkripsiImg, 
            name: "SI Skripsi (2021)", 
            description : "This information system was designed to manage the study completion process for students, covering key stages such as proposal and final thesis. The system facilitates progress tracking, exam scheduling, document management, and approval workflows involving academic supervisors and examiners. The main goal of this project was to improve efficiency and transparency in academic processes while minimizing manual errors.",
            tools: ['Laravel', 'Livewire'],
            link: null
        },
        { 
            image : posBangunganImg, 
            name: "POS Bangunan (2022)", 
            description : "This project is a Point of Sales (POS) system developed by a small team consisting of several members. The system is designed to support retail store sales processes, featuring key functionalities such as product management, sales transactions, receipt printing, and daily/monthly sales reporting. In this project, I contributed to the development of the purchase transaction module and several other components. It was a valuable experience in collaborative work, version control, and structured module development.",
            tools: ['Laravel'],
            link: null
        },
        { 
            image : bkpsdmMinahasaImg, 
            name: "BKPSDM Minahasa (2023)", 
            description : "This information system was developed to support decision-making processes at BKPSDM Minahasa, specifically for recommending promotions for civil servants. The core feature of the system is a Decision Support System (DSS) module that applies the Analytic Hierarchy Process (AHP) method to evaluate and prioritize candidates based on predefined criteria. In this project, I focused on implementing the AHP calculation logic, managing employee data, and presenting recommendation results in a clear and informative way.",
            tools: ['Laravel'],
            link: null
        },
        { 
            image : amasCooperativeImg, 
            name: "Amas Cooperative Admin Panel (2024)", 
            description : "This project involved the development of an admin panel to manage PPOB (Payment Point Online Bank) data. The panel was designed to allow administrators to monitor and manage payment service data, including digital products (such as mobile credit, data packages, electricity, etc.), user transactions, payment statuses, and revenue reports. Key features include a summary dashboard, PPOB product management, transaction validation, as well as data filtering and export. My main focus in this project was on frontend development and API integration, with an emphasis on building a responsive and user-friendly interface.",
            tools: ['React.js', 'Tailwind'],
            link: null
        },
        { 
            image : gamingShopImg, 
            name: "Gaming Shop (2024)", 
            description : "This static website was developed using a free template from <strong>www.templatemo.com</strong> as part of my learning process. The main focus of this project was to improve my skills in implementing precise layouts and building responsive, optimized designs across various devices, including mobile and desktop.",
            tools: ['React.js', 'Tailwind'],
            link: "https://reanru.github.io/f-gaming-shop"
        },
        { 
            image : weddingInvImg, 
            name: "Simple Wedding Invitation (2024)", 
            description : "This website was developed based on several design references I found online (specific sources were not documented). I customized and modified various design elements to better align with the component structure I implemented. The main focus of this project was to sharpen my skills in implementing precise layouts and building responsive, optimized designs across different devices, including mobile and desktop.",
            tools: ['React.js', 'Tailwind'],
            link: "https://reanru.github.io/wedding-invitation"
        },
        { 
            image : realtimeChatImg, 
            name: "Simple Realtime Chat (2024)", 
            description : "This project is a simple real-time chat application that I developed as part of my learning journey. The main goal was to understand how real-time, bidirectional communication works using WebSocket (or other real-time technologies like Firebase/Socket.IO). Through this project, I explored managing chat state, building a modular component structure, and implementing a responsive and user-friendly interface.",
            tools: ['React.js', 'Tailwind','Express.js'],
            link: "https://reanru.github.io/chatting_fe"
        }
    ]

    return (
        <div id="projects" className="section space-y-4">
            <div className="flex items-center gap-2">
                <div className="h-4 w-1 rounded-full bg-blue-950"></div>
                <span className="text-lg font-medium text-blue-950">Projects Created</span>
            </div>

            <div className="space-y-6">
                { projects.map((data,key) => (
                    <div key={key} className="group hover:bg-blue-50 hover:p-4 gap-3 flex rounded-2xl hover:shadow-lg hover:shadow-blue-300 hover:cursor-pointer transition-all duration-400">

                        <div className="border-2 border-gray-300 min-h-16 min-w-28 h-16 w-28 bg-gray-400 rounded-lg overflow-auto">
                            <img className="object-cover h-full w-full" src={data.image} alt="" />
                        </div>

                        <div className="flex flex-col">
                            <span className="font-semibold text-blue-950">{data.name}</span>
                            <Description id={key} text={data.description} />

                            <div className="flex items-center justify-between">
                                <div className="mt-2 flex transition-all duration-300 gap-1">
                                    { data.tools.map((data,key)=>(
                                        <span key={key} className="text-sm font-medium py-1 px-2 text-blue-900 bg-blue-200 rounded-2xl">{data}</span>
                                    )) }
                                </div>
                                <button
                                    onClick={()=>{
                                        if(!data.link) return
                                        window.open(data.link, "_blank");
                                    }} 
                                    className={"hidden group-hover:flex items-center gap-1 h-7 px-3 text-sm font-medium bg-gray-200 hover:bg-gray-300 rounded-2xl "+(data.link ? "hover:cursor-pointer":"hover:cursor-not-allowed")}>
                                        Preview <FaRegEye />
                                </button>
                            </div>

                        </div>
                    </div>
                )) }
            </div>

        </div>
    )
}
