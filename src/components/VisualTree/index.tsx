import { useEffect, useState, ReactElement } from 'react'

interface Company {
  id: string
  name: string
}

function App() {
  const [companiesList, setCompaniesList] = useState<Company[] | null>(null)

  useEffect(() => {
    ;(async function () {
      const list = await getCompaniesList()
      setCompaniesList(list)
    })()
  }, [])

  const loadingMessage: ReactElement = <span key="loading">Loading...</span>
  const emptyMessage: ReactElement = <span key="empty">No data available.</span>
  let companyListOutput: ReactElement[] = [loadingMessage]

  if (companiesList) {
    if (companiesList.length) {
      companyListOutput = companiesList?.map((company, index) => (
        <div key={'company-' + index}>{company.name}</div>
      ))
    } else {
      companyListOutput = [emptyMessage]
    }
  }

  return <>{companyListOutput}</>
}

export default App

async function getCompaniesList() {
  await sleep(3000)
  const respCompanies = await fetch('https://fake-api.tractian.com/companies')
  const json = await respCompanies.json()
  return json
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
