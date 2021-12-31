// importing files
import {
  introductionToReact,
  createReactApp,
  reactComponent,
  JSX,
  state,
} from "./Notes";

const notesRender = () => {
  let _notesMapping = [
    {
      id: "r1",
      name: "Introduction To React",
      notes: introductionToReact,
    },
    {
      id: "r2",
      name: "Create React App",
      notes: createReactApp,
    },
    {
      id: "r3",
      name: "React Component",
      notes: reactComponent,
    },
    {
      id: "r4",
      name: "Introduction to JSX",
      notes: JSX,
    },
    {
      id: "r5",
      name: "State in React",
      notes: state,
    },
  ];
  return _notesMapping;
};

export default notesRender;
