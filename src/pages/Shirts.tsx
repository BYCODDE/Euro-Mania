import Header from "../components/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div>
      <Header />
      <div className="flex justify-center font-playfair p-[24px] pt-[37px] pb-[37px] w-full h-full bg-black text-white text-[30px] tracking-[1.071px]">
        მაისურები
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src="/assets/photos/t-shirts/1.png" alt="Slide 1" />
          </div>
          <div>
            <img src="/assets/photos/t-shirts/2.png" alt="Slide 2" />
          </div>
          <div>
            <img src="/assets/photos/t-shirts/3.png" alt="Slide 3" />
          </div>
          <div>
            <img src="/assets/photos/t-shirts/4.png" alt="Slide 4" />
          </div>
          <div>
            <img src="/assets/photos/t-shirts/5.png" alt="Slide 5" />
          </div>
          <div>
            <img src="/assets/photos/t-shirts/6.png" alt="Slide 6" />
          </div>
          <div>
            <img src="/assets/photos/t-shirts/7.png" alt="Slide 7" />
          </div>
          <div>
            <img src="/assets/photos/t-shirts/8.png" alt="Slide 8" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Shirts;
