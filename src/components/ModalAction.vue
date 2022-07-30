<template lang="pug">
v-dialog(v-model='dialog' persistent)
  v-card(width='400')
    v-card-title
      fa.icon(icon="triangle-exclamation")
      v-text Подтвердите действие
    v-card-text.pa-4
      | {{ action.message }}
    v-card-actions
      v-spacer
      v-btn(color='green darken-1' text @click='confirmModal')
        | Подтвердить
      v-btn(color='green darken-1' text @click='closeModal')
        | Закрыть
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const { action } = defineProps({ action:Object })

const dialog = computed(() => ( action ? true : false ))
const closeModal = () => { store.dispatch('unsetActionModal') }
const confirmModal = () => {
    store.dispatch(action.info)
    closeModal()
}


</script>