import React, { Component } from "react";
import Slider from "react-slick";

import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  // all testimonial card array.
  const testimonials = [
    {
      name: "John Doe",
      profileImage:
        "https://i.pinimg.com/474x/01/14/4c/01144c0be6c7ae4794fd4b06ddbaae3a.jpg",
      rating: 5,
      review: "Amazing service and great cars. Highly recommend!",
    },
    {
      name: "Jane Smith",
      profileImage:
        "https://i.pinimg.com/474x/69/8d/4a/698d4a2151d40090f85fd645fd557fbb.jpg",
      rating: 4,
      review: "Affordable prices and very easy booking process.",
    },
    {
      name: "Mike Johnson",
      profileImage:
        "https://i.pinimg.com/474x/d7/ac/c7/d7acc710d8001089244718e8869aa7d4.jpg",
      rating: 5,
      review: "Luxury cars at great rates. Will rent again for sure!",
    },
    {
      name: "Pater Watson",
      profileImage:
        "https://i.pinimg.com/474x/82/19/e9/8219e955fd50a0eb26959d17f4b173c7.jpg",
      rating: 3,
      review: "Reliable cars but had to wait longer than expected.",
    },
    {
      name: "Jonathon Smith",
      profileImage:
        "https://i.pinimg.com/474x/50/c1/8b/50c18be1d204ce8f2d84dfdcb84a0645.jpg",
      rating: 4,
      review: "Smooth experience and excellent customer service.",
    },
  ];

  // settings from the react-slick website.
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-28 ">
      <div className="container mx-auto lg:px-8 overflow-hidden">
        <p className=" text-center mx-auto ">
          <small className=" ">T E S T I M O N I A L S</small>
        </p>
        <h2 className="text-3xl md:text-4xl text-white font-bold text-center mb-12">
          What Our Clients Say ?
        </h2>
        <div className="slider-container ">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col   items-center text-center bg-white dark:bg-[#232425] p-6 rounded-lg shadow-lg mx-4 h-[220px]"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={testimonial.profileImage}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mb-4"
                  />
                  <div className="">
                    <h3 className="text-xl dark:text-gray-50 font-semibold mb-2">
                      {testimonial.name}
                    </h3>
                    {/* using Ai for implement rating */}
                    <div className="flex justify-center mb-4">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <FaStar key={i} className="text-yellow-500" />
                        )
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-200">{testimonial.review}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
