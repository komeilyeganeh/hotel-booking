const DetailTitle = () => {
  return (
    <div className="relative bg-breadcrumb bg-center bg-sky-900 bg-blend-overlay h-52 opacity-80">
      <div className="h-full flex flex-col justify-around items-start md:flex-row md:justify-between md:items-center px-5">
        <div className="w-full flex flex-col gap-y-5">
          <h1 className="text-sm md:text-2xl text-white font-bold">اتاق یک نفره</h1>
          <ol className="flex text-sm text-white">
            <li className="ml-2"> خانه </li> /
            <li className="mx-2">  اتاق ها </li> /
            <li className="text-orange-400 mx-2">  اتاق یک نفره </li>
          </ol>
        </div>
        <div className="w-full">
          <p className="text-sm md:text-2xl text-orange-600 font-bold">300,000 تومان / شب</p>
        </div>
      </div>
    </div>
  );
};

export default DetailTitle;
