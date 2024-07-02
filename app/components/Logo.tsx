import Image from 'next/image'
import Link from 'next/link'

export default function Logo () {
    return (
        <Link href="/">
            <div className='flex-center'>
                <Image src={""} width={25} height={25} alt="Hagz logo" className='rounded-full bg-black'></Image>
                <span className='mx-3 font-bold'>Hagz.</span>
            </div>
        </Link>
    )
}