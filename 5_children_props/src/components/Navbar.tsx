import Link from "next/link";
import { useState } from "react";

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
      </div>
    </>
  );
}

export default Navbar;
