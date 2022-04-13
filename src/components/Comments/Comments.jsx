import { Swiper, SwiperSlide } from "swiper/react";
import TitleSection from "../UI/TitleSection";
import { fakeComments } from "./fakeComments";
import CommentItem from "./CommentItem";

import "swiper/css";

const Comments = () => {
  return (
    <div>
      <TitleSection>نظرات مهمانان</TitleSection>
      <div className="mt-12">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {fakeComments.map((comment) => (
            <SwiperSlide className="relative w-3/12 bg-white p-3 flex flex-col gap-y-4 items-center rounded-md">
                <CommentItem comment={comment}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Comments;
