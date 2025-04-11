import React from 'react'

export default function Experiences() {
    return (
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
            </div>
        </div>
    )
}
