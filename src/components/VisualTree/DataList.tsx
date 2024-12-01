import React, { useState, useRef, useTransition, useEffect } from 'react'

import { read } from './useQuery'

export default () => {
  //   const [loading, startTransition] = useTransition()
  //   const currentPage = useRef(0)
  const [pages, setPages] = useState([])

  //   const data = await read()

  useEffect(() => {
    async function fetchData() {
      const data = await read()
      setPages(data)
    }
  }, [])

  //   function loadMore() {
  //     startTransition(() => {
  //       currentPage.current = currentPage.current + 1
  //       setPages((pages) => pages.concat(currentPage.current))
  //     })
  //   }

  return (
    <div>
      {pages.map((d, i) => (
        <div key={i}>
          <span>{d.name}</span>
        </div>
      ))}
    </div>
  )
}
