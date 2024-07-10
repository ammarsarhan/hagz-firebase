import { useState } from "react"
import { Clock4, ChevronDown } from "lucide-react"
import { format } from "date-fns"
 
import { cn } from "@/lib/utils"
import { Button } from "@/app/components/ui/button"
import { Calendar } from "@/app/components/ui/calendar"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover"

export default function TimePicker ({fullWidth = false, label = "Pick a time"}: {fullWidth?: boolean, label?: String}) {
    const [date, setDate] = useState<Date>()
 
    return (
      <Popover>
        <PopoverTrigger asChild className={cn(fullWidth && "w-full flex-center mb-2 xs:my-2")}>
          <Button
            variant={"outline"}
            className={cn(
              "justify-start text-left font-normal h-8",
              !date && "text-muted-foreground"
            )}
          >
            <Clock4 className="mr-2 h-4 w-4"/>
            {date ? format(date, "PPP") : <span>{label}</span>}
            <ChevronDown className="h-4"/>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="center">
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