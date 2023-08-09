import { ReactNode } from "react";

type CustomVariant = "success" | "error" | "warning";

interface CustomProps {
  children: ReactNode;
  variant: CustomVariant;
}
function CustomDiv(props: CustomProps) {
  const variantClass = `container ${props.variant}`;
  return <div className={variantClass}>{props.children}</div>;
}

export default CustomDiv;
