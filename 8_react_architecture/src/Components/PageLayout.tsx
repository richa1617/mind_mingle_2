import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

interface pageLayoutProps {
  children: ReactNode;
}

function PageLayout(props: pageLayoutProps) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

export default PageLayout;
