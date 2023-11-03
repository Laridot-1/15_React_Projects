import { useState } from 'react';

const Tour = ({ image, info, name, price, removeTours, id }) => {
  // console.log(props)
  const [isLess, setIsLess] = useState(true)

  const handleRead = () => setIsLess(!isLess)

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {isLess ? `${info.substring(0, 150)}...` : info}
          <button onClick={handleRead}>{isLess ? 'read more' : 'show less'}</button>
        </p>
        <button className="delete-btn" onClick={() => removeTours(id)}>not interested</button>
      </footer>
    </article>
  )
};

export default Tour;
