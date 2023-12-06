'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoSearch, IoMenu } from "react-icons/io5";
import Image from 'next/image';

const hondalogo = '/logos/hondalogo.png';

const Nav = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const linkClass = hasScrolled ? 'text-black' : 'text-white';
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className={`fixed top-0 h-14 transition-colors w-full duration-300 z-20 ${hasScrolled ? 'bg-white shadow-md' : ''}`}>
            <div className='flex max-w-[100rem] justify-between mx-auto'>
                <Image src={hondalogo} width={60} height={300} alt="honda logo" className={`h-12 bg ${!hasScrolled ? 'white-logo' : ''}`} />

                {/* Hamburger Button */}
                <button className='md:hidden z-30' onClick={toggleMenu}>
                    <IoMenu size={30} className={linkClass} />
                </button>

                {/* Menu Overlay */}
                <div className={`${isMenuOpen ? 'fixed inset-0 bg-white z-10' : 'hidden'} transition-all duration-300 md:hidden`}>
                    <ul className='flex flex-col items-start justify-start pt-4 pl-4 gap-4'>
                        {['Vehicles', 'Shopping Tools', 'Owners', 'Explore', 'Find a Dealer', 'EN', 'Locations', <IoSearch size={24} key="search" />].map((text) => (
                            <li key={text} className="text-black text-xl">
                                <Link href="/">
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Links for larger screens */}
                <ul className='hidden md:flex items-center gap-10'>
                    {['Vehicles', 'Shopping Tools', 'Owners', 'Explore', 'Find a Dealer', 'EN', 'Locations', <IoSearch size={24} key="search" />].map((text) => (
                        <li key={text}>
                            <Link href="/" className={`no-underline hover:border-b-2 hover:pb-3 ${linkClass}`}>
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
