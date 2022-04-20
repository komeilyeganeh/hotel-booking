import StarComment from "../../Comments/StarComment";
import { BsWifi } from "react-icons/bs";
import { RiCupFill } from "react-icons/ri";
import { MdMonitor } from "react-icons/md";
import { Link } from "react-router-dom";
import EllipsisText from "react-ellipsis-text";
import { roomsFake } from "./DataRooms";

const RoomsList = () => {
  return (
    <div className="w-full mt-7 flex flex-col gap-y-8">
      {roomsFake.map((room) => (
        <div className="flex justify-between flex-col md:flex-row border border-slate-300 rounded-md overflow-hidden">
          <div className="w-full md:w-2/6">
            <Link to="/room-detail">
              <img src={room.src} alt="room" className="max-w-full" />
            </Link>
          </div>
          <div className="p-3 w-full flex flex-col items-start justify-between gap-y-4">
            <div className="flex flex-col gap-y-4">
              <Link to="/room-detail">{room.title}</Link>
              <StarComment />
            </div>
            <EllipsisText
              text={room.desc}
              length={250}
              className="text-gray-500 text-sm md:text-15 leading-6"
            />
            <div className="flex gap-x-4">
              <BsWifi color="darkorange" />
              <RiCupFill color="darkorange" />
              <MdMonitor color="darkorange" />
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/6 py-4 flex flex-col items-center justify-center gap-y-8 bg-slate-50">
            <div className="text-center text-orange-400">
              <span>{room.price} تومان</span>
              <p>شب</p>
            </div>
            <Link
              to="/room-detail"
              className="p-2 bg-orange-400 rounded-md text-white text-sm"
            >
              نمایش جزئیات
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomsList;
