'use client';
import Link from 'next/link'

const NavBarList = [
    { label: 'Home', href:'/' },
    { label: 'Companions', href:'/companions' },
    { label: 'My Journey', href:'/my-journey' },
]

const NavBarlist = () => {
  return (
    <nav className="flex items-center gap-4">
        {NavBarList.map(({ label, href }) => (
            <Link href={href} key={label}
            >
                {label}
            </Link>
        ))}
    </nav>
  );
};

export default NavBarlist;
