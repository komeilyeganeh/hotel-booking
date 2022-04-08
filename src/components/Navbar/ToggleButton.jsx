const ToggleButton = ({ onMenu }) => {
  return (
    <div className="block md:hidden" onClick={onMenu}>
      <button className="flex items-center px-3 py-2 border rounded duration-200 ease-in-out text-orange-500 border-orange-500 hover:text-orange-300 hover:border-orange-300">
        <svg
          className="fill-current h-4 w-4"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
  );
};

export default ToggleButton;
