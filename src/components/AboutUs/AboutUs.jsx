import { useEffect } from "react";
import ForConnected from "../ForConnected/ForConnected";
import OwnerSpeech from "../Shared/OwnerSpeech";
import Services from "../Shared/Services";
import WhyChooseEnam from "../Shared/WhyChooseEnam";
import Modern_Skyscrapers from "./../../assets/Images/Modern_Skyscrapers.png";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" mx-auto ">
      <div className=" mx-auto ">
        <div className="flex flex-col justify-center items-center  mx-auto overflow-hidden mt-16 md:mt-0 ">
          <img
            src={Modern_Skyscrapers}
            alt="Modern skyscrapers with glass facades reflecting the sky"
            className="w-full h-52 lg:h-[500px] "
          />
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="lg:p-14 px-5 md:p-8  container  pb-12 m-4 mx-auto lg:-mt-32 space-y-6  sm:px-10 sm:mx-12  pt-10 bg-white"
          >
            <div className="space-y-2 text-center lg:text-left">
              <h1
                rel="noopener noreferrer"
                href="#"
                className="inline-block  text-3xl lg:text-5xl  "
              >
                About <span className="font-bold">Enam</span>
              </h1>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-xl text-justify">
                At Emanul Haque, we are dedicated to providing exceptional real
                estate services tailored to your unique needs. Our team, led by
                Emanul Haque, a seasoned and trusted Canadian Realtor, is
                committed to delivering top-notch results for our clients.With a
                deep understanding of the Canadian real estate market, we take
                pride in guiding you through every step of your real estate
                journey. Whether you're buying, selling, or investing in
                properties, we have the expertise to make your real estate goals
                a reality
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className=" bg-primary mx-auto h-1 w-80 "
        ></div>

        <WhyChooseEnam />
      </div>
      <OwnerSpeech />
      <Services />
      <ForConnected />
    </div>
  );
};

export default AboutUs;
