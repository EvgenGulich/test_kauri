<template>
  <div class="layout">
    <header></header>
    <main></main>
    <LayoutFooter />
  </div>
</template>

<script>
import LayoutFooter from "./LayoutFooter.vue";
export default {
  components: { LayoutFooter },
  name: "LayoutMain",
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  main {
    flex-grow: 1;
  }
}
</style>
