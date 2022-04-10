import Flickity from "react-flickity-component";
import img1 from "../../assets/slider1.jpg";
import img2 from "../../assets/slider2.jpg";
import img3 from "../../assets/slider3.jpg";
import Button from "../UI/Button";
import "flickity/css/flickity.css";
import SlideOverlay from "./SlideOverlay";
import SlideImg from "./SlideImg";

const SlideShow = () => {
  const settingSlider = {
    prevNextButtons: true,
    pageDots: false,
    cellAlign: "left",
    draggable: false
  };

  return (
    <Flickity
      className={"carousel"}
      options={settingSlider}
      disableImagesLoaded={false}
    >
      <div className="relative bg-gray-400">
        <SlideOverlay />
        <SlideImg srcImg={img1}/>
        <div className="slider__text">
          <p className="text-red-400 text-3xl lg:text-4xl text-center">هتل لوکس</p>
          <h1 className="text-white font-bold text-3xl lg:text-6xl text-center">رویا را لمس کن</h1>
          <a href="#" className="px-4 py-2 lg:px-5 lg:py-3 bg-red-500 text-white rounded-md">تماس با ما</a>
        </div>
      </div>
      <div className="relative bg-gray-400">
        <SlideOverlay />
        <SlideImg srcImg={img2}/>
        <div className="slider__text">
          <h1 className="text-white font-bold text-6xl text-center">که در آن رویاها به حقیقت می پیوندند</h1>
        </div>
      </div>
      <div className="relative bg-gray-400">
        <SlideOverlay />
        <SlideImg srcImg={img3}/>
        <div className="slider__text">
          <h1 className="text-white font-bold text-6xl text-center">از تعطیلات خود لذت ببرید</h1>
        </div>
      </div>
    </Flickity>
  );
};

export default SlideShow;
