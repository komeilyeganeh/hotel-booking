import Modal from "../Modal/Modal";

const ImageViewer = ({ srcImg }) => {
  return (
    <Modal>
      <img src={srcImg} alt="gallery-img" />
    </Modal>
  );
};

export default ImageViewer;
