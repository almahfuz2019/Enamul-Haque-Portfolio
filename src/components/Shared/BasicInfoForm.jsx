import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoSearch } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import Cityscape_Skyline_View from "./../../assets/Images/Cityscape_Skyline_View.png";
import AOS from "aos";
import "aos/dist/aos.css";

const BasicInfoForm = () => {
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
    toast.success("sent successfully", {
      position: "top-right",
    });
    reset();
  };

  return (
    <div
      className="bg-center py-32 bg-fixed"
      style={{
        backgroundImage: `url(${Cityscape_Skyline_View})`,
      }}
      alt="Cityscape Skyline View"
    >
      <section className="text-white body-font relative dm-sans-font">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="container px-5 mx-auto"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
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
                  className="w-full lg:h-14 text-lg py-2 pl-12 pr-4 rounded-full focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50 focus:border-primary"
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
      <Toaster />
    </div>
  );
};

export default BasicInfoForm;
