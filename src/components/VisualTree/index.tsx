import { Suspense } from 'react'
import Todos from './Todos'

const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading Todos...</p>}>
        <Todos />
      </Suspense>
    </div>
  )
}

export default App
