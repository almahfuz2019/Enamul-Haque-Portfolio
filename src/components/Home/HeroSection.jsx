import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="  py-20 mb-24 bg-no-repeat bg-cover "
      style={{
        backgroundImage:
          "url('https://uploads-ssl.webflow.com/63c3d5df23be3c7753f0e3fe/65326148b919c1e8fc461ea0_9bb4531c-2d47-4873-8abf-09ddfff68984.jpg')",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-4">
        <div></div>
    
        <div>
          <div className="w-[500px]  px-4">
            <div className="glass bg-black relative rounded-2xl p-8 sm:p-12 shadow-lg">
                <h1 className="text-white text-4xl font-bold mb-10">Fill Out® For Your Best Real Estate Experience.</h1>
                <div className="text-white flex gap-10 mb-5">
                <Link to="" className="text-xl font-bold">Buy</Link>
                <Link to="" className="text-xl font-bold">Sell</Link>
                <Link to="" className="text-xl font-bold">Estimate</Link>
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
    </div>
  );
};
export default HeroSection;
