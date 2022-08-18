<template lang='pug'>
.table
  .table__block
    .table__item(v-for="title in header") {{title}}
  .table__block(v-for="{ type, name, date_create, size } in folders")
      .table__item
        img(src="../assets/images/dir.svg")
      .table__item {{name}}
      .table__item {{date_create}}
      .table__item {{size}}
</template>



<script setup>
import { reactive, ref } from 'vue'

const header = ref(['Иконка', 'Название', 'Дата', 'Размер'])
const { folders } = defineProps({ folders:Array })

</script>

<style scoped lang="scss">
.table {
  margin-top: 20px;
  &__block {
    display: grid;
    grid-template-columns: .5fr 3fr 1fr 1fr;
  }
  &__item {
    padding: 10px 0px;
    border-bottom: 2px solid #6200EE;
  }
}
</style>