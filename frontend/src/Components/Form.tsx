import React from 'react'
import { User, Phone, Mail, MessageCircle, Calendar } from 'lucide-react'
export default function Form() {
    return (
        <form className='bg-white rounded-2xl p-5 '>
            <h2 className='capitalize font-bold'>Book your free demo Class</h2>
            <div className='flex items-center my-3'>
                <User fill='blue' stroke="none" size="20" />
                <input type="text" placeholder='Enter Your Name' className="border border-gray-300 rounded-md p-2 " />
            </div>
            <div className='flex items-center my-3'>
                <Phone fill='blue' stroke="none" size="20" />
                <input type="tel" maxLength={10} minLength={10} placeholder='Enter Your Mobile Number' className="border border-gray-300 rounded-md p-2 " />
            </div>
            <div className='flex items-center my-3'>
                <Mail fill='blue' stroke="none" />
                <input type="email" placeholder='Enter Your Email' className="border border-gray-300 rounded-md p-2 " />
            </div>
            <div className='flex items-center  my-3'>
                <MessageCircle fill='blue' stroke="none" />
                <input type="text" placeholder='Enter Your Message' className="border border-gray-300 rounded-md p-2 h-20 " />
            </div>
            <div className='flex items-center justify-center rounded-4xl  my-3 bg-[#140061]'>
                <Calendar fill='white' />
                <input type="submit" value="Book demo Class" className=" rounded-md p-2 bg-[#140061] text-white" />
            </div>
        </form>
    )
}

