import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Cityscape_Skyline_View from "./../../assets/Images/Cityscape_Skyline_View.png";
import AOS from "aos";
import "aos/dist/aos.css";
const ContactForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const form = useRef();
  const onSubmit = (data) => {
    sendEmail(data);
  };
  // send Email by  emailJs Package 
  const sendEmail = (formData) => {
    emailjs
      .sendForm(
        import.meta.env.VITE_CONTACT_FORM_SERVICE_ID,
        import.meta.env.VITE_CONTACT_FORM_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_CONTACT_FORM_USER_ID,
      )
      .then(
        (result) => {
          toast.success("sent successfully", {
            position: "top-right",
          });

          reset();
        },
        (error) => {
          toast.error("sending failed!", {
            position: "top-right",
          });
        },
      );
  };

  return (
    <div
      className="bg-center py-32 mb-24"
      style={{
        backgroundImage: `url(${Cityscape_Skyline_View})`,
      }}
      alt="City skyline view with tall buildings and clear sky"
    >
      <section
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="text-white body-font relative dm-sans-font"
      >
        <div className="container px-5  mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1
              data-aos="zoom-in"
              className=" text-center  text-3xl md:text-5xl font-bold text-white"
            >
              Contact Us
            </h1>
            <div
              data-aos="zoom-out"
              className="bg-primary mx-auto h-1 w-44 mt-5"
            ></div>
          </div>
          <div className="mx-auto mt-20">
            {/* Contact Form Section */}
            <form onSubmit={handleSubmit(onSubmit)} ref={form}>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full lg:w-1/2 md:mt-5">
                  <div className="relative">
                    <label
                      htmlFor="firstName"
                      className="leading-7 text-base md:text-2xl text-white"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full bg-transparent border-0 border-b-2 border-gray-300 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                    />
                    {errors.firstName && (
                      <p className="text-red-300 text-sm mt-1">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="p-2 w-full lg:w-1/2 md:mt-5">
                  <div className="relative">
                    <label
                      htmlFor="lastName"
                      className="leading-7 text-base md:text-2xl text-white"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full bg-transparent border-0 border-b-2 border-gray-300 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                    />
                    {errors.lastName && (
                      <p className="text-red-300 text-sm mt-1">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="p-2 w-full lg:w-1/2 md:mt-5">
                  <div className="relative">
                    <label
                      htmlFor="phoneNumber"
                      className="leading-7 text-base md:text-2xl text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="w-full bg-transparent border-0 border-b-2 border-gray-300 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      {...register("phoneNumber", {
                        required: "Phone number is required",
                      })}
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-300 text-sm mt-1">
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="p-2 w-full lg:w-1/2 md:mt-5">
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
                      className="w-full bg-transparent border-0 border-b-2 border-gray-300 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                <div className="mb-4 mt-4 w-full">
                  <span className="block text-white text-base md:text-2xl">
                    Are you interested in
                  </span>
                  <div className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="interest"
                        value="Buying"
                        className="radio radio-primary form-radio border-white"
                        {...register("interest", {
                          required: "Please select an option",
                        })}
                      />
                      <span className="ml-2 text-base md:text-2xl font-bold">
                        Buying
                      </span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        name="interest"
                        value="Selling"
                        className="radio radio-primary form-radio border-white"
                        {...register("interest", {
                          required: "Please select an option",
                        })}
                      />
                      <span className="ml-2 text-base md:text-2xl font-bold">
                        Selling
                      </span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        name="interest"
                        value="Leasing"
                        className="radio radio-primary form-radio border-white"
                        {...register("interest", {
                          required: "Please select an option",
                        })}
                      />
                      <span className="ml-2 text-base md:text-2xl font-bold">
                        Leasing
                      </span>
                    </label>
                  </div>
                  {errors.interest && (
                    <p className="text-red-300 text-sm mt-1">
                      {errors.interest.message}
                    </p>
                  )}
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-base md:text-2xl text-white"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full mt-2 bg-transparent border border-gray-300 h-44 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      {...register("message", {
                        required: "Message is required",
                      })}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-300 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="p-2 w-full mt-3">
                  <button
                    type="submit"
                    className="flex mx-auto rounded border border-current px-12 py-2 text-lg font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
