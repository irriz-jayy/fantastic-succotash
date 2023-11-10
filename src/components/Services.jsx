import React from "react";

const serviceList = [
  {
    name: "Braids",
    price: "300 shillings",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque ratione numquam id corporis, sed suscipit eum inventore praesentium, expedita quae aspernatur, repellat qui deserunt earum a. Beatae, magni dolores.",
    time: "1 to 2 hours",
  },
  {
    name: "Braids",
    price: "300 shillings",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque ratione numquam id corporis, sed suscipit eum inventore praesentium, expedita quae aspernatur, repellat qui deserunt earum a. Beatae, magni dolores.",
    time: "1 to 2 hours",
  },
  {
    name: "Braids",
    price: "300 shillings",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque ratione numquam id corporis, sed suscipit eum inventore praesentium, expedita quae aspernatur, repellat qui deserunt earum a. Beatae, magni dolores.",
    time: "1 to 2 hours",
  },
  {
    name: "Braids",
    price: "300 shillings",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque ratione numquam id corporis, sed suscipit eum inventore praesentium, expedita quae aspernatur, repellat qui deserunt earum a. Beatae, magni dolores.",
    time: "1 to 2 hours",
  },
  {
    name: "Braids",
    price: "300 shillings",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque ratione numquam id corporis, sed suscipit eum inventore praesentium, expedita quae aspernatur, repellat qui deserunt earum a. Beatae, magni dolores.",
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
              className="m-auto border w-60 h-96 bg-secondary text-primary"
              key={index}
            >
              <p className="p-2 text-2xl text-center font-main">
                {service.name}
              </p>
              <p className="p-2 text-lg text-center font-text">
                {service.price}
              </p>
              <p className="text-lg text-center font-text">{service.details}</p>
              <p className="p-2 text-center font-main">{service.time}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
