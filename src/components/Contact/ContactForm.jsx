const ContactForm = () => {
  return (
    <div
      className=" bg-center py-20 mb-24"
      style={{
        backgroundImage:
          "url('https://uploads-ssl.webflow.com/63c3d5df23be3c7753f0e3fe/65100b03ebdf63e00bef1bd0_Rectangle%2084%20(1).png')",
      }}
    >
      <section className="text-white body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className=" text-5xl font-medium title-font mb-4 text-white">
              Contact Us
            </h1>
            <div className=" bg-primary mx-auto h-1 w-44"></div>
          </div>
          <div className="mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full lg:w-1/2 md:mt-5">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-base md:text-2xl text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-transparent border-0 border-b-2    border-gray-300     text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full lg:w-1/2 md:mt-5">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-base md:text-2xl text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-transparent border-0 border-b-2    border-gray-300     text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full lg:w-1/2 md:mt-5">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-base md:text-2xl text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-transparent border-0 border-b-2    border-gray-300     text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full lg:w-1/2 md:mt-5">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-base md:text-2xl text-white"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-transparent border-0 border-b-2    border-gray-300     text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="mb-4 mt-4">
                <span className="block text-white text-base md:text-2xl">
                  Are you interested in
                </span>
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="radio-1"
                      className="radio radio-primary form-radio border-white"
                    />
                    <span className="ml-2 text-base md:text-2xl font-bold ">
                      Buying
                    </span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      name="radio-1"
                      className="radio radio-primary form-radio border-white"
                    />
                    <span className="ml-2 text-base md:text-2xl font-bold ">
                      Selling
                    </span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      name="radio-1"
                      className="radio radio-primary form-radio border-white"
                    />
                    <span className="ml-2 text-base md:text-2xl font-bold ">
                      Leasing
                    </span>
                  </label>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative ">
                  <label
                    htmlFor="message"
                    className="leading-7 text-base md:text-2xl text-white "
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full mt-2 bg-transparent border border-gray-300     h-44 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full mt-3">
                <button className="flex mx-auto rounded border border-current px-12 py-2 text-lg font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ContactForm;
