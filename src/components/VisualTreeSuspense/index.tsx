import { Suspense } from 'react'
import CompaniesList from '../CompaniesList'

const App = () => {
  return (
    <Suspense fallback={<p>Fetching products...</p>}>
      <CompaniesList />
    </Suspense>
  )
}

export default App
