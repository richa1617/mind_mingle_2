import { ReactNode } from "react";
import { useEffect, useState } from "react";

interface tabbedProps{
    children: ReactNode;
}

function Tabbed(props :tabbedProps) {
    const [show ,setShow]=useState(false)

   function handleClick(){
    setShow(!show)
   }
    return (
       <>
        <div>
            {show &&props.children}
        </div>
        <button onClick={handleClick}>{show ? "Hide" :"Show"}</button>
       </>
    );
}

export default Tabbed;