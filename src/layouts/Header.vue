<template lang="pug">
v-toolbar(color="gray")
  router-link.link(to="/") Cloud
  v-spacer
  div User
  v-btn(icon)
    fa.icon(icon="circle-user")
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
