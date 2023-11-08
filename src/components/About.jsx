import React from "react";
import owner from "../assets/hero-woman.png";

const About = () => {
  return (
    <>
      <div className="h-[80vh] bg-secondary">
        {/* header section */}
        <header className="p-2 text-4xl text-center font-main text-primary">
          About Me
        </header>
        {/* about paragraph */}
        <div className="flex justify-between">
          <p className="flex items-center w-1/2 p-2 m-auto text-lg border text-primary font-text h-96">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quaerat
            in voluptatibus eligendi, vero placeat magnam eveniet iste
            consequatur at, quibusdam, numquam voluptatum eius amet. Ipsa
            corporis corrupti consequatur nemo.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eos quaerat in voluptatibus eligendi,
            vero placeat magnam eveniet iste consequatur at, quibusdam, numquam
            voluptatum eius amet. Ipsa corporis corrupti consequatur nemo.
          </p>
          <img src={owner} alt="" className="m-auto border" />
        </div>
      </div>
    </>
  );
};

export default About;
