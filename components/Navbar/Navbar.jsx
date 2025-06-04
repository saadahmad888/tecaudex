import Link from 'next/link'
import React from 'react'
import './Navbar.css';
import NotificationDropdown from './Notification';
import SearchBar from './SearchBar';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="branding">
                <Link href="/">
                    Test Task
                </Link>
            </div>
            <div className="navigations">
                <SearchBar />
                <NotificationDropdown />
                <Link href="/">
                    <Image src="/images/profile.png" alt='' width={40} height={40} />
                </Link>
            </div>
        </div>
    )
}

export default Navbar