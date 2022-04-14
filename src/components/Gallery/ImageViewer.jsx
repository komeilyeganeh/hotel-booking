import { useContext } from "react";
import GalleryContext from "../../Context/GalleryContext";
import Modal from "../Modal/Modal";
import {FaTimes} from "react-icons/fa";

const ImageViewer = () => {
  const galleryContext = useContext(GalleryContext);
  const src = galleryContext.srcImg;
  const hideModalHandler = () => {
    galleryContext.hideModal();
  }

  return (
    <Modal>
      <FaTimes className="lg:hidden absolute top-6 sm:top-8 right-3 z-1000 bg-white text-orange-400 cursor-pointer text-4xl p-1 rounded-lg" onClick={hideModalHandler}/>
      <img src={src} alt="gallery-img" className="max-w-full"/>
    </Modal>
  );
};

export default ImageViewer;
