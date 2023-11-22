import React from 'react'
import { TiSocialYoutube } from "react-icons/ti";
import { CiTwitter } from "react-icons/ci";
import { PiTiktokLogoLight } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoLogoPinterest } from "react-icons/io";
import { FaSnapchat } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const ContactSection = () => {
    return (
        <div className='flex justify-between border-b-2 border-gray-500'>
            <div className='flex flex-col'>
                <p> <span>Stay in Touch</span></p>
                <div className='flex gap-2'>
                    <div className="bg-blue-500 rounded-full p-2">
                        <CiTwitter className="text-white" />
                    </div>
                    <div className="bg-blue-500 rounded-full p-2">
                        <PiTiktokLogoLight className="text-white" />
                    </div>
                    <div className="bg-blue-500 rounded-full p-2">
                        <CiInstagram className="text-white" />
                    </div>
                    <div className="bg-blue-500 rounded-full p-2">
                        <FiFacebook className="text-white" />
                    </div>
                    <div className="bg-blue-500 rounded-full p-2">
                        <SlSocialLinkedin className="text-white" />
                    </div>
                    <div className="bg-blue-500 rounded-full p-2">
                        <TiSocialYoutube className="text-white" />
                    </div>
                    <div className="bg-blue-500 rounded-full p-2">
                        <IoLogoPinterest className="text-white" />
                    </div>
                    <div className="bg-blue-500 rounded-full p-2">
                        <FaSnapchat className="text-white" />
                    </div>
                </div>
            </div>
            <div className='flex'>
            <IoSearch />
            <input type="text" placeholder='Search for anything Honda'/>
            </div>
            <div className='mb-8'>
                <p>Revive the latest news and exclusive updates.</p>
                <a href="/" className=''>STAY INFORMED</a>
            </div>
        </div>
    )
}

export default ContactSection
