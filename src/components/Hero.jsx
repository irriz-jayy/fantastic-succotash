import React from "react";
import hero from "../assets/young-african-american-woman-with-black-curly-hair-yellow-tshirt-green-circle-backdrop_450469-975.jpg";

const Hero = () => {
  return (
    <section id="hero">
      <div className="min-h-[80vh] flex flex-col lg:flex-row md:flex-row items-center justify-between bg-teal-800">
        {/* Welcome text */}
        <div className="flex flex-col items-center justify-center w-full p-4 mb-4 border h-1/2 md:ml-4 md:h-80 md:w-96 lg:ml-4 lg:h-80 lg:w-96">
          <div className="mb-2 border">
            <p className="text-4xl">Bringing the Salon to Your Home</p>
            <p className="text-2xl">Home Hair Care, Done Your Way</p>
            <p className="text-lg">Experience luxury in your own space</p>
          </div>
          <button className="p-2 bg-teal-300 border rounded-md">
            Schedule now
          </button>
        </div>
        <div className="border h-1/2 lg:w-1/2 lg:h-full md:w-1/2 md:h-full">
          <img src={hero} alt="" className="m-auto border" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
