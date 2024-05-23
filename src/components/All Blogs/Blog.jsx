import { Link } from 'react-router-dom';
const Blog = ({AllBlogs}) => {
  return (
    <>
    {AllBlogs.map((BlogItem) => (
       
    <div key={BlogItem.id} className="service-item">
      <article className="lg:p-5 p-3 overflow-hidden border border-gray-300 bg-white shadow-sm">
        <img
          alt=""
          src={BlogItem?.img}
          className="h-56 w-full object-cover"
          />

        <div className="mt-5">
          <p className="line-clamp-3 text-base text-gray-500 font-bold">
            {BlogItem?.date}
          </p>
          <a href="#">
            <h3 className="text-2xl font-bold">
              {BlogItem?.title}
            </h3>
          </a>

          <Link to={`/service/${BlogItem.id}`}
           
           className="group mt-4 inline-flex items-center gap-1 text-xl font-medium text-primary"
           >
           Read More
            <span
              aria-hidden="true"
              className="text-3xl font-extrabold block text-primary transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </Link>
        </div>
      </article>
    </div>
      ))}
              </>
  );
};

export default Blog;
{/* <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
	<div className="h-48 rounded-t dark:bg-gray-300"></div>
	<div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-50">
		<div className="w-full h-6 rounded dark:bg-gray-300"></div>
		<div className="w-full h-6 rounded dark:bg-gray-300"></div>
		<div className="w-3/4 h-6 rounded dark:bg-gray-300"></div>
	</div>
</div> */}