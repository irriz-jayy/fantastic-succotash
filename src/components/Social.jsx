import React from "react";
import socials from "../assets/social-media.png";
import facebookLogo from "../assets/logos/facebook.png";
import instagramLogo from "../assets/logos/instagram.png";
import whatsappLogo from "../assets/logos/whatsapp.png";

const socialLinks = [
  {
    platform: "Facebook",
    logo: facebookLogo,
    url: "https://www.facebook.com/nancyakinyi.ongwen.1",
  },
  {
    platform: "WhatsApp",
    logo: whatsappLogo,
    url: "https://wa.me/message/GDLHH5FJG225K1",
  },
  {
    platform: "Instagram",
    logo: instagramLogo,
    url: "https://www.instagram.com/nancy_akinyi_ongwen/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==",
  },
];

const Social = () => {
  return (
    <section id="social">
      <div className="min-h-[50vh] bg-primary text-secondary">
        <header className="p-2 text-4xl text-center font-main">
          Socialize with <span className="font-logo">Tender Tips</span>
        </header>

        <div className="flex flex-col justify-between md:flex-row lg:flex-row">
          <div className="flex flex-col p-2 m-auto text-lg md:w-1/2 lg:w-1/2 md:h-80 lg:h-80">
            <div className="w-full h-24 text-center">
              <p className="mt-4 text-lg text-secondary font-text">
                Be a part of our{" "}
                <span className="text-2xl font-logo">Tender Tips</span> beauty
                community. Follow us for a world of beauty, style, and
                confidence with
              </p>
            </div>
            <div className="flex items-center justify-center w-full h-3/4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} className="p-4 mr-2">
                  <img
                    src={link.logo}
                    alt={`${link.platform} logo`}
                    className="m-auto"
                  />
                </a>
              ))}
            </div>
          </div>
          <img src={socials} alt="Social media background" className="m-auto" />
        </div>
      </div>
    </section>
  );
};

export default Social;
