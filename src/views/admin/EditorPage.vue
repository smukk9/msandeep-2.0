<template>
  <div id="app">
    <div class="container">
      <section>
        <div class="has-text-centered">
          <h1 class="title is-size-1">{{message}}</h1>
        </div>
        <div class="field">
          <label class="label is-large">Title</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input">
          </div>
        </div>
        <div>
          <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
        </div>

        <div class="field is-grouped">
          <p class="control">
            <a class="button is-link">Save changes</a>
          </p>
          <p class="control">
            <a class="button">Cancel</a>
          </p>
          <p class="control">
            <a class="button is-danger">Delete post</a>
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data: function() {
    return {
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {},
      message: "Create Article"
    };
  }
};
</script>
<style>
.ck-editor__editable {
  min-height: 700px;
}
</style>
