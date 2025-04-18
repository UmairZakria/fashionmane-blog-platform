"use client"
import loading from './ui/loading.gif'

import axios from 'axios'
import { useState,useEffect } from 'react'
import React from 'react'
import Image from 'next/image'
import Listblog from '@/app/components/Listblog'

const Page = () => {
  const [data, setData] = useState([])
  const [loadings, setLoadings] = useState({ display: 'none' })

  const getdata = async () => {
    setLoadings({ display: 'flex' });
    document.body.style.overflow = 'hidden';


    try {
      const res = await axios.post('/api/findblogs', { category:'Outfits' });
      setData(res.data.post)

    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoadings({ display: 'none' });
      document.body.style.overflow = 'auto';

    }
  };

  useEffect(() => {
    getdata();
  }, []);






  return (
    <>
      <div style={loadings} className='w-full h-screen absolute flex items-center justify-center top-0 left-0 bg-[#0000005b] '>
        <Image
          className=" object-cover    "
          src={loading} 
          sizes={50}
          alt="Loading"
        />
      </div>
      <h1 className='container w-full mx-auto text-5xl my-10 font-semibold ' >Women Outfits</h1>
      <Listblog
        data={data}

      />
    </>
  )
}

export default Page
