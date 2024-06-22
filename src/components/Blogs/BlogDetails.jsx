import { useEffect, useState } from "react";
import { FaCalendarAlt, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { FaSquareInstagram } from "react-icons/fa6";
import AllBlogs from "../../../public/Blogs.json";
import { TbSquareLetterXFilled } from "react-icons/tb";
import Cityscape_Skyline_View from "./../../assets/Images/Cityscape_Skyline_View.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const ServiceDetails = () => {
  const { title } = useParams(); // Change id to title
  const [blog, setBlog] = useState([]);
  const [matched, setMatched] = useState({});

  // Load blogs data from JSON file
  useEffect(() => {
    fetch("/Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  // Match blog with the title from URL parameters
  useEffect(() => {
    const matching = blog.find(
      (item) =>
        item?.title.replace(/\s+/g, "-").toLowerCase() === title.toLowerCase(),
    );
    setMatched(matching);
  }, [title, blog]);

  // Destructure blog data
  const { img, title: blogTitle, body, writer, date,id } = matched || {};

  useEffect(() => {
    AOS.init();
  }, []);

  // Function to generate share URLs
  const generateShareUrl = (platform) => {
    const blogUrl = window.location.href;
    const encodedTitle = encodeURIComponent(blogTitle);
    const encodedUrl = encodeURIComponent(blogUrl);

    switch (platform) {
      case "x":
        return `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
      case "facebook":
        return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      case "linkedin":
        return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
      case "instagram":
        // Note: Instagram doesn't support direct URL sharing via web. Users need to share manually.
        return "https://www.instagram.com/";
      default:
        return "#";
    }
  };

  return (
    <div>
      {/* Set document head */}
      <Helmet>
        <title>{blogTitle}</title>
        <meta
          name="description"
          content="Welcome to our home page where you can find all the information you need."
        />
        <meta name="keywords" content="home, services, blog, testimonials" />
      </Helmet>
      <div
        className="bg-center py-32 mb-32"
        style={{
          backgroundImage: `url(${Cityscape_Skyline_View})`,
        }}
        alt="Panoramic view of a cityscape skyline with tall buildings and a clear sky"
      >
        <h1
          data-aos="zoom-in"
          className="text-center text-3xl md:text-5xl font-bold text-white"
        >
          Recent News & Blogs
        </h1>
        <div
          data-aos="zoom-out"
          className="bg-primary mx-auto h-1 w-80 mt-5"
        ></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 text-center my-20">
        <div className="mx-auto">
          {img ? (
            <img
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="mx-auto w-full h-full"
              src={img}
              alt={blogTitle}
            />
          ) : (
            <div className="w-full h-screen bg-gray-700 animate-pulse"></div>
          )}

          {/* Blog details */}
          <div className="py-10 md:flex text-left md:justify-between">
            <h1
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="text-2xl md:text-4xl font-bold mb-1"
            >
              {blogTitle}
            </h1>

            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="flex flex-col md:flex-row gap-x-4"
            >
              <p className="text-[#a6a6a6] flex gap-2 items-center">
                <FaPencil className="text-black" />
                {writer}
              </p>
              <p className="text-[#a6a6a6] flex gap-2 items-center">
                <FaCalendarAlt className="text-black" /> {date}
              </p>
            </div>
          </div>

          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            dangerouslySetInnerHTML={{ __html: body }}
            className="text-[#a6a6a6] text-[18px] text-left"
          ></p>
        </div>
      </div>

      {/* Share post section */}
      <div className="container mx-auto text-center mb-10">
        <p className="text-[18px] font-semibold mb-2">Share Post</p>

        {/* Social media icons */}
        <div className="flex justify-center mx-auto gap-4">
          <a
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
            className="text-3xl text-black"
            href={generateShareUrl("x")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbSquareLetterXFilled />
          </a>
          <a
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
            className="text-3xl text-black"
            href={generateShareUrl("facebook")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare />
          </a>
          <a
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
            className="text-3xl text-black"
            href={generateShareUrl("linkedin")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
            className="text-3xl text-black"
            href={generateShareUrl("instagram")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareInstagram />
          </a>
        </div>
      </div>

      {/* Related blogs section */}
      <div className="container mx-auto mb-24 px-5">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Display related blogs, excluding current blog */}
          {AllBlogs.slice(0, 3).map(
            (BlogItem) =>
              BlogItem.id !== parseInt(id) && (
                <div
                  key={BlogItem.id}
                  className="shadow overflow-hidden flex justify-center items-center p-[10px] border border-gray-200 gap-3"
                >
                  <img
                    src={BlogItem.img}
                    alt="Blog Image"
                    className="h-24 w-24 bg-cover"
                  />
                  <div className="">
                    <p className="text-gray-500 text-md">{BlogItem.date}</p>
                    <Link
                      to={`/blog/${BlogItem.title
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                      className="text-xl font-bold text-gray-900 hover:text-primary"
                    >
                      {BlogItem.title}
                    </Link>
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
