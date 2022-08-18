<template lang="pug">
v-row(no-gutters)
  v-col
    header-main(:person="person")
    v-container
      v-layout
        .my-1
          v-btn(
            rounded="pill" 
            color="primary" 
            @click="goBack"
          ) Назад
        .mx-4.my-1
          v-btn(
            rounded="pill" 
            color="primary" 
            @click="createFolder"
          ) Создать папку
      table-files(:folders="folders")
      router-view
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import HeaderMain from '@/layouts/HeaderMain'
import TableFiles from '@/components/TableFiles'
import ModalSendFile from '@/components/ModalSendFile'

const dialog = ref(true)

const store = useStore()
const route = useRoute()
const person = computed(() => store.getters.getPerson)
const folders = computed(() => store.getters.getFolders)

const personId = localStorage.getItem('personId')

const goBack = () => { console.log('goBack') }
const createFolder = () => { store.dispatch('addFileModal', { component: ModalSendFile, props: { dialog: true } }) }

onMounted(() => { 
  store.dispatch('fetchOnePerson', personId)
  store.dispatch('fetchFolders', personId)
})


</script>