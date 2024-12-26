const reactIntroduction = () => `
# React
 - Its an Library for building javascript intefaces.
 - Browser don't undestand the jsx. 
 - JSX code before reaching the code into the browser it need to be converted int Javscript code. 
 - Component function in class should always start with CapitalCase.

# Create React app
 - We can create the react application using the react library which react provides
 - npx create-react-app [project-name]

# Folder Structure
 - package.json       - contains all dependencies and basis infomation about the project
 - public/index.html  - This is the startup page of the application (Only html file in app).
 - src/index.js       - Specify the root component which is app component.
 - src/app.js         - Root component of the application which is rendered

         npm start
            |>  index.html
                   |>  index.js
                         |> app.js
# index.html (public)
 - This is the only file which is rendered in the browser.
 - On this single html file we import the finish react application in this file.

# JSX (JavaScript XML)
 - JavaScript like XML
 - Its is the form of writing the javascript like a xml file. 

# {}
 - Curely braces has been used to import the dyanmic value into the jsx code

# Component describing Rule
 - Function name should be uppercase
 - Function name should be un PascalCase
 - Function must return the single value that is been rendered.
 - Function should return the JSX only.
`;
const propsInReact = () => `
# props
 - React allow us to the props to pass the data from one component to another component.
 - The concept of configuration of react component and passing the value is termed as props.

    <PropsComponent
        title="H1 title"
        description="description"
        ></PropsComponent>
    <PropsComponent {..._propsData[1]}></PropsComponent>
    
 - Second thing we can also do instead of props use {title,descption} to use the particular value.
    
     // When Using direct props
    function PropsComponent(props) {
      return (
        <>
          <div>{props.title}</div>
          <div>{props.description}</div>
            </>
          );
    }
    
    // When using the destructuring method
    function _PropsComponent({ title, description }) {
      return (
        <>
          <div>{title}</div>
          <div>{description}</div>
        </>
      );
    }
    
    export default PropsComponent;

# props.children
 - Its an special kind of property in props we can additionaly set it.
 - What ever pass inside the tag of parent component can automatically passed to the child component.
      <ChildPropsComponent>
        <h6>I am from parent component using child props</h6>
      </ChildPropsComponent>

      export default function ChildPropsComponent(props) {
        return (
          <>
           <div>{props.children}</div>
          </>
        );
      }

# Key props
 - Key props is very much usefull to identify the unique element in the list
`;
const hooksInReact = () => `
# Hooks
 - Hooks are some predefined functions in react
 - Rule for hooks
    - Hooks are only need to be inside the function
    - Hooks need to be called on the top level

# useState [Hook]
 - const [functionTitle, setFunctionTitle] = useState("App Helper Component")
 - useState is been used when we want to randor some value into the ui and component need to refresh.
 - functionTitle - the variable that contains the current value.
 - setFunctionTitle - to set the next value to render

# useEffect 
 - use effect hook allows you to perform side effects in your components.
 - Its mostly used for fetch data, Directly updating the DOM and some timers
 - use Effect takes two arguments and the second is optional
 - useEffect(()=>{},[])
      - [] - passing the empty array will once execute the useeffect function once.
      - ['any paramerter'] - passing anything inside the aray the useeffect will execute when there is change is value.

# useContext
 - use context is used the manage the state to the nested child component.
 - Scenerio one com1 -> com2 -> com3 -> com4 -> com5 -> com6
 - I want to pass the data from com1 to com6 i can use the prop drilling
 - With the help of useContext i can directly pass the data from com1 to com6

# useRef
 - useRef is used to store the value b/w render
 - useState will be refreshed in case of a value change happen but this is not in the case of useRef
 - useRef allow us to not refresh the whole component when value change happen
`;

module.exports = {
  "Introduction to React": reactIntroduction,
  "Props in React": propsInReact,
  "Hooks in React": hooksInReact,
};
