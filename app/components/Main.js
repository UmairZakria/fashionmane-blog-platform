'use client'
import React, { useState,useEffect } from 'react'
import Navbar from './Navbar'
import { format } from 'date-fns';

import Sidebar from './Sidebar'
import { useRouter } from 'next/navigation'
import {useBlog} from "@/Context/blogcontext"
import { Loadingskull } from './Loadingskull';
const Main = ({ data }) => {
  const rout = useRouter()
  const {blogs, setBlogs } = useBlog()
  const [end, setEnd] = useState({ display: 'none' })
  useEffect(()=>{
    setBlogs(data)
  },[])


  const [y, setY] = useState(15)
  // const data = [
  //   {
  //     _id:'9',
  //     image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msOZ4.img',
  //     category:"party",
  //     date:"9/32/2002",
  //     discription:"lore lors lflds flsdonl oe nvo esnalhoxehw oxl of oew xl,cno e ",
  //     title:"name"
  //   }
  //   ,    {
  //     _id:'9',
  //     image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msOZ4.img',
  //     category:"party",
  //     date:"9/32/2002",
  //     discription:"lore lors lflds flsdonl oe nvo esnalhoxehw oxl of oew xl,cno e ",
  //     title:"name"
  //   }
  //   ,
  //   {
  //     _id:'9',
  //     image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msOZ4.img',
  //     category:"party",
  //     date:"9/32/2002",
  //     discription:"lore lors lflds flsdonl oe nvo esnalhoxehw oxl of oew xl,cno e ",
  //     title:"name"
  //   },
  //   {
  //     _id:'9',
  //     image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msOZ4.img',
  //     category:"party",
  //     date:"9/32/2002",
  //     discription:"lore lors lflds flsdonl oe nvo esnalhoxehw oxl of oew xl,cno e ",
  //     title:"name"
  //   }
  // ]
  const handelredrict = (title) => {
    rout.push(`/Blog/${encodeURIComponent(title)}`)


  }
  const handelload = () => {


    if (y >= data.length) {
      setEnd({ display: 'flex' })
    } else {

      setY(y + 3)
    }


  }

  const Card = ({ _id, image, category, date, discription, title }) => {
    return (
      <div key={_id} onClick={() => handelredrict(title)} className=' shadow-md p-2 overflow-hidden rounded-sm  bg-white md:mx-0 mx-5 cursor-pointer space-y-2 pb-3 flex flex-col '>

        <img src={image} className='object-cover hover:scale-110  transition-all duration-300 ease-in-out rounded-lg  h-[200px]' alt={title} />

        <div className='mx-2  flex h-full justify-around flex-col space-y-2'>
          <div className='space-y-4'>

            <h1 className=' text-xl line-clamp-2 font-semibold'>{title} </h1>
            <div className='flex text-prime3 w-full items-center justify-between   font-normal ' >
              <span>{category}</span>
              <span>{format(new Date(date), 'MMM dd yyyy')}</span>
              {/* <span>{date}</span> */}
            </div>
          </div>

          <p className='line-clamp-4 text-sm '>{discription}</p>
        </div>
      </div>
    )
  }
  return (
    <>
      <div className='w-full px-2 lg:px-10 '>

        <div className=' min-h-screen flex lg:flex-row flex-col gap-5 w-full my-20'>
          <div>

            <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3'>
              {
                blogs.length > 0 && blogs.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, y).map((data, index) => (
                  <Card key={index} _id={data._id} image={data.image} category={data.category} date={data.date} discription={data.discription} title={data.title} />
                ))
              }
              {
                blogs.length == 0 && [1,2,3,4,5,6,].map((data,index)=>(
                  <Loadingskull key={index} />
                ))
              }

            </div>
            <div className='w-full flex items-center justify-center flex-col  my-2'>

              <p style={end} className='text-xl text-prime'>You reached the end!</p>
              <button onClick={handelload} className='p-4 bg-prime2 font-semibold text-white' > Show More.. </button>
            </div>
          </div>

          <div className=' '>
            <Sidebar />
          </div>

        </div>
      </div>

    </>

  )
}

export default Main


