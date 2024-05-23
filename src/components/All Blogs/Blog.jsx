import { Link } from 'react-router-dom';
const Blog = ({AllBlogs}) => {
  return (
    <>
    {AllBlogs.map((BlogItem) => (
       
    <div key={BlogItem.id} className="service-item">
      <article className="p-5 overflow-hidden border border-gray-300 bg-white shadow-sm">
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
