import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ id, img, info, name, glass }) => {
  return (
    <article className="cocktail">
      <img src={img} alt={name} />
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">details</Link>
      </div>
    </article>
  )
}

export default Cocktail
