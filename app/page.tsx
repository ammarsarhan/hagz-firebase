'use client'

import Navigation from "@/app/components/Navigation";
import Filter from "@/app/components/Filter";
import PitchCard from "@/app/components/PitchCard";
import PitchCardSkeleton from "./components/skeletons/PitchCardSkeleton";

import MapProvider from "@/context/MapProvider";
import Map from "@/app/components/Map";

import { useEffect, useState, useRef } from "react";
import { fetchInitialPitches, fetchNextPitches } from "@/lib/fetch";
import { DocumentSnapshot } from "firebase/firestore";

import { PitchType } from "@/lib/types";

export default function Home() {

  const [loading, setLoading] = useState(true)
  const [nextLoading, setNextLoading] = useState(false)
  const [lastKey, setLastKey] = useState<DocumentSnapshot | null>(null)
  const [pitches, setPitches] = useState<PitchType[]>([])

  useEffect(() => {
    const getPitches = async () => {
      const { pitches, lastDoc } = await fetchInitialPitches();
      setPitches(pitches);
      setLastKey(lastDoc);
      setLoading(false);
    }

    getPitches();
  }, [])

  const getNextPitches = async () => {
    const { nextPitches, lastDoc } = await fetchNextPitches(lastKey as DocumentSnapshot);
    setPitches(pitches.concat(nextPitches));
    setLastKey(lastDoc);
  }

  const handleBottomReachedDesktop = (event) => {
    let currentPosition = Math.abs(event.target.scrollHeight - event.target.scrollTop - event.target.clientHeight);
    if (currentPosition < 1) {
      setNextLoading(true);
      getNextPitches();
      setNextLoading(false);
    }
  }

  const handleBottomReachedMobile = (event) => {
    let currentPosition = Math.abs(event.target.scrollHeight - event.target.scrollTop - event.target.clientHeight);
    if (currentPosition < 1) {
      setNextLoading(true);
      getNextPitches();
      setNextLoading(false);
    }
  }

  return (
    <>
      <Navigation/>
      <Filter/>
      <main className="flex-1 overflow-auto" onScroll={(event) => handleBottomReachedMobile(event)}>
        <div className="w-full lg:grid lg:h-full lg:grid-cols-2">
          <div className="p-5 h-full flex justify-around flex-wrap overflow-scroll" onScroll={(event) => handleBottomReachedDesktop(event)}>
            { loading ? <> {Array(4).fill(<PitchCardSkeleton/>)} </> :
              <>
                {
                  pitches?.map((pitch) => {
                    return <PitchCard 
                      key={pitch.id}
                      name={pitch.name}
                      description={pitch.description}
                      image={pitch.images[0]} 
                      place={pitch.place} 
                      rating={pitch.rating}
                      price={pitch.price}
                      size={pitch.size}
                      id={pitch.id}
                      ballProvided={pitch.ballProvided}/>
                  })
                }
                { nextLoading && <> { Array(2).fill(<PitchCardSkeleton/>) } </> }
              </>
            }
          </div>
          <div className="hidden bg-muted lg:block bg-green-900">
            <MapProvider>
              <Map/>
            </MapProvider>
          </div>
        </div>
      </main>
    </>
  );
}
