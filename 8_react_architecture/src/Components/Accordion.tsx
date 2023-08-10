import { ReactNode, useState } from "react";

import CustomButton from "./CustomButton";

interface accordrionProps {
  children: ReactNode;
  id: Number;
  item: any[];
  setItem: React.Dispatch<React.SetStateAction<any[]>>;
}

function Accordion(props: accordrionProps) {
  const [isOpen, setIsOpen] = useState(false);

  function clickHandler() {
    setIsOpen(!isOpen);
  }
  function deleteHandler() {
    console.log("delete");
    let updatedItems = props.item.filter((e) => e.id !== props.id);
    props.setItem(updatedItems);
  }

  return (
    <div className="accordion">
      {isOpen && props.children}
      <CustomButton variant="secondary" anything={clickHandler}>
        {isOpen ? "close" : "open"}
      </CustomButton>
      <CustomButton variant="important" anything={deleteHandler}>
        Delete
      </CustomButton>
    </div>
  );
}

export default Accordion;
