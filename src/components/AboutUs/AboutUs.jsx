import ForConnected from "../ForConnected/ForConnected";
import OwnerSpeech from "../Shared/OwnerSpeech";
import Services from "../Shared/Services";
import WhyChooseEnam from "../Shared/WhyChooseEnam";

const AboutUs = () => {
  return (
    <div className=" mx-auto">
      <div className="p-5 mx-auto ">
        <div className="flex flex-col  mx-auto overflow-hidden ">
          <img
            src="https://source.unsplash.com/random/480x360"
            alt=""
            className="w-full h-60 sm:h-96 "
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-32 space-y-6  sm:px-10 sm:mx-12  bg-white">
            <div className="space-y-2">
              <h1
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-5xl font-semibold "
              >
                About Enam
              </h1>
            </div>
            <div className="dark:text-gray-800">
              <p className="text-xl">
                At Emanul Haque, we are dedicated to providing exceptional real
                estate services tailored to your unique needs. Our team, led by
                Emanul Haque, a seasoned and trusted Canadian Realtor, is
                committed to delivering top-notch results for our clients.With a
                deep understanding of the Canadian real estate market, we take
                pride in guiding you through every step of your real estate
                journey. Whether you're buying, selling, or investing in
                properties, we have the expertise to make your real estate goals
                a reality
              </p>
            </div>
          </div>
        </div>
        
          <div className=" bg-primary mx-auto h-1 w-80 "></div>
        
          <WhyChooseEnam/>
      </div>
     <OwnerSpeech/>
     <Services/>
	 <ForConnected/>
    </div>
  );
};

export default AboutUs;
