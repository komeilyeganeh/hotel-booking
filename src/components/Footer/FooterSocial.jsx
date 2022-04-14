import { Fragment } from "react";
import { BsInstagram, BsFacebook, BsTelegram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import {ImGooglePlus3} from "react-icons/im";

const FooterSocial = () => {
  return <Fragment>
      <a href="#"><BsInstagram /></a>
      <a href="#"><BsFacebook /></a>
      <a href="#"><IoLogoYoutube /></a>
      <a href="#"><BsTelegram /></a>
      <a href="#"><ImGooglePlus3 /></a>
  </Fragment>;
};

export default FooterSocial;
