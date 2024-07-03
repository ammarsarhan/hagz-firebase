'use client'

import { useEffect, useState } from 'react';

import Logo from './Logo'
import Search from './Search'
import ProfileDropdown from './ProfileDropdown'

import { useAuthContext } from "@/context/AuthContext";

export default function Navigation () {
    const { user } = useAuthContext();

    const [signedIn, setSignedIn] = useState(false);
    const [image, setImage] = useState("");

    useEffect(() => {
        if (user) {
            setSignedIn(true)
            setImage(user.photoURL)
        } 
        else setSignedIn(false);
    }, [user])

    return (
        <nav className="flex items-center justify-between border-b-[1px] p-3">
            <Logo/>
            <Search/>
            <ProfileDropdown signedIn={signedIn} image={image}/>
        </nav>
    )
}

// import React from "react";
// import { useRouter } from "next/navigation";
// function Page() {
//     const { user } = useAuthContext()
//     const router = useRouter()

//     React.useEffect(() => {
//         if (user == null) router.push("/")
//     }, [user])

//     return (<h1>Only logged in users can view this page</h1>);
// }

// export default Page;