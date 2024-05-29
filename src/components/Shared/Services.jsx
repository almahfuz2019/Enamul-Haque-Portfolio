import Property_Valuation from "./../../assets/Images/Icons/Property_Valuation.webp";
import Property_Inspections from "./../../assets/Images/Icons/Property_Inspections.webp";
import Contract_Negotiation from "./../../assets/Images/Icons/Contract_Negotiation.webp";
import Buyer_Representation from "./../../assets/Images/Icons/Buyer_Representation.webp";
import Home_Staging from "./../../assets/Images/Icons/Home_Staging.webp";
import Property_Marketing from "./../../assets/Images/Icons/Property_Marketing.webp";
import A_man_is_writing from "./../../assets/Images/A_man_is_writing.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div
        className=" bg-center bg-black bg-cover  py-32  "
        style={{
          backgroundImage: `url(${A_man_is_writing})`,
        }}
        alt="A man is writting"
      >
        <h1 className="text-center text-white text-3xl dm-sans-font md:text-4xl mb-16">
          Services
        </h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 gap-y-20 mx-auto px-5 dm-sans-font">
          <div
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
            className="text-center mx-auto"
          >
            <img
              className="h-24 mx-auto"
              src={Property_Valuation}
              alt="  Property Valuation"
            />
            <p className="text-white mt-5 text-base md:text-2xl dm-sans-font">
              Property Valuation
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="text-center mx-auto"
          >
            <img
              className="h-24 mx-auto"
              src={Property_Marketing}
              alt=" Property Marketing"
            />
            <p className="text-white mt-5 text-base md:text-2xl dm-sans-font">
              Property Marketing
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
            className="text-center mx-auto"
          >
            <img
              className="h-24 mx-auto"
              src={Home_Staging}
              alt="  Home Staging"
            />
            <p className="text-white mt-5 text-base md:text-2xl dm-sans-font">
              Home Staging
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
            className="text-center mx-auto"
          >
            <img
              className="h-24 mx-auto"
              src={Buyer_Representation}
              alt=" Buyer Representation"
            />
            <p className="text-white mt-5 text-base md:text-2xl dm-sans-font">
              Buyer Representation
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="text-center mx-auto"
          >
            <img
              className="h-24 mx-auto"
              src={Contract_Negotiation}
              alt=" Contract Negotiation"
            />
            <p className="text-white mt-5 text-base md:text-2xl dm-sans-font">
              Contract Negotiation
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
            className="text-center mx-auto"
          >
            <img
              className="h-24 mx-auto"
              src={Property_Inspections}
              alt="Property Inspections"
            />
            <p className="text-white mt-5 text-base md:text-2xl dm-sans-font">
              Property Inspections
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
