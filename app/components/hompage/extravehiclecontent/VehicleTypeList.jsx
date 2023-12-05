'use client'
import React, { useRef, useEffect, useState } from 'react';
import Vehicle from './Vehicle';

const VehicleTypeList = ({ header, list }) => {
    const scrollContainerRef = useRef(null);
    const [itemPositions, setItemPositions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const positions = Array.from(scrollContainerRef.current.children).map(child => child.offsetLeft);
        setItemPositions(positions);
    }, [list]);

    const scroll = (direction) => {
        let newIndex = currentIndex + direction;
        if (newIndex < 0) newIndex = 0;
        if (newIndex >= itemPositions.length) newIndex = itemPositions.length - 1;

        scrollContainerRef.current.scrollTo({
            left: itemPositions[newIndex],
            behavior: 'smooth'
        });

        setCurrentIndex(newIndex);
    };

    return (
        <div>
            <h2 className='font-bold mt-3 text-2xl'>{header}</h2>
            <div className='relative'>
                <button
                    className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 m-2 rounded-full w-10 h-10 flex items-center justify-center'
                    onClick={() => scroll(-1)}
                >
                    &#8592; {/* Left arrow symbol */}
                </button>

                <div
                    ref={scrollContainerRef}
                    className='flex overflow-x-auto py-2 gap-4'
                    
                >
                    {list.map((vehicle, index) => (
                        <Vehicle key={vehicle.id} header={vehicle.header} src={vehicle.src} />
                    ))}
                </div>

                <button
                    className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 m-2 rounded-full w-10 h-10 flex items-center justify-center'
                    onClick={() => scroll(1)}
                >
                    &#8594; {/* Right arrow symbol */}
                </button>
            </div>
        </div>
    );
};

export default VehicleTypeList;


