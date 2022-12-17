<template>
  <div class="equipment">
    <AsideComp class="aside" />
    <transition name="modal">
      <ModalComp
        class="modal"
        :item="data[selectedItemIdx]"
        @confirmDel="(count) => confirmDel(selectedItemIdx, count)"
        v-if="showModal"
      />
    </transition>
    <GridComp class="grid" @openItem="openItem" @drop="drop" :data="data" />
    <FooterComp class="footer" />
  </div>
</template>

<script>
import GridComp from "@/components/GridComp.vue";
import AsideComp from "@/components/AsideComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import ModalComp from "@/components/ModalComp.vue";
import { nextTick } from "@vue/runtime-core";
export default {
  components: {
    GridComp,
    AsideComp,
    FooterComp,
    ModalComp,
  },
  data() {
    return {
      showModal: false,
      selectedItemIdx: null,
      data: [
        { name: "item1", color: "#7FAA65", colorBlur: "#80aa6559", count: 3 },
        { name: "item2", color: "#AA9765", colorBlur: "#aa976559", count: 4 },
        { name: "item3", color: "#656CAA", colorBlur: "#656caa59", count: 7 },
        { name: "", count: 0 },
        { name: "", count: 0 },
        { name: "", count: 0 },
        { name: "", count: 0 },
        { name: "", count: 0 },
        { name: "", count: 0 },
        { name: "", count: 0 },
        { name: "", count: 0 },
        { name: "", count: 0 },
        { name: "", count: 0 },
        { name: "", count: 0 },
        { name: "", count: 0 },
        { name: "", count: 0 },
        { name: "", count: 0 },
        { name: "", count: 0 },
        { name: "", count: 0 },
        { name: "", count: 0 },
        { name: "", count: 0 },
        { name: "", count: 0 },
        { name: "", count: 0 },
        { name: "", count: 0 },
        { name: "", count: 0 },
      ],
    };
  },
  methods: {
    openItem(idx) {
      console.log(idx);
      this.showModal = false;
      this.selectedItemIdx = idx;
      nextTick(() => (this.showModal = true));
    },
    confirmDel(idx, count) {
      console.log(count);
      this.data[idx].count -= count;
      this.selectedItemIdx = null;
      this.showModal = false;
    },
    drop(addedIndex, removedIndex) {
      this.data[addedIndex] = this.data[removedIndex];
      this.data[removedIndex] = { name: "", count: 0 };
    },
  },
};
</script>

<style lang="scss" scoped>
.equipment {
  position: relative;
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
.modal {
  z-index: 5;
  position: absolute;
  top: 1px;
  right: 1px;
}
.modal-enter-active,
.modal-leave-active {
  transition: all 0.2s ease-out;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
</style>
