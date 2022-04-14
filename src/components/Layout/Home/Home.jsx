import SlideShow from "../../Slider/SlideShow";
import Booking from "../../Booking/Booking";
import About from "../../About/About";
import OurRooms from "../../Rooms/OurRooms";
import Gallery from "../../Gallery/Gallery";
import img1 from "../../../assets/slider1.jpg";

import { Fragment } from "react";
import Comments from "../../Comments/Comments";
import Contact from "../../Contact/Contact";

const Home = ({onShowModal}) => {
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

          {/* ContactUs */}
          <section className="mt-7 p-8 bg-slate-600">
            <Contact />
          </section>
        </Fragment>
      );
}

export default Home;