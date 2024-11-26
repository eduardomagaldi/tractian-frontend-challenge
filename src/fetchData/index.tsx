const API_ENDPOINT = 'https://fake-api.tractian.com'

export default async function (type: string, companyId?: string) {
  let url = null

  if (!companyId) {
    if (type === 'companies') {
      url = `${API_ENDPOINT}/companies`
    } else {
      throw new Error('Missing company id on api call.')
    }
  } else {
    if (type === 'locations') {
      url = `${API_ENDPOINT}/companies/${companyId}/locations`
    }

    if (type === 'assets') {
      url = `${API_ENDPOINT}/companies/${companyId}/assets`
    }
  }

  if (!url) {
    throw new Error(
      'API call should be typed "companies", "locations" or "assets"',
    )
  }

  await sleep(1000)

  const resp = await fetch(url)
  const json = await resp.json()
  return json
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
