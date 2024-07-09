"use client"

import { ChevronDown } from 'lucide-react'
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuCheckboxItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem
  } from "@/app/components/ui/dropdown-menu"

import DatePicker from '@/app/components/DatePicker'
import TimePicker from '@/app/components/TimePicker'

import { Slider } from "@/app/components/ui/slider"
import { Button } from "@/app/components/ui/button"
import { useState } from "react"

type Checked = DropdownMenuCheckboxItemProps["checked"]

export default function Filter () {
    const [showFive, setShowFive] = useState<Checked>(true)
    const [showSeven, setShowSeven] = useState<Checked>(true)
    const [showEleven, setShowEleven] = useState<Checked>(true)
    const [showAG, setShowAG] = useState<Checked>(true)
    const [showNG, setShowNG] = useState<Checked>(true)
    const [showHG, setShowHG] = useState<Checked>(true)
    const [ballProvided, setBallProvided] = useState('')
    const [radius, setRadius] = useState("1 Km")
    const [price, setPrice] = useState(150)

    return (
        <div className="filter">
            <div className='filter-row'>
                <DatePicker/>
                <TimePicker/>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className='h-8'>
                            <span>Size</span>
                            <ChevronDown className='h-4 w-4 !mr-0'/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Pitch Size</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem
                        checked={showFive}
                        onCheckedChange={setShowFive}
                        >
                        5-A-Side
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                        checked={showSeven}
                        onCheckedChange={setShowSeven}
                        >
                        7-A-Side
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                        checked={showEleven}
                        onCheckedChange={setShowEleven}
                        >
                        11-A-Side
                        </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className='h-8'>
                            <span>Ball{ballProvided ? `: ${ballProvided}` : ''}</span>
                            <ChevronDown className='h-4 w-4 !mr-0'/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Ball Provided?</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={ballProvided} onValueChange={setBallProvided}> {/* Fix, get the correct value */}
                        <DropdownMenuRadioItem value='Yes'>Yes</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value='No'>No</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className='h-8'>
                            <span>Price: {price} EGP/hr</span>
                            <ChevronDown className='h-4 w-4 !mr-0'/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 px-4">
                        <DropdownMenuLabel className='my-4'>Max Price Per Hour: <span className='block'>{price} EGP</span></DropdownMenuLabel>
                        <Slider defaultValue={[price]} min={100} max={800} step={25} onValueChange={(value) => setPrice(value[0])} className='mb-4'/>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className='h-8'>
                            <span>Radius: {radius}</span>
                            <ChevronDown className='h-4 w-4 !mr-0'/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Search Radius</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={radius} onValueChange={setRadius}>
                        <DropdownMenuRadioItem value="1 Km">{'<'} 1 Km</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="2.5 Km">{'<'} 2.5 Km</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="5 Km">{'<'} 5 Km</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className='h-8'>
                            <span>Ground</span>
                            <ChevronDown className='h-4 w-4 !mr-0'/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Ground Type</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem
                        checked={showAG}
                        onCheckedChange={setShowAG}
                        >
                        Artifical Turf
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                        checked={showNG}
                        onCheckedChange={setShowNG}
                        >
                        Natural Grass
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                        checked={showHG}
                        onCheckedChange={setShowHG}
                        >
                        Hybrid Grass
                        </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}