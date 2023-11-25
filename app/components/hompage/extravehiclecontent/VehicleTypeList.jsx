import React from 'react'
import Vehicle from './Vehicle'

const VehicleTypeList = ({ header, list }) => {
    console.log(list)
    return (
        <div>
            <div> 
                <h2 className='font-bold mt-3 text-2xl'>{header}</h2>
                <div className='flex gap-4'>
                {list.map((vehicle, index) => (
                    <Vehicle key={index} header={vehicle.header} src={vehicle.src} />
                ))}
                </div>
            </div>
        </div>
    )
}

export default VehicleTypeList