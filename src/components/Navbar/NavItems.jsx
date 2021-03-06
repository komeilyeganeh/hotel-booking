import { Link } from "react-router-dom";

const NavItems = () => {
    return <ul className="flex flex-col w-full md:flex-row">
        <li>
            <Link to="/" className="nav__link">خانه</Link>
        </li>
        <li className="mt-2 md:mt-0 md:mr-5">
            <Link to="/rooms" className="nav__link">اتاق ها</Link>
        </li>
        <li className="mt-2 md:mt-0 md:mr-5">
            <Link to="/contact-us" className="nav__link">تماس با ما</Link>
        </li>
        <li className="mt-2 md:mt-0 md:mr-5">
            <Link to="/about-us" className="nav__link">درباره ما</Link>
        </li>
    </ul>
}

export default NavItems;