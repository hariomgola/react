import UseState from "./Components/useState";
import UseEffect from "./Components/useEffect";
import UseContext from "./Components/useContext";
import UseRef from "./Components/useRef";
import UseReducer from "./Components/useReducer";
import UseCallBack from "./Components/useCallback";
import UseMemo from "./Components/useMemo";

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
      {/* <UseReducer /> */}
      {/* <UseCallBack /> */}
      {/* <UseMemo /> */}
    </div>
  );
}

export default App;
