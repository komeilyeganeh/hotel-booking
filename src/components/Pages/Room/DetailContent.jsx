import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Autoplay, EffectFade } from "swiper";
import { BsCheckLg } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";
import StarComment from "../../Comments/StarComment";
import single1 from "../../../assets/roomDetail/single1.jpg";
import single2 from "../../../assets/roomDetail/single8.jpg";
import single3 from "../../../assets/roomDetail/single3.jpg";
import single4 from "../../../assets/roomDetail/single7.jpg";
import single5 from "../../../assets/roomDetail/single5.jpg";
import banner from "../../../assets/banner.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Comments from "./Comments";

const images = [single1, single2, single3, single4, single5];

const DetailContent = () => {
  return (
    <div className="flex justify-between">
      <div className="hidden lg:block sidebar w-1/6 mt-12">
        <div className="border border-gray-200 bg-slate-50 px-2 py-4 flex flex-col gap-y-3 justify-center items-center rounded-md">
          <h2>به کمک نیاز دارید؟</h2>
          <span>12345 - 021</span>
          <address>hotel@example.com</address>
        </div>
        <div className="mt-12 w-full">
          <img src={banner} alt="banner" className="max-w-full" />
        </div>
      </div>
      <div className="w-full lg:w-4/5">
        <div className="mt-12">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            effect={"fade"}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Keyboard, Navigation, Autoplay, EffectFade]}
          >
            {images.map((img) => (
              <SwiperSlide>
                <img src={img} alt="single" className="max-w-full" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-5">
          <p className="text-gray-500 leading-7 text-justify text-sm lg:text-base">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد....
          </p>
          <p className="mt-4 text-gray-500 leading-7 text-justify text-sm lg:text-base">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
            مورد استفاده قرار گیرد. و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد. و جوابگوی سوالات پیوسته اهل
            دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <h2 className="mt-8 text-lg lg:text-2xl">خدمات اتاق</h2>
          <div className="services__room mt-5 flex flex-col gap-y-4 justify-between sm:flex-row">
            <div>
              <ul className="flex flex-col gap-y-4">
                <li className="flex items-center italic text-gray-500 text-sm lg:text-base">
                  <BsCheckLg color="green" style={{ marginLeft: ".5rem" }} />{" "}
                  اینترنت رایگان
                </li>
                <li className="flex items-center italic text-gray-500 text-sm lg:text-base">
                  <BsCheckLg color="green" style={{ marginLeft: ".5rem" }} />
                  تخت دو نفره
                </li>
                <li className="flex items-center italic text-gray-500 text-sm lg:text-base">
                  <FaTimes color="red" style={{ marginLeft: ".5rem" }} />
                  نمای ساحل
                </li>
                <li className="flex items-center italic text-gray-500 text-sm lg:text-base">
                  <BsCheckLg color="green" style={{ marginLeft: ".5rem" }} />
                  بالکن اختصاصی
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-y-4">
                <li className="flex items-center italic text-gray-500 text-sm lg:text-base">
                  <BsCheckLg color="green" style={{ marginLeft: ".5rem" }} />{" "}
                  اینترنت رایگان
                </li>
                <li className="flex items-center italic text-gray-500 text-sm lg:text-base">
                  <FaTimes color="red" style={{ marginLeft: ".5rem" }} />
                    تلویزیون صفحه نمایش تخت
                </li>
                <li className="flex items-center italic text-gray-500 text-sm lg:text-base">
                  <BsCheckLg color="green" style={{ marginLeft: ".5rem" }} />
                  صبحانه
                </li>
                <li className="flex items-center italic text-gray-500 text-sm lg:text-base">
                  <BsCheckLg color="green" style={{ marginLeft: ".5rem" }} />
                  بالکن اختصاصی
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-y-4">
                <li className="flex items-center italic text-gray-500 text-sm lg:text-base">
                  <BsCheckLg color="green" style={{ marginLeft: ".5rem" }} />{" "}
                  اینترنت رایگان
                </li>
                <li className="flex items-center italic text-gray-500 text-sm lg:text-base">
                  <BsCheckLg color="green" style={{ marginLeft: ".5rem" }} />
                  تخت دو نفره
                </li>
                <li className="flex items-center italic text-gray-500 text-sm lg:text-base">
                  <BsCheckLg color="green" style={{ marginLeft: ".5rem" }} />
                  صبحانه
                </li>
                <li className="flex items-center italic text-gray-500 text-sm lg:text-base">
                  <BsCheckLg color="green" style={{ marginLeft: ".5rem" }} />
                  بالکن اختصاصی
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="room__review w-full mt-16 flex flex-col justify-start sm-500:flex-row">
            <div className="w-full sm-500:w-1/6">
                <div className="py-3 bg-orange-400 flex flex-col gap-y-2 justify-center items-center rounded-lg">
                    <span className="text-2xl text-white">4.8</span>
                    <StarComment />
                </div>
            </div>
            <div className="flex flex-col gap-y-2 mt-5 md:mr-6 w-full sm-500:w-3/4 sm-500:mt-0 sm-500:mr-6">
                <div className="progress__item flex items-center gap-x-5">
                    <span className="flex items-center text-gray-500 text-sm"> 5 <AiTwotoneStar color="orange"/></span>
                    <div className="relative w-96 h-2 bg-gray-200">
                        <div className="absolute top-0 right-0 h-full w-1/2 bg-orange-300"></div>
                    </div>
                    <span className="text-gray-500 text-sm">%50</span>
                </div>
                <div className="progress__item flex items-center gap-x-5">
                    <span className="flex items-center text-gray-500 text-sm"> 4 <AiTwotoneStar color="orange"/></span>
                    <div className="relative w-96 h-2 bg-gray-200">
                        <div className="absolute top-0 right-0 h-full w-4/5 bg-orange-300"></div>
                    </div>
                    <span className="text-gray-500 text-sm">%80</span>
                </div>
                <div className="progress__item flex items-center gap-x-5">
                    <span className="flex items-center text-gray-500 text-sm"> 3 <AiTwotoneStar color="orange"/></span>
                    <div className="relative w-96 h-2 bg-gray-200">
                        <div className="absolute top-0 right-0 h-full w-1/5 bg-orange-300"></div>
                    </div>
                    <span className="text-gray-500 text-sm">%20</span>
                </div>
                <div className="progress__item flex items-center gap-x-5">
                    <span className="flex items-center text-gray-500 text-sm"> 2 <AiTwotoneStar color="orange"/></span>
                    <div className="relative w-96 h-2 bg-gray-200">
                        <div className="absolute top-0 right-0 h-full w-1/12 bg-orange-300"></div>
                    </div>
                    <span className="text-gray-500 text-sm">%8</span>
                </div>
                <div className="progress__item flex items-center gap-x-5">
                    <span className="flex items-center text-gray-500 text-sm"> 1 <AiTwotoneStar color="orange"/></span>
                    <div className="relative w-96 h-2 bg-gray-200">
                        <div className="absolute top-0 right-0 h-full"></div>
                    </div>
                    <span className="text-gray-500 text-sm">%0</span>
                </div>
            </div>
        </div>
        <Comments />
      </div>
    </div>
  );
};

export default DetailContent;
