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
  };
  return (
    <div>
      <Header />
      <div className="flex justify-center font-playfair p-[24px] pt-[37px] pb-[37px] w-full h-full bg-black text-white text-[30px] tracking-[1.071px]">
        მაისურები
      </div>
      <div>
        <Slider {...settings}>
          <div>
            <img src="/assets/photos/123123.png" alt="Slide 1" />
          </div>
          <div>
            <img src="/assets/photos/123123.png" alt="Slide 2" />
          </div>
          <div>
            <img src="/assets/photos/123123.png" alt="Slide 3" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Shirts;
