'use client'
import React, { useState, useRef, useMemo, useEffect } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';


import { useTheme } from 'next-themes';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

// import JoditEditor from 'jodit-react';
import loading from './ui/loading.gif'
import Image from 'next/image'

const BlogEditor = () => {
  const editor = useRef(null);
  const { theme } = useTheme()
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('')
  const [discription, setDiscription] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')
  const [error, setError] = useState('')
  const [loadings, setLoadings] = useState({ display: 'none' })
  const editorConfig = useMemo(() => {
    return {
      "minHeight": 700,
      readonly: false, // Editable mode
    };
  }, []);


  const handelsubmit = (e) => {
    e.preventDefault();
    window.scroll(0,0)
    setLoadings({ display: 'flex' });
    document.body.style.overflow = 'hidden';
    axios.post('/api/blogpost', { title, discription, image, category, content })
      .then(response => {
        console.log(response)
        setLoadings({ display: 'none' });
        setError('done')
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
      <div className=" px-[20px] py-20 ">
        <div style={loadings} className='w-full !z-[999] h-screen fixed flex items-center justify-center top-0 left-0 bg-[#0000005b] '>
          <Image
            className=" object-cover    "
            src={loading} // Path to your image
            sizes={50}
            alt="Description of image"
          />
        </div>
        <form onSubmit={handelsubmit} className='grid grid-cols-3 gap-4'>

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
          <div className=' flex  flex-col-reverse   justify-around'>

            <label className='text-lg text-red-500 font-semibold'>{error}</label>
            <input type="submit" value={'Submit'} className='w-full text-white rounded-md  h-[50px] bg-prime3 text-2xl ' />
            <div className='flex flex-col gap-4'>

            <label htmlFor="" className='text-xl'>Title</label>
            <input onChange={(e) => setTitle(e.target.value)} required type="text" placeholder='Title' className='w-full h-[40px] text-lg  border-[1px] border-gray-400 p-2' />
            </div>
            <div className='flex flex-col gap-4'>

            <label htmlFor="" className='text-xl'>Discription</label>
            <textarea onChange={(e) => setDiscription(e.target.value)} required placeholder='Discription' className='w-full h-[80px] text-lg border-[1px] border-gray-400 p-2' name="" id=""></textarea>
            </div>
            <select onChange={(e) => setCategory(e.target.value)} required name="" id="" className='p-2  border-[1px] border-gray-400'>
              <option value="" >Select category</option>

              <option value="Outfits">Outfits</option>
              <option value="Hairstyles">Hairstyles</option>


            </select>
            <div className='space-y-8'>
            <label htmlFor="" className='text-xl'>Meta Image</label>
            <div><img src={image ? image : 'https://placehold.co/400'} className='w-full h-[200px] object-cover' alt="" /></div>

            <input required onChange={(e) => setImage(e.target.value)} type="text" placeholder='Image Link' className='w-full h-[40px] text-lg  border-[1px] border-gray-400 p-2' />
            </div>
          </div>

        </form>
      </div>
    </>
  );
};

export default BlogEditor