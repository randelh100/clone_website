'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';


const hondalogo = '/logos/hondalogo.png';


const Nav = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the scroll listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Define a function to determine the text class based on whether the page has scrolled
    const linkClass = hasScrolled ? 'text-black' : 'text-white';

    return (
        <div>
            <nav className={`fixed top-0 flex justify-end gap-5 w-full h-14 pr-20 transition-colors duration-300 ${hasScrolled ? 'bg-white shadow-md' : ''}`}>
           
                <ul className='flex items-center gap-10'>
                    <li className='absolute left-0 pl-9'> <img src={hondalogo} alt="honda logo" className='h-12' /></li>
                    {['Vehicles', 'Shopping Tools', 'Owners', 'Explore', 'Find a Dealer', 'EN', 'Locations', 'Search'].map((text) => (
                        <li key={text}>
                            <Link href="/">
                                <span className={`cursor-pointer no-underline hover:underline ${linkClass}`}>
                                    {text}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
