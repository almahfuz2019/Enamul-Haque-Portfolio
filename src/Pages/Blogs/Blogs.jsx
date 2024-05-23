import React from "react";
import AllBlogs from "../../components/All Blogs/Blogs";
import ForConnected from "../../components/ForConnected/ForConnected";
const Blogs = () => {
  return (
    <div>
      <div
        className=" bg-center py-24 mb-24 "
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <h1 className="text-center text-5xl font-bold text-white">
          Recent News & Blogs
        </h1>
        <div className=" bg-primary mx-auto h-1 w-80 mt-5"></div>
      </div>
      <AllBlogs />
      <ForConnected />
    </div>
  );
};
export default Blogs;
