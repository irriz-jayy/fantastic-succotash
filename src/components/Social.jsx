import React from "react";
import socials from "../assets/social-media.png";
import facebook from "../assets/logos/facebook.png";
import instagram from "../assets/logos/instagram.png";
import whatsapp from "../assets/logos/whatsapp.png";

const Social = () => {
  return (
    <>
      <section id="social">
        <div className="min-h-[80vh] bg-primary text-secondary">
          {/* header section */}
          <header className="p-2 text-4xl text-center font-main">
            Socialize with <span className="font-logo">Tender Tips</span>
          </header>

          <div className="flex flex-col justify-between md:flex-row lg:flex-row">
            <div className="flex flex-col p-2 m-auto text-lg border md:w-1/2 lg:w-1/2 md:h-80 lg:h-80">
              {/* invite text */}
              <div className="w-full h-24 text-center border">
                <p className="mt-4 text-lg text-secondary font-text">
                  Be a part of our
                  <span className="text-2xl font-logo">Tender Tips</span> beauty
                  community. Follow us for a world of beauty, style, and
                  confidence with
                </p>
              </div>
              {/* social links */}
              <div className="flex items-center justify-center w-full border h-3/4">
                <a href="" className="p-4 mr-2 border">
                  <img src={facebook} alt="" className="m-auto" />
                </a>
                <a href="" className="p-4 mr-2 border">
                  <img src={whatsapp} alt="" className="m-auto" />
                </a>
                <a href="" className="p-4 mr-2 border">
                  <img src={instagram} alt="" className="m-auto" />
                </a>
              </div>
            </div>
            {/* image */}
            <img src={socials} alt="" className="m-auto" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Social;
