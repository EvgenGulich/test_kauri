<template>
  <LayoutMain />
</template>

<script>
import LayoutMain from "../src/layout/LayoutMain.vue";
export default {
  name: "App",
  components: {
    LayoutMain,
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0 auto;
  padding: 0;
  max-width: 1920px;
  min-width: 100%;
}
</style>
