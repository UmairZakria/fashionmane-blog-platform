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

  const getdata = async () => {



    try {
      const res = await axios.post('/api/findblogs', { category: 'all' });
      const res2 = res.data.post
      const searchdata = res2.filter(item =>
        item.category.includes('Outfits')
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
        item.category.includes('Outfits')
      )
      setData(searchdata)

    }
  }, []);






  return (
    <section className='relative'>


      <h1 className='container  relative z-10 w-full mx-auto lg:text-6xl my-16 text-4xl md:px-0  px-6 font-  font-poppins  ' > <span className='text-prime border-b-[3px] border-prime/40  '>Womens Outfits</span> </h1>
      <div className='relative z-10 container mx-auto  '>

      {data.length > 0 &&
        <Listblog
        data={data}
        
        />
      }
      </div>
      <div className='container relative z-10 mx-auto  grid md:grid-cols-2  grid-cols-1  gap-y-8 gap-x-4 my-3 lg:grid-cols-3  '>
        {data.length == 0 &&
          [1, 2, 3, 4, 5, 6].map((data, index) => (

            <Loadingskull key={index} />
          ))

        }
      </div>
    </section>
  )
}

export default Page
