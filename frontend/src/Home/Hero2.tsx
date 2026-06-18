"use client"
import React from 'react'
import Image from 'next/image'
import Card from "@/Components/Card"
import { Award, MessagesSquare, Users } from 'lucide-react'
const feature = [
    {
        icon: <MessagesSquare />,
        title: "Speak Fluent in 90Days",
        description: "Intensive practice for fast results",
        borderColor: "border-red-500"
    },
    {
        icon: <MessagesSquare />,
        title: "Online + Offline Classes",
        description: "Flexible learning modes for everyone",
        borderColor: "border-blue-500"

    },
    {
        icon: <MessagesSquare />,
        title: "Flexible Timings",
        description: "Morning, evening & weekend batches",
        borderColor: "border-green-500"
    },
    {
        icon: <MessagesSquare />,
        title: "Experienced Trainers",
        description: "Learn from certified language experts",
        borderColor: "border-yellow-500"

    }
]


export default function Hero2() {
    return (
        <section className='md:max-w-[80%] md:mx-auto w-full p-5 '>
            <div className='md:flex h-full gap-15 '>
                <div className='md:w-[45%]  rounded-xl shadow-xl h-[70vh] bg-[url(/images/learn-english.png)] bg-cover bg-center'>

                </div>
                <div className='md:w-full '>
                    <h2 className='text-2xl md:text-4xl font-bold pt-2 text-blue-600'>Why choose Seekho English?</h2>
                    <p className='py-2'>Seekho English is Saket’s most trusted institute for practical, interactive, and result-driven
                        English speaking classes. Our mission is to empower students, professionals, and homemakers to
                        speak English fluently and confidently using proven teaching methods, experienced trainers, and a
                        supportive, encouraging learning environment. We understand that learning to speak English is not
                        just about grammar or vocabulary — it's about building confidence, clarity, and effective communication in
                        real-life situations.
                    </p>
                    <div className="md:flex gap-6 py-5 px-2">

                        {feature.map((item, index) => (
                            <Card key={index} icon={item.icon}
                                title={item.title} description={item.description} borderColor={item.borderColor} />
                        ))}
                    </div>
                    <div className="flex gap-5 flex-wrap py-3 gap:2 
                    items-center justify-center  rounded-lg shadow-2xl">
                        <div className="flex  items-center ">
                            <Users />
                            <h2 className="font-bold">18,00+ Students</h2>
                        </div>



                        <div className="flex">
                            <Award />
                            <h2 className='font-bold'>10+ Years Experience</h2>
                        </div>
                        <div className='flex'>
                            <Award />
                            <h2 className='font-bold'>4.9/5 Rating</h2>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

