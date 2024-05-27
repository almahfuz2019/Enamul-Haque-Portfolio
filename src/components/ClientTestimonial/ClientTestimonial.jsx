import User_1 from "./../../../public/Images/User_1.png";
import User_2 from "./../../../public/Images/User_2.png";
import User_3 from "./../../../public/Images/User_3.png";
import star from "./../../../public/Images/Icons/Star.svg";
const ClientTestimonial = () => {
  return (
    <div className="container mx-auto py-20 dm-sans-font">
      <h1 className="text-center text-3xl md:text-4xl mb-10 dm-sans-font">
        Client Testimonial
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 px-5 lg:grid-cols-3 gap-4">
        <div className="border rounded-lg p-3 md:p-10">
          <div className="flex gap-4">
            <img className=" h-16 w-16" src={User_3} alt="" />
            <div>
              <p className="font-bold text-xl">John Willy</p>
              <p className="text-md">Toronto,CA</p>
            </div>
          </div>{" "}
          <div className="flex my-4">
            <img className="h-5 w-5" src={star} alt="User rating with stars" />
            <img className="h-5 w-5" src={star} alt="User rating with stars" />
            <img className="h-5 w-5" src={star} alt="User rating with stars" />
            <img className="h-5 w-5" src={star} alt="User rating with stars" />
            <img className="h-5 w-5" src={star} alt="User rating with stars" />
          </div>
          <p className="text-[#8A8D9B] text-md">
            Enam made my first-time home buying a breeze, explaining everything
            clearly and showing me great properties. Their patience and guidance
            were invaluable
          </p>
        </div>
        <div className="border rounded-lg p-3 md:p-10">
          <div className="flex gap-4">
            <img className=" h-16 w-16" src={User_1} alt="" />
            <div>
              <p className="font-bold text-xl">Emily Johnson</p>
              <p className="text-md">Toronto,CA</p>
            </div>
          </div>{" "}
          <div className="flex my-4">
            <img className="h-5 w-5" src={star} alt="User rating with stars" />
            <img className="h-5 w-5" src={star} alt="User rating with stars" />
            <img className="h-5 w-5" src={star} alt="User rating with stars" />
            <img className="h-5 w-5" src={star} alt="User rating with stars" />
            <img className="h-5 w-5" src={star} alt="User rating with stars" />
          </div>
          <p className="text-[#8A8D9B] text-md">
            Enam is a true professional. He made my first-time home buying
            experience a breeze. His guidance and expertise were invaluable. I'm
            grateful for his dedication."
          </p>
        </div>
        <div className="border rounded-lg p-3 md:p-10">
          <div className="flex gap-4">
            <img className=" h-16 w-16" src={User_2} alt="" />
            <div>
              <p className="font-bold text-xl">David Ross</p>
              <p className="text-md">Toronto,CA</p>
            </div>
          </div>{" "}
          <div className="flex my-4">
            <img className="h-5 w-5" src={star} alt="User rating with stars" />
            <img className="h-5 w-5" src={star} alt="User rating with stars" />
            <img className="h-5 w-5" src={star} alt="User rating with stars" />
            <img className="h-5 w-5" src={star} alt="User rating with stars" />
            <img className="h-5 w-5" src={star} alt="User rating with stars" />
          </div>
          <p className="text-[#8A8D9B] text-md">
            Enam helped me find the perfect investment property. He's not just a
            realtor; he's a trusted advisor. His market knowledge is top-notch
          </p>
        </div>
      </div>
    </div>
  );
};
export default ClientTestimonial;

// import React from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/splide/dist/css/themes/splide-default.min.css";

