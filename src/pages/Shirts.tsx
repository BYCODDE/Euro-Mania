import Header from "../components/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import Fotter from "../components/Fotter";

function Shirts() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="bg-black">
      <Header />
      <div
        className="flex justify-center items-center font-playfair p-[24px] pt-[37px] pb-[37px] w-full bg-black text-white text-[30px] tracking-[1.071px]"
        style={{ borderBottom: "2px solid rgba(255, 255, 255, 0.104)" }}
      >
        პერანგები
      </div>

      <div className="slider-container ">
        <Slider {...settings}>
          <div className="slider-item">
            <img
              src="/assets/photos/t-shirts/1.png"
              alt="Slide 1"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="slider-item">
            <img
              src="/assets/photos/t-shirts/2.png"
              alt="Slide 2"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="slider-item">
            <img
              src="/assets/photos/t-shirts/3.png"
              alt="Slide 3"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="slider-item">
            <img
              src="/assets/photos/t-shirts/4.png"
              alt="Slide 4"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="slider-item">
            <img
              src="/assets/photos/t-shirts/5.png"
              alt="Slide 5"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="slider-item">
            <img
              src="/assets/photos/t-shirts/6.png"
              alt="Slide 6"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="slider-item">
            <img
              src="/assets/photos/t-shirts/7.png"
              alt="Slide 7"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="slider-item">
            <img
              src="/assets/photos/t-shirts/8.png"
              alt="Slide 8"
              className="w-full h-auto object-cover"
            />
          </div>
        </Slider>
      </div>

      <div className="parent mt-[50px]">
        <div className="text-center flex flex-col gap-[10px]">
          <img src="/assets/photos/t-shirts/1.png" alt="1" />
          <span className="text-red-600 line-through font-manrope text-[18px] font-bold leading-normal tracking-[1.286px] ">
            160 ლარი
          </span>
          <span className="text-white  font-manrope text-[18px] font-bold leading-normal tracking-[1.286px] ">
            119 ლარი
          </span>
        </div>
        <div className="text-center flex flex-col gap-[10px]">
          <img src="/assets/photos/t-shirts/2.png" alt="2" />
          <span className="text-red-600 line-through font-manrope text-[18px] font-bold leading-normal tracking-[1.286px] ">
            160 ლარი
          </span>
          <span className="text-white  font-manrope text-[18px] font-bold leading-normal tracking-[1.286px] ">
            119 ლარი
          </span>
        </div>
        <div className="text-center flex flex-col gap-[10px]">
          <img src="/assets/photos/t-shirts/3.png" alt="3" />
          <span className="text-red-600 line-through font-manrope text-[18px] font-bold leading-normal tracking-[1.286px] ">
            90 ლარი
          </span>
          <span className="text-white  font-manrope text-[18px] font-bold leading-normal tracking-[1.286px] ">
            49 ლარი
          </span>
        </div>
        <div className="text-center flex flex-col gap-[10px]">
          <img src="/assets/photos/t-shirts/4.png" alt="4" />
          <span className="text-red-600 line-through font-manrope text-[18px] font-bold leading-normal tracking-[1.286px] ">
            90 ლარი
          </span>
          <span className="text-white  font-manrope text-[18px] font-bold leading-normal tracking-[1.286px] ">
            49 ლარი
          </span>
        </div>
        <div className="text-center flex flex-col gap-[10px]">
          <img src="/assets/photos/t-shirts/5.png" alt="5" />
          <span className="text-red-600 line-through font-manrope text-[18px] font-bold leading-normal tracking-[1.286px] ">
            120 ლარი
          </span>
          <span className="text-white  font-manrope text-[18px] font-bold leading-normal tracking-[1.286px] ">
            79 ლარი
          </span>
        </div>
        <div className="text-center flex flex-col gap-[10px]">
          <img src="/assets/photos/t-shirts/6.png" alt="6" />
          <span className="text-red-600 line-through font-manrope text-[18px] font-bold leading-normal tracking-[1.286px] ">
            120 ლარი
          </span>
          <span className="text-white  font-manrope text-[18px] font-bold leading-normal tracking-[1.286px] ">
            79 ლარი
          </span>
        </div>
        <div className="text-center flex flex-col gap-[10px]">
          <img src="/assets/photos/t-shirts/7.png" alt="7" />
          <span className="text-red-600 line-through font-manrope text-[18px] font-bold leading-normal tracking-[1.286px] ">
            120 ლარი
          </span>
          <span className="text-white  font-manrope text-[18px] font-bold leading-normal tracking-[1.286px] ">
            79 ლარი
          </span>
        </div>
        <div className="text-center flex flex-col gap-[10px]">
          <img src="/assets/photos/t-shirts/8.png" alt="8" />
          <span className="text-red-600 line-through font-manrope text-[18px] font-bold leading-normal tracking-[1.286px] ">
            90 ლარი
          </span>
          <span className="text-white  font-manrope text-[18px] font-bold leading-normal tracking-[1.286px] ">
            49 ლარი
          </span>
        </div>
      </div>
      <Fotter />
    </div>
  );
}

export default Shirts;
