import Image from 'next/image';
import VehicleListPhoto from '../../../public/vehicleList_photos/VehicleListPhoto.jpg';

const VehicleList = ({ list }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {list.map((vehicle, index) => (
        <div key={index} className="relative flex flex-col items-center justify-center p-4 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          {/* Image will fill the div */}
          {vehicle.image && (
            <div className="absolute top-0 left-0 w-full h-full z-0">
              <Image
                layout="fill"
                objectFit="cover" 
                src={vehicle.image}
                alt={`${vehicle.make} ${vehicle.subDescription}`}
              />
            </div>
          )}
          {/* Content will be displayed over the image */}
          <div className="z-10">
            <div className=''>
            <h4 className="text-white">{vehicle.description || 'No Description'}</h4>
            </div>
            <p className="text-white">{vehicle.year} </p>
            <h5 className='text-white'>{vehicle.make}</h5>
            <p className="text-white">{vehicle.msrp}</p>
            <p className="text-white font-bold">{vehicle.price}</p>
            <p className="text-white">{vehicle.subDescription}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VehicleList;
