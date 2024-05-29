import BasicFeatures from "../Shared/BasicFeatures";
import BasicInfoForm from "../Shared/BasicInfoForm";

import Cityscape_Skyline_View from "./../../assets/Images/Cityscape_Skyline_View.png";
// icons
import Home_Inspection_and_Due_Diligence from "./../../assets/Images/Icons/Home_Inspection_and_Due_Diligence.jpg.jpg";
import Closing_the_Deal from "./../../assets/Images/Icons/Closing_the_Deal.jpg.jpg";
import Listing_the_Property from "./../../assets/Images/Icons/Listing_the_Property.jpg.jpg";
import Marketing_and_Promotion from "./../../assets/Images/Icons/Marketing_and_Promotion.jpg.jpg";
import Negotiating_Offers from "./../../assets/Images/Icons/Negotiating_Offers.jpg.jpg";
import Prepare_the_Property from "./../../assets/Images/Icons/Prepare_the_Property.jpg.jpg";
import Pricing_Strategy from "./../../assets/Images/Icons/Pricing_Strategy.jpg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Sell = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div
        className=" bg-center mt-16 md:mt-0  bg-cover  py-32 mb-24"
        style={{
          backgroundImage: `url(${Cityscape_Skyline_View})`,
        }}
        alt="Cityscape Skyline View"
      >
        <h1
          data-aos="zoom-in"
          className="text-center  text-3xl md:text-5xl font-bold text-white"
        >
          Sell
        </h1>
        <div
          data-aos="zoom-out"
          className=" bg-primary mx-auto h-1 w-32 md:w-44 mt-5"
        ></div>
      </div>
      <div className="container mx-auto pb-32">
        <h1
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="text-center font-bold text-3xl md:text-4xl mb-10"
        >
          Our Preocess
        </h1>
        <div className="grid md:grid-cols-6 grid-cols-2  lg:grid-cols-7 gap-4">
          <div
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto "
          >
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Prepare_the_Property}
              alt="Prepare the Property"
            />
            <p className="text-center text-base font-medium">
              1. Prepare the Property
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto "
          >
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Pricing_Strategy}
              alt="Listing the Property"
            />
            <p className="text-center text-base font-medium">
              2. Pricing Strategy
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto "
          >
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Listing_the_Property}
              alt="Listing the Property"
            />
            <p className="text-center text-base font-medium">
              3. Listing the Property
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto "
          >
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Marketing_and_Promotion}
              alt="Marketing and Promotion"
            />
            <p className="text-center text-base font-medium">
              4. Marketing and Promotion
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto "
          >
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Negotiating_Offers}
              alt="Negotiating Offers"
            />
            <p className="text-center text-base font-medium">
              5. Negotiating Offers
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto "
          >
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Home_Inspection_and_Due_Diligence}
              alt=" Home Inspection and Due Diligence"
            />
            <p className="text-center text-base font-medium">
              6. Home Inspection and Due Diligence
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto "
          >
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Closing_the_Deal}
              alt="Closing the Deal"
            />
            <p className="text-center text-base font-medium">
              7. Closing the Deal
            </p>
          </div>
        </div>
      </div>
      <BasicFeatures />
      <BasicInfoForm />
    </div>
  );
};
export default Sell;
