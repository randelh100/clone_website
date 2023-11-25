'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { IoSearch } from "react-icons/io5";
import Image from 'next/image';


const hondalogo = '/logos/hondalogo.png';


const Nav = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const linkClass = hasScrolled ? 'text-black' : 'text-white';

    return (
        <nav className={`fixed top-0 h-14 transition-colors w-full duration-300 ${hasScrolled ? 'bg-white shadow-md' : ''}`}>
            <div className='flex  max-w-[100rem] justify-between mx-auto'>
                <Image src={hondalogo} width={60} height={300} alt="honda logo" className={`h-12 bg ${!hasScrolled ? 'white-logo' : ''}`} />
                <ul className='flex items-center gap-10'>
                    {['Vehicles', 'Shopping Tools', 'Owners', 'Explore', 'Find a Dealer', 'EN', 'Locations', <IoSearch size={24} />].map((text) => (
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
