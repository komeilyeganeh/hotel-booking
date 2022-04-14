import TitleSection from "../UI/TitleSection";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div>
      <TitleSection>راه های ارتباطی</TitleSection>
      <div className="mt-8 flex flex-col gap-y-12 sm:flex-row sm:justify-between">
        <div className="w-full sm:w-3/5 lg:w-2/5">
          <ContactForm />
        </div>
        <div className="flex flex-col gap-y-8 w-full sm:w-2/6 lg:w-2/5">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
