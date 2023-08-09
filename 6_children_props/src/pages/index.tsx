import CustomButton from "@/Components/CustomButton";
import { useState } from "react";
import Toggle from "@/Components/Toggle";

export default function Home() {
  const [status, setStatus] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  function countInc() {
    console.log(count);
    setCount(count + 1);
  }
  return (
    <>
      <h1>Helo</h1>
      <p>{status ? "☀️" : "🌑"}</p>
      <CustomButton nameAnything={() => setStatus(!status)}></CustomButton>
      <p>{count}</p>
      <Toggle counter={countInc}>
        <h1>Blah blah</h1>
      </Toggle>
    </>
  );
}
//We are passing props from Home to Custom button
//Prop name is nameAnything

//name="richa" -->normal way to pass prop and in interface we say name:string

//Here we are passing function so entrie {()=>..} is passed as a prop

//In the CustomButton.tsx component, we are receiving and using the nameAnything
