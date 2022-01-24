// importing files
import {
  reactNotes,
  introductionToReact,
  createReactApp,
  reactComponent,
  JSX,
  state,
  event,
  binding,
  conditionalStatement,
  stylingComponent,
  debuggingReact,
  fragmentPortalRefs,
  handlingSideEffectReducersContextAPI,
  router,
} from "./notes";

const notesRender = () => {
  let _notesMapping = [
    {
      id: "r0",
      name: "React Notes",
      fname: reactNotes,
    },
    {
      id: "r1",
      name: "Introduction To React",
      fname: introductionToReact,
    },
    {
      id: "r2",
      name: "Create React App",
      fname: createReactApp,
    },
    {
      id: "r3",
      name: "React Component",
      fname: reactComponent,
    },
    {
      id: "r4",
      name: "Introduction to JSX",
      fname: JSX,
    },
    {
      id: "r5",
      name: "State in React",
      fname: state,
    },
    {
      id: "r6",
      name: "React Events",
      fname: event,
    },
    {
      id: "r7",
      name: "React Binding",
      fname: binding,
    },
    {
      id: "r8",
      name: "React Conditional Statement",
      fname: conditionalStatement,
    },
    {
      id: "r9",
      name: "Styling Component",
      fname: stylingComponent,
    },
    {
      id: "r10",
      name: "Debugging React Application",
      fname: debuggingReact,
    },
    {
      id: "r11",
      name: "Fregment, portals, refs",
      fname: fragmentPortalRefs,
    },
    {
      id: "r12",
      name: "HandlingSideEffect, Using Reducers and context API",
      fname: handlingSideEffectReducersContextAPI,
    },
    {
      id: "r20",
      name: "React Router",
      fname: router,
    },
  ];
  return _notesMapping;
};

export default notesRender;
