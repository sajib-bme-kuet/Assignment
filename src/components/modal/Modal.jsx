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
          <h2 className="modalTitle">{title}</h2>
          <div className="content">{children}</div>
          {/* <div className="btnContainer">
            <button className="btnPrimary">
              <span className="bold">YES</span>, I love NFT's
            </button>
            <button className="btnOutline">
              <span className="bold">NO</span>, thanks
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
