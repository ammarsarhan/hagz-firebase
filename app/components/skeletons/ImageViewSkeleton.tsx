import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css"

export default function ImageViewSkeleton () {
    return (
        <div className='gap-2 grid-cols-2 grid-rows-2 hidden sm:grid h-[80vh] m-4 lg:my-0 mx-2'>
            <Skeleton count={2} className='rounded-sm border-[1px] text-sm p-2 first:mb-2' width={"100%"} height={'100%'}/>
            <Skeleton count={2} className='rounded-sm border-[1px] text-sm p-2 first:mb-2' width={"100%"} height={'100%'}/>
        </div>
    )
}