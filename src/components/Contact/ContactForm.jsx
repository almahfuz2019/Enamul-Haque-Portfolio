import { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const form = useRef();

  // Function to handle form submission
  const onSubmit = (data) => {
    sendEmail(data); // Pass the form data to sendEmail function
  };

  // Function to send email using EmailJS
  const sendEmail = (formData) => {
    emailjs
      .sendForm(
        "service_btn6m6h",
        "template_eh4il8r",
        form.current,
        "xggGQ3kcYwUpUESDc",
      )
      .then(
        (result) => {
          toast.success("Email sent successfully", {
            position: "top-right",
          });
          console.log("SUCCESS!", result.text);
          reset();
        },
        (error) => {
          toast.error("Email sending failed!", {
            position: "top-right",
          });
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <div
      className="bg-center py-20 mb-24"
      style={{
        backgroundImage:
          "url('https://uploads-ssl.webflow.com/63c3d5df23be3c7753f0e3fe/65100b03ebdf63e00bef1bd0_Rectangle%2084%20(1).png')",
      }}
    >
      <section className="text-white body-font relative dm-sans-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="dm-sans-font text-5xl font-medium title-font mb-4 text-white">
              Contact Us
            </h1>
            <div className="bg-primary mx-auto h-1 w-44"></div>
          </div>
          <div className="mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} ref={form}>
              <div className="flex flex-wrap -m-2">
                {/* Input fields */}
                {/* First Name */}
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
                {/* Last Name */}
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
                {/* Phone Number */}
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
                {/* Email */}
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
                {/* Interest */}
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
                {/* Message */}
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
                {/* Submit Button */}
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
