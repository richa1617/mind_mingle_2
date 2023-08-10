import { ReactNode, useState } from "react";

import CustomButton from "./CustomButton";

interface accordrionProps {
  children: ReactNode;
}

function Accordion(props: accordrionProps) {
  const [isOpen, setIsOpen] = useState(false);

  function clickHandler() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="accordion">
      {isOpen && props.children}
      <CustomButton variant="secondary" anything={clickHandler}>
        {isOpen ? "close" : "open"}
      </CustomButton>
    </div>
  );
}

export default Accordion;
