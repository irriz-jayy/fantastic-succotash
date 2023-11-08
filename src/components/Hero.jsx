import React from "react";
import hero from "../assets/young-african-american-woman-with-black-curly-hair-yellow-tshirt-green-circle-backdrop_450469-975.jpg";

const Hero = () => {
  return (
    <section id="hero">
      <div className="min-h-[80vh] flex flex-col lg:flex-row md:flex-row items-center justify-between bg-primary">
        {/* Welcome text */}
        <div className="flex flex-col items-center justify-center w-full p-4 mb-4 h-1/2 md:ml-4 md:h-80 md:w-1/2 lg:ml-4 lg:h-80 lg:w-1/2">
          <div className="">
            <p className="text-4xl font-normal font-main text-secondary">
              Bringing the Salon to your home
            </p>
            <p className="text-2xl font-text ">Home Hair Care, Done Your Way</p>
            <p className="mb-4 text-lg font-text">
              Experience luxury in your own space
            </p>
            <a
              href="tel:+254721465135"
              className="p-2 bg-teal-300 rounded-md font-button"
            >
              Schedule now !
            </a>
          </div>
        </div>
        <div className="h-1/2 lg:w-1/2 lg:h-full md:w-1/2 md:h-full">
          <img src={hero} alt="" className="m-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
