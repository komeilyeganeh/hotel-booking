import { Fragment, useState } from "react";
import NavbarMobile from "./NavbarMobile";
import NavButton from "./NavButton";
import NavItems from "./NavItems";
import ToggleButton from "./ToggleButton";

const Navbar = () => {

    const [isShowMenu, setIsShowMenu] = useState(false);

    const toggleMenuHandler = () => {
        setIsShowMenu(!isShowMenu);
    }

    const toggleMenuClass = isShowMenu ? "right-0 opacity-100" : "opacity-0 -right-full";
    
    return <Fragment>
        <ToggleButton onToggleMenu={toggleMenuHandler} isShow={isShowMenu}/>
        <div className="brand hidden md:block">
            <a href="#" className="inline-block py-6 font-bold text-2xl text-orange-400">هتلیران</a>
        </div>
        <nav className="hidden md:flex">
            <NavItems />
        </nav>
        <NavbarMobile className={toggleMenuClass}/>
        <NavButton />
    </Fragment>
}

export default Navbar;