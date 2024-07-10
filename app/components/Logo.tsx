import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

export default function Logo ({absolute = false} : {absolute?: boolean}) {
    return (
        <Link href="/">
            <div className={'flex-center ' + cn(absolute && 'absolute left-3 top-5')}>
                <Image src={""} width={25} height={25} alt="Hagz logo" className='rounded-full bg-black'></Image>
                <span className='mx-3 font-bold'>Hagz.</span>
            </div>
        </Link>
    )
}