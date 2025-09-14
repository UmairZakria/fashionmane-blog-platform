import React from 'react'
import Word from './Word'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Outfits', href: '/Outfits' },
  { name: 'Hairstyles', href: '/Hairstyles' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Login', href: '/Login' },
];

const socialLinks = [
  { name: 'Twitter', href: 'https://x.com/umairzakria6', icon: (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
  ) },

  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/umair-zakria-67477b33a/', icon: (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
  ) },
];

const Footer = () => {
  return (
    <footer className="border-t-2 bg-white mt-10">
      <div className="container mx-auto py-6 px-5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
          <Image src="/logo.png" alt="Fashion Mane Logo" width={140} height={140} className="object-cover " />
          {/* <span className="font-bold text-xl text-prime">Fashion Mane</span> */}
        </div>
        <nav className="flex flex-wrap gap-4 justify-center w-full md:w-auto">
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} className="text-gray-700  hover:underline hover:text-prime2 font-medium text-sm transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col items-center md:items-end w-full md:w-auto gap-2">
          <div className="flex gap-3 mb-1">
            {socialLinks.map(link => (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-prime2 transition-colors">
                {link.icon}
              </a>
            ))}
          </div>
          <span className="text-xs text-gray-500">© 2025 <span className="text-prime">Fashion Mane</span></span>
          <span className='flex font-poppins items-center gap-2 text-xs'>
            <span className='text-prime2'>Designed by </span>
            <a href="https://umairzakria.vercel.app/" className='uppercase' target="_blank" >Umair zakria</a>
            {/* <Word tags={[{ name: "Umair Zakria", href: " }]} /> */}
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
