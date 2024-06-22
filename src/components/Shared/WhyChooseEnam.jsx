import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Local_Expertise_And_Experience from "./../../assets/Images/Local_Expertise_And_Experience.png";
import Outstanding_Property_Promotion from "./../../assets/Images/Outstanding_Property_Promotion.png";
import Ultimate_Experience_Assurance from "./../../assets/Images/Ultimate_Experience_Assurance.png";
import Enamul_Haque from "./../../assets/Images/Enamul_Haque.webp";

// Define Data with images, alt text, titles, descriptive text, and AOS animation types
const Data = [
  {
    img: Local_Expertise_And_Experience,
    alt: "Local Expertise And Experience",
    title: "Local Expertise And Experience",
    text: "Your Real Estate Expert Goes the Extra Mile for You®",
    aos: "fade-left",
  },
  {
    img: Ultimate_Experience_Assurance,
    alt: "Ultimate Experience Assurance",
    title: "Ultimate Experience Assurance",
    text: "Ensuring Your Ultimate Real Estate Experience. Your Home, Our Priority.",
    aos: "fade-up",
  },
  {
    img: Outstanding_Property_Promotion,
    alt: "Outstanding Property Promotion",
    title: "Outstanding Property Promotion",
    text: "Our proven system ensures that your home sells quicker and at a higher price.",
    aos: "fade-right",
  },
];

const WhyChooseEnam = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="my-32 container mx-auto px-5">
      <h1
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="text-center text-3xl lg:text-4xl dm-sans-font mb-10"
      >
        Why Choose <span className="font-bold">Enam</span>
      </h1>

      <div>
        <img
          className="h-96 lg:hidden block mx-auto mb-20"
          src={Enamul_Haque}
          alt="Enamul Haque - Description of services and expertise"
        />
      </div>

      <div className="lg:grid lg:grid-cols-3 flex flex-wrap gap-8 items-center justify-center">
        {/* Mapping through data to render each data */}
        {Data.map((singleData, index) => (
          <div
            key={index}
            data-aos={singleData.aos}
            data-aos-anchor-placement="top-bottom"
            className="shadow hover:shadow-xl border px-5 py-10 lg:w-full md:w-[300px] md:h-[380px]"
          >
            <img className="mx-auto" src={singleData.img} alt={singleData.alt} />

            <h2 className="text-xl md:text-2xl text-center py-5 font-semibold">
              {singleData.title}
            </h2>

            <p className="text-base md:text-lg text-center">{singleData.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseEnam;
