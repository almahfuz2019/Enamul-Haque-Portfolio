import React from "react";
const Services = () => {
  return (
    <div>
      <div
        className=" bg-center bg-black bg-cover  py-32  "
        style={{
          backgroundImage:
            "url('https://uploads-ssl.webflow.com/63c3d5df23be3c7753f0e3fe/664f53afe7daaf311d7a60c8_63f8a30847f2032841448702_service-bg.png')",
        }}
      >
        <h1 className="text-center text-white text-3xl dm-sans-font md:text-4xl mb-16">
          Services
        </h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 gap-y-20 mx-auto px-5 dm-sans-font">
          <div className="text-center mx-auto">
            <img
              className="h-24 mx-auto"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/63f8a1e555dfde7e4ba6eeb1_1.webp"
              alt=""
            />
            <p className="text-white mt-5 text-base md:text-2xl dm-sans-font">
              Property Valuation
            </p>
          </div>
          <div className="text-center mx-auto">
            <img
              className="h-24 mx-auto"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/63f8a1e4e202f227048de5fe_2.webp"
              alt=""
            />
            <p className="text-white mt-5 text-base md:text-2xl dm-sans-font">
              Property Marketing
            </p>
          </div>
          <div className="text-center mx-auto">
            <img
              className="h-24 mx-auto"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/63f8a1e42ea727499a0c714d_3.webp"
              alt=""
            />
            <p className="text-white mt-5 text-base md:text-2xl dm-sans-font">
              Home Staging
            </p>
          </div>
          <div className="text-center mx-auto">
            <img
              className="h-24 mx-auto"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/63f8a1e3c7b20ccc76251110_4.webp"
              alt=""
            />
            <p className="text-white mt-5 text-base md:text-2xl dm-sans-font">
              Buyer Representation
            </p>
          </div>
          <div className="text-center mx-auto">
            <img
              className="h-24 mx-auto"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/63f8a1e41895d80314002936_5.webp"
              alt=""
            />
            <p className="text-white mt-5 text-base md:text-2xl dm-sans-font">
              Contract Negotiation
            </p>
          </div>
          <div className="text-center mx-auto">
            <img
              className="h-24 mx-auto"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/63f8a1e555dfde13eca6eec9_6.webp"
              alt=""
            />
            <p className="text-white mt-5 text-base md:text-2xl dm-sans-font">
              Property Inspections
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
