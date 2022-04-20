import ContactForm from "./ContactForm";
import TitlePage from "../TitlePage";
import {MdLocationPin, MdEmail} from "react-icons/md";
import {AiFillPhone} from "react-icons/ai";
import {FaFax} from "react-icons/fa";
import {BsTwitter, BsFacebook, BsTelegram, BsGoogle, BsLinkedin} from "react-icons/bs";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <TitlePage>
        <div className="w-full flex flex-col gap-y-5">
          <h1 className="text-sm md:text-2xl text-white font-bold">
            تماس با ما
          </h1>
          <ol className="flex text-sm text-white">
            <li className="ml-2"> خانه </li> /
            <li className="text-orange-400 mx-2"> تماس با ما </li>
          </ol>
        </div>
      </TitlePage>
      <h1 className="text-lg lg:text-2xl mt-8">تماس با ما</h1>
      <div className="mt-8 flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 mt-4">
          <ContactForm />
        </div>
        <div className="w-full md:w-1/3 mt-9 p-4 flex flex-col gap-y-8">
            <div className="flex items-end gap-x-2">
                <MdLocationPin size="27" color="orange"/> <span className="text-gray-500">ایران، تهران</span>
            </div>
            <div className="flex items-end gap-x-2">
                <MdEmail size="27" color="orange"/> <span className="text-gray-500">hotel@example.com</span>
            </div>
            <div className="flex items-end gap-x-2">
                <AiFillPhone size="27" color="orange"/> <span className="text-gray-500">12345 - 021</span>
            </div>
            <div className="flex items-end gap-x-2">
                <FaFax size="27" color="orange"/> <span className="text-gray-500">hotel@example.com</span>
            </div>
            <div className="flex gap-x-6 mt-4">
                <Link to=""><BsFacebook color="blue" size={19}/></Link>
                <Link to=""><BsGoogle color="red" size={19}/></Link>
                <Link to=""><BsLinkedin color="#035397" size={19}/></Link>
                <Link to=""><BsTelegram color="#30AADD" size={19}/></Link>
                <Link to=""><BsTwitter color="blue" size={19}/></Link>
            </div>
        </div>
      </div>
      <div className="mt-16 w-full">
            <div className="mapouter relative text-right">
            <div class="gmap_canvas overflow-hidden bg-none">
              <iframe
                width="100%"
                height="300"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=tehran&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
              <a href="https://putlocker-is.org"></a>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ContactUs;
