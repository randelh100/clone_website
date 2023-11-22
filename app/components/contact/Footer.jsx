import React from 'react'
import ContactSection from './ContactSection';
import LinksSection from './LinksSection';

const bluehondalogo = '/logos/bluehondalogo.png';

const Footer = () => {
  return (
    <footer className='mt-16 border-t-4 border-blue-400'>
      <div className='flex justify-center border-b-2 mb-8'>
      <img src={bluehondalogo} alt="Blue Honda Logo" className='h-28 w-44'/>
      </div>
<ContactSection />
<LinksSection />
    </footer>

  )
}

export default Footer           