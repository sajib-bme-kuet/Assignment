import "./modal.css";

const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modalRight">
          <p className="closeBtn" onClick={onClose}>
            X
          </p>
          <h1 className="modalTitle">{title}</h1>
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
