<template lang="pug">
v-app
  component(:is="layout")
  modal-error(v-if="error" :error="error")
  modal-action(v-if="action" :action="action")
  router-view
</template>

<script setup>
import ModalError from '@/components/ModalError'
import ModalAction from '@/components/ModalAction'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'



const route = useRoute()
const layout = computed(() => { route.meta.layout })
const store = useStore()
const error = computed(() => store.getters.getErrorModal)
const action = computed(() => store.getters.getActionModal)

</script>
