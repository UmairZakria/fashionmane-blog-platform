'use client'
import { useState,useEffect } from "react";
import { motion } from "framer-motion";
// import NavLink from "next/NavLink";
import Link from "next/link";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavLink from "./NavLink";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); 

  };

  

  return (
    <motion.div
    initial={{y: -100}}
    animate={{y : 0}}
    transition={{
        delay: 0.1,
        duration: 0.3,
        type: "spring",
        stiffness: 150,
      }}
    className="  bg-transparent  top-0 items-center h-[80px] z-[100] w-full backdrop-blur-lg bg-opacity-10">
      <div className="container flex justify-between items-center h-full mx-auto w-full">
        <div>
        <img src={'/logo.png'} className="" width={300} height={300}/>

        </div>

        {/* Desktop Menu */}
        <ul className="lg:flex md:flex hidden items-center justify-center font-semibold gap-1 md:text-md ">
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/Outfits "}>Outfits</NavLink>
          <NavLink href={"/Hairstyles"}>Hairstyles</NavLink>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button onClick={toggleMenu} className="md:hidden border rounded-full z-50">
          {isOpen ? (
             <>
             <motion.img   initial={{}} whileTap={{rotate:360}} width="32" height="32" className="hidden dark:block   " src="https://img.icons8.com/ios-filled/50/FFFFFF/close-window.png" alt="close-window"/>
             <motion.img   initial={{}} whileTap={{rotate:360}} width="32" height="32" className="block dark:hidden  "  src="https://img.icons8.com/ios-filled/50/1A1A1A/close-window.png" alt="close-window"/>
             </>

          ) : (
            <>
            <motion.img   initial={{}} whileTap={{rotate:360}} width="32" height="32" className="block dark:hidden  " src="https://img.icons8.com/ios-filled/50/menu--v1.png" alt="menu--v1"/>
            <motion.img   initial={{}} whileTap={{rotate:360}} width="32" height="32" className="hidden dark:block   "  src="https://img.icons8.com/ios-filled/50/FFFFFF/menu--v1.png" alt="menu--v1"/>
            </>
          )}
        </button>

        {/* Mobile Menu */}
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: isOpen ? 0 : "100vh" }}
          transition={{
            delay: 0.1,
            duration: 0.3,
            type: "spring",
            stiffness: 150,
          }}
          className="fixed z-[100] flex py-2 text-lg lg:hidden md:hidden flex-col top-[82px] left-0 w-full h-auto font-normal dark dark:bg-prime3  text-white transform"
        >
          <Link
            onClick={() => setIsOpen(false)}
            className="py-4 px-5 hover:bg-white dark:hover:text-black dark:hover:font-semibold "
            href={"/"}
          >
            Home
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            className="py-4 px-5 hover:bg-white dark:hover:text-black dark:hover:font-semibold "
            href={"/Outfits"}
          >
            Outfits
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            className="py-4 px-5 hover:bg-white dark:hover:text-black dark:hover:font-semibold "
            href={"/Hairstyles"}
          >
            Hairstyles
          </Link>
          <div className="w-[30px] mx-5 self-start">
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;

