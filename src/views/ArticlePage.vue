<template>
  <div id="app">
 <section class="hero is-medium aqua-color">
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title has-text-white is-size-1">
         {{message}}
      </h1>
      <h2 class="subtitle">
       
      </h2>
    </div>
  </div>
</section>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      message: "About Me"
    };
  }

};
</script>
<style>
.aqua-color{
background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
}
</style>
