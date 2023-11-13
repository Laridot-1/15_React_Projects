import React, { useState, useEffect } from 'react'

const SingleColor = ({ hex, weight, id }) => {
  const [alert, setAlert] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(`#${hex}`)
    setAlert(true)
  }

  useEffect(() => {
    let id = setTimeout(() => setAlert(false), 2000)
    return () => clearTimeout(id)
  }, [alert])

  return (
    <article className={id >= 12 ? "color-light color" : "color"} style={{ backgroundColor: `#${hex}` }} onClick={handleCopy}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
