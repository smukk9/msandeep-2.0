<template>
  <div id="app">
      <div class="container">
  
   <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>

 
  <section class="section">
  <div class="field is-grouped">
  <p class="control">
    <a class="button is-link">
      Save changes
    </a>
  </p>
  <p class="control">
    <a class="button">
      Cancel
    </a>
  </p>
  <p class="control">
    <a class="button is-danger">
      Delete post
    </a>
  </p>
</div>
  </section>
</div>
     </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
  data: function() {
    return {
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
        editorConfig: {
                    
                   
                }
    };
  }
};
</script>
<style>
  .ck-editor__editable {
    min-height: 700px;
   
    
   }
</style>
