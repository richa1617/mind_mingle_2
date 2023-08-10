import PageLayout from "@/Components/PageLayout";
import CustomButton from "@/Components/CustomButton";
import { useState } from "react";

function about() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <PageLayout>
        <h1>I am contact</h1>
        <p>{count}</p>
        <CustomButton variant="secondary" anything={() => setCount(count + 1)}>
          Click me
        </CustomButton>
      </PageLayout>
    </>
  );
}

export default about;
