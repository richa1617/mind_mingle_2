import { useState } from "react";
import Accordion from "./Accordion";
import CustomButton from "./CustomButton";

function AccordionContainer() {
  return (
    <div>
      <Accordion>
        <h1>Hello</h1>
        <p>Content 1</p>
      </Accordion>

      <Accordion>
        <h1>Hello</h1>
        <p>Content 2</p>
      </Accordion>
    </div>
  );
}

export default AccordionContainer;
