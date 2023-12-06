'use client'
import VehicleList from '../vehiclecontent/VehicleList'
import React, { useState } from 'react';
import VehicleListPhoto from '../../../../public/vehicleList_photos/VehicleListPhoto.jpg';
import VehicleListPhoto2 from '../../../../public/vehicleList_photos/VehicleListPhoto2.jpg';
import VehicleListPhoto3 from '../../../../public/vehicleList_photos/VehicleListPhoto3.jpg';
import VehicleListPhoto4 from '../../../../public/vehicleList_photos/VehicleListPhoto4.jpg';
import VehicleListPhoto5 from '../../../../public/vehicleList_photos/VehicleListPhoto5.jpg';
import VehicleListPhoto6 from '../../../../public/vehicleList_photos/VehicleListPhoto6.jpg';
import VehicleListPhoto7 from '../../../../public/vehicleList_photos/VehicleListPhoto7.jpg';
import VehicleListPhoto8 from '../../../../public/vehicleList_photos/VehicleListPhoto8.jpg';
import VehicleListPhoto9 from '../../../../public/vehicleList_photos/VehicleListPhoto9.jpg';
import VehicleListPhoto10 from '../../../../public/vehicleList_photos/VehicleListPhoto10.jpg';
import VehicleListPhoto11 from '../../../../public/vehicleList_photos/VehicleListPhoto11.jpg';
import VehicleListPhoto12 from '../../../../public/vehicleList_photos/VehicleListPhoto12.jpg';
import VehicleListPhoto13 from '../../../../public/vehicleList_photos/VehicleListPhoto13.jpg';
import VehicleListPhoto14 from '../../../../public/vehicleList_photos/VehicleListPhoto14.jpg';
import VehicleListPhoto15 from '../../../../public/vehicleList_photos/VehicleListPhoto15.jpg';
import VehicleListPhoto16 from '../../../../public/vehicleList_photos/VehicleListPhoto16.jpg';
import VehicleListPhoto17 from '../../../../public/vehicleList_photos/VehicleListPhoto17.jpg';
import VehicleListPhoto18 from '../../../../public/vehicleList_photos/VehicleListPhoto18.jpg';
import VehicleButton from './VehicleButton';

