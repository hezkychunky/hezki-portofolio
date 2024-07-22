import Greetings from "./greetings";

function Hero () {
   return (
      <div id="home" className="flex flex-col bg-transparent h-screen z-10">
         <Greetings />
         <div className="absolute top-2/4 left-20">
            <ul className="flex flex-row mt-10 gap-32 text-lg">
               <li className=" bg-gray-100 rounded-full px-4 hover:scale-110 duration-300">Full-stack Web Development</li>
               <li className=" bg-gray-100 rounded-full px-4 hover:scale-110 duration-300">Typescript</li>
            </ul>
            <ul className="flex flex-row gap-32 ml-24 mt-14 text-lg items-center">
               <li className=" bg-gray-100 rounded-3xl px-4 hover:scale-110 duration-300">React</li>
               <li className=" bg-gray-100 rounded-3xl px-4 hover:scale-110 duration-300">Tailwind</li>
            </ul>
         </div>
      </div>
   )
}

export default Hero;