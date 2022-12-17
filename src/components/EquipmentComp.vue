<template>
  <div class="equipment">
    <AsideComp class="aside" />
    <transition name="modal">
      <ModalComp
        class="modal"
        :item="data[selectedItemIdx]"
        @confirmDel="(count) => confirmDel(selectedItemIdx, count)"
        @close="closeComp"
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
import { reactive, ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";
export default {
  components: {
    GridComp,
    AsideComp,
    FooterComp,
    ModalComp,
  },

  setup() {
    const showModal = ref(false);
    const selectedItemIdx = ref(null);
    const data = reactive([
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
    ]);

    onMounted(() =>
      Object.assign(data, JSON.parse(localStorage.getItem("data")))
    );

    watch(
      () => data,
      () => {
        localStorage.setItem("data", JSON.stringify(data));
      },
      { deep: true }
    );

    const openItem = (idx) => {
      selectedItemIdx.value = idx;
      showModal.value = true;
    };
    const confirmDel = (idx, count) => {
      data[idx].count -= count;
      closeComp();
    };
    const closeComp = () => {
      selectedItemIdx.value = null;
      showModal.value = false;
    };
    const drop = (addedIndex, removedIndex) => {
      data[addedIndex] = data[removedIndex];
      data[removedIndex] = { name: "", count: 0 };
    };
    return {
      showModal,
      selectedItemIdx,
      data,
      openItem,
      confirmDel,
      closeComp,
      drop,
    };
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
