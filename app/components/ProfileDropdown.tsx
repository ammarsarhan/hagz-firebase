"use client"

import Link from 'next/link'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/app/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"
 
import { ChevronDown } from 'lucide-react'
import { useToast } from '@/app/components/ui/use-toast'
import unAuthenticateUser from "@/firebase/auth/sign-out"

export function ProfileAvatar () {
    return (
        <div className='flex items-center'>
            <Avatar className='h-8 w-8'>
                <AvatarImage src="" alt="@shadcn"/>
                <AvatarFallback className="text-xs">AY</AvatarFallback>
            </Avatar>
            <ChevronDown className='h-4'/>
        </div>
    )
}
 
export default function ProfileDropdown({signedIn}: {signedIn: boolean}) {
  const { toast } = useToast();
  const showToaster = () => {
    toast({
      title: "Signed Out",
      description: "You have been signed out successfully",
      variant: "destructive"
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="mx-4 mr-1">
            <ProfileAvatar/>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Profile</DropdownMenuLabel>
        <DropdownMenuSeparator/>
        {signedIn ? 
        (<div>
          <Link href='/user/insert_id_here' className="p-2 text-sm block">Account</Link>
          <Link href='/user/insert_id_here/reservations' className="p-2 text-sm block">Reservations</Link>
          <button onClick={() => unAuthenticateUser(showToaster)} className="p-2 text-sm block">Sign Out</button>
          <Link href='/privacy-policy' className="p-2 text-sm block">Privacy Policy</Link>
        </div>) 
        : (<div className='pr-3'>
          <Link href='/user/auth/sign-in' className="p-2 text-sm block">Log In</Link>
          <Link href='/user/auth/sign-up' className="p-2 text-sm block">Create Account</Link>
          <Link href='/docs/contact' className="p-2 text-sm block">Contact</Link>
          <Link href='/docs/privacy-policy' className="p-2 text-sm block">Privacy Policy</Link>
        </div>)}
        
      </DropdownMenuContent>
    </DropdownMenu>
  )
}