<script setup>
import { useLoginStore } from '../stores/login'
import { useMeta } from 'vue-meta'
import { reactive, watch } from 'vue'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import { useRouter } from 'vue-router'

const props = defineProps(['redirect'])

const userData = reactive({ username: '', password: '' })

const router = useRouter()

const loginStore = useLoginStore()

watch(
  () => loginStore.isLogged,
  () => {
    router.push(props.redirect || '/')
  }
)

useMeta({
  title: 'Login'
})
</script>

<template>
  <div class="flex flex-column w-full h-full justify-content-center align-items-center">
    <div class="flex flex-column w-23rem">
      <span v-tooltip="'Enter your username'" class="p-float-label w-full mb-2">
        <InputText class="w-full" id="username" v-model="userData.username" />
        <label for="username">Username</label>
      </span>

      <Password
        v-tooltip="'Enter your password'"
        class="w-full"
        inputClass="w-full"
        v-model="userData.password"
        :feedback="false"
        toggleMask
        placeholder="Password"
      />

      <Divider />

      <Button class="w-full mb-2" raised label="Login" @click="loginStore.login(userData)" />
      <Button
        class="w-full"
        label="Test User"
        severity="info"
        raised
        @click="loginStore.login({ isTestUser: true })"
      />
    </div>
  </div>
</template>
