import React from "react";
import owner from "../assets/hero-woman.png";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="min-h-[80vh] bg-secondary">
          {/* header section */}
          <header className="p-2 text-4xl text-center font-main text-primary">
            About Me
          </header>
          {/* about paragraph */}
          <div className="flex flex-col justify-between md:flex-row lg:flex-row">
            <p className="flex items-center p-2 m-auto text-lg md:w-1/2 lg:w-1/2 text-primary font-text md:h-96 lg:h-96">
              Meet Nancy Akinyi Ong'wen, your hair magician with over two
              decades of enchanting hairstyling experience! With a passion that
              only grows stronger, Nancy is not just a stylist; she's a maestro
              weaving dreams into every strand. From the tiniest tots to the
              most discerning adults, Nancy effortlessly transforms locks into
              works of art. Her expertise isn't confined to the salon; she
              brings the glam to your doorstep with her signature house calls.
              No matter where you are, Nancy's creativity knows no bounds!
              Picture this: Your hair becomes her canvas, and the result is
              nothing short of a masterpiece. Nancy doesn't just style; she
              crafts experiences, turning ordinary moments into extraordinary
              memories. So, whether you're a trendsetter or a little one with a
              vision of your own, Nancy is the stylist who turns imagination
              into reality. Get ready to embark on a hair journey filled with
              style, fun, and a touch of magic✨
            </p>
            {/* image */}
            <img src={owner} alt="" className="m-auto" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
