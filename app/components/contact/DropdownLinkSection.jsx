import Link from 'next/link';
import React, { useState } from 'react';

const DropdownLinkSection = ({ title, links }) => {
  const [show, setShow] = useState(false);

  return (
    <div className='border-b md:border-none border-gray-300'>
      <h2 onClick={() => setShow(!show)} className='text-sm font-bold cursor-pointer flex justify-between items-center md:justify-start text-dark-blue p-2'>
        {title}
        <span className='text-blue-500 md:hidden flex items-center justify-center h-6 w-6 rounded-full border border-blue-500'>
          <span>+</span>
        </span>
      </h2>
      <ul className={`p-0 ${show ? 'block' : 'hidden'} md:block w-40`}>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className='text-black no-underline'>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownLinkSection;
