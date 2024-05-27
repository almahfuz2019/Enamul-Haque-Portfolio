import BasicFeatures from "../Shared/BasicFeatures";
import BasicInfoForm from "../Shared/BasicInfoForm";

import Cityscape_Skyline_View from "./../../../public/Images/Cityscape_Skyline_View.png";
// icons
import Home_Inspection_and_Due_Diligence from "./../../../public/Images/Icons/Home_Inspection_and_Due_Diligence.jpg.jpg";
import Closing_the_Deal from "./../../../public/Images/Icons/Closing_the_Deal.jpg.jpg";
import Listing_the_Property from "./../../../public/Images/Icons/Listing_the_Property.jpg.jpg";
import Marketing_and_Promotion from "./../../../public/Images/Icons/Marketing_and_Promotion.jpg.jpg";
import Negotiating_Offers from "./../../../public/Images/Icons/Negotiating_Offers.jpg.jpg";
import Prepare_the_Property from "./../../../public/Images/Icons/Prepare_the_Property.jpg.jpg";
import Pricing_Strategy from "./../../../public/Images/Icons/Pricing_Strategy.jpg.jpg";

const Sell = () => {
  return (
    <div>
      <div
        className=" bg-center mt-16 md:mt-0  bg-cover  py-32 mb-24"
        style={{
          backgroundImage: `url(${Cityscape_Skyline_View})`,
        }}
        alt="Cityscape Skyline View"
      >
        <h1 className="text-center  text-3xl md:text-5xl font-bold text-white">
          Sell
        </h1>
        <div className=" bg-primary mx-auto h-1 w-32 md:w-44 mt-5"></div>
      </div>
      <div className="container mx-auto pb-16">
        <h1 className="text-center font-bold text-2xl md:text-4xl mb-10">
          Our Preocess
        </h1>
        <div className="grid md:grid-cols-6 grid-cols-2  lg:grid-cols-7 gap-4">
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Prepare_the_Property}
              alt="Prepare the Property"
            />
            <p className="text-center text-base font-medium">
              1. Prepare the Property
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Pricing_Strategy}
              alt="Listing the Property"
            />
            <p className="text-center text-base font-medium">
              2. Pricing Strategy
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Listing_the_Property}
              alt="Listing the Property"
            />
            <p className="text-center text-base font-medium">
              3. Listing the Property
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Marketing_and_Promotion}
              alt="Marketing and Promotion"
            />
            <p className="text-center text-base font-medium">
              4. Marketing and Promotion
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Negotiating_Offers}
              alt="Negotiating Offers"
            />
            <p className="text-center text-base font-medium">
              5. Negotiating Offers
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Home_Inspection_and_Due_Diligence}
              alt=" Home Inspection and Due Diligence"
            />
            <p className="text-center text-base font-medium">
              6. Home Inspection and Due Diligence
            </p>
          </div>
          <div className="mx-auto ">
            <img
              className="h-16 w-16 mx-auto mb-4"
              src={Closing_the_Deal}
              alt="Closing the Deal"
            />
            <p className="text-center text-base font-medium">
              7. Closing the Deal
            </p>
          </div>
        </div>
      </div>
      <BasicFeatures />
      <BasicInfoForm />
    </div>
  );
};
export default Sell;
