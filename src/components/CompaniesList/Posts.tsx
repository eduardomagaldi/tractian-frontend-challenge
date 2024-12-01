import './style.css'

const useData = fetchPosts('https://fake-api.tractian.com/companies')

const Posts = () => {
  // useEffect cannot be used,
  // needs to be run on every render
  // hook will run only once
  const posts = useData()
  return (
    <div className="wrapper-company">
      <h3>Choose a company:</h3>
      {posts.map((post: any, index) => (
        <a className="company" key={index} onClick={handleClick}>
          <img className="icon" src="/icon-company.png" />
          {post.name}
        </a>
      ))}
    </div>
  )
}

export default Posts

function fetchPosts(url: string) {
  let status = 'pending'
  let result: any

  let fetching = fetch(url)
    .then((res) => res.json())
    .then(async (res) => {
      await sleep(3000)
      return res
    })
    .then((success) => {
      status = 'fulfilled'
      result = success
    })
    .catch((error) => {
      status = 'rejected'
      result = error
    })

  return () => {
    if (status === 'pending') {
      throw fetching // Suspend(a way to tell React data is still fetching)
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

function handleClick() {
  alert('You clicked me!')
}
