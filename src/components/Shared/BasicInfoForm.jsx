import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { IoSearch } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import Cityscape_Skyline_View from "./../../../public/Images/Cityscape_Skyline_View.png";

const BasicInfoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formRef = useRef();
  const onSubmit = (data, e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_btn6m6h",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "xggGQ3kcYwUpUESDc",
      )
      .then(
        (result) => {
          toast.success("Email sent successfully");
          console.log("Email sent successfully:", result.text);
        },
        (error) => {
          toast.error("Email sending failed!");
          console.error("Email sending failed:", error.text);
        },
      );
  };

  return (
    <div
      className="bg-center py-20"
      style={{
        backgroundImage: `url(${Cityscape_Skyline_View})`,
      }}
      alt="Cityscape Skyline View"
    >
      <section className="text-white body-font relative dm-sans-font">
        <div className="container px-5 py-16 md:py-24 mx-auto">
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="w-full mb-10">
              <label htmlFor="Search" className="hidden">
                Search
              </label>
              <div className="relative h-12 lg:h-14">
                <span className="absolute inset-y-0 left-0 flex items-center px-5">
                  <IoSearch className="text-black text-xl" />
                </span>
                <input
                  type="search"
                  {...register("search", { required: "Search is required" })}
                  placeholder="Type Your Address"
                  className="w-full lg:h-14 text-lg py-2 pl-12 rounded-full focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50 focus:border-primary"
                />
                {errors.search && (
                  <p className="text-red-300 text-sm text-center mt-1">
                    {errors.search.message}
                  </p>
                )}
              </div>
            </fieldset>
            <div className="mx-auto">
              <div className="grid md:grid-cols-3 -my-2 mx-auto">
                <div className="p-2 md:mx-4">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-base md:text-2xl text-white"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-transparent border-0 border-b md:border-b-2 border-gray-300 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="text-red-300 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="p-2 md:mx-4">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-base md:text-2xl text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-transparent border-0 border-b md:border-b-2 border-gray-300 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-300 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="p-2 md:mx-4">
                  <div className="relative">
                    <label
                      htmlFor="phone"
                      className="leading-7 text-base md:text-2xl text-white"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full bg-transparent border-0 border-b md:border-b-2 border-gray-300 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      {...register("phone", { required: "Phone is required" })}
                    />
                    {errors.phone && (
                      <p className="text-red-300 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-2 w-full mt-10">
                <button
                  type="submit"
                  className="flex mx-auto rounded-full border border-current px-12 py-2 text-lg font-medium text-black bg-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BasicInfoForm;

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <style>
//     body {
//       font-family: Arial, sans-serif;
//       margin: 0;
//       padding: 0;
//       background-color: #f4f4f4;
//     }
//     .container {
//       width: 100%;
//       max-width: 600px;
//       margin: 0 auto;
//       padding: 20px;
//       background-color: #ffffff;
//       border-radius: 10px;
//       box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//     }
//     .header {
//       background-color: #4CAF50;
//       color: #ffffff;
//       padding: 10px 0;
//       text-align: center;
//       border-radius: 10px 10px 0 0;
//     }
//     .content {
//       padding: 20px;
//       text-align: left;
//       line-height: 1.6;
//     }
//     .footer {
//       padding: 10px 0;
//       text-align: center;
//       color: #777777;
//       font-size: 12px;
//     }
//     .button {
//       display: inline-block;
//       padding: 10px 20px;
//       margin-top: 20px;
//       color: #ffffff;
//       background-color: #4CAF50;
//       text-decoration: none;
//       border-radius: 5px;
//     }
//   </style>
// </head>
// <body>
//   <div class="container">
//     <div class="header">
//       <h1>Basic Info Form Submission</h1>
//     </div>
//     <div class="content">
//       <p>Hello,</p>
//       <p>We have received a new form submission with the following details:</p>
//       <ul>
//         <li><strong>Name:</strong> {{name}}</li>
//         <li><strong>Email:</strong> {{email}}</li>
//         <li><strong>Phone:</strong> {{phone}}</li>
//         <li><strong>Search Query:</strong> {{search}}</li>
//       </ul>
//       <p>If you have any questions, feel free to contact us.</p>
//       <a href="#" class="button">Contact Us</a>
//     </div>
//     <div class="footer">
//       <p>&copy; 2024 Your Company. All rights reserved.</p>
//     </div>
//   </div>
// </body>
// </html>
