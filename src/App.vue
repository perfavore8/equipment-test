<template>
  <GridComp />
</template>

<script>
import GridComp from "./components/GridComp.vue";

export default {
  name: "App",
  components: {
    GridComp,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  box-sizing: border-box;
}
</style>
