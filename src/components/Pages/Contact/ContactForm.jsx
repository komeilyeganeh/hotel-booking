import Input from "../../UI/Input";
import Button from "../../UI/Button";

const ContactForm = () => {
    return <form className="w-full md:w-4/6 flex flex-col gap-y-5">
        <Input type="text" placeholder="نام" className="w-full"/>
        <Input type="email" placeholder="ایمیل" className="w-full"/>
        <Input type="text" placeholder="موضوع" className="w-full"/>
        <textarea name="" className="form__input w-full resize-none" placeholder="متن پیام..." rows="6"></textarea>
        <Button type="submit">ارسال پیام</Button>
    </form>
}

export default ContactForm;