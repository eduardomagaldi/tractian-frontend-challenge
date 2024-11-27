import React, {
  lazy,
  Suspense,
  ComponentType,
  useEffect,
  useState,
} from 'react'
import fetchData from '../../fetchData'
import Loading from '../Loading'

// const LocationsList: any = lazy((): Promise<any> => import('../LocationsList'))

const LocationsList = lazy(() => import('../LocationsList'))

// function delayForDemo(promise: Promise<{ default: ComponentType<any> }>) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 2000)
//   }).then(() => promise)
// }

interface Company {
  id: string
  name: string
}

const CompaniesList = () => {
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    fetchData('companies').then((data) => {
      setCompanies(data)
    })
  }, [])

  console.log('companies', companies)

  // listItems
  return (
    <>
      {companies?.map((company: Company) => (
        <div key={'company-' + company.id}>
          <strong>{company.name}</strong>

          <Suspense fallback={<Loading />}>
            <LocationsList companyId={company.id} />
          </Suspense>
        </div>
      ))}
    </>
  )
}

{
  /* */
}

// fetchData('companies').then((data) => {
//   return {
//     default: () => {
//       const companies = data

//       if (companies && companies.length) {
//         const listItems = companies.map((company: Company, index: number) => {
//           return (
//             <div key={'company-' + company.id}>
//               <strong>{company.name}</strong>

//               <Suspense fallback={<Loading />}>
//                 <LocationsList companyId={company.id} />
//               </Suspense>
//             </div>
//           )
//         })

//         return <>{listItems}</>
//       }

//       return <EmptyList />
//     },
//   }
// })

export default CompaniesList

function EmptyList() {
  return <div>There is no available data.</div>
}
