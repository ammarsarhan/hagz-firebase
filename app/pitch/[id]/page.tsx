import Navigation from "@/app/components/Navigation"
import ImageView from "@/app/components/ImageView"
import DetailView from "@/app/components/DetailView"

import PitchCard from "@/app/components/PitchCard"

import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { Label } from "@/app/components/ui/label"

export default function Pitch ({params}: {params: {id: string}}) {
    return (
        <>
            <Navigation/>
            <main>
                <div className="grid lg:grid-cols-2 p-5 border-b-[1px]">
                    <DetailView/>
                    <ImageView/>
                </div>
                <div className="my-6">
                    <Label className="mx-8 text-gray-700">Other Pitches You May Like:</Label>
                    <div className="flex overflow-x-scroll mb-16 mt-2 sm:my-2">
                        <PitchCard/>
                        <PitchCard/>
                        <PitchCard/>
                        <PitchCard/>
                        <PitchCard/>
                    </div>
                </div>
                <Button className="fixed bottom-0 rounded-none py-7 w-full sm:right-4 sm:bottom-4 sm:rounded-md sm:w-auto sm:px-20"><Link href={`/reserve/${params.id}`}>Reserve Pitch</Link></Button>
            </main>
        </>
    )
}