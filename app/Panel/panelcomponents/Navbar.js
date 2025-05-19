'use client'
import React from 'react'
import { useSession, signOut } from "next-auth/react";
import NavLink from '@/app/components/NavLink';

const Navbar = () => {
    const handleLogout = () => {
        signOut({ callbackUrl: "/Login" }); 
      }
    return (
        <div>
            <nav className="bg-gray-200  h-[60px] w-full flex gap-6 px-10 py-1 items-center justify-end  ">

                <NavLink href='/Panel' >Home</NavLink>
                <NavLink href='/Panel/Addblog'>Add BLog</NavLink>
                <NavLink href='/Panel/Editblog'>Edit BLogs</NavLink>
                <button className='bg-black px-3 hover:bg-yellow-50 text-white  hover:text-black font-semibold  h-full' onClick={handleLogout}>Logout</button>
            </nav>

        </div>
    )
}

export default Navbar
