"use client";
import { useState } from "react";
import React from "react";
import loading from "./ui/loading.gif";
import { format } from "date-fns";
import { motion } from "framer-motion"
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";



const Listblog = (Props) => {
  const rout = useRouter();
  const [loadings, setLoadings] = useState({ display: "none" });
  const options = { month: "short", day: "2-digit", year: "numeric" };
  const [error, setError] = useState("");
  const [y, setY] = useState(15);
  const [end, setEnd] = useState({ display: "none" });
  const handelload = () => {
    if (y >= Props.data.length) {
      setEnd({ display: "flex" });
    } else {
      setY(y + 3);
    }
  };
  const handelredrict = (slug) => {
    rout.push(`/Blog/${encodeURIComponent(slug)}`);
  };
  const handelredrict2 = (title) => {
    rout.push(`/Panel/Blogedit/${encodeURIComponent(title)}`);
  };
  const handeldelete = async (id) => {
    window.scroll(0, 0);
    setLoadings({ display: "flex" });
    document.body.style.overflow = "hidden";

    try {
      const res = await axios.post("/api/deletepost", { id });
      console.log(res);
      setError("Done");
    } catch (error) {
      console.error("Error fetching post:", error);
    } finally {
      console.log("done");
      // window.location.reload()
    }
  };
  return (
    <>
      <div className="container mx-auto">{error}</div>
      <div
        style={loadings}
        className="w-full h-screen fixed flex items-center justify-center top-0 left-0 bg-[#0000005b] "
      >
        <Image
          className=" object-cover    "
          src={loading}
          sizes={50}
          alt="Loading"
        />
      </div>
      <div className=" container mx-auto grid md:grid-cols-2  place-items-center  grid-cols-1  gap-y-8 gap-x-4 my-3 lg:grid-cols-3  w-full">
        {Props.admin
          ? Props.data.map((data, index) => (
              <div
                key={index}
                className="shadow-lg   rounded-lg  md:mx-0 mx-5 cursor-pointer space-y-1 pb-3 flex flex-col justify-between "
              >
                <img
                  src={data.image}
                  onClick={() => handelredrict(data.title)}
                  className="object-cover  rounded-t-lg  h-[200px]"
                  alt={data.title}
                />

                <div
                  onClick={() => handelredrict(data.title)}
                  className="mx-4 space-y-2"
                >
                  <h1 className=" md:text-lg line-clamp-2 font-semibold">
                    {data.title}{" "}
                  </h1>
                  <div className="flex w-full items-center justify-between  text-gray-600 font-normal ">
                    <span>{data.category}</span>
                    <span>{format(new Date(data.date), "MMM dd yyyy")}</span>
                  </div>
                  <div className="line-clamp-2">{data.discription}</div>
                </div>

                <div className="flex items-center justify-around z-50">
                  <button
                    onClick={() => handelredrict2(data.title)}
                    className="bg-green-500 font-medium p-2 px-4 flex items-center gap-1 justify-around"
                  >
                    Edit
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/dotty/80/FFFFFF/pencil-tip.png"
                      alt="pencil-tip"
                    />{" "}
                  </button>
                  <button
                    onClick={() => handeldelete(data._id)}
                    className="bg-red-500 font-medium p-2 px-4  flex items-center justify-around"
                  >
                    {" "}
                    Delete
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/FFFFFF/external-dustbin-ux-and-ui-flatart-icons-solid-flatarticons.png"
                      alt="external-dustbin-ux-and-ui-flatart-icons-solid-flatarticons"
                    />
                  </button>
                </div>
              </div>
            ))
          : Props.data.slice(0, y).map((data, index) => (
              <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.7,
        
              }}
              viewport={{once:true}}
                key={index}
                onClick={() => handelredrict(data.slug)}
                className="shadow-xl h-[480px] group  overflow-hidden bg-white  max-w-[400px] rounded-lg  md:mx-0 mx-5 cursor-pointer space-y-1 pb-3 flex flex-col justify-between "
              >
                <div className=" overflow-hidden rounded-t-lg">
                  <img
                    src={data.image}
                    className="object-cover w-full group-hover:scale-125 group-hover:object-center transition-all duration-500 ease-in-out object-top rounded-t-lg  h-[250px]"
                    alt={data.title}
                  />
                </div>

                <h1 className=" md:text-3xl  px-2 md:px-4 text-xl font-poppins  lg:text-2xl line-clamp-2 font-medium">
                  {data.title}{" "}
                </h1>

                <div className=" px-2 md:px-4 space-y-2">
                  <div className="flex flex-row-reverse w-full items-center justify-between text-lg font-semibold text-prime2  ">
                    <span className="border-b-[1px] border-prime/40  ">
                      {data.category}
                    </span>
                    <span className="border-b-[1px] border-prime/40  ">
                      {format(new Date(data.date), "MMM dd yyyy")}
                    </span>
                  </div>
                  <p className="text-gray-700 font-roboto line-clamp-3 text-lg">
                    {data.discription}
                  </p>
                </div>
              </motion.div>
            ))}
      </div>
      {Props.admin ? (
        ""
      ) : (
        <div className="w-full flex items-center justify-center flex-col  my-2">
          <p style={end} className="text-xl my-5 font-roboto font-semibold text-prime2">
           Oops! You reached the end.
          </p>
          <button
            onClick={handelload}
            className="p-4 bg-prime2 rounded-md uppercase font-poppins cursor-pointer font-semibold text-white"
          >
            {" "}
            Show More{" "}
          </button>
        </div>
      )}
    </>
  );
};

export default Listblog;
