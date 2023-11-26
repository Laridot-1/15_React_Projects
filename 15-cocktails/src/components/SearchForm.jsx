import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setTerm } = useGlobalContext()
  const refValue = useRef("")

  useEffect(() => refValue.current.focus(), [])

  const handleSearch = () => setTerm(refValue.current.value)

  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="search">search for drinks</label>
          <input type="text" id="search" ref={refValue} onChange={handleSearch} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
