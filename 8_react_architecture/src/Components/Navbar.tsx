import Link from "next/link";
import { useState } from "react";

function Navbar() {
  return (
    <div className="nav">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/login">Login</Link>
    </div>
  );
}

export default Navbar;
