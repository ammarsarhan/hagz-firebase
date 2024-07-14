import Image from "next/image"

export default function ImageView ({images} : {images: string[]}) {
    return (
        <div className="gap-2 grid-cols-2 grid-rows-2 hidden sm:grid h-[80vh] m-4 lg:my-0 mx-2">
            {images.map((source, index) => {
                return (
                    <div key={index} className="h-full w-full relative">
                        <Image 
                            src={source} 
                            fill
                            alt={`Pitch Image ${index + 1}`}
                            className="rounded-md border-[1px] text-sm object-cover"
                        />
                    </div>
                )
            })}
        </div>
    )
}