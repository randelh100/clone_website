import Image from 'next/image';


const VehicleList = ({ list }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ml-10 mr-10">
      {list.map((vehicle, index) => (
        <div key={index} className=" relative flex flex-col items-center justify-center bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          {/* Image will fill the div */}
          {vehicle.image && (
            <div className="">
              <Image
                objectFit="cover"
                src={vehicle.image}
                alt={`${vehicle.make} ${vehicle.subDescription}`}
              />
            </div>

          )}
          {/* Content will be displayed over the image */}
          <h4 className="text-white absolute top-6 left-6">{vehicle.description || 'No Description'}</h4>
          <div className="absolute bottom-4 left-7 text-white">
            {vehicle.year}
            <h5 className='text-white text-2xl'>{vehicle.make}</h5>
          </div>
          <div className='absolute bottom-0 left-6 text-white text-xs'>
            {vehicle.subDescription}
          </div>
          <div className='absolute bottom-4 right-5 text-white'>
            {vehicle.msrp}
            <h6 className="text-white font-bold text-lg pl-4">{vehicle.price}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VehicleList;
