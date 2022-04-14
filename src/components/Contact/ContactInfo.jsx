import { Fragment } from "react";
import { GoLocation } from "react-icons/go";
import {AiTwotonePhone} from "react-icons/ai";
import {MdEmail} from "react-icons/md";
import {ImEarth} from "react-icons/im";
import {FaFax} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <Fragment>
      <div className="flex items-center gap-x-5">
        <span>
          <GoLocation className="text-2xl text-orange-400"/>
        </span>
        <p className="text-white text-sm sm:text-base">ایران، تبریز</p>
      </div>
      <div className="flex items-center gap-x-5">
        <span>
          <AiTwotonePhone className="text-2xl text-orange-400"/>
        </span>
        <p className="text-white text-sm sm:text-base">123456 - 021</p>
      </div>
      <div className="flex items-center gap-x-5">
        <span>
          <MdEmail className="text-2xl text-orange-400"/>
        </span>
        <p className="text-white text-sm sm:text-base">hoteliran@example.com</p>
      </div>
      <div className="flex items-center gap-x-5">
        <span>
          <ImEarth className="text-2xl text-orange-400"/>
        </span>
        <p className="text-white text-sm sm:text-base">www......com</p>
      </div>
      <div className="flex items-center gap-x-5">
        <span>
          <FaFax className="text-2xl text-orange-400"/>
        </span>
        <p className="text-white text-sm sm:text-base">123456 - 021</p>
      </div>
    </Fragment>
  );
};

export default ContactInfo;
