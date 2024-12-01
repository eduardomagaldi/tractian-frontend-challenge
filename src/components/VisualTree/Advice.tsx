import React, { useEffect, useState } from 'react'

const AdviceCard = () => {
  const [advice, setAdvice] = useState('')

  useEffect(() => {
    const url = 'https://api.adviceslip.com/advice'

    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        await sleep(6000)
        setAdvice(json.slip.advice)
      } catch (error) {}
    }

    fetchData()
  })

  return <div>{advice}</div>
}

export default AdviceCard

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
