import React from "react";

const serviceList = [
  {
    name: "Braids",
    price: "700 shillings",
    details:
      "Indulge in timeless elegance with braids, where each strand weaves a story of beauty. Our expert braiders craft stunning styles, expressing your unique flair. Unleash the power of braids to embrace creativity in every detail. Elevate your style, and step into a world where beauty is braided into every strand. ✨",
    time: "1 to 2 hours",
  },
  {
    name: "Sister Locks installation",
    price: "15,000 shillings",
    details:
      "Embark on a transformation with New Sister Locks. A thorough checkup leads to a personalized package. The meticulous installation, at least 16 hours, is a labor-intensive craft for perfect sister locks. Let the countdown to stunning locks begin! ✨",
    time: "16 to 18 hours",
  },
  {
    name: "Sister Locks retie",
    price: "2000 shillings",
    details:
      "Revitalize your sister locks, restoring their brilliance. This brief, bespoke service is a celebration of your locks' journey and resilience. Every retouch is a brushstroke of confidence. Elevate your locks, elevate yourself! 💫",
    time: "1 to 2 hours",
  },
  {
    name: "School Kids lines",
    price: "500 shillings",
    details:
      "Elevate your kids' school days with rule-compliant braids. Trust my expertise to create stunning styles that follow regulations and radiate their unique beauty. Every braid is a work of art, blending compliance and individuality. Let's turn school days into a canvas of creativity! 🌟",
    time: "1 to 2 hours",
  },
];

const Services = () => {
  return (
    <>
      <section id="services" className="min-h-[80vh] bg-primary text-secondary">
        <header className="p-2 text-4xl text-center font-main">
          Services offered
        </header>
        {/* service section */}
        <div className="flex flex-col justify-between p-2 md:flex-row lg:flex-row">
          {serviceList.map((service, index) => (
            <div
              className="m-auto mb-2 border w-60 h-96 bg-secondary text-primary"
              key={index}
            >
              <p className="p-2 text-2xl text-center font-main">
                {service.name}
              </p>
              <p className="p-2 text-lg font-bold text-center font-text">
                {service.price}
              </p>
              <p className="text-center font-text">{service.details}</p>
              <p className="p-2 text-center font-main">{service.time}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
