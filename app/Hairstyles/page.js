"use client"
import loading from './ui/loading.gif'

import axios from 'axios'
import { useState, useEffect } from 'react'
import React from 'react'
import Image from 'next/image'
import Listblog from '@/app/components/Listblog'
import { useBlog } from '@/Context/blogcontext'
import { Loadingskull } from '../components/Loadingskull'
const Page = () => {
  const { blogs, setBlogs } = useBlog()
  const [data, setData] = useState([])
  const [loadings, setLoadings] = useState({ display: 'none' })

  const getdata = async () => {

    try {
      const res = await axios.post('/api/findblogs', { category: 'all' });
      const res2 = res.data.post
      const searchdata = res2.filter(item =>
        item.category.includes('Hairstyles')
      )
      setBlogs(searchdata)
      setData(searchdata)

    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  useEffect(() => {
    if (blogs.length == 0) {
      getdata();

    } else {
      const searchdata = blogs.filter(item =>
        item.category.includes('Hairstyles')
      )
      setData(searchdata)

    }

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
      <h1 className='container w-full mx-auto text-5xl my-10 font-semibold ' >Hair Styles</h1>
      {data.length > 0 &&
        <Listblog
          data={data}

        />
      }
      <div className='container mx-auto  grid md:grid-cols-2  grid-cols-1  gap-y-8 gap-x-4 my-3 lg:grid-cols-3  '>
        {data.length == 0 &&
          [1, 2, 3, 4, 5, 6].map((data, index) => (

            <Loadingskull key={index} />
          ))

        }
      </div>

    </>
  )
}

export default Page
