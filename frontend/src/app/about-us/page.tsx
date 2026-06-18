import React from 'react'
import Image from 'next/image'
import { Rocket } from 'lucide-react'
export default function page() {
  return (
    <div>

      <section className="bg-linear-to-b from-blue-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-8 w-full md:flex-row md:justify-between md:items-center">

        <div className=" space-x-5">
            <h1 className=" text-[3em]  font-extrabold text-white text-start text-">Get to Know Seekho English </h1>
            <p className=" text-white text-xl">Discover our mission and meet the team dedicated to empowering you to speak English with confidence and clarity.</p>
            <div className="flex flex-col justify-center items-center *:rounded-2xl *:text-white gap-4 mt-4 *:py-2 *:font-bold mb-10">
            <button className=" shadow-lg flex items-center justify-center gap-2 bg-linear-to-r from-[#315DF4] to-[#2F7BFF] w-[220px] 
            md:w-[250px]"> Who Can Learn</button>
             <button className=" shadow-lg flex items-center justify-center gap-2 bg-linear-to-r from-[#FF8A1D] to-[#FF5A1F] w-[220px] md:w-[250px]">  <Rocket size={30} /> How to Get Started</button>
            </div>
        </div>

        <div>
            <Image src="/about.png" alt="Student" width={500} height={300} />
        </div>

      </section>  

      <section className=" space-y-10 flex flex-col items-center justify-center p-8 w-full">

        <div className=" space-y-4">
            <h1 className=" text-3xl font-bold text-black">About Seekho English</h1>
            <button className="  text-blue-500 font-bold py-2 px-4 rounded border-2 border-blue-500 mt-4 mb-6">
                Our Story: Speak with Confidence
            </button>
            <p>Seekho English started with one mission - to help people in Saket, Delhi, speak English confidently. What began as a small effort has now grown into one of the most trusted English-speaking course providers in Delhi.</p>
            <p>From students and professionals to homemakers, over 2000 learners have found their voice with us. Our practical, personalized approach goes beyond grammar-we build real communication skills and lifelong confidence.</p>
            <p className="  text-blue-500">
                Join Seekho English and speak your success into existence.
            </p>
            <div className="  border-l-4 border-blue-500 rounded-lg p-4 mt-6 flex shadow-lg">
              <p><span className=" font-bold text-blue-500">Our mission:</span> To help every learner find their voice in English, regardless of background or starting point.</p>  
            </div>
            <button className=" w-[230px] h-[56px] rounded-full bg-linear-to-r from-[#FFA000] to-[#FF5A36] text-white font-bold           text-[18px] shadow-lg flex items-center justify-center gap-2">Enquire Now </button>
        </div>

        <div>
            <Image src="/about-seekho-english.png" alt="Seekho English" width={500} height={300} />
        </div>

      </section>


    </div>
  )
}
