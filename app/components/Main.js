'use client'
import React, { useState } from 'react'
import Navbar from './Navbar'
import { format } from 'date-fns';

import Sidebar from './Sidebar'

const Main = ({ data }) => {
  const [y, setY] = useState(8)
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
  const Card = ({ _id, image, category, date, discription, title }) => {
    return (
      <div key={_id} onClick={() => handelredrict(data.title)} className=' shadow-md p-2 overflow-hidden rounded-sm  bg-white md:mx-0 mx-5 cursor-pointer space-y-2 pb-3 flex flex-col '>

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
      <div className='w-full px-10 '>

        <div className=' min-h-screen flex gap-5 w-full my-20'>
          <div className='  w-[75%] grid grid-cols-3 gap-3'>
            {
              data.slice(0, y).reverse().map((data, index) => (
                <Card key={index} _id={data._id} image={data.image} category={data.category} date={data.date} discription={data.discription} title={data.title} />
              ))
            }

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


