import TitlePage from "../TitlePage";
import RoomsList from "./RoomsList";

const RoomsPage = () => {
  return (
    <div>
      <TitlePage>
        <div className="w-full flex flex-col gap-y-5">
          <h1 className="text-sm md:text-2xl text-white font-bold">
            اتاق ها
          </h1>
          <ol className="flex text-sm text-white">
            <li className="ml-2"> خانه </li> /
            <li className="text-orange-400 mx-2"> اتاق ها </li>
          </ol>
        </div>
      </TitlePage>
      <RoomsList />
    </div>
  );
};

export default RoomsPage;
