import React from "react";
import BasicFeatures from "../Shared/BasicFeatures";
import BasicInfoForm from "../Shared/BasicInfoForm";

const Buy = () => {
  return (
    <div>
      <div
        className=" bg-center mt-16 md:mt-0  bg-cover  py-32 mb-24 "
        style={{
          backgroundImage:
            "url('https://uploads-ssl.webflow.com/63c3d5df23be3c7753f0e3fe/65100b03ebdf63e00bef1bd0_Rectangle%2084%20(1).png')",
        }}
      >
        <h1 className="text-center  text-3xl md:text-5xl font-bold text-white">
          Buy
        </h1>
        <div className="bg-primary mx-auto h-1 w-32 md:w-44 mt-5"></div>
      </div>
      <div className="container mx-auto pb-16">
        <h1 className="text-center font-bold text-2xl md:text-4xl mb-10">
          Our Preocess
        </h1>
        <div className="grid md:grid-cols-6 grid-cols-2  lg:grid-cols-7 gap-4">
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/653226baeebb4df77947e227_c03c4f08-800d-44f7-a03a-1b3a3101f5b3-p-500.jpg"
              alt=""
            />
            <p className="text-center text-base font-medium">
              1. Initial Consultation
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/653226cde5afb00b2fa5aef4_87a76be7-850b-452a-8aad-6ada81d76dbe-p-500.jpg"
              alt=""
            />
            <p className="text-center text-base font-medium">
              2. Assess Qualifications
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/653226e26948a37ff65a1238_b09d358d-cddb-4e68-8872-4fae793c3c89-p-500.jpg"
              alt=""
            />
            <p className="text-center text-base font-medium">
              3. References and Reviews
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/653226fbb27b3ea595860f7e_7b2390ec-5043-427f-a208-be232b0e866a-p-500.jpg"
              alt=""
            />
            <p className="text-center text-base font-medium">
              4. Agency Agreement
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/6532270e8b06260fbd1f0285_a2041841-e8a6-453c-85f7-81c45071f75e-p-500.jpg"
              alt=""
            />
            <p className="text-center text-base font-medium">
              5. Offer and Negotiation
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/6532271da55b6cc596e98aaa_0f065eca-1723-425e-aa47-c0889f3d0cad-p-500.jpg"
              alt=""
            />
            <p className="text-center text-base font-medium">
              6. Due Diligence
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/65322733f2b3eec77b344b33_d83e2bd4-3f8c-47a7-9869-fa99bcc486bb-p-500.jpg"
              alt=""
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
