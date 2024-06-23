import { useEffect } from "react";
import BasicFeatures from "../Shared/BasicFeatures";
import BasicInfoForm from "../Shared/BasicInfoForm";
import Cityscape_Skyline_View from "./../../assets/Images/Cityscape_Skyline_View.png";
import Initial_Consultation from "./../../assets/Images/Icons/Initial_Consultation.jpg";
import Assess_Qualifications from "./../../assets/Images/Icons/Assess_Qualifications.jpg";
import References_and_Reviews from "./../../assets/Images/Icons/References_and_Reviews.jpg";
import Agency_Agreement from "./../../assets/Images/Icons/Agency_Agreement.jpg";
import Offer_and_Negotiation from "./../../assets/Images/Icons/Offer_and_Negotiation.jpg";
import Due_Diligence from "./../../assets/Images/Icons/Due_Diligence.jpg";
import Post_Closing_Support from "./../../assets/Images/Icons/Post_Closing_Support.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const Buy = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // Define process steps in an array of objects
  const features = [
    {
      icon: Initial_Consultation,
      title: "Initial Consultation",
      animation: "fade-left",
    },
    {
      icon: Assess_Qualifications,
      title: "Assess Qualifications",
      animation: "fade-left",
    },
    {
      icon: References_and_Reviews,
      title: "References and Reviews",
      animation: "fade-left",
    },
    {
      icon: Agency_Agreement,
      title: "Agency Agreement",
      animation: "fade-up",
    },
    {
      icon: Offer_and_Negotiation,
      title: "Offer and Negotiation",
      animation: "fade-right",
    },
    {
      icon: Due_Diligence,
      title: "Due Diligence",
      animation: "fade-right",
    },
    {
      icon: Post_Closing_Support,
      title: "Post-Closing Support",
      animation: "fade-right",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Set document head */}
      <Helmet>
        <title>Buy</title>
      </Helmet>
      <div
        className="bg-center mt-16 md:mt-0 bg-cover py-32 mb-24"
        style={{
          backgroundImage: `url(${Cityscape_Skyline_View})`, // Background image for hero section
        }}
      >
        <h1
          data-aos="zoom-in"
          className="text-center text-3xl md:text-5xl font-bold text-white"
        >
          Buy
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
          className="text-center font-bold text-2xl md:text-4xl mb-10"
        >
          Our Process
        </h1>
        <div className="grid md:grid-cols-6 grid-cols-2 lg:grid-cols-7 gap-4">
          {/* Mapping through processSteps to display each step */}
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos={feature.animation}
              data-aos-anchor-placement="top-bottom"
              className="mx-auto"
            >
              <img
                className="h-16 w-16 mx-auto mb-4"
                src={feature.icon}
                alt={feature.title}
              />
              <p className="text-center text-base font-medium">
                {`${index + 1}. ${feature.title}`}{" "}
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

export default Buy;
