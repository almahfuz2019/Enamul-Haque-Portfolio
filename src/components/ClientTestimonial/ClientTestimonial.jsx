import { useEffect } from "react";
import Slider from "react-slick";
import User_1 from "./../../assets/Images/Users/User_1.png";
import User_2 from "./../../assets/Images/Users/User_2.png";
import User_3 from "./../../assets/Images/Users/User_3.png";
import star from "./../../assets/Images/Icons/Star.svg";
import Aos from "aos";

const testimonialsData = [
  {
    id: 1,
    name: "John Willy",
    location: "Toronto, CA",
    image: User_3,
    rating: 5,
    feedback:
      "Enam made my first-time home buying a breeze, explaining everything clearly and showing me great properties. Their patience and guidance were invaluable. I was particularly impressed by their knowledge of the local market trends, which helped me make informed decisions. I highly recommend Enam to anyone looking to buy a home!",
  },
  {
    id: 2,
    name: "Sophia Johnson",
    location: "Toronto, CA",
    image: User_1,
    rating: 5,
    feedback:
      "Enam is a true professional. He made my first-time home buying experience a breeze. His guidance and expertise were invaluable. I'm grateful for his dedication. Throughout the process, he provided personalized attention and expert advice, making me feel confident in my choices. Thank you, Enam!",
  },
  {
    id: 3,
    name: "David Ross",
    location: "Toronto, CA",
    image: User_2,
    rating: 5,
    feedback:
      "Enam helped me find the perfect investment property. He's not just a realtor; he's a trusted advisor. His market knowledge is top-notch. His insights into property valuation and potential returns were spot-on. Working with Enam was a pleasure, and I wouldn't hesitate to recommend him to friends and family.",
  },
  {
    id: 4,
    name: "Anna Smith",
    location: "Vancouver, BC",
    image: User_3,
    rating: 4,
    feedback:
      "Anna provided excellent service throughout the buying process. Her insights and recommendations were spot on. She was patient with my questions and proactive in finding suitable properties. Her dedication to finding me the perfect home exceeded my expectations. I'm grateful to have had Anna as my real estate agent.",
  },
  {
    id: 5,
    name: "Michael Brown",
    location: "Montreal, QC",
    image: User_3,
    rating: 4,
    feedback:
      "Michael helped us find our dream home. His professionalism and dedication were commendable. He listened attentively to our requirements and showed us properties that perfectly matched our needs. His negotiation skills were exceptional, resulting in a smooth transaction. Michael truly went above and beyond for us.",
  },
  {
    id: 6,
    name: "Emma Davis",
    location: "Calgary, AB",
    image: User_2,
    rating: 5,
    feedback:
      "Emma went above and beyond to ensure we found the perfect property. Her knowledge of the local market was invaluable. She guided us through every step of the buying process, providing us with timely updates and expert advice. Emma's dedication to her clients sets her apart. I would recommend her without hesitation.",
  },
  {
    id: 7,
    name: "Chris White",
    location: "Ottawa, ON",
    image: User_1,
    rating: 4,
    feedback:
      "Chris provided exceptional service. He was patient and understanding throughout the entire process. He took the time to understand our needs and preferences, and he consistently delivered exceptional results. Chris's professionalism and integrity are commendable, and we would gladly work with him again in the future.",
  },
  {
    id: 8,
    name: "Sarah Green",
    location: "Edmonton, AB",
    image: User_2,
    rating: 5,
    feedback:
      "Sarah's expertise and guidance were instrumental in finding the right investment property. Highly recommend! She demonstrated a deep understanding of the market and helped us identify properties with excellent potential for growth. Sarah's proactive approach and attention to detail made the entire process seamless.",
  },
  {
    id: 9,
    name: "Mark Taylor",
    location: "Winnipeg, MB",
    image: User_3,
    rating: 4,
    feedback:
      "Mark helped us navigate the competitive housing market with ease. His professionalism was exceptional. He provided valuable insights into market trends and property values, ensuring we made informed decisions. Mark's dedication to his clients' success is evident in every interaction. We are grateful for his expertise.",
  },
  {
    id: 10,
    name: "Emily Wilson",
    location: "Halifax, NS",
    image: User_2,
    rating: 5,
    feedback:
      "Emily made the home buying process smooth and stress-free. Her attention to detail was remarkable. She listened to our preferences and found us a home that exceeded our expectations. Emily's communication skills and knowledge of the local market were invaluable throughout the entire process. We couldn't be happier with her service.",
  },
];

function CustomArrows() {
  useEffect(() => {
    Aos.init();
  }, []);

  // Settings for the Slider component
  const settings = {
    dots: true, // Show dots navigation
    infinite: false, // Disable infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides visible at once
    slidesToScroll: 4, // Number of slides to scroll
    initialSlide: 0, // Initial slide index
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container margin-bottom-testimonial px-3 overflow-hidden mx-auto pt-32 pb-32 dm-sans-font">
      <h1
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="text-center text-3xl md:text-4xl mb-10 dm-sans-font"
      >
        Client Testimonial
      </h1>
      <div
        data-aos="fade-left"
        data-aos-anchor-placement="top-bottom"
        className="slider-container px-2 mx-auto"
      >
        {/* Slider component with settings */}
        <Slider {...settings} className="">
          {testimonialsData.map((data) => (
            <div
              key={data.id}
              className="border rounded-lg p-3 md:p-10 w-full"
            >
              <div className="flex gap-4">
                <img
                  className="h-16 w-16"
                  src={data.image}
                  alt={data.name}
                />
                <div>
                  <p className="font-bold text-xl">{data.name}</p>
                  <p className="text-md">{data.location}</p>
                </div>
              </div>
              <div className="flex my-4">
                {/* Display star rating based on testimonial.rating */}
                {Array.from({ length: data.rating }).map((_, index) => (
                  <img
                    key={index}
                    className="h-5 w-5"
                    src={star}
                    alt="User rating with stars"
                  />
                ))}
              </div>
              <p className="text-[#8A8D9B] text-md">{data.feedback}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CustomArrows;
