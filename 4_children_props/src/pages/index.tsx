import Card from "@/components/Card";
import Tabbed from "@/components/Tabbed";
export default function Home() {
  return (
    <>
      {/* <Card color="red" backgroundColor="black">
        <h1>Foo</h1>
      </Card>

      <Card color="yellow" backgroundColor="green">
        <h1>Bar</h1>
      </Card> */}
      <Tabbed>
        <p>You can toggle this</p>
      </Tabbed>
    </>
  );
}
