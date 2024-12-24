import React from "react";
import Banner from "./Banner";
import WhyChooseUs from "./WhyChooseUs";
import SpecialOffers from "./SpecialOffers";
import Testimonials from "./Testimonials";
import RecentListings from "./RecentListings";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
      <RecentListings></RecentListings>
      {/* testimonial section start here */}
      <div
        className="bg-fixed  w-full  bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/736x/07/8e/a5/078ea578bab61461d205de7516afe3b8.jpg")',
        }}
      >
        <Testimonials></Testimonials>
      </div>

      <SpecialOffers></SpecialOffers>
    </div>
  );
};

export default Home;
