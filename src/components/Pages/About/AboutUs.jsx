import TitlePage from "../TitlePage";
import { MdHotel, MdOutlineSportsHandball } from "react-icons/md";
import { BiRestaurant, BiSwim } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import award1 from "../../../assets/award1.svg";
import award2 from "../../../assets/award2.svg";
import award3 from "../../../assets/award3.svg";

const AboutUs = () => {
  return (
    <div>
      <TitlePage>
        <div className="w-full flex flex-col gap-y-5">
          <h1 className="text-sm md:text-2xl text-white font-bold">
            درباره ما
          </h1>
          <ol className="flex text-sm text-white">
            <li className="ml-2"> خانه </li> /
            <li className="text-orange-400 mx-2"> درباره ما </li>
          </ol>
        </div>
      </TitlePage>
      <div className="mt-8">
        <h1 className="text-lg lg:text-2xl">درباره ما</h1>
        <p className="mt-5 leading-8 text-sm sm:text-base sm:leading-8 text-gray-500 text-justify px-3">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
        <p className="mt-2 leading-8 text-sm sm:text-base sm:leading-8 text-gray-400 italic text-justify px-3">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد{" "}
        </p>
      </div>
      <div className="mt-9 flex flex-col gap-y-6 justify-between sm:flex-row">
        <div className="w-full md:w-36 h-36 relative rounded-md border-2 border-dashed border-orange-200 flex flex-col items-center justify-center gap-y-6">
          <span className="text-lg md:text-2xl">50</span>
          <span>اتاق</span>
          <MdHotel
            className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 opacity-5"
            size={90}
          />
        </div>
        <div className="w-full md:w-36 h-36 relative rounded-md border-2 border-dashed border-orange-200 flex flex-col items-center justify-center gap-y-6">
          <span className="text-lg md:text-2xl">2</span>
          <span>رستوران</span>
          <BiRestaurant
            className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 opacity-5"
            size={90}
          />
        </div>
        <div className="w-full md:w-36 h-36 relative rounded-md border-2 border-dashed border-orange-200 flex flex-col items-center justify-center gap-y-6">
          <span className="text-lg md:text-2xl">29</span>
          <span>کارکنان</span>
          <GoPerson
            className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 opacity-5"
            size={90}
          />
        </div>
        <div className="w-full md:w-36 h-36 relative rounded-md border-2 border-dashed border-orange-200 flex flex-col items-center justify-center gap-y-6">
          <span className="text-lg md:text-2xl">4</span>
          <span>استخر</span>
          <BiSwim
            className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 opacity-5"
            size={90}
          />
        </div>
        <div className="w-full md:w-36 h-36 relative rounded-md border-2 border-dashed border-orange-200 flex flex-col items-center justify-center gap-y-6">
          <span className="text-lg md:text-2xl">3</span>
          <span>زمین بازی</span>
          <MdOutlineSportsHandball
            className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 opacity-5"
            size={90}
          />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-lg md:text-2xl">افتخارات</h2>
        <div className="flex flex-col flex-wrap gap-y-6 justify-between mt-9 sm:flex-row w-full">
            <img src={award1} alt="award" className="max-w-full shadow-xl rounded-md"/>
            <img src={award2} alt="award" className="max-w-full shadow-xl rounded-md"/>
            <img src={award3} alt="award" className="max-w-full shadow-xl rounded-md"/>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
