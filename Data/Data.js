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

# {}
 - Curely braces has been used to import the dyanmic value into the jsx code
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
`;

module.exports = {
  "Introduction to React": reactIntroduction,
  "Props in React": propsInReact,
};
