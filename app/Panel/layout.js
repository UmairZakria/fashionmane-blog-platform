
'use client'
import Navbar from "./panelcomponents/Navbar";


import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import Image from "next/image";
import loading from './ui/loading.gif';

function AdminLayoutWrapper({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();



  if (status === "loading") {
    return (
      <div className='w-full h-screen flex items-center justify-center'>
        <Image src={loading} alt="Loading..." />
      </div>
    );
  }

  if (status === "unauthenticated" ) {
    router.push("/Login");
  }

  return (
    <div>
    <Navbar/>
      {children}
    </div>
  );
}

export default function AdminLayout({ children }) {
  return (
    <SessionProvider>
      <AdminLayoutWrapper>{children}</AdminLayoutWrapper>
    </SessionProvider>
  );
}
