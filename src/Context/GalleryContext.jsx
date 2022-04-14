import { createContext } from "react";

const GalleryContext = createContext({
    srcImg: "",
    isShow: false,
    setImage: (src) => {},
    showModal: () => {},
    hideModal: () => {}
});

export default GalleryContext;