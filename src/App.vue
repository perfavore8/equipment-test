<template>
  <EquipmentComp />
</template>

<script>
import EquipmentComp from "@/components/EquipmentComp.vue";
export default {
  name: "App",
  components: { EquipmentComp },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;700&display=swap");
body {
  margin: 0;
  background-color: #1e1e1e;
}
* {
  box-sizing: border-box;
  cursor: url("@/assets/akar-icons_cursor.svg"), auto;
  user-select: none;
  font-family: "Inter";
}
</style>
