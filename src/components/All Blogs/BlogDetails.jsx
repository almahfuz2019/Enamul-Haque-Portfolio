import { useEffect, useState } from "react";
import { FaCalendarAlt, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaArrowRight, FaPencil } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { FaSquareInstagram } from "react-icons/fa6";
import AllBlogs from "../../../public/Blogs.json";
import { TbSquareLetterXFilled } from "react-icons/tb";

const ServiceDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [matched, setMatched] = useState({});

  useEffect(() => {
    fetch("/Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

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
          {img ? (
            <img className="mx-auto w-full h-full" src={img} alt="" />
          ) : (
            <div className="w-full h-screen bg-gray-700 animate-pulse"></div>
          )}
          <div className="py-5 md:flex text-left md:justify-between">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">{title}</h1>

            <div className="flex flex-col md:flex-row gap-x-4">
              <p className="text-[#a6a6a6]  flex gap-2 items-center">
                <FaPencil className="text-black" />
                David Broon
              </p>
              <p className="text-[#a6a6a6] flex gap-2 items-center">
                <FaCalendarAlt className="text-black" /> October 20, 2023
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

        <div className="flex justify-center mx-auto gap-4">
          <a className="text-3xl text-black" href="https://x.com/">
            <TbSquareLetterXFilled />
          </a>
          <a className="text-3xl text-black" href="https://www.facebook.com/">
            <FaFacebookSquare />
          </a>
          <a className="text-3xl text-black" href="https://www.linkedin.com/">
            <FaLinkedin />
          </a>
          <a className="text-3xl text-black" href="https://www.instagram.com/">
            <FaSquareInstagram />
          </a>
        </div>
      </div>
      <div className="container mx-auto mb-24 px-5">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {AllBlogs.slice(0, 3).map((BlogItem) => (
            <div
              key={BlogItem.id}
              className=" shadow overflow-hidden flex justify-center items-center p-[10px] border border-gray-200 gap-3"
            >
              <img
                src={BlogItem.img}
                alt="Image 1"
                className="h-24 w-24 bg-cover "
              />
              <div className="">
                <p className=" text-gray-500 text-md">October 20, 2023</p>
                <Link
                  to={`/blog/${BlogItem.id}`}
                  className="text-xl font-bold text-gray-900 hover:text-primary"
                >
                  {BlogItem.title}
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
