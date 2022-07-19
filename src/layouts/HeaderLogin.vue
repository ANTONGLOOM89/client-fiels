<template lang="pug">
v-toolbar(color="gray")
  router-link.link(to="/") Cloud
  v-spacer
  v-list-item
    v-list-item-title
      v-btn Войти
  v-list-item
    v-list-item-title
      v-btn Регистрация

</template>

<script setup>
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
