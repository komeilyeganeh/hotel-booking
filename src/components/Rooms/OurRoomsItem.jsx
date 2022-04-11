import { BsWifi } from "react-icons/bs";
import { RiCupFill } from "react-icons/ri";
import { MdMonitor } from "react-icons/md";
import RoomIcons from "./RoomIcons";

const OurRoomsItem = ({ imgSrc, title, price, desc }) => {
    return <div className="rounded-md group overflow-hidden bg-white duration-300 ease-in hover:scale-105">
        <figure className="relative">
            <a href="#">
                <img src={imgSrc} alt="room" className="max-w-full duration-300 ease-in-out group-hover:grayscale" />
            </a>
            <div className="absolute bottom-3 right-3 duration-300 ease-in flex flex-col gap-y-1 group-hover:gap-y-4">
                <RoomIcons><BsWifi /></RoomIcons>
                <RoomIcons><RiCupFill /></RoomIcons>
                <RoomIcons><MdMonitor /></RoomIcons>
            </div>
            <div className="price absolute bottom-3 left-3">
                <p className="p-1 md:p-2 bg-indigo-400 text-sm rounded-md text-white duration-300 ease-in group-hover:bg-indigo-500">{price} تومان / شب</p>
            </div>
        </figure>
        <div className="p-4 text-center">
            <a href="">{title}</a>
            <p className="text-sm text-gray-500 mt-3">{desc}</p>
        </div>
    </div>
}

export default OurRoomsItem;