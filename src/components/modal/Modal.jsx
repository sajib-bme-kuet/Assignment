import "./modal.css";
import { useState } from "react";
const Modal = ({ children, open, onClose }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={handleClose}>Close</button>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
