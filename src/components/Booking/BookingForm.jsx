import Button from "../UI/Button";
import Input from "../UI/Input";

const roomTypes = ["اتاق یک نفره", "اتاق دو نفره", "اتاق لوکس"];

const BookingForm = () => {
  return (
    <form action="" className="flex flex-col gap-y-5 md:gap-0 md:flex-row justify-between items-center w-full">
      <div className="flex flex-col w-full md:w-auto">
        <label className="mb-3" htmlFor="fname">نام</label>
        <Input type="text" placeholder="نام را وارد کنید" id="fname"/>
      </div>
      <div className="flex flex-col w-full md:w-auto">
        <label className="mb-3" htmlFor="email">ایمیل</label>
        <Input type="email" placeholder="ایمیل را وارد کنید" id="email"/>
      </div>
      <div className="flex flex-col w-full md:w-auto">
        <label className="mb-3" htmlFor="num">مهمان</label>
        <input type="number" min="0" defaultValue="0" className="form__input" id="num"/>
      </div>
      <div className="flex flex-col w-full md:w-auto">
        <label className="mb-3">نوع اتاق</label>
        <select name="" className="text-sm p-1 rounded-md">
            {roomTypes.map(room => (
                <option value={room}>{room}</option>
            ))}
        </select>
      </div>
      <Button type="submit" className="w-full md:w-auto">رزرو</Button>
    </form>
  );
};

export default BookingForm;
