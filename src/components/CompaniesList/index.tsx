import { useEffect, useState } from 'react'
import fetchData from '../../fetchData'

interface Company {
  id: string
  name: string
}

const LocationsList = () => {
  const [companies, setCompanies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // fetchData('companies').then((data) => {
    //   setTimeout(() => {
    //     // setCompanies(data)
    //     // console.log('setting companies')
    //   }, 1000)
    // })
  }, [])

  return <>{loading}</>
  // (
  //   <>
  //     {!companies.length ? (
  //       <EmptyList />
  //     ) : (
  //       companies?.map((company: Company) => (
  //         <div key={'company-' + company.id}>
  //           <strong>{company.name}</strong>

  //           {/* <Suspense fallback={<Loading />}>
  //             <LocationsList companyId={company.id} />
  //           </Suspense> */}
  //         </div>
  //       ))
  //     )}
  //   </>
  // )
}

export default LocationsList

function EmptyList() {
  return <div>There is no available data.</div>
}
