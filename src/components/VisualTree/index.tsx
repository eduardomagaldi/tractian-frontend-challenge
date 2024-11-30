// import { Suspense } from 'react'
// import Todos from './Todos'

import { Suspense } from 'react'
import Posts from './Posts'

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

const MyPosts = () => {
  return (
    <div style={{ marginLeft: '20px' }}>
      <h1>My Posts</h1>
      {/* Wrap the <Posts /> component in React.Suspense to display a fallback(spinner)
      while the component is not yet ready to render (data is still fetching) */}

      <Suspense fallback={<>Loading...</>}>
        <Posts />
      </Suspense>
    </div>
  )
}

export default MyPosts
