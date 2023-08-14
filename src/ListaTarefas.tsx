import React from "react";
import { Container } from "./styles";

interface IState {
  id: number;
  name: string;
  done: boolean;
}

interface IAction {
  type: "ADD" | "CHECKED";
  name: string;
  id: number;
}

function reducer(state: IState[], action: IAction) {
  switch (action.type) {
    case "ADD":
      return [...state, { name: action.name, id: action.id, done: false }];

    case "CHECKED":
      return state.map((v) => {
        if (v.id === action.id) {
          return { name: v.name, id: v.id, done: !v.done };
        }

        return { name: v.name, id: v.id, done: v.done };
      });

    default:
      return state;
  }
}

const ListaTarefas: React.FC = () => {
  const refInput = React.useRef<HTMLInputElement | null>(null);
  const [state, dispatch] = React.useReducer(reducer, []);

  function clearState() {
    if (refInput.current?.value) {
      refInput.current.value = "";
    }

    refInput.current?.focus();
  }

  function handdleInputText(e: string) {
    if (e === "Enter") {
      dispatch({
        type: "ADD",
        name: refInput.current ? refInput.current.value : "",
        id: state.length > 0 ? (state.at(-1)?.id as number) + 1 : 1,
      });

      clearState();
    }
  }

  const changed = (e: HTMLInputElement) => {
    dispatch({
      type: "CHECKED",
      id: parseInt(e.value),
      name: "",
    });
  };

  return (
    <Container>
      <h1>Lista de Tarefas</h1>

      <input
        type="text"
        placeholder="Digite uma tarefa"
        ref={refInput}
        onKeyUp={(e) => handdleInputText(e.code)}
      />

      <ul>
        {state.map((v) => {
          return (
            <li key={v.id}>
              <input
                type="checkbox"
                checked={v.done}
                value={v.id}
                onChange={(e) => changed(e.target)}
              />
              <label>{v.name}</label>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default ListaTarefas;
