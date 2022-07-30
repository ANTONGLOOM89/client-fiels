<template lang="pug">
v-row
  v-col
    header-login(@toggle="toggleBtn")
    v-container
      h2 {{ existField ? 'Регистрация' : 'Вход' }}
      v-form(ref='form' v-model='valid' lazy-validation)
        v-text-field(v-if="existField" v-model='name' :counter='10' :rules='nameRules' label='Имя' required)
        v-text-field(v-model='email' :rules='emailRules' label='E-mail' required)
        v-text-field(
          v-model='password' :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" 
          :rules='[passwordRules.required, passwordRules.min]' :type="show ? 'text' : 'password'" 
          name='input-10-1' 
          label='Пароль' 
          counter 
          @click:append='show = !show')
        v-btn.mr-4(:disabled='!valid' color='success' @click='sendData')
          | Validate
</template>

<script setup>
import HeaderLogin from '@/layouts/HeaderLogin'
import { computed, reactive, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const valid = ref(true)

const name = ref('')
const nameRules = reactive([
  v => !!v || 'Введите Имя',
  v => (v && v.length <= 10) || 'Имя не должно быть больше 10 символов'
])


const email = ref('')
const emailRules = reactive([
  v => !!v || 'Введите email',
  v => /.+@.+\..+/.test(v) || 'E-mail неккоректный'
])

const show = ref(false)
const password = ref('')
const passwordRules = reactive({
  required: value => !!value || 'Введите пароль',
  min: v => v.length >= 1 || 'Минимально 1 символов'
})


const existField = ref(true)
const toggleBtn = (data) => { existField.value = data } 

const store = useStore()

const sendData = () => {
  if(existField.value) {
    store.dispatch('addPerson', { 
      name: name.value,
      email: email.value, 
      password: password.value 
    })
  } else {
    store.dispatch('loginPerson', {
      email: email.value, 
      password: password.value 
    })
  }
}

const auth = computed(() => store.getters.isLoggedIn)
const router = useRouter()

watch(auth, (currentValue) => {
  if (currentValue) router.push({ name: 'main' })
})






</script>

