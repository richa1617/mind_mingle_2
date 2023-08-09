import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

function Navbar() {
  const [dark, setDark] = useState(false);

  function clickHandle() {
    setDark(!dark);
  }

  //if  true apply .dark className
  return (
    <>
      <div className={`nav  ${dark ? "dark" : ""}`}>
        <Link href="/" className={`${dark ? "anchor" : " "}`}>
          Home
        </Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Login</Link>
        <button onClick={clickHandle}>
          {dark ? "Light-Mode" : "Dark-Mode"}
        </button>

        <Button variant="important" onClick={clickHandle}>
          Switch
        </Button>
      </div>
    </>
  );
}

export default Navbar;
