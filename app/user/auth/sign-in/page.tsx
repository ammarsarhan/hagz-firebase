"use client"

import Image from "next/image"
import Link from "next/link"

import { z, ZodType } from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"

import signIn from "@/firebase/auth/sign-in"

import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"

import { useToast } from "@/app/components/ui/use-toast"
import { useRouter } from "next/navigation"
import Hero from '@/app/static/sign-in.gif'

type FormData = {
  email: string;
  password: string;
}

const formSchema: ZodType<FormData> = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export default function SignIn() {

  const { toast } = useToast();
  const router = useRouter();

  const { register, handleSubmit, formState: {errors}} = useForm<FormData>({resolver: zodResolver(formSchema)})

  const onFormSubmit = async (data: FormData) => {
    const {result, error} = await signIn(data.email, data.password)

    if (error) {
      toast({
        title: "An Error Occurred",
        description: error.message,
        variant: "destructive"
      })
    }

    if (result) {
      toast({
        title: "Signed In",
        description: "Logged in to your account successfully!"
      })

      setTimeout(() => {
        router.push('/')
      }, 1000)
    }
  }

  return (
    <div className="w-full lg:grid lg:grid-cols-3 h-full">
      <div className="flex-center py-12 px-4 h-full col-span-2">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <p className="text-muted-foreground text-sm">
              Enter your email below to login to your Hagz account
            </p>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit(onFormSubmit)}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="mail@example.com"
                required
                {...register("email")}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required {...register("password")}/>
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <span className="block text-sm text-center">or</span>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
            <Button variant="outline" className="w-full">
              Login with Facebook
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/user/auth/sign-up" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block col-span-1">
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