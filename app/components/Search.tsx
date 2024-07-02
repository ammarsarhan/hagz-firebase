import { Input } from "@/app/components/ui/input"
import { SearchIcon } from "lucide-react"

export default function Search () {
    return (
        <div className="relative">  
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 w-4 h-4 hover:cursor-pointer" />
            <Input
                type="text"
                placeholder="Search by name..."
                className="pl-10 pr-3 py-2 border border-gray-300 rounded-xl focus:border-transparent md:w-72 lg:w-96"
            />
        </div>
    )
}