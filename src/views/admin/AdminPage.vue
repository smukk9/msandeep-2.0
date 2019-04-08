<template>
  <div id="app">
 <b-tabs v-model="activeTab" position="is-centered" class="block">
            <b-tab-item label="Editor">
                <EditorPage></EditorPage>
            </b-tab-item>

            <b-tab-item label="Users">
              
            </b-tab-item>

           
        </b-tabs>

  </div>
</template>

<script>
import EditorPage from './EditorPage'


export default {
  data: function() {
    return {
      message: "Admin Page",
      activeTab: 0
    };
  },
  components: {
      EditorPage
  }

};
</script>
<style>
.aqua-color{
background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
}
.navbar {
  background-color: #0a0a0a;
  color: white;
  height: 9%;
  display:flex;
  justify-content:center;
}
</style>
