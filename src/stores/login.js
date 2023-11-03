import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { loginUser } from '../api/login'

export const useLoginStore = defineStore('login', () => {
  const token = ref(null)
  const isLogged = ref(false)
  const userInfo = reactive({
    username: 'Test Customer',
    isTestUser: false
  })

  async function login({ username, password, isTestUser }) {
    return loginUser({ username, password, isTestUser }).then(({ data }) => {
      token.value = data.token
      isLogged.value = true
      userInfo.isTestUser = isTestUser
      userInfo.username = isTestUser ? 'Test Customer' : username
      return data.token
    })
  }

  function logout() {
    token.value = null
    isLogged.value = false
    userInfo.isTestUser = false
    userInfo.username = 'Test Costumer'
  }

  return { token, isLogged, userInfo, login, logout }
})
