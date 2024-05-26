
const BasicFeatures = () => {
    return (
        <div>
            <div className="bg-[#f5f5f5]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4  mx-auto py-20 container">
          <div className="block rounded-xl p-4  hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
            <img
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/650aeb91b93d3783abcfe034_iconamoon_home-light.png"
              alt=""
            />

            <h2 className="mt-2 text-2xl  font-bold dm-sans-font ">1) Enter Address</h2>

            <p className=" sm:mt-1 sm:block  text-lg sm:text-gray-600">
              Please enter and select your <br /> home address to get started.
            </p>
          </div>
          <div className="block rounded-xl p-4  hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
            <img
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/650aecaa545a5a0fcf02a0fb_iconamoon_profile.png"
              alt=""
            />

            <h2 className="mt-2 text-2xl  font-bold dm-sans-font ">
              2) Provide Contact Info
            </h2>

            <p className=" sm:mt-1 sm:block  text-lg sm:text-gray-600">
              Next, enter your contact info so we can <br /> email you a copy of your
              property report.
            </p>
          </div>
          <div className="block rounded-xl p-4  hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
            <img
              src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/650aecb0697cc5634f0118e9_ri_file-list-line.png"
              alt=""
            />

            <h2 className="mt-2 text-2xl  font-bold dm-sans-font ">
              3) View Your Home Estimate
            </h2>

            <p className=" sm:mt-1 sm:block  text-lg sm:text-gray-600">
              You can now view the high, medium and <br /> low valuesof your home.
            </p>
          </div>
        </div>
      </div>
        </div>
    );
};
export default BasicFeatures;