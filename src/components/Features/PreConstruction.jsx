import { useEffect } from "react";
import BasicFeatures from "../Shared/BasicFeatures";
import BasicInfoForm from "../Shared/BasicInfoForm";
import Cityscape_Skyline_View from "./../../assets/Images/Cityscape_Skyline_View.png";
import Client_Consultation from "./../../assets/Images/Icons/Client_Consultation.jpg";
import Market_Analysis from "./../../assets/Images/Icons/Market_Analysis.jpg";
import Builder_Selection from "./../../assets/Images/Icons/Builder_Selection.jpg";
import Pricing_and_Financing from "./../../assets/Images/Icons/Pricing_and_Financing.jpg";
import Contract_Review from "./../../assets/Images/Icons/Contract_Review.jpg";
import Project_Updates from "./../../assets/Images/Icons/Project_Updates.jpg";
import Closing_Coordination from "./../../assets/Images/Icons/Closing_Coordination.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const PreConstruction = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // Array defining the steps of the pre-construction process
  const features = [
    {
      image: Client_Consultation,
      title: "Client Consultation",
      description: "Discuss client needs and preferences.",
      animation: "fade-left",
    },
    {
      image: Market_Analysis,
      title: "Market Analysis",
      description: "Analyze current market trends and data.",
      animation: "fade-left",
    },
    {
      image: Builder_Selection,
      title: "Builder Selection",
      description: "Choose a suitable builder for the project.",
      animation: "fade-left",
    },
    {
      image: Pricing_and_Financing,
      title: "Pricing and Financing",
      description: "Determine pricing and secure financing options.",
      animation: "fade-up",
    },
    {
      image: Contract_Review,
      title: "Contract Review",
      description: "Review and finalize construction contracts.",
      animation: "fade-right",
    },
    {
      image: Project_Updates,
      title: "Project Updates",
      description: "Receive ongoing updates on the construction progress.",
      animation: "fade-right",
    },
    {
      image: Closing_Coordination,
      title: "Closing Coordination",
      description:
        "Coordinate the final steps to close the construction project.",
      animation: "fade-right",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Set document head */}
      <Helmet>
        <title>Pre Construction </title>
      </Helmet>
      <div
        className="bg-center mt-16 md:mt-0 bg-cover py-32 mb-24"
        style={{
          backgroundImage: `url(${Cityscape_Skyline_View})`,
        }}
      >
        <h1
          data-aos="zoom-in"
          className="text-center text-3xl md:text-5xl font-bold text-white"
        >
          Pre Construction
        </h1>
        <div
          data-aos="zoom-out"
          className="bg-primary mx-auto h-1 w-40 md:w-80 mt-5"
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
                src={feature.image}
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

export default PreConstruction;
