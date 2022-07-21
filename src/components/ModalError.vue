<template lang="pug">
v-dialog(v-model='dialog' persistent='' max-width='490')
  v-card
    v-card-title
      fa.icon(icon="triangle-exclamation")
      span Предупреждение!
    v-card-text
      | {{ modal.message }}
    v-card-actions
      v-spacer
      v-btn(color='green darken-1' text @click='closeModal')
        | Закрыть
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const { modal } = defineProps({ modal:Object })

const dialog = computed(() => ( modal ? true : false ))
const closeModal = () => { store.dispatch('unsetErrorModal') }


</script>