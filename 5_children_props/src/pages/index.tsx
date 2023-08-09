import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageLayout from "@/components/PageLayout";
import Solution from "@/components/Solution";
import CustomDiv from "@/components/CustomDiv";
import CustomImg from "@/components/CustomImg";

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
      {/* <CustomDiv variant="success">
        <h1>Hello</h1>
      </CustomDiv>
      <CustomDiv variant="error">
        <h1>Hello</h1>
      </CustomDiv> */}

      <CustomImg
        shape="square"
        src="https://img.freepik.com/free-vector/hand-drawn-collage-design_23-2149543516.jpg?w=900&t=st=1691584361~exp=1691584961~hmac=63f59840598b413f4ca29f346e9ab403ad9e1945624de3fbd3f7a8124381fda0"
      ></CustomImg>

      <CustomImg
        shape="circle"
        src="https://img.freepik.com/free-vector/hand-drawn-collage-design_23-2149543516.jpg?w=900&t=st=1691584361~exp=1691584961~hmac=63f59840598b413f4ca29f346e9ab403ad9e1945624de3fbd3f7a8124381fda0"
      ></CustomImg>
    </>
  );
}
