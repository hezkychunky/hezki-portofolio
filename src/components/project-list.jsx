import Architecture from '../components/images/architecture.jpg'
import Kvd from '../components/images/kvd.jpg'
import MyWeb from '../components/images/myweb.png'
import TouchBar from '../components/images/touchbar_.jpg'
import { motion } from 'framer-motion'

function ProjectList () {
   return (
      <div id='slider' className="flex gap-5 h-full w-4/5 items-center">
         <div className="whitespace-nowrap w-full h-full overflow-x-scroll scroll-smooth scrollbar-hide pt-2">
            <span className='border-rad inline-block hover:scale-110 duration-500'><motion.img drag='x' dragConstraints={{left: 0, right:0,}} className='h-[300px] rounded-full' src={TouchBar} alt="" /></span>
            <span className='border-rad inline-block hover:scale-110 duration-500'><motion.img drag='x' dragConstraints={{left: 0, right:0,}} className='h-[300px] rounded-full' src={Architecture} alt="" /></span>
            <span className='border-rad inline-block hover:scale-110 duration-500'><motion.img drag='x' dragConstraints={{left: 0, right:0,}} className='h-[300px] rounded-full' src={Kvd} alt="" /></span>
            <span className='border-rad inline-block hover:scale-110 duration-500'><motion.img drag='x' dragConstraints={{left: 0, right:0,}} className='h-[300px] rounded-full hue-rotate-180' src={MyWeb} alt="" /></span>
         </div>
      </div>
   )
}

export default ProjectList