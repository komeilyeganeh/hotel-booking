const Input = ({ type, placeholder, name="", id="" }) => {
  return <input type={type} placeholder={placeholder} name={name} id={id} className="form__input"/>;
};

export default Input;
