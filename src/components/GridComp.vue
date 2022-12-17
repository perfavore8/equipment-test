<template>
  <div class="grid">
    <div v-for="(item, idx) in data" :key="idx" class="cell">
      <Container
        orientation="horizontal"
        group-name="grid"
        @drop="
          (e) =>
            e.removedIndex != null || e.addedIndex != null
              ? onCardDrop(idx, e)
              : null
        "
        drag-class="drag_class"
        class="cont"
      >
        <Draggable :drag-not-allowed="item.name == ''">
          <div
            class="item"
            @click="openItem(idx)"
            :class="{ defaultCursor: !item.name }"
          >
            <template v-if="item.name">
              <div class="icon">
                <div
                  class="rectangle"
                  :style="{ backgroundColor: item.color }"
                ></div>
                <div
                  class="rectangle_blur"
                  :style="{ backgroundColor: item.colorBlur }"
                ></div>
              </div>
              <div class="counter">{{ item.count }}</div>
            </template>
          </div>
        </Draggable>
      </Container>
    </div>
  </div>
</template>

<script>
import { Container, Draggable } from "vue-dndrop";
import { ref } from "@vue/reactivity";

export default {
  name: "GridComp",

  components: { Container, Draggable },

  props: {
    data: {
      type: Array,
      default() {
        return [{ name: "", color: "", colorBlur: "", count: null }];
      },
    },
  },

  setup(props, context) {
    const removedIndex = ref(null);
    const addedIndex = ref(null);

    const onCardDrop = (idx, dropResult) => {
      if (dropResult.removedIndex != null) removedIndex.value = idx;
      if (dropResult.addedIndex != null) addedIndex.value = idx;
      if (
        removedIndex.value != null &&
        addedIndex.value != null &&
        !props.data[addedIndex.value].name
      ) {
        context.emit("drop", addedIndex.value, removedIndex.value);
        addedIndex.value = null;
        removedIndex.value = null;
      }
    };
    const openItem = (idx) => {
      if (props.data[idx].name) context.emit("openItem", idx);
    };
    return { removedIndex, addedIndex, onCardDrop, openItem };
  },
};
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: 100px 100px 100px 100px 100px;
  width: 500px;
  margin: 0 auto;
  border-top: 1px solid #4d4d4d;
  border-right: 1px solid #4d4d4d;
  border-radius: 12px;
  background: #262626;
}
.cell {
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.4);
  width: 100px;
  height: 100px;
  border-bottom: 1px solid #4d4d4d;
  border-left: 1px solid #4d4d4d;
  overflow: hidden;
}
.cell:first-child {
  border-top-left-radius: 12px;
}
.cell:nth-child(21) {
  border-bottom-left-radius: 12px;
}
.cell:last-child {
  border-bottom-right-radius: 12px;
}
.item {
  cursor: url("@/assets/clarity_cursor-hand-line.svg"), auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  position: relative;
  .icon {
    cursor: inherit;
    position: relative;
    width: 48px;
    height: 48px;
    .rectangle {
      cursor: inherit;
      width: 100%;
      height: 100%;
    }
    .rectangle_blur {
      cursor: inherit;
      backdrop-filter: blur(6px);
      position: absolute;
      top: -6px;
      right: -6px;
      width: 100%;
      height: 100%;
    }
  }
  .counter {
    cursor: inherit;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 16px;
    height: 16px;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #4d4d4d;
    border-top-left-radius: 6px;
  }
}
.cont {
  transform: none !important;
  :deep(.dndrop-drop-preview-constant-class) {
    display: none;
  }
  :deep(.dndrop-stretcher-element) {
    display: none;
  }
  :deep(.animated) {
    transform: none !important;
  }
}
.drag_class {
  cursor: url("@/assets/clarity_cursor-hand-grab-line.svg"), auto;
  width: 100px;
  height: 100px;
  background: #262626;
  border: 1px solid #4d4d4d !important;
  border-radius: 12px;
  .counter {
    display: none;
  }
}
.defaultCursor {
  cursor: url("@/assets/akar-icons_cursor.svg"), auto;
}
</style>
