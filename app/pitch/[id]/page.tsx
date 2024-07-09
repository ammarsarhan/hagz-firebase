import Navigation from "@/app/components/Navigation"
import ImageView from "@/app/components/ImageView"
import DetailView from "@/app/components/DetailView"
import PitchCard from "@/app/components/PitchCard"

import { Button } from "@/app/components/ui/button"
import { Label } from "@/app/components/ui/label"
import Link from "next/link"

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
                    <div className="flex overflow-x-scroll mb-28 sm:my-2">
                        <PitchCard/>
                        <PitchCard/>
                        <PitchCard/>
                        <PitchCard/>
                        <PitchCard/>
                    </div>
                </div>
                <div className="w-full flex flex-col sm:p-2 sm:flex-row sm:items-center sm:justify-between md:justify-end md:gap-x-4 fixed bottom-0">
                    <Button className="px-20 py-7 rounded-none sm:rounded-md bg-gray-600 hover:bg-gray-500">View Photos</Button>
                    <Button className="px-20 py-7 rounded-none sm:rounded-md"><Link href={`/reserve/${params.id}`}>Reserve Pitch</Link></Button>
                </div>
            </main>
        </>
    )
}