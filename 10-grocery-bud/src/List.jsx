import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ id, name, handleDelete, handleEdit }) => {
  return (
    <article className="grocery-item">
      <p className="title">{name}</p>
      <div className="btn-container">
        <button className="edit-btn" onClick={() => handleEdit(name, id)}>
          <FaEdit />
        </button>
        <button className="delete-btn" onClick={() => handleDelete(id)}>
          <FaTrash />
        </button>
      </div>
    </article>
  )
}

export default List
