"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";



import oeye from './images/openeye.png'
import Link from 'next/link'
import Image from 'next/image'

import ceye from './images/closedeye.png'
import loading from './images/loading.gif'
import axios from 'axios'



const Page = () => {
    const [email, setEmail] = useState('')
    const router = useRouter();
    const [password, setPassword] = useState()
    const [error, setError] = useState(null);
    // const navi = useNavigate()
    const [passwordeye, setPasswordeye] = useState(ceye)
    const [passwordtype, setPasswordtype] = useState("password"

    )
    const [loadings, setLoadings] = useState({ display: 'none' })



    const handeleye = () => {
        if (passwordeye == ceye) {
            setPasswordtype('text')
            setPasswordeye(oeye)
        } else {
            setPasswordtype('password')
            setPasswordeye(ceye)
        }

    }
    const handelrelod = () => {
        window.location.reload(true)
    }
    const handellogin2 = async (e) => {
        e.preventDefault();
        const res = axios.post('api/register', { email, password })
        if (res) {
            console.log(res)
        }
    }
    const handellogin = async (e) => {
        setLoadings({ display: 'flex' })
        e.preventDefault();

        const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (result.error) {
            console.log(result.error)
            setLoadings({ display: 'none' })

            setError('something went Wrong');
            setTimeout(() => {
                setError('');

            }, 3000);
        } else {

            router.push("/Panel");
        }

    }
    return (
        <div className='  bg-center w-full h-[calc(100vh-130px)]  flex flex-col justify-center  items-center'>



            <div className='w-full  mx-4  bg-gray-100 shadow-lg  h-auto  lg:w-1/3   md:w-1/2  2xl:w-1/3    p-1  '>



                <div className='relative' >
                    <div style={loadings} className='absolute top-0 left-0 rounded-2xl  w-full h-full box-border p-4 flex items-center justify-center z-50 bg-[#0000004d]'>

                        <Image
                            className=" object-cover    "
                            src={loading} // Path to your image
                            sizes={50}
                            alt="Description of image"
                        />
                    </div>
                    <form onSubmit={handellogin} className=' w-full gap-6 px-5 mt-2 py-6 flex flex-col'>
                        {error && <p style={{ color: 'red' }}>{error}</p>}

                        <label className='  text-center  font-medium text-2xl' >Login </label>


                        <div className='flex flex-col '>

                            <label htmlFor="Email" className=' font-medium text-sm ' >Email Address</label>
                            <input type="email" required className='pt-2 text-white focus:outline-none px-2 border-gray-700 bg-transparent border-x-0 border-t-0 border-b-2'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>


                        <div className='flex flex-col gap-1'>

                            <label className=' font-medium text-sm ' htmlFor="Password">Password</label>
                            <div className='w-full relative'>
                                <input required type={passwordtype} className=' text-white pt-2 px-2 w-full border-gray-700  focus:outline-none bg-transparent border-b-2 border-x-0 border-t-0'
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className='p-[4px]  absolute rounded-t-md -top-1     right-0  '>

                                    <Image
                                        className=" object-cover  "
                                        src={passwordeye} // Path to your image
                                        alt="Description of image"

                                        width={30}
                                        onClick={handeleye}
                                        height={30}
                                    // layout='responsive'
                                    />

                                </div>
                            </div>
                        </div>
                        <Link href={'/Panel'}>Already Login? <span className="text-blue-400 underline">click here</span></Link>
                        <input type="submit" value={'Login Now'} className='text-white shadow-sm bg-[rgb(0,178,200)] hover:bg-[rgba(0,177,200,0.88)] active:bg-[rgba(0,177,200,0.94)] py-3 rounded-md mt-3' />
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Page
