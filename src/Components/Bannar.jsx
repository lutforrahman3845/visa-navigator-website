import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import bnnr1 from "../assets/CTA-Banner-min.jpg";
import bnnr2 from "../assets/banner-man-img.png";
import bnnr3 from "../assets/hero-bg-3.png";
import bnnr4 from "../assets/banner-bg-4-shape.png";
import Lottie from "lottie-react";
import plane1 from "../assets/plane1.json";


const Bannar = () => {
  return (
    <div className="relative  dark:bg-secondary md:px-6 pt-2  ">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={
          {
            clickable: true
          }
        }
        className="w-[98%] md:w-full h-[250px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-sm"
      >
        <SwiperSlide className=" relative bg-primary ">
          <div className="absolute top-1/2 left-2 md:left-10 lg:left-16 xl:left-20 -translate-y-1/2 z-50 text-white">
            <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl  font-bold max-w-2xl ">
            Journey with Confidence Migrate with Us
            </h1>
            <p className="text-xs sm:text-base  max-w-2xl text-gray-200 my-2 font-light">
            Embarking on an international journey can be daunting, but with our dedicated support, you can migrate with confidence.
              <span className="hidden sm:block">
                {" "}
                Our team of seasoned professionals is committed to guiding you through every step of the process, ensuring a seamless transition to your new home.
              </span>{" "}
            </p>
            <button className="py-2 px-3  text-xs md:text-base rounded-md bg-[#054833] text-white mt-3 md:mt-6 lg:mt-8">
              Get start
            </button>
          </div>
          <img
            src={bnnr2}
            alt="Bannar image"
            className="absolute right-0 rounded-sm z-40"
          />
          <Lottie className="absolute left-0 top-1/2 -translate-y-1/2" animationData={plane1} loop={true} />
          <img
            src={bnnr4}
            alt="Bannar image"
            className="absolute left-0  rounded-sm"
          />
        </SwiperSlide>
        <SwiperSlide className=" relative text-black">
          <div className="absolute top-1/2 left-2 md:left-10 lg:left-16 xl:left-20 -translate-y-1/2 z-50  text-white">
            <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl  font-bold max-w-2xl ">
            Trusted Immigration visa Consulting here..
            </h1>
            <p className="text-xs sm:text-base max-w-2xl my-2 text-gray-200 font-light">
            At Trusted Immigration Visa Consulting, we're dedicated to guiding you through every step of your immigration journey with professionalism and care.
              <span className="hidden sm:block">
              Our expert consultants possess a deep understanding of the visa application process and are committed to providing personalized support tailored to your unique needs.
              </span>{" "}
            </p>
            <button className="py-2 px-3 text-xs md:text-base rounded-md bg-primary text-white mt-3 md:mt-6 lg:mt-8">
              Get start
            </button>
          </div>
          <img
            src={bnnr3}
            alt="Bannar image"
            className="w-full h-full object-cover rounded-sm"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#054833] to-transparent z-10"></div>

          <div className="absolute top-1/2 left-2 md:left-10 lg:left-16 xl:left-20 -translate-y-1/2 z-20">
            <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold max-w-2xl text-white">
              Simplifying Your Visa Journey with Expertise and Care
            </h1>
            <p className="text-xs sm:text-base text-gray-200 max-w-2xl my-2 font-light">
              Navigating the complexities of obtaining a visa can often feel
              overwhelming, but with our expertise and dedicated care, we
              simplify your journey from start to finish.
              <span className="hidden sm:block">
              Our experienced team guides you through each step, providing personalized support tailored to your unique needs.
              </span>
            </p>
            <button className="py-2 px-3  text-xs md:text-base rounded-md bg-primary text-white mt-3 md:mt-6 lg:mt-8">
              Get start
            </button>
          </div>

          <img
            src={bnnr1}
            alt="Banner image"
            className="w-full h-full md:h-11/12 object-cover md:object-top rounded-sm "
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Bannar;
