import { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRight, FaPencil } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

import AllBlogs from "../../../public/Blogs.json";
const ServiceDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [matched, setMatched] = useState([]);
  fetch("/public/Blogs.json")
    .then((res) => res.json())
    .then((data) => setBlog(data));
  useEffect(() => {
    const matching = blog.find((item) => item?.id === parseInt(id));
    setMatched(matching);
  }, [id, blog]);
  const { img, title, body } = matched || {};
  return (
    <div>
      <div
        className=" bg-center py-24 mb-24"
        style={{
          backgroundImage:
            "url('https://uploads-ssl.webflow.com/63c3d5df23be3c7753f0e3fe/65100b03ebdf63e00bef1bd0_Rectangle%2084%20(1).png')",
        }}
      >
        <h1 className="text-center text-5xl font-bold text-white">
          Recent News & Blogs
        </h1>
        <div className=" bg-primary mx-auto h-1 w-80 mt-5"></div>
      </div>
      <div className="container mx-auto  px-4 text-center my-10">
        <div className=" mx-auto ">
          <img className="mx-auto w-full h-full" src={img} alt="" />
          <div className="py-5 md:flex text-left md:justify-between">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">{title}</h1>
            <div className="flex flex-col md:flex-row">
              <p className="text-[#a6a6a6]  flex gap-2 items-center">
                <FaPencil className="text-black" />
                David Broon
              </p>
              <p className="text-[#a6a6a6] flex gap-2 items-center">
                <FaCalendarAlt className="text-black" /> OCtober 20,2023
              </p>
            </div>
          </div>
          <p
            dangerouslySetInnerHTML={{ __html: body }}
            className="text-[#a6a6a6] text-[18px] text-left"
          ></p>
        </div>
      </div>
      <div className="container mx-auto text-center mb-10">
        <p className="text-[18px] font-semibold mb-2">Share Post</p>

        <div className="flex items-center justify-center gap-3">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="container mx-auto mb-24 px-5">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {AllBlogs.map((BlogItem) => (
            <div
              key={BlogItem.id}
              className=" shadow overflow-hidden flex justify-center items-center p-[10px] border border-gray-200 gap-3"
            >
              <img src={BlogItem.img} alt="Image 1" className="h-24 w-24 " />
              <div className="">
                <p className="text-gray-500 text-md">October 20, 2023</p>
                <Link
                  to={`/service/${BlogItem.id}`}
                  className="text-xl font-bold text-gray-900"
                >
                  Top 10 Tips for First-Time Homebuyers
                </Link>
              </div>
            </div>
        ))}
          </div>
        </div>
    </div>
  );
};

export default ServiceDetails;
