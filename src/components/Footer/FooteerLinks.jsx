import { Link } from "react-router-dom";

const FooterLinks = () => {
    return <ul className="flex flex-col w-full mt-6">
        <li className="mb-3 text-gray-100">
            <Link to="/" className="text-sm lg:text-md">خانه</Link>
        </li>
        <li className="mb-3 text-gray-100">
            <Link to="/rooms" className="text-sm lg:text-md">اتاق ها</Link>
        </li>
        <li className="mb-3 text-gray-100">
            <Link to="/contact-us" className="text-sm lg:text-md">تماس با ما</Link>
        </li>
        <li className=" text-gray-100">
            <Link to="/about-us" className="text-sm lg:text-md">درباره ما</Link>
        </li>
    </ul>
}

export default FooterLinks;