import React, { useState } from 'react';
import Image from 'next/image';

const Vehicle = ({ header, src, id }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div className='flex-none h-[24rem] w-[80%] md:w-[24%] md:h-64 overflow-hidden' id={id}
             onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='relative h-full'>
                <Image
                    objectFit="cover"
                    src={src}
                    alt={`${header}`}
                    className={`rounded-sm transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}
                    layout='fill'
                />
                <h2 className="text-white absolute top-0 left-2 text-xl">{header}</h2>
                <h3 className="text-white absolute bottom-0 left-2 text-sm">LEARN MORE</h3>
            </div>
        </div>
    );
}

export default Vehicle;
