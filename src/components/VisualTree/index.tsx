import { Suspense } from 'react'
import CompaniesList from '../CompaniesList'

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <CompaniesList />
    </Suspense>
  )
}

export default App

function Loading() {
  return <div>Loading...</div>
}
