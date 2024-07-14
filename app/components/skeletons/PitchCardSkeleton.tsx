import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css"

export default function PitchCardSkeleton () {
    return (
        <div className="m-4 border-[1px] rounded-lg p-5 h-[635px]">
            <Skeleton className='rounded-sm' width={240} height={'45%'}/>
            <Skeleton className='rounded-sm my-8' width={'80%'} height={25}/>
            <Skeleton className='rounded-sm mb-2' width={'100%'} height={15} count={3}/>
            <Skeleton className='rounded-sm mt-2 mb-6' width={'60%'} height={15}/>
            <Skeleton className='rounded-sm my-1' width={'40%'} height={15} count={4}/>
        </div>
    )
}