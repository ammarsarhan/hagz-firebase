import Logo from './Logo'
import Search from './Search'

export default function Navigation () {
    return (
        <nav className="flex justify-between border-b-[1px] p-3">
            <div className='flex items-center'>
                <Logo/>
                <Search/>
            </div>
        </nav>
    )
}