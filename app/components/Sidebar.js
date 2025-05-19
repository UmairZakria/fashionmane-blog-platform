'use client'
import { useState, useEffect } from 'react'
import React from 'react'
import loading from './ui/loading.gif'
import Image from 'next/image'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Slider from 'react-slick'
import { useBlog } from '@/Context/blogcontext'
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
const Sidebar = () => {
  const { blogs ,setBlogs} = useBlog()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [data, setData] = useState([])
  // const data = blogs
  const [loadings, setLoadings] = useState({ display: 'none' })
  const [search, setSearch] = useState([])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false

  }

  const getdata = async () => {
    try {
      const res = await axios.post('/api/findblogs', { category: 'all' });
      setData(res.data.post)
      setBlogs(res.data.post)

    } catch (error) {
      console.error('Error fetching post:', error);
    } 
  };
  useEffect(() => {
    if (blogs.length == 0){
      getdata();

    }else{
      setData(blogs)
    }



  }, []);
  useEffect(() => {

    const searchdata = data.filter(item =>
      item.title.toLowerCase().includes(searchQuery)
    )

    setSearch(searchdata)
    if (searchQuery === '') {
      setSearch([])

    }



  }, [searchQuery])

  const handelredrict = (title) => {
    router.push(`/Blog/${encodeURIComponent(title)}`)


  }
  return (
    <>
      <div style={loadings} className='w-full h-screen fixed flex items-center justify-center top-0 left-0 bg-[#0000005b] '>
        <Image
          className=" object-cover    "
          src={loading}
          sizes={50}
          alt="Loading"
        />
      </div>
      <div className=' pt-4  w-[300px] px-3 block '>
        <input
          type="text"
          id="search"
          placeholder="Search Article "
          className="search w-full box-border  border-2 p-3 pr-[50px] text-lg placeholder:text-[16px]  rounded-lg "
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className='space-y-4 my-2  !border-gray-200  rounded-xl '>
          {
            search.slice(0, 5).map((data, index) => (
              <div key={index} onClick={() => handelredrict(data.title)} className='p-2 bg-gray-100 flex items-center   -4 h-[80px] gap-1  cursor-pointer'>
                <h2 className='line-clamp-3'>{data.title}</h2>


              </div>


            ))



          }

        </div>

        <h1 className='text-2xl my-5 '>Recent Post</h1>
        <div className='space-y-4   '>
          {
            data.length > 0 && data.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6).map((data) => (


              <div key={data._id} onClick={() => handelredrict(data.title)} className='flex cursor-pointer   w-full lg:h-auto  md:h-[180px] gap-3 lg:gap-1 p-1 '>
                {/* <img className='h-full md:w-[500px] lg:w-[35%]' src={data.image} alt={data.image} /> */}
                <div className='w-full flex   justify-evenly   flex-col'>

                  <h2 className='line-clamp-3 text-prime3  text-lg'>{data.title}</h2>
                  {/* <p className='text-gray-700 lg:hidden md:block  line-clamp-4 text-sm'>{data.discription}</p> */}

                </div>


              </div>
            ))
          }
          {
            data.length == 0 && [1, 2, 3, 4, 5].map((data, index) => (
              <div key={index} className='flex cursor-pointer rounded-md animate-pulse bg-gray-200  w-full lg:h-auto  md:h-[150px] gap-3 lg:gap-1 lg:py-3 '>



              </div>
            ))

          }


        </div>

      </div>
    </>
  )
}

export default Sidebar
