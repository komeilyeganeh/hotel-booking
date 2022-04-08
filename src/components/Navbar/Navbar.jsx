import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavbarMobile from "./NavbarMobile";
import NavButton from "./NavButton";
import NavItems from "./NavItems";
import ToggleButton from "./ToggleButton";

const Navbar = () => {
    const dispatch = useDispatch();
    const isShowMenu = useSelector((state) => state);
    const menuMobileHandler = () => {
        dispatch({type: "toggleMenu"});
    }
    const isVisibleNavMobile = isShowMenu ? "animate-[menu-mobile_300ms_linear_forwards]" : "left-full";

    return <Fragment>
        <ToggleButton onMenu={menuMobileHandler}/>
        <div className="brand hidden md:block">
            <a href="#" className="inline-block py-6 font-bold text-2xl text-orange-400">هتلیران</a>
        </div>
        <nav className="hidden md:flex">
            <NavItems />
        </nav>
        <NavbarMobile isVisible={isVisibleNavMobile}/>
        <NavButton />
    </Fragment>
}

export default Navbar;