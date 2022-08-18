<template lang="pug">
modal-base(
  header="Создание папки"
  :dialog="props.dialog"
  :disabled="!valid"
  @closeForm="closeForm"
  @saveForm="saveForm"
  )
  template(v-slot:content)
    v-form(ref='form' v-model='valid' lazy-validation)
      v-text-field(v-model='name' :rules='nameRules' label='Имя' required)
      v-text-field(v-model='type' :rules='typeRules' label='Тип' required)
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue'
import { useStore } from 'vuex'
import ModalBase from '@/components/ModalBase'

const { props } = defineProps({ props:Object })
const valid = ref(true)

const name = ref('')
const nameRules = reactive([
  v => !!v || 'Введите Имя'
])

const type = ref('')
const typeRules = reactive([
  v => !!v || 'Введите Тип'
])

const store = useStore()

const closeForm = () => { store.dispatch('unsetFileModal') }
const saveForm = () => { console.log('dvsdvsdvsdvds') }


</script>
