import imgSingleRoom from "../../assets/rooms/single1.jpg";
import imgDoubleRoom from "../../assets/rooms/double.jpg";
import imgDeluxeRoom from "../../assets/rooms/deluxe.jpg";
import OurRoomsItem from "./OurRoomsItem";
import TitleSection from "../UI/TitleSection";

const ourRooms = [
  {
    img: imgSingleRoom,
    title: "اتاق یک نفره",
    description: "از اتاق یک نفره ما لذت ببرید",
    price: "300,000",
  },
  {
    img: imgDoubleRoom,
    title: "اتاق دو نفره",
    description: "از اتاق دو نفره ما لذت ببرید",
    price: "560,000",
  },
  {
    img: imgDeluxeRoom,
    title: "اتاق لوکس",
    description: "از اتاق لوکس ما لذت ببرید",
    price: "980,000",
  },
];

const OurRooms = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <TitleSection>اتاق های ما</TitleSection>
        <a
          href="#"
          className="px-4 py-2 lg:px-3 lg:py-2 border-b-2 border-orange-400 text-orange-400 rounded-md duration-200 hover:bg-orange-400 hover:text-white"
        >
          تمام اتاق ها
        </a>
      </div>
      <div className="row flex flex-col items-center gap-y-5 md:flex-row md:justify-between md:gap-x-6 md:w-auto my-9">
        {ourRooms.map((room) => (
          <OurRoomsItem
            imgSrc={room.img}
            title={room.title}
            price={room.price}
            desc={room.description}
          />
        ))}
      </div>
    </div>
  );
};

export default OurRooms;
