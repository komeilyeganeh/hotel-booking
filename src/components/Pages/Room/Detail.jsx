import DetailContent from "./DetailContent";
import TitlePage from "../TitlePage";

const Detail = () => {
  return (
    <div>
      <TitlePage>
        <div className="w-full flex flex-col gap-y-5">
          <h1 className="text-sm md:text-2xl text-white font-bold">
            اتاق یک نفره
          </h1>
          <ol className="flex text-sm text-white">
            <li className="ml-2"> خانه </li> /
            <li className="mx-2"> اتاق ها </li> /
            <li className="text-orange-400 mx-2"> اتاق یک نفره </li>
          </ol>
        </div>
        <div className="w-full">
          <p className="text-sm md:text-2xl text-orange-600 font-bold">
            300,000 تومان / شب
          </p>
        </div>
      </TitlePage>
      <DetailContent />
    </div>
  );
};

export default Detail;
