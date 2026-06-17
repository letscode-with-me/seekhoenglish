import React from 'react'
import Link from 'next/link'
import { ChevronDown, Mail, TextAlignJustify, Phone } from 'lucide-react';
export default function Header2() {
    return (
        <nav className='flex w-full items-center  text-10px  bg-[#432D93] text-white '>
            <div className='flex  justify-between flex-col items-center py-4 w-full md:w-[80%]   mx-auto'>
                <Link href="/" className='flex items-center gap-1'>
                    <Mail size={15} />
                    info@seekhoenglish.com
                </Link>
                <Link href="/" className='flex items-center gap-1 '>
                    <Phone size={15} />
                    095256 29119
                </Link>
            </div>

        </nav >
    )
}

