"use client";
import * as React from "react"

import { Card, CardContent } from "@/Components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel"

export function Slider() {

    const plugin = React.useRef(
        Autoplay({
            delay: 3000,
            stopOnInteraction: false,
        })
    )
    return (
        <Carousel
            plugins={[plugin.current]}
            opts={{ loop: true }}
            className="w-full"
        >
            <CarouselContent className="p-5 md:p-10">
                {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem key={index} className=" basis-1/2  lg:basis-1/2">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-3xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />

        </Carousel>
    )
}
