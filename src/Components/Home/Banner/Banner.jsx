import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "./Banner.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import BannerImg_1 from "../../../assets/image/banner/banner_1.jpg";
import BannerImg_2 from "../../../assets/image/banner/banner_2.jpg";
import BannerImg_3 from "../../../assets/image/banner/banner_3.jpg";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="h-[80vh]">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        // autoplay={{ delay: 3000 }}
        className="mySwiper"
      >
        {/* Slider Number 1  */}
        <SwiperSlide>
          <img src={BannerImg_1} className="relative z-0" alt="banner_1" />
          <div className="absolute top-0 z-40 left-0 w-full h-full mt-[10rem]">
            <div className="container mx-auto">
              <div className="">
                <h2 className="font-normal text-4xl text-white mb-8 capitalize">
                  Donate blood, Save Life !
                </h2>
                <h1 className="font-extrabold text-white text-6xl uppercase leading-[6rem] mb-8">
                  Donate Blood <br /> and Inspires Others.
                </h1>
                <Link to={"/entry_blood_data"}>
                  <button className="bg-primary hover:bg-white hover:text-black text-white py-5 font-semibold px-14 rounded-full">
                    Donate Now
                  </button>
                </Link>
                <Link to={"/contact_us"}>
                  <button className="hover:bg-primary ml-5 border uppercase border-primary bg-white text-black hover:text-white py-5 font-semibold px-14 rounded-full">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Slider Number 2  */}
        <SwiperSlide>
          <img src={BannerImg_2} alt="banner_2" />
          <div className="absolute top-0 z-40 left-0 w-full h-full mt-[10rem]">
            <div className="container mx-auto">
              <div className="">
                <h2 className="font-normal text-4xl text-white mb-8 capitalize">
                  Donate blood, Save Life !
                </h2>
                <h1 className="font-extrabold text-white text-6xl uppercase leading-[6rem] mb-8">
                  Your Blood <br /> Can Bring Smile <br /> In other person face.
                </h1>
                <Link to={"/entry_blood_data"}>
                  <button className="bg-primary hover:bg-white hover:text-black text-white py-5 font-semibold px-14 rounded-full">
                    Donate Now
                  </button>
                </Link>
                <button className="hover:bg-primary ml-5 border uppercase border-primary bg-white text-black hover:text-white py-5 font-semibold px-14 rounded-full">
                  Call : +8801500000004
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Slider Number 3  */}
        <SwiperSlide>
          <img src={BannerImg_3} alt="banner_3" />
          <div className="absolute top-0 z-40 left-0 w-full h-full mt-[10rem]">
            <div className="container mx-auto">
              <div className="">
                <h2 className="font-normal text-4xl text-white mb-8 capitalize">
                  Donate blood, Save Life !
                </h2>
                <h1 className="font-extrabold text-white text-6xl uppercase leading-[6rem] mb-8">
                  Donate blood <br /> and get real blessings.
                </h1>
                <Link to={"/entry_blood_data"}>
                  <button className="bg-primary hover:bg-white hover:text-black text-white py-5 font-semibold px-14 rounded-full">
                    Donate Now
                  </button>
                </Link>
                <Link to={"/contact_us"}>
                  <button className="hover:bg-primary ml-5 border uppercase border-primary bg-white text-black hover:text-white py-5 font-semibold px-14 rounded-full">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
