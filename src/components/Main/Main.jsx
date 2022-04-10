import Booking from "../Booking/Booking";
import SlideShow from "../Slider/SlideShow";
import img1 from "../../assets/slider1.jpg";

const Main = () => {
  return (
    <main className="mt-20 w-full">
      {/* SlideShow */}
      <section className="slider overflow-x-hidden">
        <SlideShow />
        <img src={img1} alt="slider" className="block sm:hidden"/>
      </section>

      {/* BookingForm */}
      <section className="p-3 flex justify-center">
        <Booking />
      </section>
    </main>
  );
};

export default Main;
