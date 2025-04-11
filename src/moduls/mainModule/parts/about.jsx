import React from 'react'

export default function About() {
    return (
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
    )
}
