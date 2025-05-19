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
import { useBlog } from '@/Context/blogcontext'
const Page = () => {
    const { blogs } = useBlog()
    const params = useParams();

    const router = useRouter()
    const title = decodeURIComponent(params.title);
    const [post, setPost] = useState({ title: '', content: '' })
    const [loadings, setLoadings] = useState({ display: 'none' })

    const getdata = async (title) => {
        // window.scroll(0, 0)
        // document.body.style.overflowY = 'hidden';
        // setLoadings({ display: 'flex' });


        try {
            console.log(title)
            const res = await axios.post('/api/findpost', { title });
            setPost(res.data.post)
            console.log(res)

        } catch (error) {
            console.error('Error fetching post:', error);
            router.refresh()
        }
    };

    useEffect(() => {
        if (blogs.length == 0) {
            getdata(title);
            

        } else {
            // getdata(title);

            const blog = blogs.find(item =>
                item.title.toLowerCase() === title.toLowerCase()
            )
            console.log(blog)
            setPost(blog)
        }
    }, [title]);



    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.discription} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="UTF-8" />
            </Head>
            {
                post.title !== "" &&
                <div className='flex flex-col lg:flex-row md:flex-col lg:w-[95%] w-full ml-0 px-4 lg:ml-[4%] my-10 gap-4  h-auto min-h-screen '>


                    <div className=' w-full h-full space-y-4 '>


                        <h1 className=' text-[20px] md:text-[24px]  font-semibold w-full lg:w-3/4 '>{post.title}</h1>
                        {/* <TextReader text={post.content} /> */}
                        <div className="flex items-center  text-prime3 gap-24 w-full">


                            <span className=''>{post.category}</span>
                            <span>{post.date ? (format(new Date(post.date), 'MMM dd yyyy')) : ''} </span>


                        </div>
                        <div className='h-[2px]    w-[95%] my-5 bg-black '></div>




                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>


                    <Sidebar />


                </div>
            }
            {
                post.title == "" && <div className=' flex flex-col lg:flex-row md:flex-col lg:w-[95%] w-full ml-0 px-4 lg:ml-[4%] my-10 gap-4  h-auto min-h-screen'>
                    <div className=' w-full h-full space-y-4 '>


                        <div className=' text-[20px] md:text-[24px]  p-4  font-semibold w-full  bg-gray-200 animate-pulse rounded-md '></div>
                        {/* <TextReader text={post.content} /> */}

                        <div className='h-[2px]    w-[95%] my-5 bg-black '></div>




                        <div className='bg-gray-200 h-[50vh] w-full  animate-pulse ' > </div>
                    </div>
                    <Sidebar />

                </div>
            }
        </>

    )
}

export default Page
