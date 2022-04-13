import { useContext } from "react";
import ImageViewer from "./components/Gallery/ImageViewer";
import Header from "./components/Header/Header";
import GalleryContext from "./Context/GalleryContext";
import GalleryProvider from "./Context/GalleryProvider";
import Main from "./components/Layout/Main/Main";
import Home from "./components/Layout/Home/Home";

function App() {
  const galleryContext = useContext(GalleryContext);

  const showModal = galleryContext.isShow;

  const hideModalHandler = () => {
    galleryContext.hideModal();
  };

  return (
    <GalleryProvider>
      {showModal && <ImageViewer />}
      <Header />
      <Main>
        <Home />
      </Main>
    </GalleryProvider>
  );
}

export default App;
