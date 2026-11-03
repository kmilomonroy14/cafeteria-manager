const configuredApiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080/api'
const baseUrl = configuredApiUrl.replace(/\/+$/, '')
const supportedMethods = new Set(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])

export async function apiRequest(path, options = {}) {
  const {
    method: requestedMethod = 'GET',
    body,
    headers: requestHeaders,
    ...fetchOptions
  } = options
  const method = requestedMethod.toUpperCase()

  if (!supportedMethods.has(method)) {
    throw new Error(`Método HTTP no soportado: ${method}`)
  }

  const headers = new Headers(requestHeaders)
  headers.set('Accept', 'application/json')
  if (body !== undefined) {
    headers.set('Content-Type', 'application/json')
  }

  const response = await fetch(`${baseUrl}/${path.replace(/^\/+/, '')}`, {
    ...fetchOptions,
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
  })

  let responseData = null
  if (response.status !== 204) {
    const responseText = await response.text()
    if (responseText) {
      try {
        responseData = JSON.parse(responseText)
      } catch (error) {
        if (response.ok) {
          throw error
        }
        responseData = responseText
      }
    }
  }

  if (!response.ok) {
    const message =
      typeof responseData === 'string'
        ? responseData
        : responseData?.message ?? responseData?.error
    throw new Error(message || response.statusText || `HTTP ${response.status}`)
  }

  return responseData
}
