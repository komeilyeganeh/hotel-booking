import Booking from "../Booking/Booking";
import SlideShow from "../Slider/SlideShow";
import img1 from "../../assets/slider1.jpg";
import About from "../About/About";
import OurRooms from "../Rooms/OurRooms";

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

      {/* AboutUs */}
      <section className="md:my-10 p-8">
        <About />
      </section>

      {/* ourRooms */}
      <section className="my-10 p-8 bg-gradient-to-b from-white to-slate-300">
        <OurRooms />
      </section>
    </main>
  );
};

export default Main;
