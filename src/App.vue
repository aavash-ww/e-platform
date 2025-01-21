<template>
  <div>
    <Layout>

      <Suspense>
        <template #default>
          <router-view />
        </template>
        <template #fallback>
          <h1>Loading....</h1>
        </template>
      </Suspense>
      

    </Layout>
   
  </div>

</template>

<script>

import Layout from './Layout.vue';
export default {
  name: "App",
  components: {
    Layout,

  }
}
</script>
