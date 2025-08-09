import UseState from "./Components/useState";
import UseEffect from "./Components/useEffect";
import UseContext from "./Components/useContext";
import UseRef from "./Components/useRef";
import UseReducer from "./Components/useReducer";

function App() {
  const data = `
  *************************************
       Main App Is Working Fine
  *************************************
  `;
  return (
    <div className="App">
      <pre>{data}</pre>
      <br />
      {/* <UseState/> */}
      {/* <UseEffect/> */}
      {/* <UseContext /> */}
      {/* <UseRef /> */}
      <UseReducer />
    </div>
  );
}

export default App;
