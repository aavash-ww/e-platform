<template>
  <Suspense>
    <template #default>
      <Homepage />
    </template>
    <template #fallback>
      <h1>Loading....</h1>
    </template>
  </Suspense>
</template>

<script>

import { defineAsyncComponent } from 'vue';

export default {
  components: {
    Homepage: defineAsyncComponent(() => import('./pages/Homepage.vue'))
  }
}
</script>
