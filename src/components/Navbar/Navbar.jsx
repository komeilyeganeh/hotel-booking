import { Fragment } from "react";
import NavbarMobile from "./NavbarMobile";
import NavButton from "./NavButton";
import NavItems from "./NavItems";
import ToggleButton from "./ToggleButton";

const Navbar = () => {
    
    return <Fragment>
        <ToggleButton/>
        <div className="brand hidden md:block">
            <a href="#" className="inline-block py-6 font-bold text-2xl text-orange-400">هتلیران</a>
        </div>
        <nav className="hidden md:flex">
            <NavItems />
        </nav>
        <NavbarMobile/>
        <NavButton />
    </Fragment>
}

export default Navbar;