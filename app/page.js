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
      header: 'Electrified',
      src: ElectrifiedVehicles
    },

    {
      header: 'Prologue',
      src: Prologue
    },

    {
      header: 'CR-V Hybrid',
      src: CRV_Hybrid
    },

    {
      header: 'Accord Hybrid',
      src: Accord_Hybrid
    },

    {
      header: 'CR-V Fuel Cell',
      src: CRV_FuelCell
    },

    {
      header: 'Hybrid Racer',
      src: HybridRacer
    }

  ]

  const Rugged = [
    {
      header: 'Rugged Capability',
      src: RuggedCapability
    },

    {
      header: 'Pilot',
      src: Pilot
    },

    {
      header: 'Passport',
      src: Passport
    },

    {
      header: 'Ridgeline',
      src: Ridgeline
    },

    {
      header: 'CR-V',
      src: Crv
    },

    {
      header: 'Off-Road Racing',
      src: OffRoad
    }

  ]

  return (
    <main >
      <div>
        <CarouselFadeExample />
        <Vehicles />
        <ToolsTabs />
        <Cards />
        <VehicleTypeList
          header="Electrificatoin"
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
