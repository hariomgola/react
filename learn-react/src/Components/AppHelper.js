import { useState } from "react";
import PropsComponent from "./PropsComponent";

function AppHelper() {
  // hooks
  const [functionTitle, setFunctionTitle] = useState("App Helper Component");

  // main code
  const arrData = ["Javascript", "Angular", "React"];
  function clickFunctionPassing() {
    console.log(" |> App helper Function");
    setFunctionTitle("Props Has Been clicked from Props Component.");
    console.log(functionTitle);
  }
  return (
    <>
      Hello App Helper
      <pre>{functionTitle}</pre>
      <br />
      <PropsComponent
        title="Passing Title"
        decsription="Passing Description"
        data={arrData}
        clickFunction={clickFunctionPassing}
      >
        Some Data Inside
      </PropsComponent>
    </>
  );
}

export default AppHelper;
