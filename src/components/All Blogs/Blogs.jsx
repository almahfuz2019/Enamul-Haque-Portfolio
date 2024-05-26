import AllBlogs from "../../../public/Blogs.json";
import Blog from "./Blog";
const Services = () => {
  return (
    <>
      <div className="container mx-auto pt-10 pb-20 md:py-10  lg:py-10 px-4">
        <div className="services-list grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Blog AllBlogs={AllBlogs} />
        </div>
      </div>
    </>
  );
};
export default Services;
