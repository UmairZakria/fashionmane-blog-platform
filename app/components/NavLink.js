// components/NavLink.js
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <>
    
    <Link href={href} className={isActive ? 'bg-prime2 text-white lg:p-3 md:p-3' : 'hover:bg-prime2 hover:text-white transition-all duration-300 ease-in-out md:p-3 lg:p-3 '} >
      
        {children}
    
    </Link>
    </>
  );
};

export default NavLink;
