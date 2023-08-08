import { ReactNode } from "react";

interface cardProps {
  color: string;
  backgroundColor: string;
  children: ReactNode;
}

function Card(props: cardProps) {
  return (
    <div
      className="card"
      style={{ color: props.color, backgroundColor: props.backgroundColor }}
    >
      {props.children}
    </div>
  );
}

export default Card;
