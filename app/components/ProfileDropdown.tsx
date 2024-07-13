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
  DropdownMenuTrigger
} from "@/app/components/ui/dropdown-menu"
 
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogHeader, DialogDescription, DialogClose } from '@/app/components/ui/dialog'
import { Button } from '@/app/components/ui/button'

import { useToast } from '@/app/components/ui/use-toast'
import { ChevronDown, User } from 'lucide-react'
import unAuthenticateUser from "@/firebase/auth/sign-out"

export function ProfileAvatar ({name, source, signedIn}: {name: string, source: string, signedIn: boolean}) {
    return (
        <div className='flex items-center'>
            <Avatar className='h-8 w-8 flex-center'>
                { signedIn ? 
                <>                
                  <AvatarImage src={source} alt="@AB"/>
                  <AvatarFallback className="text-xs">{name ? name.split(' ').map(i => i.charAt(0)) : 'AB'}</AvatarFallback>
                </> : <User className='h-7 w-7 p-1 rounded-full border-[1px] text-gray-600'/>}
            </Avatar>
            <ChevronDown className='h-4'/>
        </div>
    )
}
 
export default function ProfileDropdown({name, signedIn, image, uid}: {name: string, signedIn: boolean, image: string, uid: string}) {
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
            <ProfileAvatar name={name} signedIn={signedIn} source={image}/>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Profile</DropdownMenuLabel>
        <DropdownMenuSeparator/>
        {signedIn ? 
        (<div>
          <Link href={`/user/${uid}/settings`} className="p-2 text-sm block">Settings</Link>
          <Link href={`/user/${uid}/reservations`} className="p-2 text-sm block">Reservations</Link>
          <Link href={`/user/${uid}/starred`} className="p-2 text-sm block">Starred</Link>
          <Dialog>
            <DialogTrigger>
              <button className='p-2 text-sm'>Sign Out</button>
            </DialogTrigger>
            <DialogContent className="w-auto px-14 py-5">
              <DialogHeader>
                <DialogTitle className='text-base font-medium'>Are You Sure You Want To Sign Out?</DialogTitle>
                <DialogDescription className="flex-center justify-between gap-x-4 pt-2">
                  <Button onClick={() => unAuthenticateUser(showToaster)} variant="destructive" className='text-sm'>Sign Out</Button>
                  <DialogClose><Button variant="outline" className='text-black text-sm'>Cancel</Button></DialogClose>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
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