import React, { useState } from 'react';
import data from './data';
function App() {
  const [value, setValue] = useState(1)
  const [result, setResult] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let newResult = []
    for (let i = 0; i < value; i++) {
      newResult.push(data[i])
    }
    setResult(newResult)
  }

  return (
    <section className="section-center" onSubmit={handleSubmit}>
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form">
        <label htmlFor="number">paragraphs:</label>
        <input type="number" id="number" value={value} min={1} max={8} onChange={(e) => setValue(e.target.value)} />
        <button className="btn">generate</button>
      </form>
      <article className="result">
        {
          result.map((text, id) => {
            return <p key={id}>{text}</p>
          })
        }
      </article>
    </section>
  )
}

export default App;
