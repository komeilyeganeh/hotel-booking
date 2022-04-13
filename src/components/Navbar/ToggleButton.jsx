import {FaBars, FaTimes} from "react-icons/fa";

const ToggleButton = ({ onToggleMenu, isShow }) => {
  return (
    <div className="block md:hidden" onClick={onToggleMenu}>
      {isShow ? <FaTimes className="text-3xl animate-fade-in text-orange-400 cursor-pointer"/> : <FaBars className="text-3xl animate-fade-in text-orange-400 cursor-pointer"/>}
    </div>
  );
};

export default ToggleButton;
