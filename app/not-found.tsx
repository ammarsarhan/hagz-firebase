import Link from 'next/link'
import { Button } from '@/app/components/ui/button'

export default function NotFound () {
    return (
        <div className="flex-center flex-col gap-y-6 h-screen">
            <h1 className='text-2xl'>404 - Resource Not Found</h1>
            <Link href="/"><Button variant={'outline'}>Return Home</Button></Link>
        </div>
    )
}