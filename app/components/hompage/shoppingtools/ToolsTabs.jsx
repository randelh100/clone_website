import React from 'react'

const ST_BAP_icon = '/shoppingtools_icons/ST_BAP_icon.svg';
const ST_Offers_icon = '/shoppingtools_icons/ST_Offers_icon.svg';
const ST_SI_icon = '/shoppingtools_icons/ST_SI_icon.svg';
const ST_PE_icon = '/shoppingtools_icons/ST_PE_icon.svg';

const ToolsTabs = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold pl-10 pt-16'>Shopping Tools</h2>
            <div>
                <ul className='flex justify-center gap-4 w-full '>
                    <li className='flex items-center border h-40 p-20 flex-1 justify-center bg-gray-100 group'>
                        <div className='flex flex-col items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                            <img src={ST_BAP_icon} alt="tool icon" className="hover-grow" />
                            <a href="#" className='text-center text-black no-underline'>Build & Price</a>
                        </div>
                    </li>
                    <li className='flex items-center border h-40 p-20 flex-1 justify-center bg-gray-100 group'>
                        <div className='flex flex-col items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                            <img src={ST_Offers_icon} alt="Offer icon" className="hover-grow" />
                            <a href="#" className='text-center text-black no-underline'>See Offers</a>
                        </div>
                    </li>
                    <li className='flex items-center border h-40 p-20 flex-1 justify-center bg-gray-100 group'>
                        <div className='flex flex-col items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                            <img src={ST_SI_icon} alt="see offers" className="hover-grow" />
                            <a href="#" className='text-center text-black no-underline'>Search Inventory</a>
                        </div>
                    </li>
                    <li className='flex items-center border h-40 p-20 flex-1 justify-center bg-gray-100 group'>
                        <div className='flex flex-col items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                            <img src={ST_PE_icon} alt="Estimate Payments" className="hover-grow" />
                            <a href="#" className='text-center text-black no-underline'>Estimate Payments</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ToolsTabs;
