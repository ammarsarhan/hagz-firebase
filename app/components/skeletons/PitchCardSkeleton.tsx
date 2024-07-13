import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css"

export default function PitchCardSkeleton () {
    return (
        <div className="m-4 h-[500px] border-[1px] rounded-lg p-5">
            <Skeleton className='rounded-sm mb-4' width={240} height={'50%'}/>
            <Skeleton className='rounded-sm mb-2' width={'80%'} height={25}/>
            <Skeleton className='rounded-sm mt-2 mb-6' width={'60%'} height={20}/>
            <Skeleton className='rounded-sm my-1' width={'40%'} height={20} count={4}/>
        </div>
    )
}