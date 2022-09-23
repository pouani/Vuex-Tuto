<template>
  <div class="p-4">
    <Header />
    <router-view />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
        Header,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@1,9..144,600&family=Poppins&display=swap');
  #app{
    font-family: 'Poppins', sans-serif;
  }
</style>
