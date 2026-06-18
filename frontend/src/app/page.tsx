"use client"
import Hero from "@/Home/Hero";
import Hero2 from "@/Home/Hero2";
import Courses from "@/Home/Courses";
import { Slider } from "@/Components/Slider";
import Confident from "@/Home/Confident";
export default function Home() {
  return (
    <div>
      <Hero />
      <Hero2 />
      <Courses />
      {/* <Slider /> */}
      <Confident />
    </div>
  );
}
