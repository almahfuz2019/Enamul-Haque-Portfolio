
const ForConnected = () => {
  return (
    <div>
      <div
        className="w-full bg-gray-400 py-20"
        style={{
          backgroundImage: "url('https://source.unsplash.com/random/640x480')",
          backgroundPosition: 'center center',
          backgroundBlendMode: 'multiply',
          backgroundSize: 'cover',
        }}
      >
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-4xl mb-6 antialiased font-semibold leading-none text-center text-white">
          Stay Connected
          </h1>
          <p className="pt-2 pb-8 text-base antialiased text-center text-white">
          Sign up for our weekly newsletter to receive the latest in real estate and Enamul Haque!
          </p>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Type Your Email"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
            />
            <button
              type="button"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-violet-600 text-gray-50"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForConnected;
