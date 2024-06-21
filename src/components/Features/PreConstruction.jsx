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

const PreConstruction = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const processSteps = [
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
      <div className="container mx-auto pb-32">
        <h1
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="text-center font-bold text-3xl md:text-4xl mb-10"
        >
          Our Process
        </h1>
        <div className="grid md:grid-cols-6 grid-cols-2 lg:grid-cols-7 gap-4">
          {processSteps.map((step, index) => (
            <div
              key={index}
              data-aos={step.animation}
              data-aos-anchor-placement="top-bottom"
              className="mx-auto"
            >
              <img
                className="h-16 w-16 mx-auto mb-4"
                src={step.image}
                alt={step.title}
              />
              <p className="text-center text-base font-medium">
                {`${index + 1}. ${step.title}`}
              </p>
            </div>
          ))}
        </div>
      </div>
      <BasicFeatures />
      <BasicInfoForm />
    </div>
  );
};

export default PreConstruction;
