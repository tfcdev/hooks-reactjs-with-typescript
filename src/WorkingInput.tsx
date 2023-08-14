import React from "react";

interface IState {
  name: string;
  age: number;
  done: boolean;
}

interface IAction {
  type: "ADD";
  value: string;
}

function reducer(state: IState[], action: IAction) {
  switch (action.type) {
    case "ADD":
      return [...state, { name: action.value, age: 1, done: false }];

    default:
      return state;
  }
}

const WorkingInput: React.FC = () => {
  const refInput = React.useRef<HTMLInputElement>(null);
  // const [state, setState] = React.useState<IState[]>([])
  const [state, dispatch] = React.useReducer(reducer, []);

  function handdleInputText() {
    dispatch({
      type: "ADD",
      value: refInput.current ? refInput.current.value : "",
    });
  }

  function handdleInputNumber(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.currentTarget.value);
  }

  return (
    <>
      <h1>{state.map((v) => v.name)}</h1>

      <label>Name: </label>
      <input type="text" ref={refInput} />
      <hr />
      <label>Age: </label>
      <input type="number" onChange={(e) => handdleInputNumber(e)} />

      <hr />
      <button onClick={handdleInputText}>Send</button>
    </>
  );
};

export default WorkingInput;
