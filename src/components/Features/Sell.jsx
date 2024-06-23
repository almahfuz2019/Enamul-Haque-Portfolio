import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
import { Helmet } from "react-helmet-async";

const features = [
  {
    id: 1,
    imgSrc: Prepare_the_Property,
    altText: "Prepare the Property",
    description: "1. Prepare the Property",
    animation: "fade-left",
  },
  {
    id: 2,
    imgSrc: Pricing_Strategy,
    altText: "Pricing Strategy",
    description: "2. Pricing Strategy",
    animation: "fade-left",
  },
  {
    id: 3,
    imgSrc: Listing_the_Property,
    altText: "Listing the Property",
    description: "3. Listing the Property",
    animation: "fade-left",
  },
  {
    id: 4,
    imgSrc: Marketing_and_Promotion,
    altText: "Marketing and Promotion",
    description: "4. Marketing and Promotion",
    animation: "fade-up",
  },
  {
    id: 5,
    imgSrc: Negotiating_Offers,
    altText: "Negotiating Offers",
    description: "5. Negotiating Offers",
    animation: "fade-right",
  },
  {
    id: 6,
    imgSrc: Home_Inspection_and_Due_Diligence,
    altText: "Home Inspection and Due Diligence",
    description: "6. Home Inspection and Due Diligence",
    animation: "fade-right",
  },
  {
    id: 7,
    imgSrc: Closing_the_Deal,
    altText: "Closing the Deal",
    description: "7. Closing the Deal",
    animation: "fade-right",
  },
];

const Sell = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Set document head */}
      <Helmet>
        <title>Sell</title>
      </Helmet>
      {/* Hero Section */}
      <div
        className="bg-center mt-16 md:mt-0 bg-cover py-32 mb-24"
        style={{
          backgroundImage: `url(${Cityscape_Skyline_View})`,
        }}
        alt="Cityscape Skyline View"
      >
        <h1
          data-aos="zoom-in"
          className="text-center text-3xl md:text-5xl font-bold text-white"
        >
          Sell
        </h1>
        <div
          data-aos="zoom-out"
          className="bg-primary mx-auto h-1 w-32 md:w-44 mt-5"
        ></div>
      </div>
      {/* Process Section */}
      <div className="container mx-auto pb-32">
        <h1
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="text-center font-bold text-3xl md:text-4xl mb-10"
        >
          Our Process
        </h1>
        <div className="grid md:grid-cols-6 grid-cols-2 lg:grid-cols-7 gap-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              data-aos={feature.animation}
              data-aos-anchor-placement="top-bottom"
              className="mx-auto"
            >
              <img
                className="h-16 w-16 mx-auto mb-4"
                src={feature.imgSrc}
                alt={feature.altText}
              />
              <p className="text-center text-base font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Additional Components */}
      <BasicFeatures />
      <BasicInfoForm />
    </div>
  );
};

export default Sell;
