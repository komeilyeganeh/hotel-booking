import Navbar from "../Navbar/Navbar";

const Header = () => {
    return <header className="fixed w-full shadow-lg shadow-gray-100">
        <div className="container flex justify-between items-center px-4 py-6 md:px-0 md:py-0">
            <Navbar />
        </div>
    </header>
}

export default Header;