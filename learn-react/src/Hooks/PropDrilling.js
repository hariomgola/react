import { useState } from "react";

export default function PropDrilling() {
  return <Component1></Component1>;
}

function Component1() {
  const [user, setUser] = useState("Hari");

  return (
    <>
      <pre>{`Hello ${user}!`}</pre>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <pre>Component 2</pre>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <pre>Component 3</pre>
      <Component4 user={user} />
    </>
  );
}

function Component4({ user }) {
  return (
    <>
      <pre>Component 4</pre>
      <Component5 user={user} />
    </>
  );
}

function Component5({ user }) {
  return (
    <>
      <pre>Component 5</pre>
      <pre>{`Hello ${user} again!`}</pre>
    </>
  );
}
