import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import bannerImg22 from "../../assets/books/book-22.png";
import bannerImg23 from "../../assets/books/book-23.png";
import bannerImg25 from "../../assets/books/book-25.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse mx-6 md:mx-12 py-10 md:py-14 justify-between items-center gap-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900 rounded-2xl shadow-lg overflow-hidden" style={{ backgroundImage: "url('https://tse3.mm.bing.net/th/id/OIP.bt76_5ri2Ud9zUi6G_huOAHaGG?pid=Api&P=0&h=180')", backgroundSize: "cover", backgroundPosition: "center" }}>

      {/* Right Side - Image Swiper */}
      <div className="md:w-1/3 w-full flex items-center justify-center">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="w-64" // fixed width for the swiper
        >
          <SwiperSlide>
            <img
              src={bannerImg22}
              alt="Book 1"
              className="rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 h-48 w-auto object-contain mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={bannerImg23}
              alt="Book 2"
              className="rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 h-48 w-auto object-contain mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={bannerImg25}
              alt="Book 3"
              className="rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 h-48 w-auto object-contain mx-auto"
            />
          </SwiperSlide>
        </Swiper>
      </div>


      {/* Left Side - Text Content */}
      <div className="md:w-1/2 w-full px-4 md:px-8">
        <h1 className="md:text-4xl text-2xl font-extrabold mb-4 leading-snug">
          📚 Discover Your <span className="text-yellow-500">Next Favorite Book</span>
        </h1>
        <p className="mb-6 text-gray-600 text-base md:text-lg leading-relaxed">
          Handpicked new releases for every kind of reader — thrilling mysteries,
          enchanting fantasies, and inspiring real-life tales. Start your next
          reading adventure today.
        </p>

        <button className="bg-yellow-400 text-black px-5 py-2.5 rounded-full font-semibold shadow-md hover:bg-yellow-500 hover:scale-105 transform transition duration-300">
          Browse Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
