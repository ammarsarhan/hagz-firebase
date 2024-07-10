import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/app/components/ui/dialog"

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/app/components/ui/carousel'
import { Button } from '@/app/components/ui/button'

import Image from 'next/image'

export default function ImageCarousel () {
    return (
        <Dialog>
            <DialogTrigger>
                <Button className="px-20 py-7 rounded-none w-full sm:w-auto sm:rounded-md bg-gray-600 hover:bg-gray-500 z-40">View Photos</Button>
            </DialogTrigger>
            <DialogContent className="w-screen h-[90vh]">
                <DialogHeader>
                    <DialogTitle>Photos</DialogTitle>
                    <Carousel className="h-full w-full" opts={{ align: "center" }}>
                        <CarouselContent className="h-full w-full">
                            <CarouselItem className="h-full w-full">
                                <Image className="!static" fill src={""} alt="Pitch Image 1"/>
                            </CarouselItem>
                            <CarouselItem className="h-full w-full">
                                <Image className="!static" fill src={""} alt="Pitch Image 2"/>
                            </CarouselItem>
                            <CarouselItem className="h-full w-full">
                                <Image className="!static" fill src={""} alt="Pitch Image 3"/>
                            </CarouselItem>
                            <CarouselItem className="h-full w-full">
                                <Image className="!static" fill src={""} alt="Pitch Image 4"/>
                            </CarouselItem>
                            <CarouselItem className="h-full w-full">
                                <Image className="!static" fill src={""} alt="Pitch Image 5"/>
                            </CarouselItem>
                            <CarouselItem className="h-full w-full">
                                <Image className="!static" fill src={""} alt="Pitch Image 6"/>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious/>
                        <CarouselNext/>
                    </Carousel>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

