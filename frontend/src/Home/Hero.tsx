import React from 'react'
import Link from 'next/link'
import { Phone, MapPin } from 'lucide-react'
import Form from "@/Components/Form";
export default function Hero() {
    return (
        <section className='w-full h-screen bg-linear-to-bl from-violet-500 to-fuchsia-500 items-center px-5'>
            <div className=" md:max-w-[80%] md:mx-auto md:flex justify-between gap-10">
                <div className="md:w-1/2">
                    <h1 className='font-bold text-3xl md:text-6xl text-white pt-5' >Speak English with Confidence.</h1>
                    <h3 className='font-bold text-md md:text-lg text-white pt-5'>Seekho English - Join Saket's trusted institute for practical, interactive, and result-driven English speaking classes.</h3>
                    <h2 className='font-bold text-lg md:text-2xl text-white pt-5'>Book your free demo today!</h2>

                    <div className='md:flex gap-10 my-5 '>
                        <button className='flex items-center gap-1 bg-linear-to-bl from-green-700 to-green-400 rounded-full
                        font-bold text-white px-2 py-1 my-4 md:px-4 md:py-2'>
                            <Phone fill="white" stroke="none" /> Call Us</button>
                        <button className='flex items-center gap-1 rounded-full px-2 py-1 my-4 bg-[#0D6EFD] font-bold text-white
                        '>  <MapPin fill="white" /> Navigation</button>
                    </div>
                </div>
                <div className='md:w-1/2'>
                    <Form />
                </div>
            </div>

        </section>
    )
}

