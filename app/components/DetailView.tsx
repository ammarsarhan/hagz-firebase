"use client"

import { ShareIcon, StarIcon, MapPinIcon } from "lucide-react"
import DatePicker from "@/app/components/DatePicker"
import TimePicker from "@/app/components/TimePicker"

export default function DetailView () {
    return (
        <div className="flex flex-col rounded-lg sm:m-4 lg:m-0 lg:mx-2 px-5 py-7 border-[1px]">
            <span className="mb-4 text-sm flex items-center"><div className="pulsating ml-1 mr-4"></div> Available @ Specified Time</span>
            <div className="flex justify-between items-center mb-4">
                <span className="flex items-center text-gray-600 text-sm"><MapPinIcon width={16} height={16} className="mr-2"/>Green Plaza, Smouha, Alexandria</span>
                <div className="flex justify-end items-center">
                    <button onClick={() => alert('Starred')}><StarIcon width={16} height={16} className="mx-3"/></button>
                    <button onClick={() => alert('Shared')}><ShareIcon width={16} height={16}/></button>
                </div>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-[150%]">El Nasr Football Club (نادي النصر للقوات المسلحة)</h1>
            <span className="text-sm flex items-center mb-4">Rating:
                <div className="flex mx-2">
                    <StarIcon width={16} height={16}/>
                    <StarIcon width={16} height={16}/>
                    <StarIcon width={16} height={16}/>
                    <StarIcon width={16} height={16}/>
                    <StarIcon width={16} height={16} className="text-gray-500"/>
                </div>
            </span>
            <div className="flex flex-col-reverse sm:flex-row justify-between items-start text-sm mb-2">
                <p className="w-full sm:w-2/3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum ut dolores incidunt minus saepe tenetur eum ut dolores incidunt minus saepe tenetur.</p>
                <a href="https://maps.google.com" target="_blank" className="text-blue-800 underline mb-4 sm:ml-4 sm:mb-0">Open In Maps</a>
            </div>
            <div className="h-full flex flex-col justify-end text-sm text-gray-500 mt-4">
                <span>Details:</span>
                <div className="flex flex-col gap-y-2 mb-6 xxs:gap-0 xxs:flex-row xxs:justify-around items-center my-4 text-black">
                    <div className="flex flex-col gap-y-2 text-left xxs:text-center w-full xxs:w-auto">
                        <span className="font-semibold">Price: 250 EGP/hr</span>
                        <span className="font-semibold">Size: 5-A-Side</span>
                        <span>Ball: Provided</span>
                    </div>
                    <div className="flex flex-col gap-y-2 text-left xxs:text-center w-full xxs:w-auto">
                        <span>Ground: Artificial Grass</span>
                        <span>Ball: Provided</span>
                        <span>Price: 250 EGP/hr</span>
                    </div>
                </div>
                <span>Specify Date:</span>
                <div className="my-2">
                    <div className="flex flex-col xs:gap-x-2 xs:flex-row mt-2 xs:mt-0">
                        <TimePicker fullWidth={true}/>
                        <TimePicker fullWidth={true}/>
                    </div>
                    <DatePicker fullWidth={true}/>
                </div>
            </div>
        </div>
    )
}