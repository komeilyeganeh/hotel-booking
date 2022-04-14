import Navbar from "../Navbar/Navbar";

const Header = () => {
    return <header className="fixed top-0 right-0 w-full shadow-lg shadow-indigo-400 z-50 bg-white">
        <div className="container flex justify-between items-center px-4 py-4 md:px-0 md:py-0">
            <Navbar />
        </div>
    </header>
}

export default Header;