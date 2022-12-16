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
        :drop-placeholder="{ className: qwe }"
        class="cont"
      >
        <Draggable>
          <div class="item">
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

export default {
  name: "GridComp",

  components: { Container, Draggable },

  data() {
    return {
      removedIndex: null,
      addedIndex: null,
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
    onCardDrop(idx, dropResult) {
      if (dropResult.removedIndex != null) this.removedIndex = idx;
      if (dropResult.addedIndex != null) this.addedIndex = idx;
      if (
        this.removedIndex != null &&
        this.addedIndex != null &&
        !this.data[this.addedIndex].name
      ) {
        this.data[this.addedIndex] = this.data[this.removedIndex];
        this.data[this.removedIndex] = { name: "", count: 0 };
        this.addedIndex = null;
        this.removedIndex = null;
      }
    },
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  position: relative;
  .icon {
    position: relative;
    width: 48px;
    height: 48px;
    .rectangle {
      width: 100%;
      height: 100%;
    }
    .rectangle_blur {
      backdrop-filter: blur(6px);
      position: absolute;
      top: -6px;
      right: -6px;
      width: 100%;
      height: 100%;
    }
  }
  .counter {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 16px;
    height: 16px;
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
</style>
