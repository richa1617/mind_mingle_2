import Card from "@/components/Card";
import Tabbed from "@/components/Tabbed";
import Accordion from "@/components/Accordion";

export default function Home() {
  return (
    <>
      {/* <Card color="red" backgroundColor="black">
        <h1>Foo</h1>
      </Card>

      <Card color="yellow" backgroundColor="green">
        <h1>Bar</h1>
      </Card> */}
      {/* <Tabbed>
        <p>You can toggle this</p>
      </Tabbed> */}

      <Accordion title="item 1">
        <p>Description about item 1</p>
      </Accordion>
      <Accordion title="item 2">
        <p>Description about item 2</p>
      </Accordion>
      <Accordion title="item 3">
        <p>Description about item 3</p>
      </Accordion>
    </>
  );
}
