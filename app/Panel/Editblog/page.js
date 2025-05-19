"use client"
import loading from '../ui/loading.gif'
import Image from 'next/image'


import axios from 'axios'
import { useState, useEffect } from 'react'
import React from 'react'
import Listblog from '@/app/components/Listblog'

const Page = () => {

    const [searchQuery, setSearchQuery] = useState('')
    const [searchdata, setSearchdata] = useState([])
    const [data, setData] = useState([])
    const [loadings, setLoadings] = useState({ display: 'none' })

    const getdata = async () => {
        window.scroll(0, 0)
        setLoadings({ display: 'flex' });
        document.body.style.overflow = 'hidden';


        try {
            const res = await axios.post('/api/findblogs', { category: 'all' });
            console.log(res)
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

    useEffect(() => {

        const searchdata = data.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
            // ||
            // item.post.category.toLowerCase().includes(searchQuery.toLowerCase())
        )

        setSearchdata(searchdata)



    }, [searchQuery])



    return (
        <div className='my-3'>
            <div style={loadings} className='w-full h-screen absolute flex items-center justify-center top-0 left-0 bg-[#0000005b] '>
                <Image
                    className=" object-cover    "
                    src={loading}
                    sizes={50}
                    alt="Loading"
                />
            </div>
            <div className="w-full h-full container mx-auto ">
                <input
                    type="text"
                    id="search"
                    placeholder="Search Blog by Name and Catogory"
                    className="search w-full box-border border p-3 pr-[50px] text-lg placeholder:text-[16px]  rounded-lg h-full"
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

            </div>
            
            <Listblog
                data={searchdata.length > 0 ? searchdata : data}
                admin={true}
            />

        </div>
    )
}

export default Page
