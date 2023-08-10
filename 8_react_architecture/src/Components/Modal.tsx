import { ReactNode, useState } from "react";

interface ModalProps {
  children: ReactNode;
}

function Modal(props: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      {isOpen && props.children}
      <button onClick={handleClick}>{isOpen ? "Close" : "Open"}</button>
    </div>
  );
}

export default Modal;
