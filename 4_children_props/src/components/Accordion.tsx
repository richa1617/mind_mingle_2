import { ReactNode } from "react";
import { useState } from "react";

interface accordionProps {
  title: string;
  children: ReactNode;
}

function Accordion(props: accordionProps) {
  const [show, setShow] = useState(false);
  function clickHandler() {
    setShow(!show);
  }

  return (
    <div>
      <h1>{props.title}</h1>
      {show ? props.children : ""}
      <button onClick={clickHandler}>Click to know more</button>
    </div>
  );
}

export default Accordion;
