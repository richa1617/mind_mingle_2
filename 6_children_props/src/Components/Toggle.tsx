import React, { useState } from "react";
import { ReactNode } from "react";

interface toggleProps {
  children: ReactNode;
  counter: () => void;
}

const Toggle = (props: toggleProps) => {
  const [isContentVisible, setContentVisible] = useState(false);

  const toggleContent = () => {
    setContentVisible(!isContentVisible);
    props.counter();
  };

  return (
    <div>
      <button onClick={toggleContent}>Toggle</button>
      {/* <button onClick={props.counter}>Count</button> */}
      {isContentVisible && <div>{props.children}</div>}
    </div>
  );
};

export default Toggle;
