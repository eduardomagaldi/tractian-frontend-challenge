import React from 'react'
import fetchData from '../../fetchData'

interface Company {
  id: string
  name: string
}

const CompaniesList = React.lazy(() =>
  fetchData('companies').then((data) => {
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

function EmptyList() {
  return <div>There is no available data.</div>
}
