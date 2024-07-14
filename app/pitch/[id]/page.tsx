"use client"

import Navigation from "@/app/components/Navigation"
import ImageView from "@/app/components/ImageView"
import ImageCarousel from "@/app/components/ImageCarousel"
import DetailView from "@/app/components/DetailView"
import PitchCard from "@/app/components/PitchCard"

import DetailsViewSkeleton from '@/app/components/skeletons/DetailsViewSkeleton'
import ImageViewSkeleton from '@/app/components/skeletons/ImageViewSkeleton'
import PitchCardSkeleton from "@/app/components/skeletons/PitchCardSkeleton"

import { Button } from "@/app/components/ui/button"
import { Label } from "@/app/components/ui/label"
import Link from "next/link"

import { db } from "@/firebase/config"
import { doc, getDoc } from "firebase/firestore"

import { useState, useEffect, useReducer } from 'react'
import { useRouter } from 'next/navigation'

import { PitchType } from "@/lib/types"
import { fetchRecommendedPitches } from "@/lib/fetch"

export default function Pitch ({params}: {params: {id: string}}) {
    const router = useRouter();
    
    const [loading, setLoading] = useState(true);
    const [recommendedLoading, setRecommendedLoading] = useState(true);
    const [pitch, setPitch] = useState<PitchType | null>(null);
    const [recommendedPitches, setRecommendedPitches] = useState<PitchType[]>([]);
    
    useEffect(() => {
        const fetchDetails = async () => {
            const pitchRef = doc(db, 'pitches', params.id);
            const pitchData = await getDoc(pitchRef);
    
            if (pitchData.exists()) {
                const data = pitchData.data();
                setPitch(data as PitchType);

                const recommended = await fetchRecommendedPitches(data.recommended);
                setRecommendedPitches(recommended); // Does not re-render on state change??
            } else {
                router.push('/not-found');
            }
        }
        
        fetchDetails();
    }, [params.id, router])

    useEffect(() => {
        if (pitch != null) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [pitch])

    useEffect(() => {
        if (recommendedPitches != null) {
            setRecommendedLoading(false);
        } else {
            setRecommendedLoading(true);
        }
    }, [recommendedPitches])

    return (
        <>
            <Navigation/>
            <main>
                <div className="grid lg:grid-cols-2 p-5 border-b-[1px]">
                    {loading ? 
                    <>
                        <DetailsViewSkeleton/>
                        <ImageViewSkeleton/>
                    </> : 
                    <>                    
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
                            coordinates={pitch?.coordinates || {latitude: 29, longitude: 31}}
                            reservations={pitch?.reservations || []}
                        />
                        <ImageView images={pitch?.images.slice(0, 4) || []}/>
                    </>
                    }
                </div>
                <div className="my-6">
                    <Label className="mx-8 text-gray-700">Other Pitches You May Like:</Label>
                    <div className="flex overflow-x-scroll mb-28 sm:my-2">
                        {recommendedLoading ? Array(5).fill(<PitchCardSkeleton/>) : 
                        recommendedPitches.map((el, index) => {
                            return <PitchCard 
                                key={index} 
                                name={el.name} 
                                description={el.description} 
                                image={el.images[0]} 
                                place={el.place} 
                                rating={el.rating} 
                                price={el.price} 
                                size={el.size} 
                                id={el.id} 
                                ballProvided={el.ballProvided}
                            />
                        })}
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