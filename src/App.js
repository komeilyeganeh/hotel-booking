import { Fragment, useContext, useEffect, useState } from "react";
import ImageViewer from "./components/Gallery/ImageViewer";
import Header from "./components/Header/Header";
import GalleryContext from "./Context/GalleryContext";
import Main from "./components/Layout/Main/Main";
import Home from "./components/Layout/Home/Home";
import Footer from "./components/Footer/Footer";
import RoomDetail from "./pages/RoomDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rooms from "./pages/Rooms";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import { SpinnerInfinity } from "spinners-react";

function App() {
  const galleryContext = useContext(GalleryContext);
  const [isPreload, setIsPreload] = useState(true);
  const isShow = galleryContext.isShow;

  useEffect(() => {
    setTimeout(() => {
      setIsPreload(false);
    }, 3000);
  }, []);

  return (
    <Fragment>
      {/* Preloader */}
      <div className={`fixed top-0 right-0 w-full min-h-screen bg-gray-800 flex items-center justify-center z-99999 duration-300 ease-in ${!isPreload && "scale-75 opacity-0 invisible"}`}>
          <SpinnerInfinity color="orange" size={80}/>
      </div>
      {isShow && <ImageViewer />}
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/room-detail" element={<RoomDetail />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
