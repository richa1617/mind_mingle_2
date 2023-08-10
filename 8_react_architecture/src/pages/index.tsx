import Modal from "@/Components/Modal";
import PageLayout from "@/Components/PageLayout";
import CustomButton from "@/Components/CustomButton";

export default function Home() {
  return (
    <>
      <PageLayout>
        <h1>Home page</h1>
      </PageLayout>
      <Modal>
        <h1>Hello</h1>
        <p>I am content</p>
      </Modal>
      <CustomButton>
        Primary Button
      </CustomButton>
    </>
  );
}
