

import { useReducer } from 'react';
import { CarritoContext } from './CarritoContext'

const initialState = [];



export const CarritoProvider = ({ children }) => {
  
  const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "[CARRITO] AGR":
        return[...state,action.payload];
      case "[CARRITO] AUM":
        return state.map(
          item=>{
            const cant=item.cantidad+1;
            if(item.id==action.payload)return {...item,cantidad:cant}
            return item
          }
        )
      case "[CARRITO] DIS":
        return state.map(
          item=>{
            const cant=item.cantidad-1;
            if(item.id==action.payload&&item.cantidad>1)return {...item,cantidad:cant}
            return item
          }
        )
      case "[CARRITO] ELI":
        return state.filter(compra=>compra.id!==action.payload);
      default:
        return state;
    }
  }

  const [listaCompra, dispatch] = useReducer(comprasReducer, initialState)

  
  const agregarCompra = (compra) => {
    compra.cantidad=1
    const action = {
      type: "[CARRITO] AGR",
      payload: compra
    }
    dispatch(action)
  }
  const aumentarCantidad = (id) => {
    const action = {
      type: "[CARRITO] AUM",
      payload: id
    }
    dispatch(action)
  }
  const disminirCantidad = (id) => {
    const action = {
      type: "[CARRITO] DIS",
      payload: id
    }
    dispatch(action)
  }
  const eliminarCompra = (id) => {
    const action = {
      type: "[CARRITO] ELI",
      payload: id
    }
    dispatch(action)
  }

 
  return (
    <CarritoContext.Provider value={{listaCompra,agregarCompra,aumentarCantidad,disminirCantidad,eliminarCompra}}>
      {children}
    </CarritoContext.Provider>
  )
}
