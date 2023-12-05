import CarouselFadeExample from './components/hompage/herocontent/Slider'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vehicles from './components/hompage/vehiclecontent/Vehicles'
import ToolsTabs from './components/hompage/shoppingtools/ToolsTabs'
import Cards from './components/hompage/toutcards/Cards'
import VehicleTypeList from './components/hompage/extravehiclecontent/VehicleTypeList'
import ElectrifiedVehicles from '@/public/electrification_photos/ElectrifiedVehicles.jpg'
import Prologue from '@/public/electrification_photos/Prologue.jpg'
import CRV_Hybrid from '@/public/electrification_photos/CRV_Hybrid.jpg'
import Accord_Hybrid from '@/public/electrification_photos/Accord_Hybrid.jpg'
import CRV_FuelCell from '@/public/electrification_photos/CRV_FuelCell.jpg'
import RuggedCapability from '@/public/electrification_photos/RuggedCapability.jpg'
import Pilot from '@/public/electrification_photos/Pilot.jpg'
import Passport from '@/public/electrification_photos/Passport.jpg'
import Ridgeline from '@/public/electrification_photos/Ridgeline.jpg'
import Crv from '@/public/electrification_photos/Crv.jpg'
import OffRoad from '@/public/electrification_photos/OffRoad.jpg'
import HybridRacer from '@/public/electrification_photos/HybridRacer.jpg'

export default function Home() {
  const Electrified = [

    {
      id: 'electrified',
      header: 'Electrified',
      src: ElectrifiedVehicles
    },

    {
      id: 'prologue',
      header: 'Prologue',
      src: Prologue
    },

    {
      id: 'crv_hybrid',
      header: 'CR-V Hybrid',
      src: CRV_Hybrid
    },

    {
      id: 'accord_hybrid',
      header: 'Accord Hybrid',
      src: Accord_Hybrid
    },

    {
      id: 'crv_fuelcell',
      header: 'CR-V Fuel Cell',
      src: CRV_FuelCell
    },

    {
      id: 'hybridracer',
      header: 'Hybrid Racer',
      src: HybridRacer
    }

  ]

  const Rugged = [
    {
      id: 'rugged',
      header: 'Rugged Capability',
      src: RuggedCapability
    },

    {
      id: 'pilot',
      header: 'Pilot',
      src: Pilot
    },

    {
      id: 'passport',
      header: 'Passport',
      src: Passport
    },

    {
      id: 'ridgeline',
      header: 'Ridgeline',
      src: Ridgeline
    },

    {
      id: 'crv',
      header: 'CR-V',
      src: Crv
    },

    {
      id: 'offroad',
      header: 'Off-Road Racing',
      src: OffRoad
    }

  ]

  return (
    <main >
      <div className='max-w-[115rem] mx-auto'>
        <CarouselFadeExample />
        <Vehicles />
        <ToolsTabs />
        <Cards />
        <VehicleTypeList 
          header="Electrification"
          list={Electrified}
        />
        <VehicleTypeList
          header="Rugged"
          list={Rugged}
        />
      </div>
    </main>
  )
}
