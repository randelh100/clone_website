import Link from 'next/link';
import React from 'react'
import FooterImage from './FooterImage';
import Image from 'next/image'
import FooterLink from './FooterLink';

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
                <div className='flex flex-col md:flex-row justify-between items-center text-white text-xs mt-4'>
                    <h2 className='text-sm'>
                        2023 American Honda Motor Co., All information contained herein applies to U.S. vehicles only. For non-U.S.-distributor information go to
                        <a href="http://world.honda.com" className="underline hover:text-gray-300 ml-1">world.honda.com</a>
                    </h2>
                    <ul className='flex flex-wrap gap-2 mt-4 md:mt-0'>
                        <FooterLink
                        href={"http://www.honda.com"}
                        text={"Privacy Notice"}
                        />
                        <FooterLink
                        href={"http://www.honda.com"}
                        text={"Prop 65 Info"}
                        />
                        <FooterLink
                        href={"http://www.honda.com"}
                        text={"Vehicle Data Privacy"}
                        />
                        <FooterLink
                        href={"http://www.honda.com"}
                        text={"SMS Terms"}
                        />
                        <FooterLink
                        href={"http://www.honda.com"}
                        text={"Terms & Conditions"}
                        />
                        <FooterLink
                        href={"http://www.honda.com"}
                        text={"Your Privacy Choices"}
                        />
                        <li className='flex items-center'>
                            <Image 
                            src={privacyoptions} 
                            alt="Privacy Options" 
                            className='h-4 mr-1' 
                            width={30}
                            height={30}
                            />
                        </li>
                        <FooterLink
                        href={"http://www.honda.com"}
                        text={"Site Map"}
                        />
                    </ul>
                </div>
                </div>
                <div className='mt-20 mb-20'>
                    <ul className='flex justify-center md:justify-between p-0 '>
                        <li>
                            <Link href="https://www.honda.com">
                                <img src={hondalogo} alt="Honda logo" className='h-12 white-logo'></img>
                            </Link>
                        </li>
                        {/* Hide these elements on small screens */}
                        <FooterImage
                            alt="Acura logo"
                            src={Acura_logo}
                            href={"http://www.honda.com"}
                        />
                        <FooterImage
                            alt="Honda Powersports logo"
                            src={hondawinglogo}
                            href={"http://www.honda.com"}
                        />
                        <FooterImage
                            alt="Honda Power Equipment logo"
                            src={hondapowerequipment}
                            href={"http://www.honda.com"}
                        />
                        <FooterImage
                            alt="Honda Jet logo"
                            src={hondajet}
                            href={"http://www.honda.com"}
                        />
                        <FooterImage
                            alt="Honda Marine logo"
                            src={hondamarine}
                            href={"http://www.honda.com"}
                        />
                        <FooterImage
                            alt="Honda Racing logo"
                            src={hondaracing}
                            href={"http://www.honda.com"}
                        />
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