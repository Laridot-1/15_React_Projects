import { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [num, setNum] = useState(0)

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true)
      const res = await fetch(url)
      if (res.ok) {
        const jobs = await res.json()
        setJobs(jobs)
        // console.log(jobs)
      }
      setIsLoading(false)
    }
    fetchJobs()
  }, [])

  if (isLoading) return (
    <section className="section loading">
      <h1>loading...</h1>
    </section>
  )

  const { company, dates, duties, title } = jobs[num]

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="job-center">
        <div className="btn-container">
          {
            jobs.map(({ company }, id) => {
              return <button className={num === id ? "job-btn active-btn" : "job-btn"} key={id} onClick={() => setNum(id)}>
                {company}
              </button>
            })
          }
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {
            duties.map((duty, id) => {
              return <div className="job-desc" key={id}>
                <FaAngleDoubleRight />
                <p>{duty}</p>
              </div>
            })
          }
        </article>
      </div>
    </section>
  )
}

export default App
