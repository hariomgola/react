// importing files
import {
  reactNotes,
  introductionToReact,
  createReactApp,
  reactComponent,
  JSX,
  state,
  event,
  router,
  binding,
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
      id: "r10",
      name: "React Router",
      fname: router,
    },
  ];
  return _notesMapping;
};

export default notesRender;
