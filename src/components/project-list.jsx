import Architecture from '../components/images/architecture.jpg'
import Kvd from '../components/images/kvd.jpg'
import MyWeb from '../components/images/myweb.png'
import TouchBar from '../components/images/touchbar_.jpg'

function ProjectList () {
   return (
      <div id='slider' className="flex gap-5 h-full w-2/4 items-center">
         <div className="whitespace-nowrap w-full h-full overflow-x-scroll scroll scroll-smooth scrollbar-hide pt-2">
            <a className='border-rad inline-block hover:scale-110 duration-500' href=""><img className='h-[300px] rounded-full' src={TouchBar} alt="" /></a>
            <a className='border-rad inline-block hover:scale-110 duration-500' href=""><img className='h-[300px] rounded-full' src={Architecture} alt="" /></a>
            <a className='border-rad inline-block hover:scale-110 duration-500' href=""><img className='h-[300px] rounded-full' src={Kvd} alt="" /></a>
            <a className='border-rad inline-block hover:scale-110 duration-500' href=""><img className='h-[300px] rounded-full hue-rotate-180' src={MyWeb} alt="" /></a>
         </div>
      </div>
   )
}

export default ProjectList