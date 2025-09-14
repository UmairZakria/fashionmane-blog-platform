"use client";
import { useState, useEffect } from "react";
import React from "react";
import axios from 'axios'

import { Search } from "lucide-react";

import { useBlog } from "@/Context/blogcontext";

import { useRouter } from "next/navigation";
import Slider from "react-slick";
import { slugify } from "@/lib/slugify"

// Sidebar loading skeleton
function SidebarLoadingskull() {
  return (
    <div className="flex cursor-pointer rounded-md animate-pulse bg-gray-200 w-full md:h-[80px] gap-3 p-2 items-center">
      <div className="w-14 h-14 bg-gray-300 rounded-lg mr-2"></div>
      <div className="flex-1 space-y-2">
        <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
        <div className="h-3 w-1/2 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}

const Sidebar = ({ datablog }) => {
  const { blogs, setBlogs } = useBlog();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);

  const getdata = async () => {

    try {
      const res = await axios.post('/api/findblogs', { category: 'all' });
      const res2 = res.data.post
 
      setData(res2)

    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  useEffect(() => {
    if (blogs.length == 0) {
      getdata();

    } else {
      if (data.length == 0){

        setData(blogs)
      }

    }

  }, [blogs]);

  useEffect(() => {
    const searchdata = data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery)
    );
    setSearch(searchdata);
    if (searchQuery === "") {
      setSearch([]);
    }
  }, [searchQuery]);

  const handelredrict = (title) => {
    let titlesl = slugify(title)

    router.push(`/Blog/${encodeURIComponent(titlesl)}`);
  };
  return (
    <>
      <div className="   w-[280px]    ">
        <div className="relative text-white ">
          <input
            type="text"
            id="search"
            placeholder="Search Article "
            className="search w-full  bg-[#3a0157]   px-6 py-3   text-sm placeholder:text-[16px] placeholder:text-white  rounded-full "
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute top-1/2 right-5  -translate-y-1/2 bg-[#3a0157] rounded-l-full  " />
        </div>
        <div className={`space-y-4 my-2 bg-gray-100 ${search.length > 0 ? 'p-2' : ''}  !border-gray-200  rounded-xl `}>
          {search.slice(0, 5).map((data, index) => (
            <div
              key={index}
              onClick={() => handelredrict(data.title)}
              className="p-2  flex items-center hover:bg-white rounded-xl  -4 h-[80px] gap-1  cursor-pointer"
            >
              <h2 className="line-clamp-2 text-prime">{data.title}</h2>
            </div>
          ))}
        </div>
        <h1 className="text-2xl my-5 px-1 ">Recent Post</h1>
        <div className="space-y-4 px-1   ">
          {data.length > 0 &&
            data
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .slice(0, 9)
              .map((data) => (
                <div
                  key={data._id}
                  onClick={() => handelredrict(data.title)}
                  className="flex cursor-pointer   w-full lg:h-auto  md:h-[180px] gap-3 lg:gap-1 p-1 "
                >
                  <div className="w-full flex   justify-evenly   flex-col">
                    <h2 className="line-clamp-3 text-prime3  text-lg">
                      {data.title}
                    </h2>
                  </div>
                </div>
              ))}
          {data.length == 0 &&
            [1, 2, 3, 4, 5].map((data, index) => (
              <SidebarLoadingskull key={index} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
