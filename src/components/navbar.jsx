import { useRef } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const menuRef = useRef(null);
  const menuIconRef = useRef(null);
  const closeIconRef = useRef(null);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("hidden");
    menuRef.current.classList.toggle("flex");
    menuIconRef.current.classList.toggle("hidden");
    closeIconRef.current.classList.toggle("hidden");
  };

  return (
    <nav className="fixed w-full bg-transparent text-teal-400 shadow-sm backdrop-blur-sm z-50 top-0">
      <div className="container px-4 lg:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-slate-700">
          YB
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          <li>
            <a href="#" className="hover:text-slate-700 lg:text-lg">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-700 lg:text-lg">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-slate-700 lg:text-lg">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-700 lg:text-lg">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden focus:outline-none transition-transform"
          onClick={toggleMenu}
        >
          {/* Hamburger Icon */}
          <Menu ref={menuIconRef} size={28} className="block" />
          {/* Close Icon */}
          <X ref={closeIconRef} size={28} className="hidden" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="hidden lg:hidden flex-col items-center space-y-4 py-4 font-bold bg-white bg-opacity-45 backdrop-blur-lg transition-all duration-3000 text-slate-700 shadow-md"
      >
        <a
          href="#"
          className="hover:scale-125 lg:text-lg rounded-lg w-52 text-center"
        >
          Home
        </a>
        <a
          href="#"
          className="hover:scale-125 lg:text-lg rounded-lg w-52 text-center"
        >
          About
        </a>
        <a
          href="#projects"
          className="hover:scale-125 lg:text-lg rounded-lg w-52 text-center"
        >
          Projects
        </a>
        <a
          href="#"
          className="hover:scale-125 lg:text-lg rounded-lg w-52 text-center"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
