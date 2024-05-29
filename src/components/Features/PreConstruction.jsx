import BasicFeatures from "../Shared/BasicFeatures";
import BasicInfoForm from "../Shared/BasicInfoForm";
import Cityscape_Skyline_View from "./../../assets/Images/Cityscape_Skyline_View.png";
import Client_Consultation from "./../../assets/Images/Icons/Client_Consultation.jpg";
import Market_Analysis from "./../../assets/Images/Icons/Market_Analysis.jpg";
import Builder_Selection from "./../../assets/Images/Icons/Builder_Selection.jpg";
import Pricing_and_Financing from "./../../assets/Images/Icons/Pricing_and_Financing.jpg";
import Contract_Review from "./../../assets/Images/Icons/Contract_Review.jpg";
import Project_Updates from "./../../assets/Images/Icons/Project_Updates.jpg";
// import Closing_Coordination from "./../../assets/Images/Icons/Closing_Coordination.jpg";
import Closing_Coordination from "./../../assets/Images/Icons/Closing_Coordination.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const PreConstruction = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
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
          <div
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto "
          >
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Client_Consultation}
              alt="Client Consultation"
            />
            <p className="text-center text-base font-medium">
              1. Client Consultation
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto "
          >
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Market_Analysis}
              alt="Market Analysis"
            />
            <p className="text-center text-base font-medium">
              2. Market Analysis
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto "
          >
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Builder_Selection}
              alt="Builder Selection"
            />
            <p className="text-center text-base font-medium">
              3. Builder Selection
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto "
          >
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Pricing_and_Financing}
              alt="Pricing and Financing"
            />
            <p className="text-center text-base font-medium">
              4. Pricing and Financing
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto "
          >
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Contract_Review}
              alt="Contract Review"
            />
            <p className="text-center text-base font-medium">
              5. Contract Review
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto "
          >
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Project_Updates}
              alt="Project Updates"
            />
            <p className="text-center text-base font-medium">
              6. Project Updates
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto "
          >
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Closing_Coordination}
              alt="Closing Coordination"
            />
            <p className="text-center text-base font-medium">
              7. Closing Coordination
            </p>
          </div>
        </div>
      </div>
      <BasicFeatures />
      <BasicInfoForm />
    </div>
  );
};
export default PreConstruction;
