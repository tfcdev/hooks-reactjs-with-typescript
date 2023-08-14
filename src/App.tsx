import React from "react";
// import Hooks from './Hooks';
// import ListTarefa from "./ListaTarefas";
import WorkingInput from "./WorkingInput";

import Buttons from "./components/Buttons";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />

      {/* <ListTarefa/> */}
      {/* <Hooks/> */}
      <WorkingInput />
      <Buttons />
    </>
  );
}

export default App;
