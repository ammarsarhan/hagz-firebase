import Image from "next/image"
import Link from "next/link"

import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"

import Hero from '@/app/static/sign-up.webp'

export default function SignUp() {
  return (
    <div className="w-full h-full lg:grid lg:grid-cols-2">
        <div className="flex-center h-full px-4 py-12">
            <div className="mx-auto grid w-[350px] gap-6">
                <div className="grid gap-2 text-center">
                    <h1 className="text-3xl font-bold">Sign Up</h1>
                    <p className="text-sm text-muted-foreground">Enter your details below to create an account</p>
                </div>
            <div className="grid gap-4">
                <div className="flex gap-2">
                    <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="First"
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="firstName">Last Name</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Last"
                            required
                        />
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="mail@example.com"
                        required
                    />
                </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Confirm Password</Label>
              </div>
              <Input id="password" type="password" required/>
            </div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
            <span className="block text-center text-sm">or</span>
            <Button variant="outline" className="w-full">
              Sign up with Google
            </Button>
            <Button variant="outline" className="w-full">
                Sign up with Facebook
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/user/auth/sign-in" className="underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
            <Image
            src={Hero}
            alt="Image"
            width="1080"
            height="1920"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
        </div>
    </div>
  )
}