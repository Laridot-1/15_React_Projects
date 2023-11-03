import { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTours = (id) => {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setIsLoading(true)
    const res = await fetch(url)
    // console.log(res)
    if (res.ok) {
      const data = await res.json()
      setTours(data)
      setIsLoading(false)
    }
    // console.log(data)
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  return (
    <main>
      <div className="title">
        {
          tours.length ?
            <>
              <h2>our tours</h2>
              <div className="underline"></div>
            </> : <>
              <h2>no tours left</h2>
              <button onClick={fetchTours} className='btn'>refresh</button>
            </>
        }
      </div>
      <Tours tours={tours} removeTours={removeTours} />
    </main>
  )
}

export default App
