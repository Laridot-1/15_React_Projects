import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [cocktail, setCocktail] = useState(null)

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const res = await fetch(`${url}${id}`)
        const data = await res.json()
        if (data.drinks) {
          const { strDrink: name, strGlass: glass, strAlcoholic: info, strDrinkThumb: img, strCategory: category, strInstructions: instruction, strIngredient1, strIngredient2, strIngredient3 } = data.drinks[0]

          const ingredients = [strIngredient1, strIngredient2, strIngredient3]

          const newCocktail = { name, glass, info, img, category, instruction, ingredients }

          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
        setLoading(false)
      } catch (err) {
        setLoading(false)
      }
    }
    fetchCocktail()
  }, [])

  if (loading) return <Loading />

  if (!cocktail) return <h2 className="section-title">no cocktail to display</h2>

  const { name, info, img, instruction, category, glass, ingredients } = cocktail

  return (
    <section className="section cocktail-section">
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={img} alt="name" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {name}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {info}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instruction :</span>
            {instruction}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {
              ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null
              })
            }
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
