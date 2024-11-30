// import { Suspense, lazy } from 'react'
// import Loading from '../Loading'

// // import CompaniesList from '../CompaniesList'
// const CompaniesList = lazy(() => import('../CompaniesList'))

// const App = () => {
//   return (
//     <>
//       <Suspense fallback={<Loading />}>
//         <CompaniesList />
//       </Suspense>
//     </>
//   )
// }

//
//
//
//
//
//
//
//
//
//

// import { Suspense, lazy } from 'react'

// const LennyComponentLazy = lazy(() => import('../LennyComponent'))

// export default App

// function App() {
//   return (
//     <div>
//       <h1>Leo's App</h1>
//       <Suspense fallback={<div>Loading...</div>}>
//         <LennyComponentLazy />
//       </Suspense>
//     </div>
//   )
// }

//
//
//
//
//
//
//
//

// import { Suspense, useEffect, useState } from 'react'

// // A component that fetches data
// const fetchApiData = () => {
//   return new Promise((resolve) => {
//     console.log('promise')
//     setTimeout(() => {
//       resolve('Data loaded!')
//       console.log('Data loaded!')
//     }, 2000) // Simulating a 2-second delay for data fetching
//   })
// }

// // A component that uses Suspense to handle asynchronous data fetching
// const DataComponent = () => {
//   const [apiData, setApiData]: [any, any] = useState(null)

//   useEffect(() => {
//     async function fetchData() {
//       setApiData(await fetchApiData())
//     }

//     fetchData()
//   }, [])

//   return <div>{apiData}</div>
// }

// // Wrapping the component with Suspense
// const App = () => {
//   return (
//     <Suspense fallback={<LoadingSpinner />}>
//       <DataComponent />
//     </Suspense>
//   )
// }

// // A simple loading spinner component
// const LoadingSpinner = () => {
//   return <div>Loading...</div>
// }

// export default App

//
//
//
//
//
//
//
//
//
//
//

import { Suspense } from 'react'

// import UserWelcome from './UserWelcome'
import Todos from './Todos'
// import UserWelcome from './UserWelcome'

const App = () => {
  return (
    <div className="app">
      <h2>Simple Todo</h2>

      <Suspense fallback={<p>Loading Todos...</p>}>
        <Todos />
      </Suspense>
    </div>
  )
}

export default App
