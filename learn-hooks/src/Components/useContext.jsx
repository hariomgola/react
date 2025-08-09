import { createContext, useContext, useState } from "react";
const UserContext = createContext();

const UseContext = () => {
  const [userName, setUserName] = useState("Hariom Kumar");
  return (
    <>
      <UserContext.Provider value={userName}>
        {"Data Passed to Child Component ->"}
        {` ${userName}`}
        <br />
        <Comp2 />
      </UserContext.Provider>
    </>
  );
};

const Comp2 = () => {
  return (
    <>
      {`Component 2`}
      <br />
      <Comp3 />
    </>
  );
};

const Comp3 = () => {
  return (
    <>
      {`Component 3`}
      <br />
      <Comp4 />
    </>
  );
};
const Comp4 = () => {
  return (
    <>
      {`Component 4`}
      <br />
      <Comp5 />
    </>
  );
};
const Comp5 = () => {
  const user = useContext(UserContext);
  return (
    <>
      {`Component 5`}
      <br />
      {"Data Catch in Child Component 5 -> "} {`${user}`}
    </>
  );
};

export default UseContext;
