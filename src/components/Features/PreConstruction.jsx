import BasicFeatures from "../Shared/BasicFeatures";
import BasicInfoForm from "../Shared/BasicInfoForm";
import Cityscape_Skyline_View from "./../../../public/Images/Cityscape_Skyline_View.png";
import Client_Consultation from "./../../../public/Images/Icons/Client_Consultation.jpg";
import Market_Analysis from "./../../../public/Images/Icons/Market_Analysis.jpg";
import Builder_Selection from "./../../../public/Images/Icons/Builder_Selection.jpg";
import Pricing_and_Financing from "./../../../public/Images/Icons/Pricing_and_Financing.jpg";
import Contract_Review from "./../../../public/Images/Icons/Contract_Review.jpg";
import Project_Updates from "./../../../public/Images/Icons/Project_Updates.jpg";
import Closing_Coordination from "./../../../public/Images/Icons/Closing_Coordination.jpg";

const PreConstruction = () => {
  return (
    <div>
      <div
        className="bg-center mt-16 md:mt-0 bg-cover py-32 mb-24"
        style={{
          backgroundImage: `url(${Cityscape_Skyline_View})`,
        }}
      >
        <h1 className="text-center text-3xl md:text-5xl font-bold text-white">
          Pre Construction
        </h1>
        <div className="bg-primary mx-auto h-1 w-40 md:w-80 mt-5"></div>
      </div>
      <div className="container mx-auto pb-16">
        <h1 className="text-center font-bold text-2xl md:text-4xl mb-10">
          Our Process
        </h1>
        <div className="grid md:grid-cols-6 grid-cols-2 lg:grid-cols-7 gap-4">
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Client_Consultation}
              alt="Client Consultation"
            />
            <p className="text-center text-base font-medium">
              1. Client Consultation
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Market_Analysis}
              alt="Market Analysis"
            />
            <p className="text-center text-base font-medium">
              2. Market Analysis
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Builder_Selection}
              alt="Builder Selection"
            />
            <p className="text-center text-base font-medium">
              3. Builder Selection
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Pricing_and_Financing}
              alt="Pricing and Financing"
            />
            <p className="text-center text-base font-medium">
              4. Pricing and Financing
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Contract_Review}
              alt="Contract Review"
            />
            <p className="text-center text-base font-medium">
              5. Contract Review
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Project_Updates}
              alt="Project Updates"
            />
            <p className="text-center text-base font-medium">
              6. Project Updates
            </p>
          </div>
          <div className="mx-auto ">
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
