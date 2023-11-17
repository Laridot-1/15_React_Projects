import React from 'react'

const Alert = ({ type, msg }) => {
  return (
    <h4 className={`alert alert-${type}`}>{msg}</h4>
  )
}

export default Alert
