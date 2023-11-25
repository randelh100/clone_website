import React from 'react'
import { TiSocialYoutube } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Link from 'next/link';

const ContactSection = () => {
    return (
        <div className='border-b-2 border-gray-300'>
            <div className='max-w-[115rem] mx-auto flex justify-between'>
                <div className='flex flex-col'>
                    <p>Stay in Touch</p>
                    <div className='flex gap-2'>
                        <FaTwitter className="text-white bg-blue-500 rounded-full p-2" size={30} />
                        <FaTiktok className="text-white  bg-blue-500 rounded-full p-2" size={30} />
                        <CiInstagram className="text-white  bg-blue-500 rounded-full p-2" size={30} />
                        <FaFacebookF className="text-white  bg-blue-500 rounded-full p-2" size={30} />
                        <FaLinkedinIn className="text-white  bg-blue-500 rounded-full p-2" size={30} />
                        <TiSocialYoutube className="text-white  bg-blue-500 rounded-full p-2" size={30} />
                        <FaPinterestP className="text-white  bg-blue-500 rounded-full p-2" size={30} />
                        <FaSnapchatGhost className="text-white  bg-blue-500 rounded-full p-2" size={30} />
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <IoSearch />
                    <input type="text" placeholder='Search for anything Honda' />
                </div>
                <div className='mb-4 flex flex-col items-end'>
                    <p>Revive the latest news and exclusive updates.</p>
                    <Link href="/" className=' text-blue-500 text-md font-bold border-2 border-blue-500 rounded-full px-4 py-2 no-underline'>STAY INFORMED</Link>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
