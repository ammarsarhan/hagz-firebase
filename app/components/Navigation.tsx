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
    const [uid, setUID] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        if (user) {
            setSignedIn(true)
            setImage(user.photoURL)
            setUID(user.uid)
            setName(user.displayName)
        } 
        else setSignedIn(false);
    }, [user])

    return (
        <nav className="flex items-center justify-between border-b-[1px] p-3">
            <Logo/>
            <Search/>
            <ProfileDropdown name={name} signedIn={signedIn} image={image} uid={uid}/>
        </nav>
    )
}