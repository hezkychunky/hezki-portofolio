import Navbar from './components/navbar'
import Project from './components/project-section'
import GreenBlob from './components/images/image'

export default function ProjectPage() {
   return (
      <div>
   <div>
      <Navbar />
   </div>
   <div className='flex flex-col'>
      <GreenBlob />
      <Project />  
   </div>
</div>
   )
}
