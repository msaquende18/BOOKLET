import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';





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
       link: "Home",
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
       link: "Venda o teu livro",
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
       link: "Sobre",
       path: "/sobre",
     },
   ];


  return (
   <header>
    <nav>
        <div>
        {/** Logo */}
            <Link to="/" className='text-2x1 font-bold text-blue-700 flex items-center gap-2' >Booket</Link>
        
        </div>
    </nav>
   </header>
  )
}

export default Navbar