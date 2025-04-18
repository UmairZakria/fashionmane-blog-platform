'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
// import Scroll from "@/components/Scroll";

// import { useEffect, useState } from 'react'
import React, { useState, useRef, useEffect ,useMemo} from 'react';
import { useParams } from 'next/navigation';

import JoditEditor from 'jodit-react';
import loading from './ui/loading.gif'
import Image from 'next/image'



const Page = () => {
  const params = useParams();
  const title = decodeURIComponent(params.title);

  // const rout = useRouter()
  const editor = useRef(null);
  const [content, setContent] = useState('Loading...');
  const [post, setPost] = useState({ title: 'Loading...', discription: 'Loading...', image: 'Loading...', category: 'Loading...', content: 'Loading...' })
  const [ctitle, setCtitle] = useState(post.title)
  const [discription, setDiscription] = useState(post.discription)
  const [category, setCategory] = useState(post.category)
  const [error, setError] = useState('')

  const [image, setImage] = useState(post.image)
  const [loadings, setLoadings] = useState({ display: 'none' })
  const editorConfig = useMemo(() => {
    return {
      "minHeight": 700,
      readonly: false, 
    };
  }, []);
  const getdata = (title) => {
    document.body.style.overflowY = 'hidden';
    setLoadings({ display: 'flex' });


    try {
      axios.post('/api/findpost', { title })
        .then((res) => {
          setPost(res.data.post)
          setPost(res.data.post)
          setContent(res.data.post.content)
          setCtitle(res.data.post.title)
          setCategory(res.data.post.category)
          setImage(res.data.post.image)
          setDiscription(res.data.post.discription)
          document.body.style.overflowY = 'auto';
          setLoadings({ display: 'none' });
        })
        .catch((err) => { console.log(err) })



    } catch (error) {
      console.error('Error fetching post:', error);
      document.body.style.overflowY = 'auto';
      setLoadings({ display: 'none' });
    }
  };
  useEffect(() => {

    getdata(title);

  }, [title]);
  const handelsubmit = (e) => {
    e.preventDefault();
    setLoadings({ display: 'flex' });
    document.body.style.overflow = 'hidden';
    axios.put('/api/blogpost', { title, ctitle, discription, image, category, content })
      .then((response) => {
        setLoadings({ display: 'none' });
        setError('Changes Saved')
        setTimeout(() => {
          setError('')


        }, 3000);
        document.body.style.overflow = 'auto';

      }
      )
      .catch(error => console.log(error));

  }

  return (
    <>

      <div style={loadings} className='w-full h-screen !z-[999] fixed flex items-center justify-center top-0 left-0 bg-[#0000005b] '>
        <Image
          className=" object-cover    "
          src={loading} // Path to your image
          sizes={50}
          alt="Description of image"
        />
      </div>

      <div className='px-[20px] py-20'>
        {/* <Scroll /> */}
        <form onSubmit={handelsubmit} className='grid grid-cols-3  gap-4'>

          <div className='col-span-2'>

            <label htmlFor="" className='text-xl'>Edit Blog</label>
            <div className='h-screen '>

              <JoditEditor
                ref={editor}
                config={editorConfig}
                value={content}
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => setContent(newContent)}
              />
            </div>
          </div>
          <div className=' flex  flex-col-reverse   justify-around '>

            <label className='text-xl text-red-500 '>{error}</label>
            <input type="submit" value={'Save Changes'} className='w-full text-white rounded-md  h-[50px] bg-prime2 text-xl ' />
            <div className='flex flex-col gap-4'>

            <label htmlFor="" className='text-xl'>Title</label>
            <input value={ctitle} onChange={(e) => setCtitle(e.target.value)} required type="text" placeholder='Title' className='w-full h-[40px] text-lg  border-[1px] border-gray-400 p-2' />
            </div>
            <div className='flex flex-col gap-4'>

            <label htmlFor="" className='text-xl'>Discription</label>
            <textarea value={discription} onChange={(e) => setDiscription(e.target.value)} required placeholder='Discription' className='w-full h-[80px] text-lg border-[1px] border-gray-400 p-2' name="" id=""></textarea>
            </div>
            <select value={category} onChange={(e) => setCategory(e.target.value)} required name="" id="" className='p-2  border-[1px] border-gray-400'>
              <option value="" >Select category</option>

              <option value="Outfits">Outfits</option>
              <option value="Hairstyles">Hairstyles</option>


            </select>
            <div className='space-y-8'>
            <label htmlFor="" className='text-xl'>Meta Image</label>
            <div><img src={image ? image : 'https://placehold.co/400'} className='w-full h-[200px] object-cover' alt="" /></div>

            <input  value={image} onChange={(e) => setImage(e.target.value)} type="text" placeholder='Image Link' className='w-full h-[40px] text-lg  border-[1px] border-gray-400 p-2' />
            </div>
          </div>

        </form>
      </div>






    </>
  )
}

export default Page
