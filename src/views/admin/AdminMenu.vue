<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-menu">
        <div class="navbar-start" style="flex-grow: 1; justify-content: center;">
          <a class="navbar-item">Editor</a>
          <a class="navbar-item">Users</a>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: "Admin Page",
      activeTab: 0
    };
  },

};
</script>

<style>
a.navbar-item:hover {
  background-color: yellow;
}
</style>
