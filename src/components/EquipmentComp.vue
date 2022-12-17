<template>
  <div class="equipment">
    <AsideComp class="aside" />
    <transition name="modal">
      <ModalComp
        class="modal"
        :item="{
          name: 'item1',
          color: '#7FAA65',
          colorBlur: '#80aa6559',
          count: 3,
        }"
        @confirmDel="confirmDel"
        v-if="showModal"
      />
    </transition>
    <GridComp class="grid" @openItem="openItem" />
    <FooterComp class="footer" />
  </div>
</template>

<script>
import GridComp from "@/components/GridComp.vue";
import AsideComp from "@/components/AsideComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import ModalComp from "@/components/ModalComp.vue";
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
    };
  },
  methods: {
    openItem(idx) {
      console.log(idx);
      this.showModal = true;
    },
    confirmDel(item, count) {
      console.log(item, count);
      this.showModal = false;
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
