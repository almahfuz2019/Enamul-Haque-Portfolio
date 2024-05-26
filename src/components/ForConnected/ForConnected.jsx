import { FaArrowRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const ForConnected = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const form = useRef();

  const onSubmit = (data) => {
    sendEmail(data.email); // Pass the email field from form data to sendEmail function
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_btn6m6h",
        "template_nkf6nfw",
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
    <div>
      <div
        className="w-full bg-gray-400 py-5 lg:py-20"
        style={{
          backgroundImage:
            "url('https://uploads-ssl.webflow.com/63c3d5df23be3c7753f0e3fe/650abccdeb96e375819d913f_Rectangle%2070.png')",
          backgroundPosition: "center center",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
        }}
      >
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="dm-sans-font text-3xl md:text-4xl mb-6 antialiased font-semibold leading-none text-center text-white">
            Stay Connected
          </h1>
          <p className="pt-2 pb-8 text-base antialiased text-center text-white">
            Sign up for our weekly newsletter to receive the latest in real
            estate and Enamul Haque!
          </p>

          <div>
            <form
              className="flex  justify-center items-center flex-row mx-[10%]"
              onSubmit={handleSubmit(onSubmit)}
              ref={form}
            >
              <input
                type="text"
                defaultValue=""
                className="rounded px-2 h-8 md:h-12 w-full"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Type Your Email"
              />
              <button
                type="submit"
                className="ml-2 p-3 md:p-4 font-semibold rounded-full h-10 md:h-12 md:w-12  w-10 border text-gray-50 hover:bg-primary flex items-center justify-center"
              >
                <FaArrowRight />
              </button>
            </form>
            {errors.email && (
              <p className="text-red-300 text-center text-sm mt-2  block">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ForConnected;
