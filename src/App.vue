<template lang="pug">
v-app
  v-row(no-gutters)
    v-col
      Header
      v-container
        router-view
</template>

<script setup>
import Header from '@/layouts/Header'

</script>