// const ClientTestimonial = () => {
//   return (
//     <div className="container mx-auto py-20 dm-sans-font lg:px-5">
//       <h1 className="text-center text-3xl md:text-4xl mb-10 dm-sans-font">
//         Client Testimonial
//       </h1>
//       <Splide
//         options={{
//           type: "loop",
//           autoplay: true,
//           interval: 3000, // adjust interval as needed
//           pauseOnHover: false,
//           pagination: false,
//         }}
//       >
//         <SplideSlide>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:mx-20 mx-14 ">
//             <div className="border rounded-lg p-3 md:p-10">
//               <div className="flex gap-4">
//                 <img
//                   className="h-16 w-16"
//                   src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/63fb3e1469cf807d60101f8b_1.webp"
//                   alt=""
//                 />
//                 <div>
//                   <p className="font-bold text-xl">John Doe</p>
//                   <p className="text-md">New York, NY</p>
//                 </div>
//               </div>
//               <div className="flex my-4">
//                 {[...Array(4)].map((_, index) => (
//                   <img
//                     key={index}
//                     className="h-5 w-5"
//                     src={star}
//                     alt=""
//                   />
//                 ))}
//               </div>
//               <p className="text-[#8A8D9B] text-md">
//                 Enam made my first-time home buying a breeze, explaining
//                 everything clearly and showing me great properties. Their
//                 patience and guidance were invaluable
//               </p>
//             </div>
//             {/* Replace data for the second card */}
//             <div className="border rounded-lg p-3 md:p-10">
//               <div className="flex gap-4">
//                 <img
//                   className="h-16 w-16"
//                   src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/653f406176c41a7a41f651a0_Ellipse%20932.png"
//                   alt=""
//                 />
//                 <div>
//                   <p className="font-bold text-xl">Jane Smith</p>
//                   <p className="text-md">Los Angeles, CA</p>
//                 </div>
//               </div>
//               <div className="flex my-4">
//                 {[...Array(4)].map((_, index) => (
//                   <img
//                     key={index}
//                     className="h-5 w-5"
//                     src={star}
//                     alt=""
//                   />
//                 ))}
//               </div>
//               <p className="text-[#8A8D9B] text-md">
//                 I couldn't be happier with my new home! Enam helped me find
//                 exactly what I was looking for and made the process smooth and
//                 stress-free.
//               </p>
//             </div>
//             {/* Replace data for the third card */}
//             <div className="border rounded-lg p-3 md:p-10">
//               <div className="flex gap-4">
//                 <img
//                   className="h-16 w-16"
//                   src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/653f3ffcedc184f7f49e3638_Ellipse%20931.png"
//                   alt=""
//                 />
//                 <div>
//                   <p className="font-bold text-xl">Michael Johnson</p>
//                   <p className="text-md">Chicago, IL</p>
//                 </div>
//               </div>
//               <div className="flex my-4">
//                 {[...Array(4)].map((_, index) => (
//                   <img
//                     key={index}
//                     className="h-5 w-5"
//                     src={star}
//                     alt=""
//                   />
//                 ))}
//               </div>
//               <p className="text-[#8A8D9B] text-md">
//                 Enam exceeded all my expectations. Their professionalism and
//                 dedication made buying a home a truly enjoyable experience.
//               </p>
//             </div>
//           </div>
//         </SplideSlide>
//         <SplideSlide>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:mx-20 mx-14">
//             <div className="border rounded-lg p-3 md:p-10">
//               <div className="flex gap-4">
//                 <img
//                   className="h-16 w-16"
//                   src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/653f406176c41a7a41f651a0_Ellipse%20932.png"
//                   alt=""
//                 />
//                 <div>
//                   <p className="font-bold text-xl">Jane Smith</p>
//                   <p className="text-md">Los Angeles, CA</p>
//                 </div>
//               </div>
//               <div className="flex my-4">
//                 {[...Array(4)].map((_, index) => (
//                   <img
//                     key={index}
//                     className="h-5 w-5"
//                     src={star}
//                     alt=""
//                   />
//                 ))}
//               </div>
//               <p className="text-[#8A8D9B] text-md">
//                 I couldn't be happier with my new home! Enam helped me find
//                 exactly what I was looking for and made the process smooth and
//                 stress-free.
//               </p>
//             </div>
//             <div className="border rounded-lg p-3 md:p-10">
//               <div className="flex gap-4">
//                 <img
//                   className="h-16 w-16"
//                   src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/653f3ffcedc184f7f49e3638_Ellipse%20931.png"
//                   alt=""
//                 />
//                 <div>
//                   <p className="font-bold text-xl">Michael Johnson</p>
//                   <p className="text-md">Chicago, IL</p>
//                 </div>
//               </div>
//               <div className="flex my-4">
//                 {[...Array(4)].map((_, index) => (
//                   <img
//                     key={index}
//                     className="h-5 w-5"
//                     src={star}
//                     alt=""
//                   />
//                 ))}
//               </div>
//               <p className="text-[#8A8D9B] text-md">
//                 Enam exceeded all my expectations. Their professionalism and
//                 dedication made buying a home a truly enjoyable experience.
//               </p>
//             </div>
//             <div className="border rounded-lg p-3 md:p-10">
//               <div className="flex gap-4">
//                 <img
//                   className="h-16 w-16"
//                   src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/63fb3e1469cf807d60101f8b_1.webp"
//                   alt=""
//                 />
//                 <div>
//                   <p className="font-bold text-xl">John Doe</p>
//                   <p className="text-md">New York, NY</p>
//                 </div>
//               </div>
//               <div className="flex my-4">
//                 {[...Array(4)].map((_, index) => (
//                   <img
//                     key={index}
//                     className="h-5 w-5"
//                     src={star}
//                     alt=""
//                   />
//                 ))}
//               </div>
//               <p className="text-[#8A8D9B] text-md">
//                 Enam made my first-time home buying a breeze, explaining
//                 everything clearly and showing me great properties. Their
//                 patience and guidance were invaluable
//               </p>
//             </div>
//           </div>
//         </SplideSlide>
//       </Splide>
//     </div>
//   );
// };

// export default ClientTestimonial;
