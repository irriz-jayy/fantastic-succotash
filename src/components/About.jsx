import React from "react";
import owner from "../assets/hero-woman.png";

const About = () => {
  return (
    <>
      <div className="min-h-[80vh] bg-secondary">
        {/* header section */}
        <header className="p-2 text-4xl text-center font-main text-primary">
          About Me
        </header>
        {/* about paragraph */}
        <div className="flex flex-col justify-between md:flex-row lg:flex-row">
          <p className="flex items-center p-2 m-auto text-lg border md:w-1/2 lg:w-1/2 text-primary font-text md:h-96 lg:h-96">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quaerat
            in voluptatibus eligendi, vero placeat magnam eveniet iste
            consequatur at, quibusdam, numquam voluptatum eius amet. Ipsa
            corporis corrupti consequatur nemo.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eos quaerat in voluptatibus eligendi,
            vero placeat magnam eveniet iste consequatur at, quibusdam, numquam
            voluptatum eius amet. Ipsa corporis corrupti consequatur nemo.
          </p>
          {/* image */}
          <img src={owner} alt="" className="m-auto border" />
        </div>
      </div>
    </>
  );
};

export default About;
