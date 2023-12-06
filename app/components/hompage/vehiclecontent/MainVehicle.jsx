import Image from 'next/image';

const MainVehicle = ({ className, image, year, make, msrp, price, subDescription, description }) => {
    return (
        <div className={`relative flex flex-col items-center justify-center bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow md:h-[25rem] md:w-[24%] h-[50rem] w-[90%] ${className}`}>
            {image && (
                <div className="w-full h-full">
                    <Image
                        src={image}
                        alt={`${make} ${subDescription}`}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            )}
            <h4 className="text-white text-lg sm:text-xl absolute top-6 left-6">{description || 'No Description'}</h4>

            <div className="absolute bottom-4 left-7 text-white">
                {year}
                <h5 className='text-white text-2xl mb-4'>{make}</h5>
            </div>
            <div className='absolute bottom-0 left-6 text-white text-xs'>
                {subDescription}
            </div>
            <div className='absolute bottom-4 right-5 text-white'>
                {msrp}
                <h6 className="text-white font-bold text-lg text-right">{price}</h6>
            </div>
        </div>
    );
}

export default MainVehicle;
