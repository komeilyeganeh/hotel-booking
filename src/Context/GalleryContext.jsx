import { createContext } from "react";

const GalleryContext = createContext({
    srcImg: "",
    isShow: false,
    viewImage: () => {},
    showModal: (src) => {},
    hideModal: () => {}
});

export default GalleryContext;