import { lazy, Suspense, useEffect, useState } from 'react'
import fetchData from '../../fetchData'
import Loading from '../Loading'

const LocationsList = lazy(() => import('../LocationsList'))

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

export default CompaniesList

function EmptyList() {
  return <div>There is no available data.</div>
}
