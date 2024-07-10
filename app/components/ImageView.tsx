"use client"

import Image from "next/image"

export default function ImageView () {
    return (
        <div className="gap-2 grid-cols-2 grid-rows-2 hidden sm:grid h-[80vh] m-4 lg:my-0 mx-2">
            <Image src={''} width={0} height={0} alt={'Pitch Image 1'} style={{height: '100%', width: 'auto'}} className="rounded-sm border-[1px] text-sm p-2"/>
            <Image src={''} width={0} height={0} alt={'Pitch Image 2'} style={{height: '100%', width: 'auto'}} className="rounded-sm border-[1px] text-sm p-2"/>
            <Image src={''} width={0} height={0} alt={'Pitch Image 3'} style={{height: '100%', width: 'auto'}} className="rounded-sm border-[1px] text-sm p-2"/>
            <Image src={''} width={0} height={0} alt={'Pitch Image 4'} style={{height: '100%', width: 'auto'}} className="rounded-sm border-[1px] text-sm p-2"/>
        </div>
    )
}