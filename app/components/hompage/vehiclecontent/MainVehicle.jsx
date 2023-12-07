import Image from 'next/image';
import Link from 'next/link';

const MainVehicle = ({ className, image, year, make, msrp, price, subDescription, description, isFirst }) => {
    return (
        <div className={`relative flex flex-col items-center justify-center bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow md:h-[27rem] md:w-[24%] h-[50rem] w-[90%] group ${className}`}>
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

            {isFirst ? (
                <Link href="/" className="hidden group-hover:flex absolute top-14 left-6 text-white text-md font-bold border-2 bg-blue-500 border-blue-500 rounded-full px-12 py-1 no-underline">
                    Learn More
                </Link>
            ) : (
                <div className="absolute flex top-14 left-6 items-center">
                    <Link href="/explore" className="hidden group-hover:flex text-white text-md font-bold border-2 bg-blue-500 border-blue-500 rounded-full px-16 py-1 no-underline mr-4">
                        EXPLORE
                    </Link>
                    <Link href="/build" className="hidden group-hover:flex text-white text-md font-bold border-2 border-white rounded-full px-16 py-1 no-underline">
                        BUILD
                    </Link>
                </div>
            )}
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
