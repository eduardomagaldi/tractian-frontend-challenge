import { Suspense } from 'react'
import Posts from './Posts'

const MyPosts = () => {
  return (
    <div>
      <Suspense fallback={<>Loading...</>}>
        <Posts />
      </Suspense>
    </div>
  )
}

export default MyPosts

// import { Suspense } from 'react'
// import Todos from './Todos'

// const App = () => {
//   return (
//     <div>
//       <Suspense fallback={<p>Loading Todos...</p>}>
//         <Todos />
//       </Suspense>
//     </div>
//   )
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
//
//
//
