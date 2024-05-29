import { useEffect } from "react";
import AllBlogs from "../../../public/Blogs.json";
import Blog from "./Blog";import AOS from "aos";
import "aos/dist/aos.css";
const Blogs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="container mx-auto pt-10 pb-32  px-4"
      >
        <div className="services-list grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Blog AllBlogs={AllBlogs} />
        </div>
      </div>
    </>
  );
};
export default Blogs;
