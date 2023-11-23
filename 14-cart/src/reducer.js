const reducer = (state, action) => {

  if (action.type === "CLEAR") {
    return { ...state, cart: [] }
  }
  else if (action.type === "INCREASE") {
    const newItems = state.cart.map(item => {
      if (item.id === action.id) item.amount++
      return item
    })

    return { ...state, cart: newItems }
  }
  else if (action.type === "DECREASE") {
    const newItems = state.cart.map(item => {
      if (item.id === action.id) item.amount--
      return item
    }).filter(item => item.amount !== 0)

    return { ...state, cart: newItems }
  }
  else if (action.type === "REMOVE") {
    const newItems = state.cart.filter(item => item.id !== action.id)

    return { ...state, cart: newItems }
  }
  else if (action.type === "AMOUNT") {
    const calcAmount = (arr) => {
      const newAmount = arr.reduce((acc, cur) => {
        acc += cur.amount
        return acc
      }, 0)
      return newAmount
    }
    return { ...state, amount: calcAmount(state.cart) }
  }
  else if (action.type === "TOTAL") {
    const calcTotal = (arr) => {
      const newTotal = arr.reduce((acc, cur) => {
        acc += cur.price * cur.amount
        return acc
      }, 0)
      return newTotal.toFixed(2)
    }
    return { ...state, total: calcTotal(state.cart) }
  }
  else if (action.type === "LOADING") {
    return { ...state, loading: true }
  }
  else if (action.type === "FINISH") {
    return { ...state, cart: action.items, loading: false }
  }
  else {
    return state
  }
}

export default reducer
