<template lang="pug">
v-toolbar(color="gray")
  router-link.link(to="/") Cloud
  v-spacer
  div(@click="Logout") fbfb
  div User
  v-btn(icon)
    fa.icon(icon="circle-user")
</template>

<script setup>
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()

const Logout = () => { store.dispatch('logoutPerson') }

const auth = computed(() => store.getters.isLoggedIn)
const router = useRouter()

watch(auth, (currentValue) => {
  if (!currentValue) router.push({ name: 'login' })
})

</script>

<style scoped lang="scss">

.link {
  text-decoration: none;
  margin-right: 10px;
  color: #000;
  cursor: pointer;
}

.icon {
  font-size: 19px;
}

</style>