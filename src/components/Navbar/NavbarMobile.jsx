import NavItems from "./NavItems";

const NavbarMobile = ({isVisible}) => {
  return (
    <nav className={`md:hidden absolute top-full bg-gray-100 w-64 h-screen max-w-full ${isVisible}`}>
      <NavItems />
    </nav>
    
  );
};

export default NavbarMobile;
