<template>
  <h1 class="mt-5 mb-10">{{ text }}</h1>
</template>

<script>
export default {
  name: "Title",
  props: {
    text: String,
  },
};
</script>

<style scoped>
h1 {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;
}
</style>