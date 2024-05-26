import React from "react";
import AllBlogs from "../../components/All Blogs/Blogs";
import ForConnected from "../../components/ForConnected/ForConnected";
const Blogs = () => {
  return (
    <div>
      <div
        className=" bg-center mt-16 md:mt-0  bg-cover  py-32 mb-24 "
        style={{
          backgroundImage:
            "url('https://uploads-ssl.webflow.com/63c3d5df23be3c7753f0e3fe/65100b03ebdf63e00bef1bd0_Rectangle%2084%20(1).png')",
        }}
      >
        <h1 className="text-center dm-sans-font text-3xl md:text-5xl font-bold text-white">
          Recent News & Blogs
        </h1>
        <div className=" bg-primary mx-auto h-1 w-60 md:w-80 mt-5"></div>
      </div>
      <AllBlogs />
      <div className="mb-20"></div>
      <ForConnected />
    </div>
  );
};
export default Blogs;
