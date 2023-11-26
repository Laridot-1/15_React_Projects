import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [term, setTerm] = useState("a")
  const [loading, setLoading] = useState(true)
  const [cocktails, setCocktails] = useState([])

  useEffect(() => {
    const fetchDrinks = async () => {
      setLoading(true)
      try {
        const res = await fetch(`${url}${term}`)
        const data = await res.json()
        if (data.drinks) {
          // console.log(data.drinks)
          const newDrinks = data.drinks.map(({ idDrink: id, strDrinkThumb: img, strGlass: glass, strAlcoholic: info, strDrink: name }) => {
            return { id, img, glass, info, name }
          })
          // console.log(newDrinks)
          setCocktails(newDrinks)
        } else {
          setCocktails([])
        }
        setLoading(false)
      } catch (err) {
        setLoading(false)
      }
    }
    fetchDrinks()
  }, [term])

  const obj = {
    loading, cocktails, setTerm
  }

  return <AppContext.Provider value={obj}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
