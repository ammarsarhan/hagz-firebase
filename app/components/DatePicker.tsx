"use client"
 
import { useState } from "react"
import { CalendarIcon, ChevronDown } from "lucide-react"
import { format } from "date-fns"
 
import { cn } from "@/lib/utils"
import { Button } from "@/app/components/ui/button"
import { Calendar } from "@/app/components/ui/calendar"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover"
 
export default function DatePicker({fullWidth = false}: {fullWidth?: boolean}) {
  const [date, setDate] = useState<Date>()
 
  return (
    <Popover>
      <PopoverTrigger asChild className={cn(fullWidth && "w-full flex-center")}>
        <Button
          variant={"outline"}
          className={cn(
            "justify-start text-left font-normal h-8",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
          <ChevronDown className="h-4"/>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align={fullWidth ? "center" : "start"}>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}