const WhyChooseEnam = () => {
  return (
    <div className="   my-10 container mx-auto px-5">
      <h1 className="text-center text-2xl lg:text-4xl font-bold dm-sans-font  mb-10">
        Why Choose Enam
      </h1>
      <div>
        <img
          className="h-96 lg:hidden block  mx-auto mb-20"
          src="https://uploads-ssl.webflow.com/63c3d5df23be3c7753f0e3fe/63c3e6499efaf32f0e6b9a7b_hero-image.webp"
          alt=""
        />
      </div>
      <div className="lg:grid lg:grid-cols-3 flex flex-wrap gap-8 items-center justify-center">
        <div className="shadow border px-5 py-10 lg:w-full md:w-[300px] md:h-[380px] ">
          <img
            className="mx-auto"
            src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/650a96fe3924d9fe4b02cfe1_image%201.png"
            alt=""
          />
          <h2 className="text-xl md:text-2xl text-center py-5 font-semibold">
            Local Expertise And Experience
          </h2>
          <p className="text-base md:text-lg text-center">
            Your Real Estate Expert Goes the Extra Mile for You®
          </p>
        </div>
        <div className=" shadow border px-5 py-10 lg:w-full md:w-[300px] md:h-[380px]">
          <img
            className="mx-auto"
            src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/650a97eaf47cf01adfacdb4d_image%203%20(1).png"
            alt=""
          />
          <h2 className="text-[24px] md:text-2xl text-center py-5 font-semibold">
            Ultimate Experience Assurance
          </h2>
          <p className="text-base md:text-lg text-center">
            Ensuring Your Ultimate Real Estate Experience. Your Home, Our
            Priority.
          </p>
        </div>
        <div className="shadow border px-5 py-10 lg:w-full md:w-[300px] md:h-[380px] ">
          <img
            className="mx-auto"
            src="https://assets-global.website-files.com/63c3d5df23be3c7753f0e3fe/650a97f3e877323200745b2f_image%202.png"
            alt=""
          />
          <h2 className="text-[24px] md:text-2xl text-center py-5 font-semibold">
            Outstanding Property Promotion
          </h2>
          <p className="text-base md:text-lg text-center">
            Our proven system ensures that your home sells quicker and at a
            higher price.
          </p>
        </div>
      </div>
    </div>
  );
};
export default WhyChooseEnam;
