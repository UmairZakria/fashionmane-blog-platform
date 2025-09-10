'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import NavLink from "./NavLink";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isHidden ? 0 : 1 }}
      transition={{
        delay: 0.5,
        duration: 1,

      }}
      className=" b bg-transparent relative  top-0 items-center h-[80px] z-[100] w-full backdrop-blur-lg bg-opacity-10"
    >
      <div className="container py-4 flex justify-between items-center h-full mx-auto w-full ">
        {/* Logo */}
        <div>
          <img src={"/logo.png"} alt="logo" className="xl:w-[220px] lg:w-[180px] w-[150px] hover:scale-105 cursor-pointer transition-all duration-300 ease-linear " />
        </div>

        {/* Desktop Nav */}
        <ul className="lg:flex md:flex hidden bg-[#3a0157] shadow-xl rounded-full gap-2  p-1 lg:w-[35%] items-center justify-around   font-poppins md:text-md">
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/Outfits"}>Outfits</NavLink>
          <NavLink href={"/Hairstyles"}>Hairstyles</NavLink>
        </ul>

        {/* Mobile Toggle Button */}
        <button onClick={toggleMenu} className="md:hidden active:animate-spin z-50 p-2">
          <motion.span whileTap={{ rotate: 360 }} className="active:animate-spin" transition={{ duration: 0.5 }}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.span>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full right-2 mt-2 w-60 bg-prime2 text-white rounded-xl backdrop-blur-lg shadow-lg py-3 flex flex-col md:hidden"
          >
            <Link
              onClick={() => setIsOpen(false)}
              href={"/"}
              className="py-3 px-5 hover:bg-white hover:text-black"
            >
              Home
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              href={"/Outfits"}
              className="py-3 px-5 hover:bg-white hover:text-black"
            >
              Outfits
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              href={"/Hairstyles"}
              className="py-3 px-5 hover:bg-white hover:text-black"
            >
              Hairstyles
            </Link>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
