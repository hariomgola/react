// import "./App.css";
import ChildPropsComponent from "./components/ChildPropsComponent";
import PropsComponent from "./components/PropsComponent";

function App() {
  const title = "React Application";
  const _propsData = [
    {
      title: "H1 title",
      description: "D1 description",
    },
    {
      title: "H2 title",
      description: "D2 description",
    },
  ];
  function handleSelect() {
    console.log(
      ">>>> I am an example of passing the function from parent to child"
    );
  }
  return (
    <>
      <h1>{title}</h1>
      <h3>props Example</h3>
      <PropsComponent
        title="H1 title"
        description="description"
      ></PropsComponent>
      <PropsComponent {..._propsData[1]}></PropsComponent>
      <ChildPropsComponent onSelect={handleSelect}>
        <h6>I am from parent component using child props</h6>
      </ChildPropsComponent>
    </>
  );
}

export default App;
