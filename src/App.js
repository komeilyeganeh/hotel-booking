import { Fragment, useContext, useEffect, useState } from "react";
import ImageViewer from "./components/Gallery/ImageViewer";
import Header from "./components/Header/Header";
import GalleryContext from "./Context/GalleryContext";
import Main from "./components/Layout/Main/Main";
import Home from "./components/Layout/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  const galleryContext = useContext(GalleryContext);
  const isShow = galleryContext.isShow;

  return (
    <Fragment>
      {isShow && <ImageViewer />}
      <Header />
      <Main>
        <Home />
      </Main>
      <Footer />
    </Fragment>
  );
}

export default App;
