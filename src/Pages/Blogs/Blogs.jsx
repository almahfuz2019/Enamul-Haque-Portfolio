import AllBlogs from "../../components/Blogs/Blogs";
import ForConnected from "../../components/ForConnected/ForConnected";
import Cityscape_Skyline_View from "./../../assets/Images/Cityscape_Skyline_View.png";
const Blogs = () => {
  return (
    <div className="overflow-hidden">
      <div
        className=" bg-center mt-16 md:mt-0  bg-cover  py-32 mb-24 "
        style={{
          backgroundImage: `url(${Cityscape_Skyline_View})`,
        }}
      >
        <h1
          data-aos="zoom-in"
          className="text-center dm-sans-font text-3xl md:text-5xl font-bold text-white"
        >
          Recent News & Blogs
        </h1>
        <div
          data-aos="zoom-out"
          className=" bg-primary mx-auto h-1 w-60 md:w-80 mt-5"
        ></div>
      </div>
      <AllBlogs />
      <div className="mb-20"></div>
      <ForConnected />
    </div>
  );
};
export default Blogs;
