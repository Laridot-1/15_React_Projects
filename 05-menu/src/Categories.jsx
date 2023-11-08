const Categories = ({ btns, handleFilter }) => {
  return (
    <div className="btn-container">
      {
        btns.map(btn => {
          return <button key={btn} className="filter-btn" onClick={() => handleFilter(btn)}>{btn}</button>
        })
      }
    </div>
  )
};

export default Categories;
