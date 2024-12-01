let status = 'pending'
let result: any

const postsData = fetchPosts('https://fake-api.tractian.com/companies')

// Posts component (definition)
const Posts = () => {
  // No need for loading states
  const posts = postsData()
  return (
    <div>
      {posts.map((post: any, index) => (
        <div key={index}>{post.name}</div>
      ))}
    </div>
  )
}

export default Posts

// Fetch external data
function fetchPosts(url: string) {
  let fetching = fetch(url)
    .then((res) => res.json())
    .then(async (res) => {
      await sleep(1000)
      return res
    })
    .then((success) => {
      status = 'fulfilled'
      result = success
    })
    // Fetch request has failed
    .catch((error) => {
      status = 'rejected'

      result = error
    })

  return () => {
    if (status === 'pending') {
      throw fetching // Suspend(A way to tell React data is still fetching)
    } else if (status === 'rejected') {
      throw result // Result is an error
    } else if (status === 'fulfilled') {
      return result // Result is a fulfilled promise
    }
  }
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
