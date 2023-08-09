import { ReactNode } from "react";
import { useState, useEffect } from "react";

interface solutionProps {
  children: ReactNode;
}

function Solution(props: solutionProps) {
  const [show, setShow] = useState(false);

  function clickHanlder() {
    setShow(!show);
  }
  return (
    <div>
      {show ? props.children : ""}

      <button onClick={clickHanlder}>{show ? "hide" : "show"}</button>
    </div>
  );
}

export default Solution;
