import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageLayout from "@/components/PageLayout";
import Solution from "@/components/Solution";

export default function Home() {
  return (
    <>
      <PageLayout>
        <h1>Home page</h1>
      </PageLayout>
      <Solution>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          nihil reprehenderit, ratione adipisci consequuntur ducimus, minima
          provident fugit, enim voluptate similique ea harum culpa nisi non esse
          praesentium eveniet labore.
        </h5>
      </Solution>

      <Solution>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.voluptate
          similique ea harum culpa nisi non esse praesentium eveniet labore.
        </h5>
      </Solution>
    </>
  );
}
