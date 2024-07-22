
function Navbar() {
   return (
      <div className="fixed top-0 right-0 bottom-0 flex flex-col pr-10 w-56 text-right bg-transparent opacity-80 justify-center font-light text-4xl backdrop-blur-xl gap-7 z-30">
         <a href="#home" className="px-2 my-10 hover:text-5xl hover:underline underline-offset-8 decoration-teal-400 duration-500">Home</a>
         <a href="#projects" className="px-2 my-10 hover:text-5xl hover:underline underline-offset-8 decoration-teal-400 duration-500">Projects</a>
         <a href="#contact" className="px-2 my-10 hover:text-5xl hover:underline underline-offset-8 decoration-teal-400 duration-500">Contact</a>
      </div>
   )
}

export default Navbar;