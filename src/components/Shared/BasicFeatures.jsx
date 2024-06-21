import { useEffect } from "react";
import Address from "./../../assets/Images/Icons/Address.png";
import Contact from "./../../assets/Images/Icons/Contact.png";
import View from "./../../assets/Images/Icons/View.png";

import AOS from "aos";
import "aos/dist/aos.css";

const BasicFeatures = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // Define an array of objects for the feature steps
  const featureSteps = [
    {
      icon: Address,
      title: "Enter Address",
      description: "Please enter and select your home address to get started.",
    },
    {
      icon: Contact,
      title: "Provide Contact Info",
      description:
        "Next, enter your contact info so we can email you a copy of your property report.",
    },
    {
      icon: View,
      title: "View Your Home Estimate",
      description:
        "You can now view the high, medium and low values of your home.",
    },
  ];

  return (
    <div>
      <div className="bg-[#f5f5f5]">
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-3 gap-4  mx-auto py-32 container"
        >
          {featureSteps.map((step, index) => (
            <div
              key={index}
              className="block rounded-xl p-4  hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              data-aos="fade-up"
            >
              <img src={step.icon} alt={`Step ${index + 1} Icon`} />

              <h2 className="mt-2 text-2xl  font-bold dm-sans-font ">
                {`${index + 1}) ${step.title}`}
              </h2>

              <p className="sm:mt-1 sm:block text-lg sm:text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicFeatures;
