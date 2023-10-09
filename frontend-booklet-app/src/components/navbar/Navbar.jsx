import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import{ FaBarsStaggered, FaXmark }from 'react-icons/fa6'


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    
   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   }

   useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY > 100){
            setIsSticky(true);
        }
        else{
            setIsSticky(false);
        }
      }

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.addEventListener("scroll", handleScroll);
      }
   }, [])

   const navItems = [
     {
       link: "Ínicio",
       path: "/",
     },
     {
       link: "Livros",
       path: "/livros",
     },
     {
       link: "Shop",
       path: "/shop",
     },
     {
       link: "Venda o teu livro aqui",
       path: "/admin/dashboard",
     },
     {
       link: "Shop",
       path: "/shop",
     },
     {
       link: "Contactos",
       path: "/contactos",
     },
     {
       link: "Sobre Nós",
       path: "/sobre",
     },
   ];


  return (
    <header className="w-full bg-transparent fixed top-0 left-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""
        } `}
      >
        <div className="flex justify-between items-center text-base gap-8 ">
          {/** Logo */}
          <Link
            to="/"
            className="text-2x1 font-bold text-blue-700 flex items-center gap-2"
          >
            Booklet
          </Link>

          {/** Navbar para dispositivos grandes */}

          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                className="block text-base text-black uppercase cursor-pointer hover:text-blue-700 "
              >
                {link}
              </Link>
            ))}
          </ul>

          {/** Btn para dispositivos grandes */}

          <div className="space-x-12 hidden lg:flex items-center ">
            <button>
              <FaBarsStaggered className="w-5 hover:text-blue-700" />
            </button>
          </div>

          {/** Btn para Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none "
            >
              {isMenuOpen ? (
                <FaXmark className="w-5 h-5  text-black" />
              ) : (
                <FaBarsStaggered className="w-5 h-5 hover:text-black" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`space-y-4 px-4 mt-14 py-7 bg-black ${
            isMenuOpen ? " block fixed top-0 right-0 left-0" : "hidden"
          } `}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base text-white uppercase cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar