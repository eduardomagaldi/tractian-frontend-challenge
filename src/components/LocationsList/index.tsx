import React from 'react'
import fetchData from '../../fetchData'

interface Company {
  id: string
  name: string
}

const LocationsList = ({ companyId }: { companyId: string }) => {
  return <div>{companyId}</div>

  // fetchData('locations', companyId).then((data) => {
  //   if (companyId) {
  //     return <>{companyId}</>
  //   }
  // })
  // <>{companyId}</>
  // return fetchData('locations', companyId).then((data) => {
  //   return {
  //     default: () => {
  //       return <div>Location......... </div>
  //     },
  //   }
  // })
}

// function delayForDemo(promise: Promise<{ default: ComponentType<any> }>) {

// }

// fetchData('locations', companyId).then((data) => {
//   return {
//     default: () => {
//       // const companies = data
//       // let listItems = []

//       // if (companies && companies.length) {
//       //   listItems = companies.map((company: Company, index: number) => (
//       //     <div key={'company-' + index}>
//       //       {company.name} ({company.id})
//       //     </div>
//       //   ))

//       //   return <>{listItems}</>
//       // }

//       // return <EmptyList />

//       return <div>Location.........</div>
//     },
//   }
// }),

export default LocationsList

function EmptyList() {
  return <div>There is no available data.</div>
}
