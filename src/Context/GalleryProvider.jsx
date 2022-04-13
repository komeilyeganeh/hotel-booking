import { useReducer } from "react";
import GalleryContext from "./GalleryContext";

const defaultState = {
  srcImg: "",
  isShow: false,
  viewImage: () => {},
  showModal: () => {},
  hideModal: () => {},
};

const GalleryReducer = (state, action) => {
  if (action.type === "SHOW_MODAL") {
    state.isShow = true;
  }
  if (action.type === "HIDE_MODAL") {
    state.isShow = false;
  }
  return defaultState;
};

const GalleryProvider = ({ children }) => {
  const [galleryState, dispatch] = useReducer(GalleryReducer, defaultState);

  const viewImageHandler = () => {
    dispatch({ type: "SHOW" });
  };

  const showModalHandler = () => {
    dispatch({ type: "SHOW_MODAL" });
  };

  const hideModalHandler = () => {
    dispatch({ type: "HIDE_MODAL" });
  };

  const valueContext = {
    srcImg: galleryState.srcImg,
    isShow: galleryState.isShow,
    viewImage: viewImageHandler,
    showModal: showModalHandler,
    hideModal: hideModalHandler,
  };

  return (
    <GalleryContext.Provider value={valueContext}>
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryProvider;
