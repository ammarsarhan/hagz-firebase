"use client";

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation";

import { z, ZodType } from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { useToast } from "@/app/components/ui/use-toast";

import Hero from '@/app/static/sign-up.webp'
import signUp from "@/firebase/auth/sign-up";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUp() {
  const { toast } = useToast();
  const router = useRouter();

  const formSchema: ZodType<FormData> = z.object({
    firstName: z.string().min(2, {message: 'Name must contain at least 2 characters'}).max(25, {message: 'Name must contain at most 25 characters'}).refine(s => !s.includes(' '), 'Name must not contain any spaces'),
    lastName: z.string().min(2, {message: 'Name must contain at least 2 characters'}).max(25, {message: 'Name must contain at most 25 characters'}).refine(s => !s.includes(' '), 'Name must not contain any spaces'),
    email: z.string().email({message: 'Please enter a valid email address'}),
    password: z.string().min(8, {message: 'Password must contain at least 8 characters'}).max(25, {message: 'Password must contain at most 25 characters'}).regex(new RegExp(".*[A-Z].*"), "Password must contain one uppercase character").regex(new RegExp(".*[a-z].*"), "Password must contain one lowercase character").regex(new RegExp(".*\\d.*"), "Password must contain at least one number"),
    confirmPassword: z.string()
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

  const { register, handleSubmit, formState: { errors }} = useForm<FormData>({resolver: zodResolver(formSchema)})
  const onFormSubmit = async (data: FormData) => {
    const {result, error} = await signUp(`${data.firstName} ${data.lastName}`, data.email, data.password)

    if (error) {
      toast({
        title: "An Error Occurred",
        description: error.message,
        variant: "destructive"
      })
    }

    if (result) {
      toast({
        title: "Account Created",
        description: "Account was created successfully!"
      })

      router.push('/')
    }
  }

  return (
    <div className="w-full h-full lg:grid lg:grid-cols-2">
      <div className="flex-center h-full px-4 py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-sm text-muted-foreground">Enter your details below to create an account</p>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit(onFormSubmit)}>
            <div className="flex gap-2">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                    id="first-name"
                    placeholder="First"
                    required
                    {...register("firstName")}
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-2">{errors.firstName.message}</p>}
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                    id="last-name"
                    placeholder="Last"
                    required
                    {...register("lastName")}
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-2">{errors.lastName.message}</p>}
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                  id="email"
                  type="email"
                  placeholder="mail@example.com"
                  required
                  {...register("email")}
              />
              {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required {...register("password")}/>
              {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Confirm Password</Label>
              </div>
              <Input id="confirmPassword" type="password" required {...register("confirmPassword")}/>
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-2">{errors.confirmPassword.message}</p>}
            </div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
          <div className="grid gap-2">
            <span className="block text-center text-sm mb-4">or</span>
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