import TitlePage from "../TitlePage";
import BookingForm from "./BookingForm";

const BookingHotel = () => {
  return (
    <div>
      <TitlePage>
        <div className="w-full flex flex-col gap-y-5">
          <h1 className="text-sm md:text-2xl text-white font-bold">
            رزرو اتاق
          </h1>
          <ol className="flex text-sm text-white">
            <li className="ml-2"> خانه </li> /
            <li className="text-orange-400 mx-2"> رزروآنلاین </li>
          </ol>
        </div>
      </TitlePage>
      <div className="mt-7">
          <h1 className="text-lg md:text-2xl">فرم رزرو</h1>
          <div className="mt-8 w-full sm:w-3/5 lg:w-2/5">
              <BookingForm />
          </div>
      </div>
    </div>
  );
};

export default BookingHotel;
