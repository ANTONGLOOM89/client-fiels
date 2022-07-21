<template lang="pug">
v-app
  component(:is="layout")
  modal-error(v-if="modal" :modal="modal")
  router-view
</template>

<script setup>
import ModalError from '@/components/ModalError'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'



const route = useRoute()
const layout = computed(() => { route.meta.layout })
const store = useStore()
const modal = computed(() => store.getters.getErrorModal)

</script>
