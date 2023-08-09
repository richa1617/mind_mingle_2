import { ReactNode } from "react";

type CustomButtonVariant = "primary" | "secondary" | "important";

interface CustomButtonProps {
  children: ReactNode;
  variant: CustomButtonVariant;
  onClick: () => void;
}

function Button(props: CustomButtonProps) {
  const variantClass = `btn ${props.variant}`;

  return (
    <button className={variantClass} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
