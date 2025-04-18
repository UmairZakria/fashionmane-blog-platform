'use client'
import Image from 'next/image'
import loading from './ui/loading.gif'

import React from 'react'
import Sidebar from '@/app/components/Sidebar'
import axios from 'axios'
import { useRouter, useParams } from 'next/navigation'

import { format } from 'date-fns';
import Head from 'next/head';


import { useEffect, useState } from 'react'
const Page = () => {
    const params = useParams();
    
    const router = useRouter()
    const title = decodeURIComponent(params.title);
    const [post, setPost] = useState({title:'',content:''})
    const [loadings, setLoadings] = useState({ display: 'none' })

    const getdata = async (title) => {
        window.scroll(0,0)
        document.body.style.overflowY = 'hidden';
        setLoadings({ display: 'flex' });


        try {
            console.log(title)
            const res = await axios.post('/api/findpost', { title });
            setPost(res.data.post)
            console.log(res)

        } catch (error) {
            console.error('Error fetching post:', error);
            router.refresh()
        } finally {
             document.body.style.overflowY = 'auto';

            setLoadings({ display: 'none' });


        }
    };

    useEffect(() => {
        getdata(title);
    }, [title]);



    return (
        <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.discription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
        
        <div className='flex flex-col lg:flex-row md:flex-col lg:w-[95%] w-full ml-0 px-4 lg:ml-[4%] my-10 gap-4  h-auto min-h-screen '>

            <div style={loadings} className='w-full h-screen fixed flex items-center justify-center top-0 left-0 bg-[#0000005b] '>
                <Image
                    className=" object-cover    "
                    src={loading} // Path to your image
                    sizes={50}
                    alt="Description of image"
                />
            </div>
            <div className=' w-full h-full space-y-4 '>

                
                <h1 className=' text-[20px] md:text-[24px]  font-semibold w-full lg:w-3/4 '>{post.title}</h1>
                {/* <TextReader text={post.content} /> */}
                <div className="flex items-center  text-prime3 gap-24 w-full">


                <span className=''>{post.category}</span>
                <span>{post.date?(format(new Date(post.date), 'MMM dd yyyy')):''} </span>


                </div>
                <div className='h-[2px]    w-[95%] my-5 bg-black '></div>




                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>


            <Sidebar />


        </div>
        </>

    )
}

export default Page
