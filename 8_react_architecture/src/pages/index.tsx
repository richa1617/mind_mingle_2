import Modal from "@/Components/Modal";
import PageLayout from "@/Components/PageLayout";
import CustomButton from "@/Components/CustomButton";
import AccordionContainer from "@/Components/AccordionContainer";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState<string>("");
  return (
    <>
      <PageLayout>
        <h1>Home page</h1>
      </PageLayout>
      <Modal>
        <h1>Hello</h1>
        <p>I am content</p>
      </Modal>
      <h2>{text}</h2>
      <CustomButton variant="secondary" anything={() => setText("hello")}>
        Button
      </CustomButton>
      <AccordionContainer />
    </>
  );
}
