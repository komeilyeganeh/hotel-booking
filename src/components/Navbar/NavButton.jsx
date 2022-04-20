import { Link } from "react-router-dom";

const NavButton = () => {
  return <Link to="booking" className="inline-block py-2 px-5 text-sm md:text-base bg-orange-400 rounded-md text-white ease-in-out duration-200 hover:bg-orange-500">رزرو آنلاین</Link>;
};

export default NavButton;
