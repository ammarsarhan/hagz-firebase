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

interface PitchCardProps {
  name: string;
  description: string;
  image: string;
  place: string;
  rating: number;
  price: number;
  size: string;
  ballProvided: boolean;
}

export default function PitchCard ({name, description, image, place, rating, price, size, ballProvided} : PitchCardProps) {
  return (
    <Link href='/pitch/r7mlrusLoLQ3R601VJfC'>
      <Card className="w-[300px] m-4 2xl:w-[350px]">
        <CardHeader className='flex items-center'>
          <Image src={image} width={275} height={275} alt='Pitch Image' className='border-[1px] rounded-md mb-4'/>
          <CardTitle className='text-md self-start'>{name}</CardTitle>
          <CardDescription className='self-start break-words'>{description}</CardDescription>
          <CardDescription className='self-start'>Location: {place}</CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col card-content'>
          <Label>Rating: {rating}</Label>
          <Label>Price: {price} EGP/hr</Label>
          <Label>Size: {size}</Label>
          <Label>Ball: {ballProvided ? "Provided" : "Not Provided"}</Label>
        </CardContent>
      </Card>
    </Link>
  )
}