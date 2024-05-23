import React from 'react';

const Demo = () => {
    return (
        <div className="relative block h-64 sm:h-80 lg:h-96 border-2 border-dashed border-black">
      <div className="absolute inset-0 flex items-center justify-center bg-white">
        <button
          type="button"
          className="relative px-4 py-2 font-semibold text-white bg-black rounded-lg transition-transform transform group hover:-translate-x-2 hover:-translate-y-2"
        >
          Read More
        </button>
      </div>
    </div>
    );
};

export default Demo;