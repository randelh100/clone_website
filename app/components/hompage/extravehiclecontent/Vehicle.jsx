import React from 'react'
import Image from 'next/image'

const Vehicle = ({ header, src, id }) => {
    return (
        <div className='flex-none h-[24rem] w-[80%] md:w-[24%] md:h-64' id={id}>
            <div className='relative h-full'>
                    <Image
                        objectFit="cover"
                        src={src}
                        alt={`${header}`}
                        className='rounded-sm'
                        layout='fill'
                    />
                <h2 className="text-white absolute top-0 left-2 text-xl">{header}</h2>
                <h3 className="text-white absolute bottom-0 left-2 text-sm">LEARN MORE</h3>
            </div>
        </div>
    )
}

export default Vehicle