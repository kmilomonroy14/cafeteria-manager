import { apiRequest } from './api.js'

let healthRequest

export function getApiHealth() {
  if (!healthRequest) {
    healthRequest = apiRequest('/health').finally(() => {
      healthRequest = undefined
    })
  }

  return healthRequest
}
