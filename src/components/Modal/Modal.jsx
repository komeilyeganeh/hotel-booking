import { Fragment } from "react";
import { createPortal } from "react-dom";

const Overlay = ({onHideModal}) => {
  return (
    <div className="w-full h-screen fixed top-0 right-0 bg-gray-800 opacity-80 flex items-center justify-center z-1000" onClick={onHideModal}/>
  );
};

const ModalOverLay = ({children}) => {
  return <div className="w-1/2">{children}</div>;
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
