<template>
  <div>
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
    ></quick-menu>
  </div>
</template>

<script>
import quickMenu from "vue-quick-menu";

export default {
  data: function() {    
    return {
      count: 4,
      icons: ["fas fa-home", "fas fa-tag","fas fa-archive", "fa fa-user"],
      list: [
        { isLink: true, url: "/" },
        { isLink: true, url: "/tags" },
        { isLink: true, url: "/archive" },
        { isLink: true, url: "/me" }
      ],
      backgroundColor: "#262626",
      color: "#ffffff",
      position: "bottom-right",
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
</style>
