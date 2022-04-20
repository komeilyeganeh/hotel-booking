import { BsWifi } from "react-icons/bs";
import { RiCupFill } from "react-icons/ri";
import { MdMonitor } from "react-icons/md";
import RoomIcons from "./RoomIcons";
import { Link } from "react-router-dom";

const OurRoomsItem = ({ imgSrc, title, price, desc }) => {
    return <div className="rounded-md group overflow-hidden bg-white duration-300 ease-in hover:scale-105">
        <figure className="relative">
            <Link to="/room-detail">
                <img src={imgSrc} alt="room" className="max-w-full duration-300 ease-in-out group-hover:grayscale" />
            </Link>
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
            <Link to="/room-detail">{title}</Link>
            <p className="text-sm text-gray-500 mt-3">{desc}</p>
        </div>
    </div>
}

export default OurRoomsItem;