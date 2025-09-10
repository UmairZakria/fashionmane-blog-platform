"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { format } from "date-fns";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import { useRouter } from "next/navigation";
import { useBlog } from "@/Context/blogcontext";
import { Loadingskull } from "./Loadingskull";
const Main = ({ data }) => {
  const rout = useRouter();
  const { blogs, setBlogs } = useBlog();
  const [end, setEnd] = useState({ display: "none" });
  useEffect(() => {
    setBlogs(data);
  }, []);

  const [y, setY] = useState(15);

  const handelredrict = (title) => {
    rout.push(`/Blog/${encodeURIComponent(title)}`);
  };
  const handelload = () => {
    if (y >= data.length) {
      setEnd({ display: "flex" });
    } else {
      setY(y + 3);
    }
  };

  const Card = ({ _id, image, category, date, discription, title }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.7,
        }}
        viewport={{ once: true }}
        key={_id}
        onClick={() => handelredrict(title)}
        className=" shadow-xl group  overflow-hidden h-[480px] hover:shadow-sm transition-all duration-300 ease-in-out  rounded-xl w-full  md:min-w-[320px]  2xl:w-[400px]   md:mx-0  cursor-pointer space-y-2 pb-3 flex flex-col justify-between"
      >
        <div className="overflow-hidden w-full">
          <img
            src={image}
            className="object-cover w-full group-hover:scale-125 group-hover:object-center transition-all duration-500 ease-in-out object-top rounded-t-xl  h-[240px]"
            alt={title}
          />
        </div>
        <h1 className="px-4 text-2xl line-clamp-2  font-poppins">{title} </h1>
        <div className="px-4  flex  justify-around flex-col space-y-2">
          {/* <div className="space-y-4"> */}
          <div className="flex text-prime3 w-full items-center justify-between   font-normal ">
            <span>{category}</span>
            <span>{format(new Date(date), "MMM dd yyyy")}</span>
            {/* <span>{date}</span> */}
          </div>
          {/* </div> */}

          <p className="line-clamp-3 text-lg font-roboto text-black/60 ">
            {discription}
          </p>
        </div>
      </motion.div>
    );
  };
  return (
    <>
      <div className="w-full px-2 mt-[60px] ">
        <div className=" min-h-screen container mx-auto flex  lg:flex-row flex-col gap-5 w-full ">
          <div className="w-full">
            <div className="  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5 gap-y-10">
              {blogs.length > 0 &&
                blogs
                  .sort(() => Math.random() - 0.5)
                  .slice(0, y)
                  .map((data, index) => (
                    <Card
                      key={index}
                      _id={data._id}
                      image={data.image}
                      category={data.category}
                      date={data.date}
                      discription={data.discription}
                      title={data.title}
                    />
                  ))}
              {blogs.length == 0 &&
                [1, 2, 3, 4, 5, 6].map((data, index) => (
                  <Loadingskull key={index} />
                ))}
            </div>
            <div className="w-full flex items-center justify-center my-10 flex-col  ">
              <p style={end} className="text-xl text-prime">
                Oops! You reached the end.
              </p>
              <button
                onClick={handelload}
                className="p-4 bg-prime2 uppercase font-poppins rounded-md font-semibold text-white"
              >
                {" "}
                Show More{" "}
              </button>
            </div>
          </div>

          <div className=" ">
            <Sidebar datablog={{blogs}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
