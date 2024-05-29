import Local_Expertise_And_Experience from "./../../assets/Images/Local_Expertise_And_Experience.png";
import Outstanding_Property_Promotion from "./../../assets/Images/Outstanding_Property_Promotion.png";
import Ultimate_Experience_Assurance from "./../../assets/Images/Ultimate_Experience_Assurance.png";
import Enamul_Haque from "./../../assets/Images/Enamul_Haque.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const WhyChooseEnam = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="   my-32 container mx-auto px-5">
      <h1
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="text-center text-3xl lg:text-4xl  dm-sans-font  mb-10"
      >
        Why Choose <span className="font-bold">Enam</span>
      </h1>
      <div>
        <img
          className="h-96 lg:hidden block  mx-auto mb-20"
          src={Enamul_Haque}
          alt="At Emanul Haque, we are dedicated to providing exceptional real estate services tailored to your unique needs. Our team, led by Emanul Haque, a seasoned and trusted Canadian Realtor, is committed to delivering top-notch results for our clients.With a deep understanding of the Canadian real estate market, we take pride in guiding you through every step of your real estate journey. Whether you're buying, selling, or investing in properties, we have the expertise to make your real estate goals a reality"
        />
      </div>
      <div className="lg:grid lg:grid-cols-3 flex flex-wrap gap-8 items-center justify-center">
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-bottom"
          className="shadow  hover:shadow-xl border px-5 py-10 lg:w-full md:w-[300px] md:h-[380px] "
        >
          <img
            className="mx-auto"
            src={Local_Expertise_And_Experience}
            alt="Local Expertise And Experience"
          />
          <h2 className="text-xl md:text-2xl text-center py-5 font-semibold">
            Local Expertise And Experience
          </h2>
          <p className="text-base md:text-lg text-center">
            Your Real Estate Expert Goes the Extra Mile for You®
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className=" shadow hover:shadow-xl border px-5 py-10 lg:w-full md:w-[300px] md:h-[380px]"
        >
          <img
            className="mx-auto"
            src={Ultimate_Experience_Assurance}
            alt="Ultimate Experience Assurance"
          />
          <h2 className="text-[24px] md:text-2xl text-center py-5 font-semibold">
            Ultimate Experience Assurance
          </h2>
          <p className="text-base md:text-lg text-center">
            Ensuring Your Ultimate Real Estate Experience. Your Home, Our
            Priority.
          </p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          className="shadow hover:shadow-xl border px-5 py-10 lg:w-full md:w-[300px] md:h-[380px] "
        >
          <img
            className="mx-auto"
            src={Outstanding_Property_Promotion}
            alt="Outstanding Property Promotion"
          />
          <h2 className="text-[24px] md:text-2xl text-center py-5 font-semibold">
            Outstanding Property Promotion
          </h2>
          <p className="text-base md:text-lg text-center">
            Our proven system ensures that your home sells quicker and at a
            higher price.
          </p>
        </div>
      </div>
    </div>
  );
};
export default WhyChooseEnam;
