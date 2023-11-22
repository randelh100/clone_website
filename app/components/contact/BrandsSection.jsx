import React from 'react'

const hondalogo = '/logos/hondalogo.png';
const Acura_logo = '/logos/Acura_logo.png';
const hondawinglogo = '/logos/hondawinglogo.png';

const BrandsSection = () => {
    return (
        <div className='bg-blue-500'>
            <h2 className='text-sm text-white'>2023 American Honda Motor Co., All information contained herein applies to U.S. vehicle only. For non-U.S.-distributor information go to world.honda.com</h2>
            <ul>
                <li>
                    <a href="https://www.honda.com">
                        <img src={hondalogo} alt="Honda logo" className='h-12 white-logo'></img>
                    </a>
                </li>
                <li>
                    <a href="https://www.acura.com">
                        <img src={Acura_logo} alt="Acura logo" className='h-12 white-logo'></img>
                    </a>
                </li>
                <li>
                    <a href="http://www.honda.com">
                        <img src={hondawinglogo} alt="Honda logo" className='h-12 white-logo'></img>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default BrandsSection