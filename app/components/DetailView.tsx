"use client"

import { ShareIcon, StarIcon, MapPinIcon } from "lucide-react"

import { useState } from "react"

import DatePicker from "@/app/components/DatePicker"
import TimePicker from "@/app/components/TimePicker"
import AvailabilityPin from '@/app/components/AvailabilityPin'

interface DetailViewProps {
    name: string,
    description: string,
    price: number,
    rating: number,
    size: string,
    ballProvided: boolean,
    groundType: string,
    place: string,
    mapLink: string,
    coordinates: {latitude: number, longitude: number},
    reservations: []
}

export default function DetailView ({name, coordinates, description, price, rating, size, ballProvided, groundType, place, mapLink, reservations}: DetailViewProps) {
    const [availability, setAvailability] = useState(false)

    return (
        <div className="flex flex-col rounded-lg sm:m-4 lg:m-0 lg:mx-2 px-5 py-7 border-[1px]">
            <AvailabilityPin available={availability}/>
            <div className="flex justify-between items-center mb-8">
                <span className="flex items-center text-gray-600 text-sm"><MapPinIcon width={16} height={16} className="mr-2"/>{place}</span>
                <div className="flex justify-end items-center">
                    <button onClick={() => alert('Starred')}><StarIcon width={16} height={16} className="mx-3"/></button>
                    <button onClick={() => alert('Shared')}><ShareIcon width={16} height={16}/></button>
                </div>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold mb-8 leading-[150%]">{name}</h1>
            <span className="text-sm flex items-center mb-4">Rating:
                <div className="flex mx-2">
                    {Array(rating).fill(<StarIcon width={16} height={16}/>)}
                    {Array(5 - rating).fill(<StarIcon width={16} height={16} className="text-gray-400"/>)}
                </div>
            </span>
            <div className="flex flex-col-reverse sm:flex-row justify-between items-start text-sm mb-2">
                <p className="w-full sm:w-2/3">{description}</p>
                <a href={mapLink} target="_blank" className="text-blue-800 underline mb-4 sm:ml-4 sm:mb-0">Open In Maps</a>
            </div>
            <div className="h-full flex flex-col justify-end text-sm text-gray-500 mt-4">
                <span>Details:</span>
                <div className="flex flex-col gap-y-2 mb-6 xxs:gap-y-0 xxs:flex-row xxs:justify-around items-center my-4 text-black">
                    <div className="flex flex-col gap-y-2 text-left xxs:text-center w-full xxs:w-auto px-0 xxs:px-2">
                        <span className="font-semibold">Price: {`${price}`} EGP/hr</span>
                        <span className="font-semibold">Size: {size}</span>
                        <span>Ball: {ballProvided ? "Provided" : "Not Provided"}</span>
                    </div>
                    <div className="flex flex-col gap-y-2 text-left xxs:text-center w-full xxs:w-auto px-0 xxs:px-2">
                        <span>Ground: {groundType}</span>
                        <span>Coordinates: {`${coordinates.latitude.toFixed(2)}, ${coordinates.longitude.toFixed(2)}`}</span>
                        <span>Number of Pitches: {6}</span>
                    </div>
                </div>
                <span>Specify Date:</span>
                <div className="my-2">
                    <div className="flex flex-col xs:gap-x-2 xs:flex-row mt-2 xs:mt-0">
                        <TimePicker fullWidth={true} label="Start Time"/>
                        <TimePicker fullWidth={true} label="End Time"/>
                    </div>
                    <DatePicker fullWidth={true}/>
                </div>
            </div>
        </div>
    )
}