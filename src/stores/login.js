import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginUser } from '../api/login'

export const useLoginStore = defineStore('login', () => {
  const token = ref(null)
  const isLogged = ref(false)

  async function login({ username, password, isTestUser }) {
    return loginUser({ username, password, isTestUser }).then(({ data }) => {
      token.value = data.token
      isLogged.value = true
      return data.token
    })
  }

  return { token, isLogged, login }
})
