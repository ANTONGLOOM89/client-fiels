<template lang="pug">
v-row(no-gutters)
  v-col
    header-main(:person="person")
    v-container
      router-view
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import HeaderMain from '@/layouts/HeaderMain'

const store = useStore()
const route = useRoute()
const person = computed(() => store.getters.getPerson)

const personId = localStorage.getItem('personId')

onMounted(() => { store.dispatch('fetchOnePerson', personId) })

</script>