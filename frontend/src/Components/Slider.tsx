
import * as React from "react"

import { Card, CardContent } from "@/Components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel"

export function Slider() {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true
            }}
            className="w-full   bg-red-400 border-b-8 "
        >
            <CarouselContent className="p-5">
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="w-full  lg:basis-1/3">
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
