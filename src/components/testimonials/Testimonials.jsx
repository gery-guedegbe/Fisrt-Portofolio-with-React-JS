import React from "react";
import "./testimonials.css";
import Image1 from "../../assets/avatar-1.svg";
import Image3 from "../../assets/avatar-3.svg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Narcisse DOSSA",
    comment:
      "When Géry takes the stage, it's always magical! His creativity and positive energy turned our last campaign into an unforgettable adventure. Working with him is like a fireworks display of great ideas and laughter. I highly recommend this professional joy ride!",
  },
  {
    id: 2,
    image: Image3,
    title: "Ulrich ALLOGNON",
    comment:
      "Géry is more than just a colleague; he is an inspiring collaborator. His profound understanding of technical challenges, combined with a collaborative approach, has been crucial to the success of our project. Always ready to share his knowledge, he consistently raises the level of the entire team.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials__container section">
      <h2 className="section__title">Clients & Reviews</h2>
      <Swiper
        className="testimonials__container grid"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={30}
        loop={true}
        grabCursor={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, comment }) => {
          return (
            <SwiperSlide className="testimonials__item">
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonials__title">{title}</h3>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
