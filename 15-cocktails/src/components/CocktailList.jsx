import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext()

  if (loading) return <Loading />

  if (!cocktails.length) return <h2 className="section-title">no cocktails matched your search</h2>

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="section-center cocktails-container">
        {
          cocktails.map(cocktail => {
            return <Cocktail key={cocktail.id} {...cocktail} />
          })
        }
      </div>
    </section>
  )
}

export default CocktailList
