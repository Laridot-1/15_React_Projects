import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [value, setValue] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [alert, setAlert] = useState({ state: false, type: "", msg: "" })
  const [list, setList] = useState(() => {
    const items = localStorage.getItem("items")
    if (items) return JSON.parse(items)
    return []
  })
  const [editId, setEditId] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) {
      if (isEditing) {
        setAlert({ state: true, type: "danger", msg: "edit item" })
        let item = list.find(item => item.id === editId)
        setValue(item.name)
      }
      else {
        setAlert({ state: true, type: "danger", msg: "input a value" })
      }
    }
    else if (value && isEditing) {
      setEditId(null)
      setIsEditing(false)
      const newList = list.map(item => {
        if (item.id === editId) item.name = value
        return item
      })
      setList(newList)
      setValue("")
      setAlert({ state: true, type: "success", msg: "edited item" })
    }
    else {
      const newItem = { id: crypto.randomUUID(), name: value }
      setList([...list, newItem])
      setAlert({ state: true, type: "success", msg: "added item" })
      setValue("")
    }
  }

  const handleEdit = (name, id) => {
    setEditId(id)
    setIsEditing(true)
    setValue(name)
  }

  const handleDelete = (id) => {
    if (isEditing && editId === id) {
      setAlert({ state: true, type: "danger", msg: "edit item first" })
      const item = list.find(item => item.id === editId)
      setValue(item.name)
    }
    else {
      const newList = list.filter(item => item.id !== id)
      setList(newList)
      setAlert({ state: true, type: "danger", msg: "deleted item" })
    }
  }

  const handleClear = () => {
    setList([])
    setAlert({ state: true, type: "danger", msg: "cleared items" })
  }

  useEffect(() => {
    let id = setTimeout(() => setAlert({ state: false, type: "", msg: "" }), 2000)
    return () => clearTimeout(id)
  }, [alert])

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(list))
  }, [list])

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.state && <Alert type={alert.type} msg={alert.msg} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" value={value} onChange={(e) => setValue(e.target.value)} placeholder="e.g. egg" />
          <button className="submit-btn" type="submit">{isEditing ? "edit" : "submit"}</button>
        </div>
      </form>
      {
        list.length > 0 &&
        <div className="grocery-container">
          <div className="grocery-list">
            {
              list.map(item => {
                return <List key={item.id} {...item} handleDelete={handleDelete} handleEdit={handleEdit} />
              })
            }
          </div>
          <button className="clear-btn" onClick={handleClear}>clear items</button>
        </div>
      }
    </section>
  )
}

export default App
