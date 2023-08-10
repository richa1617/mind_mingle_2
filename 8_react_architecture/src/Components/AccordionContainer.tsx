import { useState } from "react";
import Accordion from "./Accordion";

function AccordionContainer() {
  const [item, setItems] = useState([
    { id: 1, title: "Section 1", content: "Content 1" },
    { id: 2, title: "Section 2", content: "Content 2", extra: "blah" },
  ]);

  return (
    <div>
      {item.map((e) => {
        // Need id of item
        // Need to pass setItems
        return (
          <Accordion id={e.id} key={e.id} setItem={setItems} item={item}>
            <h5>{e.title}</h5>
            <p>{e.content}</p>
            <p>{e.extra}</p>
          </Accordion>
        );
      })}
    </div>
  );
}

export default AccordionContainer;
