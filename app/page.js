import Image from 'next/image'
import Nav from '../app/components/Nav'
import CarouselFadeExample from './components/hompage/herocontent/Slider'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <main >
      <div>
        <CarouselFadeExample />
      </div>
    </main>
  )
}
