import React from 'react'
import Image from 'next/image'

export default function Hero2() {
    return (
        <section className='md:max-w-[80%] md:mx-auto w-full p-5 '>
            <div className='md:flex'>
                <div className='md:w-1/2'>
                    <Image src="/images/learn-english.png" alt="learn english" width={500} height={500} />
                </div>
                <div className='md:w-1/2'>
                    <h2 className='text-2xl md:text-4xl font-bold pt-2 text-blue-600'>Why choose Seekho English?</h2>
                    <p className='py-2'>Seekho English is Saket’s most trusted institute for practical, interactive, and result-driven
                        English speaking classes. Our mission is to empower students, professionals, and homemakers to
                        speak English fluently and confidently using proven teaching methods, experienced trainers, and a
                        supportive, encouraging learning environment. We understand that learning to speak English is not
                        just about grammar or vocabulary — it's about building confidence, clarity, and effective communication in
                        real-life situations.
                    </p>
                    <div className="">

                    </div>


                </div>
            </div>
        </section>
    )
}

