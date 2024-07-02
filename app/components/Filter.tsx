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
    const [showStatusBar, setShowStatusBar] = useState<Checked>(true)
    const [showActivityBar, setShowActivityBar] = useState<Checked>(true)
    const [showPanel, setShowPanel] = useState<Checked>(true)
    const [ballProvided, setBallProvided] = useState('')
    const [radius, setRadius] = useState("1 Km")
    const [price, setPrice] = useState(150)

    return (
        <div className="filter">
            <div className='filter-row'>
                <TimePicker/>
                <DatePicker/>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                            <span>Size</span>
                            <ChevronDown className='h-4 w-4 !mr-0'/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Pitch Size</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem
                        checked={showStatusBar}
                        onCheckedChange={setShowStatusBar}
                        >
                        5-A-Side
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                        checked={showActivityBar}
                        onCheckedChange={setShowActivityBar}
                        >
                        7-A-Side
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                        checked={showPanel}
                        onCheckedChange={setShowPanel}
                        >
                        11-A-Side
                        </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">
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
                        <Button variant="outline">
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
                        <Button variant="outline">
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
                        <Button variant="outline">
                            <span>Ground</span>
                            <ChevronDown className='h-4 w-4 !mr-0'/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Ground Type</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem
                        checked={showStatusBar}
                        onCheckedChange={setShowStatusBar}
                        >
                        Artifical Turf
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                        checked={showActivityBar}
                        onCheckedChange={setShowActivityBar}
                        >
                        Natural Grass
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                        checked={showPanel}
                        onCheckedChange={setShowPanel}
                        >
                        Hybrid Grass
                        </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}