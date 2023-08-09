interface CustomButtonProps {
  nameAnything: () => void;
}

function CustomButton(props: CustomButtonProps) {
  return <button onClick={props.nameAnything}>Submit</button>;
}

export default CustomButton;

//In the CustomButton.tsx component, We are receiving and using the nameAnythin.g

//In interface we say that this prop is of type function

//We are now passing our function prop to button with onClick
