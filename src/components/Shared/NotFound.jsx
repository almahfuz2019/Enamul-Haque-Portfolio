import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const NotFound = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-up">
      <section className=" h-screen flex items-center justify-center md:p-16  text-gray-600">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className=" text-center">
            <h2 className="mb-8 font-extrabold text-9xl ">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we could not find this page.
            </p>
            <p className="mt-4 mb-8 ">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              rel="noopener noreferrer"
              to="/"
              className="inline-block rounded bg-primary px-8 py-3 text-md font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
