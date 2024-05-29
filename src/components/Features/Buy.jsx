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
import { useEffect } from "react";
const Buy = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div
        className=" bg-center mt-16 md:mt-0  bg-cover  py-32 mb-24 "
        style={{
          backgroundImage: `url(${Cityscape_Skyline_View})`,
        }}
      >
        <h1
          data-aos="zoom-in"
          className="text-center  text-3xl md:text-5xl font-bold text-white"
        >
          Buy
        </h1>
        <div
          data-aos="zoom-out"
          className="bg-primary mx-auto h-1 w-32 md:w-44 mt-5"
        ></div>
      </div>
      <div className="container mx-auto pb-32">
        <h1
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="text-center font-bold text-2xl md:text-4xl mb-10"
        >
          Our Process
        </h1>
        <div className="grid md:grid-cols-6 grid-cols-2  lg:grid-cols-7 gap-4">
          <div
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto "
          >
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Initial_Consultation}
              alt="Initial Consultation"
            />
            <p className="text-center text-base font-medium">
              1. Initial Consultation
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto "
          >
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Assess_Qualifications}
              alt="Assess Qualifications"
            />
            <p className="text-center text-base font-medium">
              2. Assess Qualifications
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto "
          >
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={References_and_Reviews}
              alt="References and Reviews"
            />
            <p className="text-center text-base font-medium">
              3. References and Reviews
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto "
          >
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Agency_Agreement}
              alt="Agency Agreement"
            />
            <p className="text-center text-base font-medium">
              4. Agency Agreement
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto "
          >
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Offer_and_Negotiation}
              alt="Offer and Negotiation"
            />
            <p className="text-center text-base font-medium">
              5. Offer and Negotiation
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto "
          >
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Due_Diligence}
              alt="Due Diligence"
            />
            <p className="text-center text-base font-medium">
              6. Due Diligence
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto "
          >
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Post_Closing_Support}
              alt="Post-Closing Support"
            />
            <p className="text-center text-base font-medium">
              7. Post-Closing Support
            </p>
          </div>
        </div>
      </div>
      <BasicFeatures />
      <BasicInfoForm />
    </div>
  );
};

export default Buy;
