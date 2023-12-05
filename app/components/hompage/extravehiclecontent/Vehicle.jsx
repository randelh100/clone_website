import React from 'react'
import Image from 'next/image'

const Vehicle = ({ header, src, id }) => {
    return (
        <div className='flex-none w-[24%]' id={id}>
            <div className='relative'>
                <div>
                    <Image
                        objectFit="cover"
                        src={src}
                        alt={`${header}`}
                        className='rounded-sm'
                    />
                </div>
                <h2 className="text-white absolute top-0 left-2 text-xl">{header}</h2>
                <h3 className="text-white absolute bottom-0 left-2 text-sm">LEARN MORE</h3>
            </div>
        </div>
    )
}

export default Vehicle