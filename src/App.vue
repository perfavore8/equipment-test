<template>
  <div class="app">
    <AsideComp class="aside" />
    <GridComp class="grid" />
    <FooterComp class="footer" />
  </div>
</template>

<script>
import GridComp from "./components/GridComp.vue";
import AsideComp from "./components/AsideComp.vue";
import FooterComp from "./components/FooterComp.vue";

export default {
  name: "App",
  components: {
    GridComp,
    AsideComp,
    FooterComp,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: #1e1e1e;
}
* {
  box-sizing: border-box;
  cursor: url("@/assets/akar-icons_cursor.svg"), auto;
  user-select: none;
}
.app {
  margin: 100px auto;
  width: min-content;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 500px 75px;
  grid-gap: 24px;
  grid-template-areas:
    "a a g g g g g g g g g g"
    "f f f f f f f f f f f f";
}
.aside {
  grid-area: a;
}
.grid {
  grid-area: g;
}
.footer {
  grid-area: f;
}
</style>
