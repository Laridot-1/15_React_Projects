import { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data)
  const handleClear = () => setPeople([])

  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        <button onClick={handleClear}>clear all</button>
      </section>
    </main>
  )
}

export default App;
