import { Suspense, lazy } from 'react'
import Loading from '../Loading'

const CompaniesList = lazy(() => import('../CompaniesList'))

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
