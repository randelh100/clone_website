'use client'
import VehicleList from './VehicleList';
import React, { useState } from 'react';
import VehicleListPhoto from '../../../public/vehicleList_photos/VehicleListPhoto.jpg';
import VehicleListPhoto2 from '../../../public/vehicleList_photos/VehicleListPhoto2.jpg';
import VehicleListPhoto3 from '../../../public/vehicleList_photos/VehicleListPhoto3.jpg';
import VehicleListPhoto4 from '../../../public/vehicleList_photos/VehicleListPhoto4.jpg';
import VehicleListPhoto5 from '../../../public/vehicleList_photos/VehicleListPhoto5.jpg';
import VehicleListPhoto6 from '../../../public/vehicleList_photos/VehicleListPhoto6.jpg';

const Vehicles = () => {


    const featured = [
        {
            description: "Elegant design, redifined.",
            year: "2024",
            make: "Accord",
            msrp: "Starting MSRP*",
            price: "$27,895",
            image: VehicleListPhoto,
            subDescription: "Sport-L Hybrid",
        },

        {
            description: "All-around versitility.",
            year: "2024",
            make: "CR-V",
            msrp: "Starting MSRP*",
            price: "$29,500",
            image: VehicleListPhoto2,
            subDescription: "Sport Touring Hybrid with AWD shown in Platinum White Pearl* at $39,850.*",
        },

        {
            description: "Built for the long haul.",
            year: "2023",
            make: "Ridgeline",
            msrp: "Starting MSRP*",
            price: "$38,800",
            image: VehicleListPhoto3,
            subDescription: "RTL-E shown* in Modern Steel Metallic* at $44,730.*",
        },

        {
            description: "Our first all electric SUV. Arriving 2024.",
            year: "FUTURE VEHICLE",
            make: "Prolouge",
            image: VehicleListPhoto4,
            subDescription: "2024 Prologue Elite shown in North Shore Pearl.*",
        }
    ];

    const suv = [

        {
            description: "As smart as it looks.",
            year: "2024",
            make: "HR-V",
            msrp: "Starting MSRP*",
            price: "$24,100",
            image: VehicleListPhoto5,
            subDescription: "Sport shown in Urban Gray Pearl* at $24,100.*",
        },

        {
            description: "All-around vertsatility.",
            year: "2024",
            make: "CR-V Hybrid",
            msrp: "Starting MSRP*",
            price: "$29,500",
            image: VehicleListPhoto2,
            subDescription: "",
        },

        {
            description: "The do it-all hybrid SUV.",
            year: "2024",
            make: "Cr-V Hybrid",
            msrp: "Starting MSRP*",
            price: "$33,700",
            image: VehicleListPhoto6,
            subDescription: "Sport Touring Hybrid shown in Lunar Silver Metallic* at $39,850.*",
        },

        {
            description: "Conquer the unpaved road.",
            year: "2024",
            make: "Pilot",
            msrp: "Starting MSRP*",
            price: "$37,090",
            image: VehicleListPhoto6,
            subDescription: "TrailSport shown in Lunar Silver Metalic with Honda Genuine Accessories at $48,000 MSRP.* 18 city/23 highway mpg rating.*",
        }



    ];

    const [activeList, setActiveList] = useState(featured);

    const cars = [];
    const minivanAndTruck = [];
    const electrified = [];
    const future = [];
    const preOwned = [];

    const setActiveVehicleList = (list) => {
        setActiveList(list);
    };



    return (
        <div>
            <nav className="flex items-center mt-16">
                <div className="flex">
                    <h1 className="ml-14 text-3xl w-44">Vehicles</h1>
                </div>
                <div className="w-3/4">
                    <ul className="flex gap-5 pt-2 ">
                         <li>
                        <button
                            onClick={() => setActiveVehicleList(featured)}
                            className='text-black no-underline'
                        >
                        Featured
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setActiveVehicleList(suv)}
                            className='text-black no-underline'
                        >
                        SUVs & Crossovers
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setActiveVehicleList(cars)}
                            className='text-black no-underline'
                        >
                        Cars
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setActiveVehicleList(minivanAndTruck)}
                            className='text-black no-underline'
                        >
                        Minivan & Truck
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setActiveVehicleList(electrified)}
                            className='text-black no-underline'
                        >
                        Electrified
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setActiveVehicleList(future)}
                            className='text-black no-underline'
                        >
                        Future
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setActiveVehicleList(preOwned)}
                            className='text-black no-underline'
                        >
                        Pre-Owned
                        </button>
                    </li>
                    </ul>
                </div>
                <div className="flex ml-10">
                    <button
                        href={"/"}
                        className='no-underline text-sm'
                    >
                        COMPARE MODELS
                    </button>
                </div>
            </nav>
            <VehicleList
                list={activeList}
            />
        </div>
    );
}

export default Vehicles;
