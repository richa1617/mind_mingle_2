interface CustomButtonProps {
  children: string;
  variant: CustomButtonVariant;
  anything: () => void;
}

type CustomButtonVariant = "primary" | "secondary" | "important";

function CustomButton(props: CustomButtonProps) {
  const buttonStyles: Record<CustomButtonVariant, string> = {
    primary: "primary",
    secondary: "secondary",
    important: "important",
  };
  return (
    <button
      className={`btn ${buttonStyles[props.variant]}`}
      onClick={props.anything}
    >
      {props.children}
    </button>
  );
}

export default CustomButton;
