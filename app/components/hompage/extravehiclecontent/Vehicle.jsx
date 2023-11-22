import React from 'react'
import Image from 'next/image'

const Vehicle = ({ header, src }) => {
    return (
            <div className='relative'>
                <div>
                    <Image
                        objectFit="cover"
                        src={src}
                        alt={`${header}`}
                    />
                </div>
                <h2 className="text-white absolute top-0 left-2 text-xl">{header}</h2>
                    <h3 className="text-white absolute bottom-0 left-2 text-sm">LEARN MORE</h3>
            </div>
    )
}

export default Vehicle