const Vehicles = () => {


    const featured = [
        {
            description: "Elegant design, redifined.",
            year: "2024",
            make: "Accord",
            msrp: "Starting MSRP*",
            price: "$27,895",
            image: VehicleListPhoto,
            subDescription: "Sport-L Hybrid shown in Radiant Red Metallic* at $34,525.*",
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
        },

        {
            description: "Start something fun.",
            year: "2024",
            make: "Civic Sedan",
            msrp: "Starting MSRP*",
            price: "$23,950",
            image: VehicleListPhoto8,
            subDescription: "Touring shown Aegean Blue Metallic at $30,550.*",
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
            subDescription: "Sport Touring Hybrid with AWD shown in Platinum White Pearl* at $39,850.*",
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
            image: VehicleListPhoto7,
            subDescription: "TrailSport shown in Lunar Silver Metalic with Honda Genuine Accessories at $48,000 MSRP.* 18 city/23 highway mpg rating.*",
        },

        {
            description: "Your passport to adventure.",
            year: "2024",
            make: "Passport",
            msrp: "Starting MSRP*",
            price: "$41,900",
            image: VehicleListPhoto18,
            subDescription: "TrailSport shown in Lunar Silver Metallic at $44,500.* Pre-production wheels shown.",
        }

    ];




    const [activeList, setActiveList] = useState(featured);
    const [activeTab, setActiveTab] = useState('Featured');

    const getTabClass = (tabName) => {
        return tabName === activeTab ? 'text-blue-500 no-underline' : 'text-black no-underline';
    };




    const cars = [

        {
            description: "Start something fun.",
            year: "2024",
            make: "Civic Sedan",
            msrp: "Starting MSRP*",
            price: "$23,950",
            image: VehicleListPhoto8,
            subDescription: "Touring shown Aegean Blue Metallic at $30,550.*",
        },

        {
            description: "Gear up for a good time.",
            year: "2024",
            make: "Civic Hatchback",
            msrp: "Starting MSRP*",
            price: "$24,950",
            image: VehicleListPhoto9,
            subDescription: "Sport shown in Sonic Gray Pearl*. 29 city/37 highway mpg rating.*",
        },

        {
            description: "Thrills on demand.",
            year: "2024",
            make: "Civic Si Sedan",
            msrp: "Starting MSRP*",
            price: "$29,100",
            image: VehicleListPhoto10,
            subDescription: "Shown in Blazing Orange Pearl.*",
        },

        {
            description: "Start something fun.",
            year: "2024",
            make: "Civic Sedan",
            msrp: "Starting MSRP*",
            price: "$23,950",
            image: VehicleListPhoto11,
            subDescription: "Touring shown Aegean Blue Metallic at $30,550.*",
        },

        {
            description: "Elegant design, redifined.",
            year: "2024",
            make: "Accord",
            msrp: "Starting MSRP*",
            price: "$27,895",
            image: VehicleListPhoto,
            subDescription: "Sport-L Hybrid shown in Radiant Red Metallic* at $34,525.*",
        },

        {
            description: "The evolution of the hybrid sedan.",
            year: "2024",
            make: "Accord Hybrid",
            msrp: "Starting MSRP*",
            price: "$32,545",
            image: VehicleListPhoto14,
            subDescription: "Touring Hybrid shown in Canyon River Blue Metallic at $38,540 MSRP.* 46 city/41 highway mpg rating.*",
        }

    ];
    const minivanAndTruck = [
        {
            description: "For all your family journeys.",
            year: "2024",
            make: "Odyssey",
            msrp: "Starting MSRP*",
            price: "$37,840",
            image: VehicleListPhoto12,
            subDescription: "Elite shown in Obsidian Blue Pearl at $49,970*",
        },

        {
            description: "Built for the long haul.",
            year: "2023",
            make: "Ridgeline",
            msrp: "Starting MSRP*",
            price: "$38,800",
            image: VehicleListPhoto13,
            subDescription: "RTL-E shown* in Modern Steel Metallic at $44,730.",
        },

    ];
    const electrified = [
        {
            description: "The evolution of the hybrid sedan.",
            year: "2024",
            make: "Accord Hybrid",
            msrp: "Starting MSRP*",
            price: "$32,545",
            image: VehicleListPhoto14,
            subDescription: "Touring Hybrid shown in Canyon River Blue Metallic at $38,540 MSRP.* 46 city/41 highway mpg rating.*",
        },

        {
            description: "The do-it-all hybrid SUV.",
            year: "2024",
            make: "CR-V Hybrid",
            msrp: "Starting MSRP*",
            price: "$33,700",
            image: VehicleListPhoto15,
            subDescription: "Sport Touring Hybrid shown in Lunar Silver Metallic at $39,850*",
        },
    ];
    const future = [
        {
            description: "Our first all-electric SUV. Arriving 2024.",
            year: "FUTURE VEHICLE",
            make: "Prologue",
            image: VehicleListPhoto16,
            subDescription: "2024 Prologue Elite shown in North Shore Pearl.*",
        },
    ];
    const preOwned = [
        {
            description: "Honda Certified Pre-Owned Vehicles.",
            image: VehicleListPhoto17,
        },
    ];

    const setActiveVehicleList = (list, tabName) => {
        setActiveList(list);
        setActiveTab(tabName); // Update the activeTab state
    };


    return (
        <div>
            <nav className="xl:flex-row flex-col flex xl:items-center mt-16 mb-6 overflow-x-auto">
                <div className="flex justify-between">
                    <h1 className="text-2xl w-44">Vehicles</h1>
                    <button
                        href={"/"}
                        className='no-underline text-sm text-blue-500 w-fit mr-10 xl:hidden'
                    >
                        COMPARE MODELS
                    </button>
                </div>
                <div className="w-3/4">
                    <ul className="flex gap-5 pt-2 ">
                        <VehicleButton
                            onClick={() => setActiveVehicleList(featured, 'Featured')}
                            className={getTabClass('Featured')}
                            text={"Featured"}
                            length={featured.length}
                        />
                        <VehicleButton
                            onClick={() => setActiveVehicleList(suv, 'suv')}
                            className={getTabClass('suv')}
                            text={"SUV"}
                            length={suv.length}
                        />
                        <VehicleButton
                            onClick={() => setActiveVehicleList(cars, 'cars')}
                            className={getTabClass('cars')}
                            text={"Cars"}
                            length={cars.length}
                        />
                        <VehicleButton
                            onClick={() => setActiveVehicleList(minivanAndTruck, 'minivan & truck')}
                            className={getTabClass('minivan & truck')}
                            text={"Minivan & Truck"}
                            length={minivanAndTruck.length}
                        />
                        <VehicleButton
                            onClick={() => setActiveVehicleList(electrified, 'electrified')}
                            className={getTabClass('electrified')}
                            text={"Electrified"}
                            length={electrified.length}
                        />
                        <VehicleButton
                            onClick={() => setActiveVehicleList(future, 'future')}
                            className={getTabClass('future')}
                            text={"Future"}
                            length={future.length}
                        />
                        <VehicleButton
                            onClick={() => setActiveVehicleList(preOwned, 'pre-owned')}
                            className={getTabClass('pre-owned')}
                            text={"Pre-Owned"}
                            length={preOwned.length}
                        />
                    </ul>
                </div>
                <button
                    href={"/"}
                    className='no-underline text-sm text-blue-500 w-fit ml-10 hidden xl:block'
                >
                    COMPARE MODELS
                </button>
            </nav>

            <VehicleList
                list={activeList}
            />
        </div>
    );
}

export default Vehicles;