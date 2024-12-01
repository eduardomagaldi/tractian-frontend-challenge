export async function read() {
  let result = await fetch('https://fake-api.tractian.com/companies')
  const data = await result.json()

  return result
}
