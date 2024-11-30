function fetchData(url: string) {
  const promise = fetch(url)
    .then((res) => res.json())
    .then(async (res) => {
      await sleep(1000)
      return res
    })

  return wrapPromise(promise)
}

export default fetchData

function wrapPromise(promise: any) {
  let status = 'pending'
  let response: any

  const suspender = promise.then(
    (res: string) => {
      status = 'success'
      response = res
    },
    (err: string) => {
      status = 'error'
      response = err
    },
  )

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender
      case 'error':
        throw response
      default:
        return response
    }
  }

  return { read }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
