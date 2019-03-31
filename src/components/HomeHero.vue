<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    >
    <quick-menu
      :menu-count="getCount"
      :icon-class="icons"
      :menu-url-list="list"
      :background-color="backgroundColor"
      :color="color"
      :position="position"
      :is-open-new-tab="getIsOpenNewTab"
      @process="print"
    ></quick-menu>

    <section class="hero is-large showcase">
      <h1>Hi, I'm Sandeep</h1>
    </section>
  </div>
</template>

<script type="text/babel">
import quickMenu from "vue-quick-menu";
export default {
  data: function() {
    return {
      message: "Hi Sandeep",
      count: 4,
      icons: ["fab fa-github", "fa fa-comment", "fa fa-code", "fa fa-envelope"],
      list: [
        { isLink: false },
        { isLink: true, url: "/doo" },
        { isLink: true, url: "/foo" },
        { isLink: false }
      ],
      backgroundColor: "#262626",
      color: "#ffffff",
      position: "top-left",
      isOpenNewTab: false
    };
  },
  components: {
    quickMenu
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
  font-size: 70px;
  color: #f0f8ff;
  margin: auto;
  line-height: 50px;
  vertical-align: middle;
}
</style>
