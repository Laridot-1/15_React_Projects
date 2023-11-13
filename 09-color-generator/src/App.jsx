import React, { useState, useEffect } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState("")
  const [err, setErr] = useState(false)
  const [list, setList] = useState(new Values("#ff6347").all(10))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      const arr = new Values(color).all(10)
      setList(arr)
    } catch (err) {
      setErr(true)
    }
  }

  useEffect(() => {
    const id = setTimeout(() => {
      setErr(false)
    }, 2000)
    return () => clearTimeout(id)
  }, [err])

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="#ff6347" value={color} onChange={e => setColor(e.target.value)} className={err ? "error" : ""} />
          <button className="btn">generate</button>
        </form>
      </section>
      <section className="colors">
        {
          list.map((val, id) => {
            return <SingleColor key={id} {...val} id={id} hex={val.hex} />
          })
        }
      </section>
    </>
  )
}

export default App
