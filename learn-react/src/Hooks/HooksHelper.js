import { useEffect, useState } from "react";
import PropDrilling from "./PropDrilling";
import UseContextHelper from "./UseContextHelper";

export default function HooksHelper() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
  }, []);

  console.log(" *** HooksHelper Has been refreshed *** ", counter);
  return (
    <>
      <pre>Hooks Helper Component</pre>
      {/* <PropDrilling /> */}
      {/* <UseContextHelper /> */}
    </>
  );
}
