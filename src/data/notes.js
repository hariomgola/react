import React from "react";
import Logo from "../components/Logo/Logo";

const reactNotes = () => {
  return Logo();
};
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
      
      const parent = () =>{                       const child = (props) =>{
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
    - State is mainly responsible for User Interaction and Handling Events
    - Mainly responsible for updating the ui and working with state (useState)
  
  # State in React
    - useState is the function in react library to use state in react.
    - useState is called as react hook and introduced in @React16.0.1
    - All hooks is called inside the react component function only.
    - Hooks cannot be called inside the nested function.
    - useState return a function with first value as its value itself, second value is used to update the value.
      
       - Example
       _____________________________________________________________________________
      | let [initialvalue,setvalue] = useState('defaultvalue')                      |
      | defaultvalue  - set the default value when component is initializes         |
      | initialvalue  - use to access the current value which state is holding      |
      | setvalue      - use to change or set the value which can be accessed later  |
      |                                                                             |
      |* defaultvalue, initialvalue, setvalue is user define variable               |
      |  you can use what ever you want to use                                      |
      |_____________________________________________________________________________|

  # Important point
    - Without the use of state component will not refresh even the internal property or parameter changes.

  # Using multiple state in component
    - We can also use multiple state for handling mutiple value below is the example for same.
             ___________________________________________
            | let [initialname,setName] = useState('')  |
            | let [initialDate,setDate] = useState('')  |
            |___________________________________________|
    - Intead if using above state withmutiple initialization we can pass it in the form of object
             __________________________________________
            | const [user,setUser] =  useState({       |  
            |                           name:'',       |
            |                           date:''        |
            |                           desgnation:''  |
            |                         })               |
            |   setUser({                              |
            |     ...user,                             |
            |     name: 'Hari'                         |
            |    })                                    |
            |__________________________________________|
    - This approach is very common by in this approach we need to update all properties. such as name,date.
    - Here ...user take all other value and replace the updated one only.

    - Above describe both things are correct. you can use anyone which you want to use.
    - Remeber one important point when you update the state in second case and depend on private state use it like this.
    - Instead of directly passing the object directly pass the function.
        ___________________________________________________________________________
       |  setUser((previousState)=>{                                               |
       |    // previous state will get all the value which is currently assigned   |
       |    return {                                                               |
       |      ...previousState,                                                    |
       |      name:'Hari'                                                          |
       |    }                                                                      |
       |  })                                                                       |
       |___________________________________________________________________________|

    - By using this approach we increase performance as well as the previous state value when we are updating a lot of state.
    - This is also the safer way to update the thing on their latest snapshot.

  # Note
    - You can use any of that thing which ever you want to use. but knowing the concept is always a better approach.

  `;
  return <pre>{r5}</pre>;
};

const event = () => {
  let r6 = `
  # React Event
    - Just like DOM, React can also perform certain opertaion on behalf of user interaction.
    - React can also perform some action on click,change etc.
  
  # onClick
    - onClick is an event handler in react which work on clicking of things.
    - We have to provide event handling in following manner
         ___________________________________________________________
        |  printSomething(){                                        |      
        |    console.log('Hi I am printing when button is clicked') |         
        |  }                                                        |        
        |  <button onClick={printSomething}>Click me</button>       |
        |___________________________________________________________|   

    - Remember we need to provide {printSomething} instead of {printSomething()}
    - If we provide {printSomething()} then function is executed on compilation phase not the click phase.   
    - By default react give the event parameter in function which we called. we only need to use it
    - Just change the function to below event parameter.
         ___________________________________________________________
        |  printSomething(event){                                   |      
        |    console.log('event - ',event)                          |         
        |  }                                                        |        
        |  <button onClick={printSomething}>Click me</button>       |
        |___________________________________________________________|   

    - We can also pass the custom message using the follwing code.
         _______________________________________________________________________
        |    printSomething(message){                                           |  
        |      console.log(message)                                             |   
        |    }                                                                  |  
        |    <button onClick={() => printSomething("Click")}>Click me</button>  |
        |_______________________________________________________________________|  
            
    - We can also pass the event as well as the custom message using below code
         __________________________________________________________________________
        |   printSomething(event,message){                                         |        
        |     console.log(message,event)                                           |       
        |   }                                                                      |     
        |   <button onClick={(event) => shoot("click", event)}>Click me</button>   |
        |__________________________________________________________________________|       

  # Some Common Event
    - onChange           -   When an HTML element is changes
    - onClick            -   When an HTML element or button is clicked
    - onMouseOver        -   When a mouse move to HTML element
    - onMouseOut         -   When a mouse move out to HTML element
    - onKeyDown          -   When a user push the keydown key in keyboard
    - onLoad             -   when the browser has finished loading the page


  `;
  return <pre>{r6}</pre>;
};

const binding = () => {
  let r7 = `
  # Two way binding
    - When we are changing or submitting the form on click event so we have to set the default value to that field.
    - We can do it by specifying the value property and also sent that value to empty string or initial value after form submitted.
         
  # Child to parent binding
    - In this binding we are communication to pass the data from parent to child.
    - It simply can be done by creating a function in child component and passing that function to child and using in child component.
    - And simply passing the parameter in parent component function from child got the data over there only. 

      parent component                                                  child composnent
       __________________________________                  _________________________________________
      | functionName(data){              |                |  props.onsave('Hari')                   |
      |    conosle.log(data)             |                |                                         |
      |  }                               |                | // this will print data in p-component  |
      | // pass this function as props   |                |                                         |
      | <child onsave = {functionName}   |                |                                         |  
      |__________________________________|                |_________________________________________|

  # Lifting state up
    - Lifting state up is the same kind of biniding from component to parent
                             <App/>
            ___________________|___________________
           |                                       |
        <child1/>                               <child2/>

    - Since child1 and child2 doesn't have direct interaction with each other.
    - So we need to move data from child2 to child1. firstly we need to pass the data from child2 to app and then to child1.
    - This concept is termed as lifting the state up in react
  `;
  return <pre>{r7}</pre>;
};

const router = () => {
  let r10 = `
  # Library use for react Router
    - npm i -D react-router-dom
  `;
  return <pre>{r10}</pre>;
};

export {
  reactNotes,
  introductionToReact,
  createReactApp,
  reactComponent,
  JSX,
  props,
  state,
  event,
  binding,
  router,
};
