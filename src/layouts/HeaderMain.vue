<template lang="pug">
v-toolbar(color="gray")
  v-btn(icon)
    fa.icon(icon="circle-user")
  v-toolbar-title {{person?.name}}
  v-spacer
  v-btn(@click="Logout") Выход
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const { person } = defineProps({ person:Object })

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
  font-size: 35px;
}

</style>