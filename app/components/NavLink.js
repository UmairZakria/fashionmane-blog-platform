// components/NavLink.js
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <>
    
    <Link href={href} className={isActive ? 'bg-white w-full text-center font-poppins text-prime2     md:p-2 rounded-full' : '  rounded-full hover:underline text-center  text-white w-full hover:text-white transition-all duration-300 ease-in-out md:p-2 '} >
      
        {children}
    
    </Link>
    </>
  );
};

export default NavLink;
