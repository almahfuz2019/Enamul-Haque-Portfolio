import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className=" relative mx-auto   py-20 mb-24 bg-no-repeat bg-cover md:mt-0 mt-16"
      style={{
        backgroundImage:
          "url('https://uploads-ssl.webflow.com/63c3d5df23be3c7753f0e3fe/63c3e01994282732dbe8f725_hero-bg.webp')",
      }}
    >
      <div className="lg:grid  lg:grid-cols-2 mx-auto gap-4">
        <div className="lg:block hidden"></div>

        <div className=" flex justify-center">
          <div className="lg:w-[520px] md:w-[500px]  px-4">
            <div className="glass bg-black relative rounded-2xl p-8 sm:p-12 shadow-lg">
              <h1 className="text-white text-2xl  md:text-4xl font-bold mb-10">
                Fill Out® For Your Best Real Estate Experience.
              </h1>
              <div className="text-white flex gap-10 mb-5">
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
              <form>
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
                  />
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
                  />
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
                  />
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
        className="h-96 w-96 bg-cover absolute -mb-20 mt-20 bottom-20 lg:block hidden"
        style={{
          backgroundImage:
            "url('https://uploads-ssl.webflow.com/63c3d5df23be3c7753f0e3fe/63c3e6499efaf32f0e6b9a7b_hero-image.webp')",
        }}
      ></div>
    </div>
  );
};
export default HeroSection;
