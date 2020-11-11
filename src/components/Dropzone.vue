<template>
  <vue-dropzone
    class="mt-5"
    ref="myVueDropzone"
    id="dropzone"
    :options="dropzoneOptions"
    :useCustomSlot="true"
  >
    <div class="dropzone-custom-content d-flex justify-center">
      <div class="mr-10">
        <img src="../assets/Fichier.svg" alt="Icon Fichier" />
      </div>
      <div>
        <h3 class="dropzone-custom-title">
          Glisser et déposer vos fichiers ici
        </h3>
        <div class="subtitle">
          <u>Ou chercher un fichier</u>
        </div>
      </div>
    </div>
  </vue-dropzone>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  name: "Dropzone",
  components: {
    vueDropzone: vue2Dropzone,
  },
  data: function () {
    return {
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" },
      },
    };
  },
};
</script>

<style>
</style>