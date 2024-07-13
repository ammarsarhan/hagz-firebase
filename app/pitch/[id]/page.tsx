"use client"

import Navigation from "@/app/components/Navigation"
import ImageView from "@/app/components/ImageView"
import ImageCarousel from "@/app/components/ImageCarousel"
import DetailView from "@/app/components/DetailView"
import PitchCard from "@/app/components/PitchCard"

import { Button } from "@/app/components/ui/button"
import { Label } from "@/app/components/ui/label"
import Link from "next/link"

import { db } from "@/firebase/config"
import { doc, getDoc } from "firebase/firestore"

import { useState, useEffect } from 'react'

type PitchType = {
    name: string,
    description: string,
    price: number,
    rating: number,
    size: string,
    ballProvided: boolean,
    groundType: string,
    place: string,
    mapLink: string,
    owner: string,
    reservations: [],
    images: [],
    location: []
}

export default function Pitch ({params}: {params: {id: string}}) {
    const [pitch, setPitch] = useState<PitchType | null>(null);

    useEffect(() => {
        const fetchPitch = async () => {
            const query = await getDoc(doc(db, 'pitches', params.id))
            setPitch(query.data() as PitchType)
        }

        fetchPitch()
    }, [])

    return (
        <>
            <Navigation/>
            <main>
                <div className="grid lg:grid-cols-2 p-5 border-b-[1px]">
                    <DetailView 
                        name={pitch?.name || ''} 
                        description={pitch?.description || ''} 
                        price={pitch?.price || 0} 
                        rating={pitch?.rating || 0}
                        size={pitch?.size || ''}
                        ballProvided={pitch?.ballProvided || false}
                        groundType={pitch?.groundType || ''}
                        place={pitch?.place || ''}
                        mapLink={pitch?.mapLink || ''}
                        reservations={pitch?.reservations || []}
                    />
                    <ImageView images={pitch?.images.slice(0, 4) || []}/>
                </div>
                <div className="my-6">
                    <Label className="mx-8 text-gray-700">Other Pitches You May Like:</Label>
                    <div className="flex overflow-x-scroll mb-28 sm:my-2">
                        {Array(5).fill(<PitchCard/>)} {/* Don't forget to fill with recommended later! */}
                    </div>
                </div>
                <div className="w-full flex flex-col sm:p-2 sm:flex-row sm:items-center sm:justify-between md:justify-end md:gap-x-4 fixed bottom-0">
                    <ImageCarousel images={pitch?.images || []}/>
                    <Button className="px-20 py-7 rounded-none sm:rounded-md z-40"><Link href={`/reserve/${params.id}`}>Reserve Pitch</Link></Button>
                </div>
            </main>
        </>
    )
}