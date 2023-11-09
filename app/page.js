import CarouselFadeExample from './components/hompage/herocontent/Slider'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vehicles from './components/hompage/vehiclecontent/Vehicles'
import ToolsTabs from './components/hompage/shoppingtools/ToolsTabs'


export default function Home() {
  return (
    <main >
      <div>
        <CarouselFadeExample />
        <Vehicles />
        <ToolsTabs />
      </div>   
    </main>
  )
}
