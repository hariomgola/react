import { createContext, useContext, useState } from "react";
const UserContext = createContext();

export default function UseContextHelper() {
  return <Component1></Component1>;
}

function Component1() {
  const [user, setUser] = useState("Hari");

  return (
    <UserContext.Provider value={user}>
      <pre>{`Hello ${user}!`}</pre>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <pre>Component 2</pre>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <pre>Component 3</pre>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <pre>Component 4</pre>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <pre>Component 5</pre>
      <pre>{`Hello ${user} again!`}</pre>
    </>
  );
}
