import Link from 'next/link';
import React from 'react'

const hondalogo = '/logos/hondalogo.png';
const Acura_logo = '/logos/Acura_logo.png';
const hondawinglogo = '/logos/hondawinglogo.png';
const hondapowerequipment = '/logos/hondapowerequipment.png';
const hondajet = '/logos/hondajet.png';
const hondamarine = '/logos/hondamarine.png';
const hondaracing = '/logos/hondaracing.png';
const privacyoptions = '/logos/privacyoptions.svg';

const BrandsSection = () => {
    return (
        <div className='bg-blue-500'>
            <div className='max-w-[115rem] mx-auto'>
                <div className='flex justify-between'>
                    <div className='mt-4'>
                        <h2 className='text-xs text-white'>2023 American Honda Motor Co., All information contained herein applies to U.S. vehicle only. For non-U.S.-distributor information go to
                            <br />
                            world.honda.com</h2>
                    </div>
                    <div>
                        <Link href="http://www.honda.com" className='text-white'>Privacy Notice</Link>
                        <Link href="http://www.honda.com" className='text-white'>Prop 65 Info</Link>
                        <Link href="http://www.honda.com" className='text-white'>Vehicle Data Privacy</Link>
                        <Link href="http://www.honda.com" className='text-white'>SMS terms</Link>
                        <br />
                        <Link href="http://www.honda.com" className='text-white'>Terms & Conditions</Link>
                        <Link href="http://www.honda.com" className='text-white'>Your Privacy Choices</Link> <img src={privacyoptions} alt="" className='h-4' />
                        <Link href="http://www.honda.com" className='text-white'>Site Map</Link>
                    </div>
                </div>
                <div className='mt-20 mb-20'>
                    <ul className='flex justify-between p-0'>
                        <li>
                            <Link href="https://www.honda.com">
                                <img src={hondalogo} alt="Honda logo" className='h-12 white-logo'></img>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.acura.com">
                                <img src={Acura_logo} alt="Acura logo" className='h-12 white-logo'></img>
                            </Link>
                        </li>
                        <li>
                            <Link href="http://www.honda.com">
                                <img src={hondawinglogo} alt="Honda logo" className='h-12 white-logo'></img>
                            </Link>
                        </li>
                        <li>
                            <Link href="http://www.honda.com">
                                <img src={hondapowerequipment} alt="Honda logo" className='h-12 white-logo'></img>
                            </Link>
                        </li>
                        <li>
                            <Link href="http://www.honda.com">
                                <img src={hondajet} alt="Honda logo" className='h-12 white-logo'></img>
                            </Link>
                        </li>
                        <li>
                            <Link href="http://www.honda.com">
                                <img src={hondamarine} alt="Honda logo" className='h-12 white-logo'></img>
                            </Link>
                        </li>
                        <li>
                            <Link href="http://www.honda.com">
                                <img src={hondaracing} alt="Honda logo" className='h-12 white-logo'></img>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='pb-3'>
                    <p className='text-white text-xs'>We and third parties use cookies and similar tools to enhance and track your experience on our Sites, conduct analytics, and personalize marketing to you. By
                        <br />
                        using the Sites, you agree to our use of these technologies. For more information, visit the Cookies section within our Privacy Notice. To manage your Cookie
                        <br />
                        Preferences,<Link href="" className='text-white'>click here.</Link></p>
                </div>
            </div>
        </div>
    )
}

export default BrandsSection