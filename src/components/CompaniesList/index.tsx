import React from 'react'

interface Company {
  id: string
  name: string
}

const CompaniesList = React.lazy(() =>
  getCompaniesList().then((data) => {
    return {
      default: () => {
        const companies = data
        let listItems = []

        if (companies && companies.length) {
          listItems = companies.map((company: Company, index: number) => (
            <div key={'company-' + index}>
              {company.name} ({company.id})
            </div>
          ))

          return <>{listItems}</>
        }

        return <EmptyList />
      },
    }
  }),
)

export default CompaniesList

async function getCompaniesList() {
  await sleep(1000)
  const respCompanies = await fetch('https://fake-api.tractian.com/companies')
  const json = await respCompanies.json()
  return json
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function EmptyList() {
  return <div>There is no available data.</div>
}
