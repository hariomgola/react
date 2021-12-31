import React from "react";

const introductionToReact = () => {
  let r1 = `
  # Introduction to react 
    - React is a open source javascript library for building user interfaces 
    - Focus on building rich interfaces 
    - React is a project created and maintained by facebook 
    - React is one of the most popullar framework as of 2022 used by many industries. 
    - React follows component based architecture, A website is divided into small components.
    - React makes to use re-writeable reusable code
    - React is declarative (Tell react what you want react will build the actual ui)
    - React can make a portion of a page or a complete page or even an entire application.
    - React native for creating mobile application.
  
  # Prerequisite
    - HTML
    - CSS
    - JavaScript - 'this' keyword, filter, map and reduce.
    - ES6 - let & const, arrow function, template literals, default parameters, 
          -  object literals, rest and spread operator and destructing assigment.
  
  # Components.
    - HTML  CSS  JavaScript
    - React allows you to create re-usable and reactive component consisting of HTML and JS
    - Define the desired target state and let figure out the actual Javascript DOM instruction.
  `;
  return <pre>{r1}</pre>;
};

const createReactApp = () => {
  let r2 = `
  # Create React Application
    - Use command        - 'npx create-react-app app_name'
    - navigate           -  cd app_name
    - Start Application  -  npm start
    - npx stands for npm package runner which get installed when we installed node.
  
  # Alternate Approach to Create React Application
    - Install the create-react-app package globally using 'npm install create-react-app -g'
    - Run the command to create app using 'create-react-app app_name'
    - First approach is always suitable beacuse of not installing any global package.

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
   
  `;
  return <pre>{r2}</pre>;
};

const reactComponent = () => {
  let r3 = `
  # React Component
    - In react component represent the part of user interface.
    - Component are resuable.
    - A component code is placed in a javscript file (.js)
    - Its a good practise to create new component inside component folders.
    - App.js is also a component but its a predefined as well as root component.
    - We create user defined component's in component folder.
    - We are not going to import any of component in index.js
    - we are going to import the custom created component inside the app.js.
    - Since app.js is the root component for the app.
    - One component has only one root html all other html are nested inside this.
    - React has 2 component types
         |> Stateless functional Component 
            - Functional component is literally a JavaScript functions.

                function hello() {
                  return <h1> Hello, Hari</h1>
                }

         |> Stateful class Component
            - Class component is regular es6 classes.
            - Which extends the component class from react library.
            - It must contains the render methods which return HTML.

                class hello extends React.Component{
                 render() {
                   return <h1> Hello, Hari</h1>
                  }
                }
  
  # Functional Components
    
              Properties(props)   ->    JavaScript Function  ->  HTML (JSX)

    - Functional component is just simply a javascript function.
    - It optionally receives an object of properties termed as props.
    - Returns the HTML which describes the UI.
    - Most popularly used in today world
  
  # Class Components
    - Class compoenet is basically a ES6 classes.
    - Similar to the class component it optionally receives a property termed as props.
    - Return the HTML
    - Class component internally maintains the private 'state'
    - 'this' keyword is present but its not present in functional component.
    - Provides the life cycle hook.

  # Hooks.
    - Release as a part of 16.7.0
    - Hook let's you use state and other React feacture without writting a class.
    - So As of not class component is no more required.

  # Using custom data
    - We can use custom data with the help of {}.
    - Just pass tha varaible which is storing the data it automatically renders the data in UI.
    - We can also pass custom data using props inside {}.
  `;
  return <pre>{r3}</pre>;
};

const JSX = () => {
  let r4 = `
  #JSX
    - JavaScript XML is extension to the JavaScript language Syntax.
    - Write XML-like code for elements and components.
    - JSX tags have a tag name, attribute and children.
    - JSX makes react code simpler, readable and elegant.
    - JSX ultimately transpiles to pure JavaScript which is understood by the browser.

  # Writting a code without JSX.
    - React.createElement('div',null,'h1','<h1> Hello, Hari </h1>')

  # Writting a code with JSX
    -  (
      <div>
        <h1> Hello, Hari </h1>
      </div>
    )

  # Conculsion
    - JSX makes writting code simpler.

  # JSX difference
    - Class    -   className
    - for      -   htmlFor
    - camelCase property naming convention
    - onclick  -   onClick
  `;
  return <pre>{r4}</pre>;
};

const props = () => {
  let r4 = `
  # Props
    - Props stand for property
    - Props is the optional input that the component can accept.
    - Props passed in the form of object in key value pair.
    - With the help of props we can set own properties to custom components.
    - It allows component to be dynamic.
      
     =const parent = () =>{                       const child = (props) =>{
        <child name = "Hari"/>                         <h1> Welcome {props.name}</h1>
      }                                           }

    - We can pass n number of props children we want to pass 
    - <child name="Hari" lastName = "Kumar">

    - We can also pass the element from parent to child

      const parent = () =>{                           const child = (props) =>{
        <child name = "Hari" lastName="kumar">           <h1> Welcome {props.name}</h1>
          <p> This is Child element</p>                  {props.children}
        </child>                                      }
      }       
      
    - Props.children is a special props it will render all element inside that element.
    - Id no element is passed then props.children will do nothing.

  # Concept of composition
    - Dividing big component into small component with right functionality is termed as composition.
    - Wrapper component's only works with nested html code.
    - But it can't work if any component is nested inside that.

  # wrapper function in React
    - Learn how wrapper function changes we have use the same in card component
    - Learn concept of props.children and how it assigned.
    - Learn concept of changing the children class css from wrapper class.
  `;
  return <pre>{r4}</pre>;
};

const state = () => {
  let r5 = `
  # State
    - 
  `;
  return <pre>{r5}</pre>;
};

export {
  introductionToReact,
  createReactApp,
  reactComponent,
  JSX,
  props,
  state,
};
