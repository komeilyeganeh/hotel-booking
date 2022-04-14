import Button from "../UI/Button";
import Input from "../UI/Input";

const ContactForm = () => {
    return <form action="" className="flex flex-col gap-y-5">
        <Input type="text" placeholder="نام را وارد کنید" className="w-full"/>
        <Input type="email" placeholder="ایمیل را وارد کنید" className="w-full"/>
        <textarea name="" cols="30" rows="10" placeholder="متن پیام..." className="w-full p-3 form__input resize-none"></textarea>
        <Button type="submit">ارسال</Button>
    </form>
}

export default ContactForm;