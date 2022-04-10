const Button = ({children, type="button", className}) => {
  return <button type={type} className={`px-8 py-2 bg-orange-300 text-white rounded-md ${className}`}>{children}</button>;
};

export default Button;
