import Link from 'next/link';



const Nav = async () => {
    return (
        <div className="">
            <nav className="fixed top-7 right-0 z-50 flex items-center gap-5 pr-28">
                <ul className='flex items-center gap-10'>
                    <li>
                        <Link
                            href={"/"}
                            className="text-white"
                        >
                            Vehicles
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/"}
                            className="text-white"
                        >
                            Shopping Tools
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/"}
                            className="text-white"
                        >
                            Owners
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/"}
                            className="text-white"
                        >
                            Explore
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/"}
                            className="text-white"
                        >
                            Find a dealer
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/"}
                            className="text-white"
                        >
                            EN
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/"}
                            className="text-white"
                            >
                                locations
                            
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/"}
                            className="text-white"
                        >
                            Search
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className=''>
                
            </div>
        </div>
    );
}

export default Nav;