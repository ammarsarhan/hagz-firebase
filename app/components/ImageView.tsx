import Image from "next/image"

export default function ImageView ({images} : {images: string[]}) {
    return (
        <div className="gap-2 grid-cols-2 grid-rows-2 hidden sm:grid h-[80vh] m-4 lg:my-0 mx-2">
            {images.map((source, index) => {
                return (
                    <Image 
                        src={source} 
                        key={index} 
                        width={0} 
                        height={0} 
                        alt={`Pitch Image ${index + 1}`} 
                        style={{height: '100%', width: 'auto'}} 
                        className="rounded-sm border-[1px] text-sm p-2"
                    />
                )
            })}
        </div>
    )
}