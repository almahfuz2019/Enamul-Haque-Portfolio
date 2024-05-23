import BasicFeatures from "../Shared/BasicFeatures";
import BasicInfoForm from "../Shared/BasicInfoForm";

const Sell = () => {
  return (
    <div>
      <div
        className=" bg-center py-24 mb-24 "
        style={{
          backgroundImage:
            "url('https://uploads-ssl.webflow.com/63c3d5df23be3c7753f0e3fe/65100b03ebdf63e00bef1bd0_Rectangle%2084%20(1).png')",
        }}
      >
        <h1 className="text-center text-5xl font-bold text-white">Sell</h1>
        <div className=" bg-primary mx-auto h-1 w-80 mt-5"></div>
      </div>
      <div className="container mx-auto pb-16">
        <h1 className="text-center font-bold text-4xl mb-10">Our Preocess</h1>
        <div className="grid md:grid-cols-6 grid-cols-2  lg:grid-cols-7 gap-4">
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/653225927f33446615660cf0_01427145-be03-4dcb-89e0-1389caf66c56-p-500.jpg"
              alt=""
            />
            <p className="text-center text-lg font-medium">
              1. Prepare the Property
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/653225c535e8b66bfa7a336a_6d1731d2-700e-4172-8677-ae2e0237c5bb-p-500.jpg"
              alt=""
            />
            <p className="text-center text-lg font-medium">
              2. Pricing Strategy
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/653225dfb94c8eb7946b1c70_db252ccd-5f66-48ec-bfa7-f984c031e1d1-p-500.jpg"
              alt=""
            />
            <p className="text-center text-lg font-medium">
              3. Listing the Property
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/653225ef48491f2f0b3d4bb5_8ec49159-34f6-46a2-942d-a2b5754c7e36-p-500.jpg"
              alt=""
            />
            <p className="text-center text-lg font-medium">
              4. Marketing and Promotion
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/65322616255a64979b838339_c253bdbf-3031-4ee6-bfab-6ea5d9daa94f-p-500.jpg"
              alt=""
            />
            <p className="text-center text-lg font-medium">
              5. Negotiating Offers
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/65322626715331597406dcb1_d1ad1432-9e30-4af2-be0e-0e21bb602332-p-500.jpg"
              alt=""
            />
            <p className="text-center text-lg font-medium">
              6. Home Inspection and Due Diligence
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/65322638715331597406f686_f39b8306-97e5-4738-b916-20cfe0fb6cf9-p-500.jpg"
              alt=""
            />
            <p className="text-center text-lg font-medium">
              7. Closing the Deal
            </p>
          </div>
        </div>
      </div>
      <BasicFeatures/>
    <BasicInfoForm/>
    </div>
  );
};
export default Sell;
