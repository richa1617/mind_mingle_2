import { ReactNode } from "react";

type CustomButtonVariant = "primary" | "secondary" | "important";

interface CustomButtonProps {
  children: string;
  variant: CustomButtonVariant;
}

function Button(props: CustomButtonProps) {
  const variantClass = `.btn ${props.variant}`;

  return <button className={variantClass}>{props.children}</button>;
}

export default Button;
