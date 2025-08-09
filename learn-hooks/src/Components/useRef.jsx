import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    /* This Will Run On Each Render */
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <>{"Render Count -"} {count.current}</>
    </>
  );
};
export default UseRef;
