<template lang="pug">
v-app
  component(:is="layout")
  router-view
</template>

<script setup>
import { computed } from '@vue/runtime-core'
import { useRoute } from 'vue-router'

const route = useRoute()
const layout = computed(() => { route.meta.layout })

</script>
