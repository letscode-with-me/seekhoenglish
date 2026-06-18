"use client"
import React from 'react'
import Card from "@/Components/Card"
import { Award, MessagesSquare, Users } from 'lucide-react'
const courses = [
    {
        icon: <MessagesSquare />,
        title: "Basic Spoken English",
        description: "Build a strong foundation in spoken English, master daily conversation skills, and gain confidence in just 1 month.",
        button: "Learn More",
        borderColor: "border-red-500"
    },
    {
        icon: <MessagesSquare />,
        title: "Advanced Spoken English",
        description: "Advance your fluency, improve pronunciation and accent, and become a confident public speaker in 2 months.",
        button: "Learn More",
        borderColor: "border-green-500"
    },
    {
        icon: <MessagesSquare />,
        title: "Interview Preparation",
        description: "Build a strong foundation in spoken English, master daily conversation skills, and gain confidence in just 1 month.",
        button: "Learn More",
        borderColor: "border-blue-500"
    },
    {
        icon: <MessagesSquare />,
        title: "IELTS Preparation",
        description: "Build a strong foundation in spoken English, master daily conversation skills, and gain confidence in just 1 month.",
        button: "Learn More",
        borderColor: "border-yellow-500"
    },
]

export default function Courses() {
    return (
        <section className='md:max-w-[80%] md:mx-auto w-full p-5'>
            <h1 className='text-3xl  text-blue-700 font-bold text-center'>Our Popular Courses</h1>
            <div className='p-5'>
                {courses.map((item, index) => (
                    <Card key={index} icon={item.icon}
                        title={item.title} description={item.description}
                        button={item.button} borderColor={item.borderColor} />
                ))}
            </div>
        </section>
    )
}

