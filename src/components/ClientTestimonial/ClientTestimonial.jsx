import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import User_1 from "./../../assets/Images/User_1.png";
import User_2 from "./../../assets/Images/User_2.png";
import User_3 from "./../../assets/Images/User_3.png";
import star from "./../../assets/Images/Icons/Star.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function CustomArrows() {
  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3, // Show 3 cards on PC
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 cards on tablet
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 card on phone
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container margin-bottom-testimonial px-3 overflow-hidden  mx-auto pt-32 md:pb-14 pb-32 dm-sans-font">
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
        <Slider {...settings}>
          <div className="border rounded-lg p-3 md:p-10  card  ">
            <div className="flex gap-4">
              <img className=" h-16 w-16" src={User_3} alt="" />
              <div>
                <p className="font-bold text-xl">John Willy</p>
                <p className="text-md">Toronto,CA</p>
              </div>
            </div>{" "}
            <div className="flex my-4">
              <img
                className="h-5 w-5"
                src={star}
                alt="User rating with stars"
              />
              <img
                className="h-5 w-5"
                src={star}
                alt="User rating with stars"
              />
              <img
                className="h-5 w-5"
                src={star}
                alt="User rating with stars"
              />
              <img
                className="h-5 w-5"
                src={star}
                alt="User rating with stars"
              />
              <img
                className="h-5 w-5"
                src={star}
                alt="User rating with stars"
              />
            </div>
            <p className="text-[#8A8D9B] text-md">
              Enam made my first-time home buying a breeze, explaining
              everything clearly and showing me great properties. Their patience
              and guidance were invaluable
            </p>
          </div>
          <div className="border rounded-lg p-3 md:p-10  card">
            <div className="flex gap-4">
              <img className=" h-16 w-16" src={User_1} alt="" />
              <div>
                <p className="font-bold text-xl">Sophia Johnson</p>
                <p className="text-md">Toronto,CA</p>
              </div>
            </div>{" "}
            <div className="flex my-4">
              <img
                className="h-5 w-5"
                src={star}
                alt="User rating with stars"
              />
              <img
                className="h-5 w-5"
                src={star}
                alt="User rating with stars"
              />
              <img
                className="h-5 w-5"
                src={star}
                alt="User rating with stars"
              />
              <img
                className="h-5 w-5"
                src={star}
                alt="User rating with stars"
              />
              <img
                className="h-5 w-5"
                src={star}
                alt="User rating with stars"
              />
            </div>
            <p className="text-[#8A8D9B] text-md">
              Enam is a true professional. He made my first-time home buying
              experience a breeze. His guidance and expertise were invaluable.
              I'm grateful for his dedication."
            </p>
          </div>
          <div className="border rounded-lg p-3 md:p-10  card">
            <div className="flex gap-4">
              <img className=" h-16 w-16" src={User_2} alt="" />
              <div>
                <p className="font-bold text-xl">David Ross</p>
                <p className="text-md">Toronto,CA</p>
              </div>
            </div>{" "}
            <div className="flex my-4">
              <img
                className="h-5 w-5"
                src={star}
                alt="User rating with stars"
              />
              <img
                className="h-5 w-5"
                src={star}
                alt="User rating with stars"
              />
              <img
                className="h-5 w-5"
                src={star}
                alt="User rating with stars"
              />
              <img
                className="h-5 w-5"
                src={star}
                alt="User rating with stars"
              />
              <img
                className="h-5 w-5"
                src={star}
                alt="User rating with stars"
              />
            </div>
            <p className="text-[#8A8D9B] text-md">
              Enam helped me find the perfect investment property. He's not just
              a realtor; he's a trusted advisor. His market knowledge is
              top-notch
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default CustomArrows;
