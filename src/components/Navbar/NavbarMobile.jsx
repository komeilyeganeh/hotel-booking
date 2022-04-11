import NavItems from "./NavItems";

const NavbarMobile = () => {
  return (
    <nav className={`hidden absolute top-full bg-gray-100 shadow-2xl shadow-gray-500 w-64 h-screen max-w-full`}>
      <NavItems />
    </nav>
    
  );
};

export default NavbarMobile;
