import Image from "next/image"
import { Button } from '@/app/components/ui/button'

export default function ImageView() {
    return (
        <div className="relative">
            <div className="gap-2 grid-cols-2 grid-rows-2 hidden sm:grid h-[75vh] m-4 lg:my-0 mx-2">
                <Image src={''} width={0} height={0} alt={'Pitch Image 1'} style={{height: '100%', width: 'auto'}} className="rounded-sm border-[1px]"/>
                <Image src={''} width={0} height={0} alt={'Pitch Image 2'} style={{height: '100%', width: 'auto'}} className="rounded-sm border-[1px]"/>
                <Image src={''} width={0} height={0} alt={'Pitch Image 3'} style={{height: '100%', width: 'auto'}} className="rounded-sm border-[1px]"/>
                <Image src={''} width={0} height={0} alt={'Pitch Image 4'} style={{height: '100%', width: 'auto'}} className="rounded-sm border-[1px]"/>
            </div>
            <Button variant="outline" className="absolute right-4 bottom-4 sm:bottom-6 lg:bottom-2">View Photos</Button>
        </div>
    )
}