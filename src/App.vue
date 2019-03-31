<template>
  <div id="app">
  
    <HomeHero/>
  </div>
</template>

<script>
import HomeHero from './components/HomeHero'

export default {
  name: 'App',
  data: function () {
  return {
    title: "Hi Sandeep"
  }
},
  components: {
    HomeHero
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style