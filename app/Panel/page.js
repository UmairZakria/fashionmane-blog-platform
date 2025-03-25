// // Pages/dashboard.js
// "use client";

// import { SessionProvider } from "next-auth/react";
// import { useSession, signOut } from "next-auth/react";
// // import { useRouter } from "next/router";
// import { useRouter } from 'next/navigation'

// import { useState } from "react";
// import loading from './ui/loading.gif'
// import Image from "next/image";
// function DashboardPage() {


//   const { data: session, status } = useSession();

//   const router = useRouter();



//   if (status === "unauthenticated") {
//     router.push("/Login"); 
//     return <div className='w-full h-screen absolute flex items-center justify-center top-0 left-0 bg-[#0000005b] '>
//       <Image
//         className=" object-cover    "
//         src={loading}
//         sizes={50}
//         alt="Description of image"
//       />
//     </div>;
//   }



//   else if (status === "loading") {
//     return <div className='w-full h-screen absolute flex items-center justify-center top-0 left-0 bg-[#0000005b] '>
//       <Image
//         className=" object-cover    "
//         src={loading} // Path to your image
//         sizes={50}
//         alt="Description of image"
//       />
//     </div>;
//   }


//   return (
//     <>
//     <div>
//       Hello
//     </div>
//       </>
//   );
// }

// export default function Dashboard() {
//   return (
//     <SessionProvider>
//       <DashboardPage />
//     </SessionProvider>
//   );
// }
import React from 'react'

const Page = () => {
  return (
    <div className='text-8xl'>
      HElo heleo
    </div>
  )
}

export default Page
