import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css"

export default function DetailsViewSkeleton () {
    return (
        <div className='border-[1px] rounded-lg p-5 relative'>
            <Skeleton count={2} width={"50%"} height={15} className='my-2'/>
            <Skeleton width={"70%"} height={40} className='my-4'/>
            <Skeleton width={"20%"} height={20}/>
            <div className='my-4'>
                <Skeleton width={"90%"} height={20} count={2} className='my-2'/>
                <Skeleton width={"80%"} height={20} className='my-2'/>
            </div>
            <div className='my-8 flex-center flex-col'>
                <div>
                    <Skeleton count={2} inline height={20} width={100} className='first:mr-4 my-2'/>
                </div>
                <div>
                    <Skeleton count={2} inline height={20} width={100} className='first:mr-4 my-2'/>
                </div>
                <div>
                    <Skeleton count={2} inline height={20} width={100} className='first:mr-4 my-2'/>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row my-2'>
                <div className='w-full sm:pr-2 sm:w-1/2'>
                    <Skeleton height={20}/>
                </div>
                <div className='w-full sm:pl-2 sm:w-1/2'>
                    <Skeleton height={20}/>
                </div>
            </div>
            <Skeleton width={"100%"} height={20}/>
        </div>
    )
}