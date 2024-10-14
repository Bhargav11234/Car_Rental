import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.png";
import ava02 from "../../assets/all-images/ava-2.png";
import ava03 from "../../assets/all-images/ava-3.png";
import ava04 from "../../assets/all-images/ava-4.png";
import ava05 from "../../assets/all-images/ava-5.png";
import ava06 from "../../assets/all-images/ava-6.png";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I was blown away by the ease of booking through this car rental website. From selecting the vehicle to confirming the reservation, everything was seamless and straightforward. The customer service was exceptional. I'll definitely be using this service again for my future travels.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Nishit Rokad</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I've used many car rental websites in the past, but none have compared to the convenience and efficiency of this one. The process was incredibly fast, and the rates were unbeatable. The vehicle was clean and well-maintained, making my road trip an absolute pleasure. Highly recommend
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Smit Patel</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I was hesitant to book a car online, but I'm so glad I chose this website. The entire process was incredibly user-friendly, and I appreciated the transparency of the pricing. The car was ready and waiting for me when I arrived, and it was exactly what I needed for my trip. Will definitely be a repeat customer
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Bhargav Sandis</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I can't say enough good things about this car rental website. The booking process was a breeze, and I appreciated the variety of vehicles available. The staff was friendly and professional, and the pickup and drop-off were quick and efficient. Overall, a fantastic experience from start to finish
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Vatsal Mavani</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I was pleasantly surprised by the level of service provided by this car rental website. The website was easy to navigate, and the reservation process was quick and painless. The vehicle was in excellent condition, and the rental rates were very competitive. I wouldn't hesitate to recommend this service to anyone.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava05} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Darshil Poshiya</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        My experience with this car rental website was nothing short of excellent. The booking process was straightforward, and the communication from the company was top-notch. The vehicle was clean and well-maintained, and the pickup and drop-off were smooth and efficient.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava06} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Maulik Vasoya</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
