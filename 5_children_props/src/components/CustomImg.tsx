import { ReactNode } from "react";

type CustomVariant = "square" | "circle";

interface CustomImgProps {
  shape: CustomVariant;
  src: string;
  // children: ReactNode;
}

function CustomImg(props: CustomImgProps) {
  // const variantClass = `img-container ${props.shape}`;
  const variantClass: Record<CustomVariant, string> = {
    square: "square",
    circle: "circle",
  };
  return (
    <div>
      <img
        src={props.src}
        className={`img-container ${variantClass[props.shape]}`}
      />
    </div>
  );
}

export default CustomImg;
