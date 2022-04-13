import SlideShow from "../../Slider/SlideShow";
import Booking from "../../Booking/Booking";
import About from "../../About/About";
import OurRooms from "../../Rooms/OurRooms";
import Gallery from "../../Gallery/Gallery";
import img1 from "../../../assets/slider1.jpg";

import { Fragment } from "react";
import Comments from "../../Comments/Comments";

const Home = () => {
    return (
        <Fragment>
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
          <section className="my-7 p-8 bg-gradient-to-b from-white to-slate-300">
            <OurRooms />
          </section>
    
          {/* GalleryImage */}
          <section className="my-7 p-8">
            <Gallery />
          </section>

          {/* GuestComments */}
          <section className="my-7 p-8 bg-zinc-200">
            <Comments />
          </section>
        </Fragment>
      );
}

export default Home;