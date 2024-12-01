import { useState, useEffect } from 'react'

const Shows = () => {
  const [data, setData]: [any, any] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetch(
          'https://api.tvmaze.com/search/shows?q=heist',
        )
        const data = await result.json()

        await sleep(3000)

        setData(data)
      } catch (error) {
        // setError(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <div>
        {data?.map((show, index) => (
          <div key={index}>{show.show.name}</div>
        ))}
      </div>
    </div>
  )
}

export default Shows

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
