import React, { useContext, useReducer, useEffect } from 'react'
// import cartItems from './data'
import reducer from './reducer'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  cart: [],
  loading: false,
  total: 0,
  amount: 0
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clear = () => dispatch({ type: "CLEAR" })

  const increase = (id) => dispatch({ type: "INCREASE", id })

  const decrease = (id) => dispatch({ type: "DECREASE", id })

  const remove = (id) => dispatch({ type: "REMOVE", id })

  useEffect(() => {
    dispatch({ type: "TOTAL" })
    dispatch({ type: "AMOUNT" })
  }, [state.cart])

  useEffect(() => {
    const fetchItems = async () => {
      dispatch({ type: "LOADING" })
      const data = await fetch(url)
      const items = await data.json()
      dispatch({ type: "FINISH", items })
    }
    fetchItems()
  }, [])

  return (
    <AppContext.Provider
      value={{ ...state, clear, increase, decrease, remove }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
