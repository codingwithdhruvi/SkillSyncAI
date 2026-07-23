import Link from 'next/link'
import NavBarlist from './NavBarlist'

const NavBar = () => {
  return (
    <nav className="navbar">
        <Link href='/'>
            <div className='flex items-center gap-2.5 cursor-pointer'>
                <img src="/images/logo.svg" alt="logo"
                width={44} height={40}
                />
            </div>
        </Link>
        <div className='flex items-center gap-8'>
            <NavBarlist />
            <p>Sign In</p>
        </div>
    </nav>
  )
}

export default NavBar