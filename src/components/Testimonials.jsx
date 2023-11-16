import React from "react";

const testimonialData = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quis deleniti neque, animi voluptatem ratione quam nemo corrupti sint? Natus ad voluptatum blanditiis asperiores quas unde corporis eius iure quia.",
    author: "Jane Doe",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quis deleniti neque, animi voluptatem ratione quam nemo corrupti sint? Natus ad voluptatum blanditiis asperiores quas unde corporis eius iure quia.",
    author: "Nane Doe",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quis deleniti neque, animi voluptatem ratione quam nemo corrupti sint? Natus ad voluptatum blanditiis asperiores quas unde corporis eius iure quia.",
    author: "Brqne Doe",
  },
];

const Testimonials = () => {
  return (
    <>
      <section id="testimonials">
        <div className="min-h-[50vh] bg-secondary text-primary">
          {/* header section */}
          <header className="p-2 text-4xl text-center font-main text-primary">
            Testimonials{" "}
          </header>
          <p className="text-lg text-center font-text text-primary">
            I have worked with hundreds of people
          </p>
          {/* testimonial cards */}
          <div className="flex flex-col justify-between p-2 md:flex-row lg:flex-row">
            {/* Card */}{" "}
            {testimonialData.map((testimonial, index) => (
              <div className="m-auto mb-2 rounded-md h-60 w-96 bg-primary text-secondary">
                <div
                  key={index}
                  className="m-auto mb-2 rounded-md h-60 w-96 bg-primary text-secondary"
                >
                  <p className="p-2 text-lg text-left font-text">
                    {testimonial.text}
                  </p>
                  <p className="p-2 text-2xl text-left font-main">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
