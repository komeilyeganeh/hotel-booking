import { Swiper, SwiperSlide } from "swiper/react";
import TitleSection from "../UI/TitleSection";
import { arrImages } from "./Images";
import GalleryImage from "./GalleryImage";
import { Keyboard, Navigation } from "swiper";
import ButtonOpenImg from "./ButtonOpenImg";

import "swiper/css";
import "swiper/css/navigation";
import { useContext } from "react";
import GalleryContext from "../../Context/GalleryContext";

const Gallery = () => {
  const galleryContext = useContext(GalleryContext);

  const showModalHandler = (src) => {
    galleryContext.showModal(src);
  }

  return (
    <div>
      <TitleSection>گالری تصاویر</TitleSection>
      <div className="mt-12">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          modules={[Keyboard, Navigation]}
          breakpoints={{
            568: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
        >
          {arrImages.map((img) => (
            <SwiperSlide className="relative group">
              <GalleryImage srcImg={img} />
              <ButtonOpenImg onShow={() => showModalHandler(img)}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
