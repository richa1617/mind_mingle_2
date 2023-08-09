interface CustomProps {
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

function CustomInput(props: CustomProps) {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input type={props.value} id="Name" onChange={props.onChange} />
      <button type="submit">Submit</button>
    </div>
  );
}

export default CustomInput;
