<template lang="pug">
.text-center
  v-dialog(v-model='dialog')
    v-card(width='500')
      v-card-title
        h2.mt-2.mb-4 {{header}}
        slot(name="content")
      v-divider
      v-spacer
      v-layout
        v-spacer
        v-btn.ma-4.mx-0(color='success' text @click='close')
          | Отменить
        v-btn.ma-4(:disabled='disabled' color='success' @click="saveForm")
          | Cохранить 
</template>

<script setup>
import { ref } from 'vue'
const { header, dialog, disabled } = defineProps({ header: String, dialog: Boolean, disabled: Boolean })
const emit = defineEmits(['closeForm', 'saveForm'])
const close = () => { emit('closeForm') }
const saveForm = () => { emit('saveForm') }

</script>