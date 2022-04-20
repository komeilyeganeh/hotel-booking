import user1 from "../../../assets/users/user1.jpg";
import user2 from "../../../assets/users/user2.jpg";
import user3 from "../../../assets/users/user3.jpg";

const Comments = () => {
  return (
    <div className="mt-16 flex flex-col gap-y-5">
      <div className="flex items-center gap-x-4">
        <div className="img__user w-20">
          <img src={user1} alt="user" className="rounded-full border-2 border-gray-400 max-w-full"/>
        </div>
        <div className="comment__info p-2 border border-r-8 border-slate-200 rounded-md w-11/12">
          <div className="flex items-center gap-x-4 text-sm">
            <p>مهناز رحمانی</p>
            <span className="text-orange-400">اسفند - 1400</span>
          </div>
          <p className="text-sm text-gray-400 mt-4 leading-6">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده{" "}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <div className="img__user w-20">
          <img src={user2} alt="user" className="rounded-full border-2 border-gray-400 max-w-full"/>
        </div>
        <div className="comment__info p-2 border border-r-8 border-slate-200 rounded-md w-11/12">
          <div className="flex items-center gap-x-4 text-sm">
            <p>علی موسوی</p>
            <span className="text-orange-400">آذر - 1400</span>
          </div>
          <p className="text-sm text-gray-400 mt-4 leading-6">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده{" "}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <div className="img__user w-20">
          <img src={user3} alt="user" className="rounded-full border-2 border-gray-400 max-w-full"/>
        </div>
        <div className="comment__info p-2 border border-r-8 border-slate-200 rounded-md w-11/12">
          <div className="flex items-center gap-x-4 text-sm">
            <p>رضا جلالی</p>
            <span className="text-orange-400">شهریور - 1400</span>
          </div>
          <p className="text-sm text-gray-400 mt-4 leading-6">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهایی می باشد کتابهای زیادی
            {" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
