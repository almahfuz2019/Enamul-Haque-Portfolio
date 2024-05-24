import React from "react";
const BasicInfoForm = () => {
  return (
    <div
      className=" bg-center py-20 "
      style={{
        backgroundImage:
          "url('https://uploads-ssl.webflow.com/63c3d5df23be3c7753f0e3fe/65100b03ebdf63e00bef1bd0_Rectangle%2084%20(1).png')",
      }}
    >
      <section className="text-white body-font relative">
        <div className="container px-5 py-16 md:py-24 mx-auto">
          <fieldset className="w-full  mb-10">
            <label htmlFor="Search" className="hidden">
              Search
            </label>
            <div className="relative">
              <span className="absolute  inset-y-0 left-0 flex items-center px-5 ">
                <button
                  type="button"
                  title="search"
                  className="p-1  focus:outline-none focus:ring"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="w-4 h-4  dark:text-gray-800"
                  >
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="Search"
                placeholder="Type Your Address"
                className="w-full lg:h-14 text-lg   py-2 pl-10  rounded-full  focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600"
              />
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
                    className="w-full bg-transparent border-0 border-b md:border-b-2    border-gray-300     text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 md:mx-4">
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
                    className="w-full bg-transparent border-0 border-b md:border-b-2    border-gray-300     text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 md:mx-4">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-base md:text-2xl text-white"
                  >
                    Phone{" "}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-transparent border-0 border-b md:border-b-2    border-gray-300     text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
            </div>
            <div className="p-2 w-full mt-10">
              <button className="flex mx-auto rounded-full border border-current px-12 py-2 text-lg font-medium text-black  bg-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default BasicInfoForm;
