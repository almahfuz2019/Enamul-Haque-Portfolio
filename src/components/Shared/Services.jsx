import React from "react";
const Services = () => {
  return (
    <div>
      <div
        className=" bg-center bg-black bg-cover  py-32 "
        style={{
          backgroundImage:
            "url('htts://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/63f8a30847f2032841448702_service-bg.webp')",
        }}
      >
        <h1 className="text-center text-white text-4xl mb-16">Services</h1>
        <div className="grid grid-cols-3 gap-y-20">
          <div className="text-center mx-auto">
            <img
              className="h-24 mx-auto"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/63f8a1e4e202f227048de5fe_2.webp"
              alt=""
            />
            <p className="text-white mt-5">Property Valuation</p>
          </div>
          <div className="text-center mx-auto">
            <img
              className="h-24 mx-auto"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/63f8a1e4e202f227048de5fe_2.webp"
              alt=""
            />
            <p className="text-white mt-5">Property Marketing</p>
          </div>
          <div className="text-center mx-auto">
            <img
              className="h-24 mx-auto"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/63f8a1e4e202f227048de5fe_2.webp"
              alt=""
            />
            <p className="text-white mt-5">Home Staging</p>
          </div>
          <div className="text-center mx-auto">
            <img
              className="h-24 mx-auto"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/63f8a1e4e202f227048de5fe_2.webp"
              alt=""
            />
            <p className="text-white mt-5">Buyer Representation</p>
          </div>
          <div className="text-center mx-auto">
            <img
              className="h-24 mx-auto"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/63f8a1e4e202f227048de5fe_2.webp"
              alt=""
            />
            <p className="text-white mt-5">Contract Negotiation</p>
          </div>
          <div className="text-center mx-auto">
            <img
              className="h-24 mx-auto"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/63f8a1e4e202f227048de5fe_2.webp"
              alt=""
            />
            <p className="text-white mt-5">Property Inspections</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
