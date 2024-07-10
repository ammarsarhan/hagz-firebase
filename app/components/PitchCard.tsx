import Image from 'next/image'
import { Label } from "@/app/components/ui/label"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card"

import Link from 'next/link'
 
export default function PitchCard() {
  return (
    <Link href='/pitch/7436382967'>
      <Card className="w-[300px] m-4 2xl:w-[350px]">
        <CardHeader className='flex items-center'>
          <Image src={""} width={275} height={275} alt='Pitch Image' className='bg-black rounded-md mb-4'/>
          <CardTitle className='text-md self-start'>Pitch Name</CardTitle>
          <CardDescription className='self-start break-words'>Description about the pitch NOT more than 100 characters.</CardDescription>
          <CardDescription className='self-start'>Location: Green Plaza, Smouha, Alexandria</CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col card-content'>
          <Label>Rating: 4.5</Label>
          <Label>Price: 150 EGP/hr</Label>
          <Label>Size: 5-A-Side</Label>
          <Label>Ball: Not Provided</Label>
        </CardContent>
      </Card>
    </Link>
  )
}