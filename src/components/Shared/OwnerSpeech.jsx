/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const OwnerSpeech = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="px-5 my-32 mx-auto container "
      >
        <h1 className="text-3xl md:text-4xl text-center  font-medium font-md">
          Ontario's Premier Real Estate Professionals
        </h1>
        <p className="md:text-center text-justify mx-auto text-base md:text-lg my-5 ">
          Enamul Haque's clients enjoy an exceptional level of service, aligning
          with the expectations of working with one of Canada's leading real
          estate teams. Our team comprises experts in various domains, including
          negotiation, marketing, and real estate contracts, all dedicated to
          achieving the finest outcomes for you.
        </p>
        <div className="mx-auto text-center">
          <Link
            to="/contact"
            className="inline-block rounded bg-primary px-8 py-2 text-md font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OwnerSpeech;
