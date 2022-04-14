import { Fragment, useContext } from "react";
import { createPortal } from "react-dom";
import GalleryContext from "../../Context/GalleryContext";

const Overlay = () => {
  const galleryContext = useContext(GalleryContext);
  const hideModalHandler = () => {
    galleryContext.hideModal();
  }
  return (
    <div className="w-full h-screen fixed top-0 right-0 bg-gray-800 opacity-80 flex items-center justify-center z-1000" onClick={hideModalHandler} />
  );
};

const ModalOverLay = ({children}) => {
  return <div className="fixed w-full md:w-10/12 lg:w-auto top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 flex items-center justify-center z-1000">{children}</div>;
};

const Modal = ({onHideModal, children}) => {
  return (
    <Fragment>
      {createPortal(<Overlay onHideModal={onHideModal}/>, document.getElementById("overlays"))}
      {createPortal(<ModalOverLay>{children}</ModalOverLay>, document.getElementById("overlays"))}
    </Fragment>
  );
};

export default Modal;
