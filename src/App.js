import { Fragment, useContext } from "react";
import ImageViewer from "./components/Gallery/ImageViewer";
import Header from "./components/Header/Header";
import GalleryContext from "./Context/GalleryContext";
import Main from "./components/Layout/Main/Main";
import Home from "./components/Layout/Home/Home";
import Footer from "./components/Footer/Footer";
import RoomDetail from "./pages/RoomDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const galleryContext = useContext(GalleryContext);
  const isShow = galleryContext.isShow;

  return (
    <Fragment>
      {isShow && <ImageViewer />}
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/room-detail" element={<RoomDetail />} />
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
