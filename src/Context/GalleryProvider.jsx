import { useReducer } from "react";
import GalleryContext from "./GalleryContext";

const defaultState = {
  srcImg: "",
  isShow: false,
};

const galleryReducer = (state, action) => {
  if (action.type === "SET_SRC") {
    return {
      srcImg: action.payload,
      isShow: true,
    };
  }
  if (action.type === "SHOW_MODAL") {
    state.isShow = true;
  }
  if (action.type === "HIDE_MODAL") {
    return {
      srcImg: "",
      isShow: false,
    };
  }
  return defaultState;
};

const GalleryProvider = ({ children }) => {
  const [galleryState, dispatch] = useReducer(galleryReducer, defaultState);

  const setImageHandler = (src) => {
    dispatch({ type: "SET_SRC", payload: src });
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
    setImage: setImageHandler,
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
