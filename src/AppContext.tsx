import React from 'react';
import CarContext from './CartContext';

interface CartState {
  products?: string[],
  shipping_value?: number
  count: number
}

type CartActionType = {
  type: "INCREMENT" | "DECREMENT"
}

const AppContext: React.FC = () => {

  // Não preciso determinar tipagem para o useContext
  const context = React.useContext(CarContext)
  const [state, dispatch] = React.useReducer(
    (state: CartState, action: CartActionType) => {
      switch (action.type) {
        case "INCREMENT":
          return {...state, 
            count: state.count + 1
          }
        case "DECREMENT":
          return {
            ...state,
            count: state.count - 1
          }
        default:
          return state
      }  
    }, 
    {
      products: ['sad'],
      shipping_value: 0,
      count: 0
    }
  )


  return <>
    <h1>App Context</h1>
    {context.products.map(v => v.name)}

    <h1>UserReducer</h1>
    {JSON.stringify(state)}
    <hr />
    <button onClick={() => dispatch({
      type: "INCREMENT"
    })}>+</button>
    <button onClick={() => dispatch({
      type: 'DECREMENT'
    })}>-</button>
  </>;
}

export default AppContext;