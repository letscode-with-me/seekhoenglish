"use client"
import Hero from "@/Home/Hero";
import Hero2 from "@/Home/Hero2";
import Courses from "@/Home/Courses";
import { Slider } from "@/Components/Slider";

export default function Home() {
  return (
    <div>
      <Hero />
      <Hero2 />
      <Courses />
      <Slider />
    </div>
  );
}
