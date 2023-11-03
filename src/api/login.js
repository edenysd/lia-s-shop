import apiInstance from './request'

export const loginUser = async ({ username, password, isTestUser }) => {
  return apiInstance.post('/auth/login', {
    username: isTestUser ? 'mor_2314' : username,
    password: isTestUser ? '83r5^_' : password
  })
}
