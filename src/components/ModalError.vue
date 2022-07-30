<template lang="pug">
v-dialog(v-model='dialog' persistent)
  v-card(width='400')
    v-card-title
      fa.icon(icon="triangle-exclamation")
      v-text Предупреждение!
    v-card-text.pa-4
      | {{ error.message }}
    v-card-actions
      v-spacer
      v-btn(color='green darken-1' text @click='closeModal')
        | Закрыть
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const { error } = defineProps({ error:Object })

const dialog = computed(() => ( error ? true : false ))
const closeModal = () => { store.dispatch('unsetErrorModal') }


</script>