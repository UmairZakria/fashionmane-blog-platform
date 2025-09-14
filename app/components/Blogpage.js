"use client";

import { CalendarDays, Newspaper } from "lucide-react";

import React from "react";
import Sidebar from "@/app/components/Sidebar";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";

import { format } from "date-fns";

import { useEffect, useState } from "react";
import { useBlog } from "@/Context/blogcontext";
const Blogpage = ({title}) => {
  const { blogs } = useBlog();

  const router = useRouter();
//   const title = decodeURIComponent(params.title);
  const [post, setPost] = useState({ title: "", content: "" });

  const getdata = async (title) => {
    try {
      console.log(title);
      const res = await axios.post("/api/findpost", { title });
      setPost(res.data.post);
      console.log(res);
    } catch (error) {
      console.error("Error fetching post:", error);
      router.refresh();
    }
  };

  useEffect(() => {
    if (blogs.length == 0) {
      getdata(title);
    } else {
      const blog = blogs.find(
        (item) => item.title.toLowerCase() === title.toLowerCase()
      );
      console.log(blog);
      setPost(blog);
    }
  }, [title]);

  return (
    <>
      {post.title !== "" && (
        <div className="flex  flex-col lg:flex-row md:flex-col container mx-auto w-full  px-4 my-10 gap-4  h-auto min-h-screen ">
          <div className=" w-full lg:w-[80%] border-b border-prime h-full space-y-4 ">
            <h1 className=" text-2xl md:text-5xl font-semibold font-poppins  w-full lg:w-3/4 ">
              {post.title}
            </h1>
            {/* <TextReader text={post.content} /> */}
            <div className="flex items-center  text-prime2 font-poppins text-lg gap-4 w-full">
              <span className="flex gap-2 items-center">
                <Newspaper /> {post.category}
              </span>
              |
              <span className="flex gap-2 items-center">
                {" "}
                <CalendarDays />{" "}
                {post.date
                  ? format(new Date(post.date), "MMM dd yyyy")
                  : ""}{" "}
              </span>
            </div>
            <div className="h-[2px]    w-[95%] my-5 bg-black "></div>

            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <Sidebar />
        </div>
      )}
      {/* Loading Skull */}
      {post.title == "" && (
  <div className="flex flex-col lg:flex-row md:flex-col container mx-auto w-full px-4 my-10 gap-4 min-h-screen">
    <div className="w-full lg:w-[80%] border-b border-prime h-full space-y-6">
      
      <div className="bg-gray-200 animate-pulse rounded-md 
                      h-8 md:h-14 lg:h-14 
                      w-[90%] lg:w-[70%]">
      </div>
      

      <div className="flex items-center gap-6">
        <div className="bg-gray-200 animate-pulse rounded-md h-6 w-36"></div>
        <div className="bg-gray-200 animate-pulse rounded-md h-6 w-24"></div>
      </div>

      <div className="h-[2px] w-[95%] my-5 bg-gray-300 animate-pulse"></div>



      <div className="space-y-4 mt-6">
        <div className="bg-gray-200 animate-pulse rounded-md h-4 w-[90%]"></div>
        <div className="bg-gray-200 animate-pulse rounded-md h-4 w-[85%]"></div>
        <div className="bg-gray-200 animate-pulse rounded-md h-4 w-[90%]"></div>
        <div className="bg-gray-200 animate-pulse rounded-md h-4 w-[85%]"></div>
        <div className="bg-gray-200 animate-pulse rounded-md h-4 w-[50%]"></div>
      </div>
      <div className="w-[90%] h-56 sm:h-72 md:h-60 lg:h-96 bg-gray-200 animate-pulse rounded-md"></div>


    </div>

    <Sidebar />
  </div>
)}

    </>
  );
};

export default Blogpage;
