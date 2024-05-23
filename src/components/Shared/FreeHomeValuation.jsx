import React from "react";

const FreeHomeValuation = () => {
  return (
    <div>
      <div className="  my-10 container mx-auto px-5">
        <h1 className="text-4xl text-center  font-medium font-md">
          Considering a Sale or Purchase?
        </h1>
        <p className="text-center mx-auto text-lg my-5 lg:w-3/4">
          Whether you're contemplating a sale or purchase, your achievement is
          our top priority, especially in today's competitive market.
          Determining the right price for your property is crucial, and our
          expertise ensures your home sells successfully. If you're interested
          in discovering your home's current market value, kindly complete a
          straightforward form, and we'll provide you with a cost-free home
          assessment.
        </p>
        <div className="mx-auto text-center">
          <button className="inline-block rounded text-white bg-primary px-8 py-3 text-md font-medium  transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">
            Get My Home Estimate
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeHomeValuation;
