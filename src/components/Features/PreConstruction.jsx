import BasicFeatures from "../Shared/BasicFeatures";
import BasicInfoForm from "../Shared/BasicInfoForm";
const PreConstruction = () => {
  return (
    <div>
      <div
        className=" bg-center mt-16 md:mt-0  bg-cover  py-32 mb-24"
        style={{
          backgroundImage:
            "url('https://uploads-ssl.webflow.com/63c3d5df23be3c7753f0e3fe/65100b03ebdf63e00bef1bd0_Rectangle%2084%20(1).png')",
        }}
      >
        <h1 className="text-center  text-3xl md:text-5xl font-bold text-white">
          Pre Construction
        </h1>
        <div className=" bg-primary mx-auto h-1 w-40 md:w-80 mt-5"></div>
      </div>
      <div className="container mx-auto pb-16">
        <h1 className="text-center font-bold text-2xl md:text-4xl mb-10">
          Our Preocess
        </h1>
        <div className="grid md:grid-cols-6 grid-cols-2  lg:grid-cols-7 gap-4">
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/653234ac5083c5778e262559_277b181c-b5a7-4535-8431-3f0f705ef75b-p-500.jpg"
              alt=""
            />
            <p className="text-center text-base font-medium">
              1. Client Consultation
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/653234b95a83ce150ab67e0e_fc37799f-d963-4ca5-82b6-74c3096009d0-p-500.jpg"
              alt=""
            />
            <p className="text-center text-base font-medium">
              2. Market Analysis
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/653234d35083c5778e265661_a526291a-ba85-477c-9eca-b741cf16da66-p-500.jpg"
              alt=""
            />
            <p className="text-center text-base font-medium">
              3. Builder Selection
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/653234decf330ff484aba9ff_a03d27d3-22c1-4146-bc4b-c3187cff6365-p-500.jpg"
              alt=""
            />
            <p className="text-center text-base font-medium">
              4. Pricing and Financing
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/653234f35a83ce150ab6da27_cb71b03b-3c18-4755-9209-bdf4dce5cbc3-p-500.jpg"
              alt=""
            />
            <p className="text-center text-base font-medium">
              5. Contract Review
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/6532350448491f2f0b4ee5ce_9ac1d8ad-b7b6-4089-9bb4-c950624eb826-p-500.jpg"
              alt=""
            />
            <p className="text-center text-base font-medium">
              6. Project Updates
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/65323512a20d785f645e8e11_c3ad9393-a731-48ea-9b5d-e2d180ea991a-p-500.jpg"
              alt=""
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
