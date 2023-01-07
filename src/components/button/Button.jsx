import "./button.css";
const Button = ({ children, onClick, color, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`button`}
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
};

export default Button;
