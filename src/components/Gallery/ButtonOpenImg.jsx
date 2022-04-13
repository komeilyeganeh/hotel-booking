import { MdOpenInFull } from "react-icons/md";

const ButtonOpenImg = ({onShow}) => {
    return <span className="absolute top-1/2 right-1/2 duration-200 ease-in opacity-0 -translate-y-1/4 translate-x-1/2 text-2xl cursor-pointer bg-orange-400 text-white p-2 rounded-full
    group-hover:opacity-100 group-hover:-translate-y-1/2" onClick={onShow}><MdOpenInFull /></span>
}

export default ButtonOpenImg;