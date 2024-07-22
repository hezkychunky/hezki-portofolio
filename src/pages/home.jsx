import Navbar from './components/navbar'
import Hero from './components/hero-section'
import GreenBlob from './components/images/image'

export default function HomePage() {
   return (
      <div>
   <div>
      <Navbar />
   </div>
   <div className='flex flex-col'>
      <GreenBlob />
      <Hero />
   </div>
</div>
   )
}
