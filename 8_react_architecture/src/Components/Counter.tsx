import { ReactNode } from "react"


interface couunterProps{
  children:ReactNode
}
function Counter(props :couunterProps) {
    return (
        <div>
            {props.children}
        </div>
    );
}

export default Counter;