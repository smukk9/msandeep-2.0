<template>
  <div id="app">
    <section class="hero is-large showcase">
      <h1>{{message}}</h1>
    </section>
  </div>
</template>

<script type="text/babel">
export default {
  data: function() {
    return {
      message: "Hi, I'm Sandeep"
    };
  },

  computed: {
    getCount() {
      return Number(this.count);
    },
    getIsOpenNewTab() {
      return Boolean(this.isOpenNewTab);
    }
  }
};
</script>
<style>
.showcase {
  background-image: url("../assets/hero.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
}

.showcase h1 {
  font-size: 80px;
  color: #f0f8ff;
  margin: auto;
  line-height: 50px;
  vertical-align: middle;
}
</style>
