<template lang="pug">
v-toolbar(color="gray")
  router-link.link(to="/") Cloud
  v-spacer
  v-list-item
    v-list-item-title
      v-btn(@click="toggleBtn(false)") Войти
  v-list-item
    v-list-item-title
      v-btn(@click="toggleBtn(true)") Регистрация

</template>

<script setup>
const emit = defineEmits(['toggle'])
const toggleBtn = (data) => { emit('toggle', data) }
</script>

<style scoped lang="scss">

.link {
  text-decoration: none;
  margin-right: 10px;
  color: #000;
  cursor: pointer;
}

.icon {
  font-size: 19px;
}

</style>
