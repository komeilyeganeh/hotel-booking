import Input from "../../UI/Input";
import Button from "../../UI/Button";

const BookingForm = () => {
  return (
    <form className="w-full flex flex-col gap-y-5">
        <Input type="text" placeholder="نام" className="w-full"/>
        <Input type="email" placeholder="ایمیل" className="w-full"/>
        <Input type="number" placeholder="شماره موبایل" className="w-full"/>
        <Input type="text" placeholder="کشور" className="w-full"/>
        <Input type="number" placeholder="مهمان" className="w-full"/>
        <select className="w-full p-1 text-sm">
            <option>نوع اتاق</option>
            <option value="یک نفره">یک نفره</option>
            <option value="دو نفره">دو نفره</option>
            <option value="لوکس">لوکس</option>
            <option value="خانوادگی">خانوادگی</option>
            <option value="اتاق با view">اتاق با view</option>
            <option value="پادشاهی">پادشاهی</option>
        </select>
        <textarea name="" className="form__input w-full resize-none" placeholder="متن پیام..." rows="6"></textarea>
        <Button type="submit">ثبت درخواست</Button>
    </form>
  );
};

export default BookingForm;
