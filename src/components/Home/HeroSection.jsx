import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import Architectural_Rendering from "./../../assets/Images/Architectural_Rendering.webp";
import Enamul_Haque from "./../../assets/Images/Enamul_Haque.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // eslint-disable-next-line no-unused-vars
  const onSubmit = (data) => {
    toast.success("sent successfully", { position: "top-right" });
    reset();
  };

  return (
    <div
      className=" relative mx-auto py-32 mb-24 bg-no-repeat bg-cover md:mt-0 mt-16"
      style={{
        backgroundImage: `url(${Architectural_Rendering})`,
      }}
      alt="Architectural Rendering"
    >
      <div className="lg:grid lg:grid-cols-2 mx-auto gap-4">
        <div className="lg:block hidden"></div>

        <div className="flex justify-center">
          <div className="lg:w-[520px] md:w-[500px]  px-4">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="glass bg-black relative rounded-2xl p-8 sm:p-12 shadow-lg"
            >
              <h1 className="text-white text-2xl dm-sans-font md:text-4xl font-bold mb-10">
                Fill Out® For Your Best Real Estate Experience.
              </h1>
              <div className="text-white flex gap-10 mb-5 poppins-font">
                <Link to="/buy" className="md:text-xl text-base font-bold">
                  Buy
                </Link>
                <Link to="/sell" className="md:text-xl text-base font-bold">
                  Sell
                </Link>
                <Link to="" className="md:text-xl text-base font-bold">
                  Estimate
                </Link>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Email"
                    className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-white text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        bg-[#1F1F2166]
                        "
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
                    <p className="text-red-300 text-sm mt-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-white text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        bg-[#1F1F2166]
                        "
                    {...register("name", {
                      required: "Name is required",
                    })}
                  />
                  {errors.name && (
                    <p className="text-red-300 text-sm mt-2">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="
                        w-full
                        rounded
                        py-3
                        bg-[#1F1F2166]
                        px-[14px]
                        text-white text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10,15}$/,
                        message: "Invalid phone number",
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className="text-red-300 text-sm mt-2">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="mx-auto text-center">
                  <button
                    type="submit"
                    className="
                    inline-block rounded bg-primary px-8 py-3 text-md font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring
                        "
                  >
                    Send Message
                  </button>
                </div>
              </form>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" h-96 w-96 xl:h-[550px] xl:w-[550px] bg-cover absolute -mb-20 mt-20 bottom-20 lg:block hidden"
        style={{
          backgroundImage: `url(${Enamul_Haque})`,
        }}
        alt="At Emanul Haque, we are dedicated to providing exceptional real estate services tailored to your unique needs. Our team, led by Emanul Haque, a seasoned and trusted Canadian Realtor, is committed to delivering top-notch results for our clients.With a deep understanding of the Canadian real estate market, we take pride in guiding you through every step of your real estate journey. Whether you're buying, selling, or investing in properties, we have the expertise to make your real estate goals a reality"
      ></div>
      <Toaster />
    </div>
  );
};

export default HeroSection;
