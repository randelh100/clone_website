import React from 'react'
import ContactSection from './ContactSection';
import LinksSection from './LinksSection';
import BrandsSection from './BrandsSection';

const bluehondalogo = '/logos/bluehondalogo.png';

const Footer = () => {
  return (
    <footer className='mt-16 border-t-4 border-blue-500 '>
      <div className='flex justify-center border-b-2 mb-3 max-w-[115rem] mx-auto'>
      <img src={bluehondalogo} alt="Blue Honda Logo" className='h-30 w-48 mt-2'/>
      </div>
<ContactSection />
<LinksSection />
<BrandsSection />
    </footer>

  )
}

export default Footer           