const SingleBlog = () => {
  return (
    <div className="grid-cols-3 grid m-10">
      <article className="p-5 overflow-hidden  border border-gray-300 bg-white shadow-sm">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-full object-cover"
        />

        <div className=" mt-5">
          <p className=" line-clamp-3 text-base text-gray-500 font-bold">
            October 20, 2023
          </p>
          <a href="#">
            <h3 className="text-2xl font-bold ">
              Top 10 Tips for First-Time Homebuyers
            </h3>
          </a>

          <a
            href="#"
            className="group  mt-4 inline-flex items-center gap-1 text-xl font-medium text-primary "
          >
            Find out more
            <span
              aria-hidden="true"
              className="text-3xl font-extrabold block text-primary transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </a>
        </div>
      </article>
    </div>
  );
};
export default SingleBlog;
