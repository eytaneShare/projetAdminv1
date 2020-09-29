import React, { createContext, useContext, useReducer } from "react"

const CartStateContext = createContext()
const CartDispatchContext = createContext()
var totalPrice = 0
// Retourne le nouveau state basé sur le state précédent et l'action à effectuer
const cartReducer = (state, action) => {
  // var storage
  switch (action.type) {
    // action: { item: Item, count: Number }
    case "add":
      if (state.some((item) => item.id === action.item.id))
        return state.map((item) =>
          item.id === action.item.id
            ? { ...item, count: item.count + action.count }
            : item
        )
      else return [...state, { ...action.item, count: action.count }]
    // action : { id: ID }
    case "remove":
      return state.filter((item) => item.id !== action.id)
    case "empty":
      return []
    
    default:
      throw new Error("Unsupported action type")
  }
  //   localStorage.setItem('cart',JSON.stringify(storage))
  //   return storage
}

// Rend le cart accessible aux composants enfants
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, [])

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  )
}

// Utilise le cart dans un composant
export const useCart = () => {
  const state = useContext(CartStateContext)
  const dispatch = useContext(CartDispatchContext)

  if (state === undefined || dispatch === undefined)
    throw new Error("You need a CartProvider to call useCart")

  return [state, dispatch]
}
