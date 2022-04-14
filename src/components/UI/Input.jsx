const Input = ({ type, placeholder, name="", id="", className="" }) => {
  return <input type={type} placeholder={placeholder} name={name} id={id} className={`form__input ${className}`}/>;
};

export default Input;
