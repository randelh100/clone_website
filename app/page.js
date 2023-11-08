import Image from 'next/image'
import Nav from '../app/components/Nav'
import CarouselFadeExample from './components/hompage/herocontent/Slider'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vehicles from './components/hompage/Vehicles'


export default function Home() {
  return (
    <main >
      <div>
        <CarouselFadeExample />
        <Vehicles />
      </div>   
    </main>
  )
}
