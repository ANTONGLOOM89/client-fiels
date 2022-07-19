<template lang="pug">
v-row(no-gutters)
  v-col
    header-main
    v-container
      router-view
</template>

<script setup>
import HeaderMain from '@/layouts/HeaderMain'

</script>