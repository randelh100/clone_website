import Link from 'next/link';
import React from 'react'

const ST_BAP_icon = '/shoppingtools_icons/ST_BAP_icon.svg';
const ST_Offers_icon = '/shoppingtools_icons/ST_Offers_icon.svg';
const ST_SI_icon = '/shoppingtools_icons/ST_SI_icon.svg';
const ST_PE_icon = '/shoppingtools_icons/ST_PE_icon.svg';

const ToolsTabs = () => {
    return (
        <div className='flex flex-col'>
            <h2 className='text-2xl font-bold pt-16'>Shopping Tools</h2>
            <ul className='flex w-full p-0 gap-4'>
                <li className='flex items-center border h-40 justify-center bg-gray-100 group w-1/4'>
                    <div className='flex flex-col items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                        <img src={ST_BAP_icon} alt="tool icon" className="hover-grow" />
                        <Link href="#" className='text-center text-black no-underline'>Build & Price</Link>
                    </div>
                </li>
                <li className='flex items-center border h-40 justify-center bg-gray-100 group w-1/4'>
                    <div className='flex flex-col items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                        <img src={ST_Offers_icon} alt="Offer icon" className="hover-grow" />
                        <Link href="#" className='text-center text-black no-underline'>See Offers</Link>
                    </div>
                </li>
                <li className='flex items-center border h-40 justify-center bg-gray-100 group w-1/4'>
                    <div className='flex flex-col items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                        <img src={ST_SI_icon} alt="see offers" className="hover-grow" />
                        <Link href="#" className='text-center text-black no-underline'>Search Inventory</Link>
                    </div>
                </li>
                <li className='flex items-center border h-40 justify-center bg-gray-100 group w-1/4'>
                    <div className='flex flex-col items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                        <img src={ST_PE_icon} alt="Estimate Payments" className="hover-grow" />
                        <Link href="#" className='text-center text-black no-underline'>Estimate Payments</Link>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ToolsTabs;
