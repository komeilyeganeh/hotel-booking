import NavItems from "./NavItems";

const NavbarMobile = ({className}) => {
  return (
    <nav className={`md:hidden absolute top-full duration-300 ease-in-out bg-gray-100 shadow-2xl shadow-gray-500 w-64 h-screen max-w-full ${className}`}>
      <NavItems />
    </nav>
    
  );
};

export default NavbarMobile;
