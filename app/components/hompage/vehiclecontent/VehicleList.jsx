import React, { useRef, useState, useEffect } from 'react';
import MainVehicle from './MainVehicle';

const VehicleList = ({ list }) => {
  const scrollContainerRef = useRef(null);
  const [itemPositions, setItemPositions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
  }, [list]);

  useEffect(() => {
    const positions = Array.from(scrollContainerRef.current.children).map(child => child.offsetLeft);
    setItemPositions(positions);
  }, [list]);

  const scroll = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = 0;
    if (newIndex >= itemPositions.length) newIndex = itemPositions.length - 1;
    scrollContainerRef.current.scrollTo({ left: itemPositions[currentIndex], behavior: 'smooth' });
    setCurrentIndex(newIndex);
  };

  return (
    <div className='relative'>
      <button
        className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 m-2 rounded-full w-10 h-10 flex items-center justify-center'
        onClick={() => scroll(-1)}
      >
        &#8592;
      </button>

      <div className="gap-4 flex overflow-x-auto pb-4" ref={scrollContainerRef}>
        {list.map((vehicle, index) => (
          <MainVehicle 
            key={index}
            isFirst={index === 0}
            className={`flex-none`}
            image={vehicle.image}
            description={vehicle.description}
            year={vehicle.year}
            make={vehicle.make}
            msrp={vehicle.msrp}
            price={vehicle.price}
            subDescription={vehicle.subDescription}
          />
        ))}
      </div>

      <button
        className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 m-2 rounded-full w-10 h-10 flex items-center justify-center'
        onClick={() => scroll(1)}
      >
        &#8594;
      </button>
    </div>
  );
};

export default VehicleList;
