import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Mail } from 'lucide-react';
export default function Header() {
    return (
        <header className='flex justify-between w-full max-w-[80%] mx-auto h-18  items-center  font-bold'>
            <div>
                <Image src="/images/seekho-logo.png" alt="Logo" width={80} height={80} />
            </div>
            <div className='flex justify-end items-center gap-10'>
                <ul className='flex gap-10'>
                    <Link href="/" className='text-red-600'><li>Home</li></Link>
                    <Link href="/courses" className='text-blue-800'><li className='flex items-center gap-1'>Courses <ChevronDown /></li></Link>
                    <Link href="/about" className='text-blue-800' ><li>About Us </li></Link>
                    <Link href="/contact" className='text-blue-800'><li>Contact Us </li></Link>
                    {/* <li className='flex items-center gap-1 bg-amber-200'>
                    <Mail />
                    <Link href="#">Quick Enquiry</Link>
                </li> */}

                </ul>
                <Link href="/" className='flex items-center gap-1 bg-red-600 font-bold text-white px-2 py-1 rounded-full'>
                    <Mail strokeWidth={2} />
                    Quick Enquiry
                </Link>
            </div>
        </header>
    )
}