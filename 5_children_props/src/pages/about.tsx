import PageLayout from "@/components/PageLayout";
import LoginChecker from "@/components/LoginChecker";
import Button from "@/components/Button";

function about() {
  return (
    <>
      <PageLayout>
        <LoginChecker>
          <h1>I am contact</h1>
        </LoginChecker>
      </PageLayout>
      <Button variant="secondary">Heloo there</Button>
    </>
  );
}

export default about;
