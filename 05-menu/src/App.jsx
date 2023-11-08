import { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [btns] = useState(() => {
    const uniqueBtns = items.reduce((acc, cur) => {
      if (!acc.includes(cur.category)) acc.push(cur.category)
      return acc
    }, ["all"])
    return uniqueBtns
  })

  const handleFilter = (btn) => {
    if (btn === "all") {
      setMenuItems(items)
      return
    }
    const newItems = items.filter(item => {
      return item.category === btn
    })
    setMenuItems(newItems)
  }

  // console.log(btns)

  return (
    <main className="menu">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories btns={btns} handleFilter={handleFilter} />
      <section className="section-center">
        {
          menuItems.map(menuItem => {
            return <Menu key={menuItem.id} {...menuItem} />
          })
        }
      </section>
    </main>
  )
}

export default App;
