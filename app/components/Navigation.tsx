import Logo from './Logo'
import Search from './Search'
import ProfileDropdown from './ProfileDropdown'

export default function Navigation () {
    return (
        <nav className="flex items-center justify-between border-b-[1px] p-3">
            <Logo/>
            <Search/>
            <ProfileDropdown signedIn={false}/>
        </nav>
    )
}