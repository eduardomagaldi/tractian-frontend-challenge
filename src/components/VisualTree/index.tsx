import { Suspense } from 'react'
import CompaniesList from '../CompaniesList'
import Loading from '../Loading'

const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <CompaniesList />
      </Suspense>
    </>
  )
}

export default App
