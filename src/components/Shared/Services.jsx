import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Property_Valuation from "./../../assets/Images/Icons/Property_Valuation.webp";
import Property_Inspections from "./../../assets/Images/Icons/Property_Inspections.webp";
import Contract_Negotiation from "./../../assets/Images/Icons/Contract_Negotiation.webp";
import Buyer_Representation from "./../../assets/Images/Icons/Buyer_Representation.webp";
import Home_Staging from "./../../assets/Images/Icons/Home_Staging.webp";
import Property_Marketing from "./../../assets/Images/Icons/Property_Marketing.webp";
import A_man_is_writing from "./../../assets/Images/A_man_is_writing.png";

// Define service data with icons, alt text, text content, and AOS animation types
const services = [
  {
    img: Property_Valuation,
    alt: "Property Valuation",
    text: "Property Valuation",
    aos: "fade-left",
  },
  {
    img: Property_Marketing,
    alt: "Property Marketing",
    text: "Property Marketing",
    aos: "fade-up",
  },
  {
    img: Home_Staging,
    alt: "Home Staging",
    text: "Home Staging",
    aos: "fade-right",
  },
  {
    img: Buyer_Representation,
    alt: "Buyer Representation",
    text: "Buyer Representation",
    aos: "fade-left",
  },
  {
    img: Contract_Negotiation,
    alt: "Contract Negotiation",
    text: "Contract Negotiation",
    aos: "fade-up",
  },
  {
    img: Property_Inspections,
    alt: "Property Inspections",
    text: "Property Inspections",
    aos: "fade-right",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div
        className="bg-center bg-black bg-cover py-32 bg-fixed"
        style={{ backgroundImage: `url(${A_man_is_writing})` }}
        alt="A man is writing"
      >
        <h1 className="text-center text-white text-3xl dm-sans-font md:text-4xl mb-16">
          Services
        </h1>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 gap-y-20 mx-auto px-5 dm-sans-font">
          {/* Mapping through services to render each service item */}
          {services.map((service, index) => (
            <div
              key={index}
              data-aos={service.aos}
              data-aos-anchor-placement="top-bottom"
              className="text-center mx-auto transform transition-transform duration-300 group hover:scale-105"
            >
              <img
                className="h-24 mx-auto transform transition-transform duration-300 group-hover:scale-110"
                src={service.img}
                alt={service.alt}
              />
              <p className="text-white mt-5 text-base md:text-2xl dm-sans-font transition-colors duration-300 group-hover:text-primary">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
