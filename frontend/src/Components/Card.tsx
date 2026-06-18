import React from 'react'
interface props {
    icon: React.ReactNode,
    title: string,
    description: string,
    button?: string,
    borderColor: string
}

export default function Card({ icon, title, description, button, borderColor }: props) {
    return (
        <div className={`card rounded-2xl shadow-2xl p-5  py-10 px-2 text-center my-5
         flex flex-col  items-center  flex-wrap md:justify-start justify-center border-t-4 ${borderColor}`}>
            <div className='bg-blue-600 rounded-4xl items-center justify-center flex  w-10 h-10'>{icon}</div>
            <h2 className='py-2 font-bold'>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

