<template>
  <div id="app">
    <BurgerMenu></BurgerMenu>
    <router-view/>
  </div>
</template>

<script>
import BurgerMenu from "@/components/BurgerMenu";
export default {
  name: "App",
  data: function() {
    return {};
  },
  components: {
    BurgerMenu
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style