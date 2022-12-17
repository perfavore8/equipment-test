<template>
  <div class="bg" @click="close()"></div>
  <menu>
    <button class="cross" @click="close()" />
    <div class="icon">
      <div class="rectangle" :style="{ backgroundColor: item.color }" />
      <div
        class="rectangle_blur"
        :style="{ backgroundColor: item.colorBlur }"
      />
    </div>
    <div class="br" />
    <section>
      <label class="header">headerheaderheaderheader</label>
      <p class="text">
        texttexttexttext texttexttext texttexttext texttexttext
      </p>
      <p class="text">texttexttexttext texttexttext texttexttext</p>
      <p class="text">
        texttexttexttext texttexttext texttexttext texttexttext
      </p>
    </section>
    <div class="br" />
    <button
      class="del_btn"
      v-if="!showConfirmDel"
      @click="showConfirmDel = true"
    >
      Удалить предмет
    </button>
    <div v-else class="confirm_footer">
      <input
        type="number"
        placeholder="Введите количество"
        v-model="countToDel"
        step="1"
        onchange="this.value = parseInt(this.value);"
      />
      <div class="btns">
        <button class="dismiss_btn" @click="showConfirmDel = fasle">
          Отмена
        </button>
        <button class="confirm_btn" @click="confirm()">Подтвердить</button>
      </div>
    </div>
  </menu>
</template>

<script>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
export default {
  props: {
    item: Object,
  },
  setup(props, context) {
    const showConfirmDel = ref(false);
    const countToDel = ref(null);

    watch(countToDel, (newVal) => {
      if (newVal > props.item.count) countToDel.value = props.item.count;
      if (newVal < 0) countToDel.value = 0;
    });
    const confirm = () => {
      context.emit("confirmDel", countToDel.value);
    };
    const close = () => {
      context.emit("close");
    };
    return { showConfirmDel, countToDel, confirm, close };
  },
};
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
}
menu {
  z-index: 5;
  position: absolute;
  top: 1px;
  right: 1px;
  margin: 0;
  height: 499px;
  padding: 16px;
  background: rgba(38, 38, 38, 0.5);
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left: 1px solid #4d4d4d;
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  .icon {
    cursor: inherit;
    position: relative;
    width: 110px;
    height: 110px;
    min-height: 110px;
    margin: 40px;
    .rectangle {
      cursor: inherit;
      position: absolute;
      bottom: -8px;
      left: -8px;
      width: 100%;
      height: 100%;
    }
    .rectangle_blur {
      cursor: inherit;
      backdrop-filter: blur(6px);
      position: absolute;
      top: -8px;
      right: -8px;
      width: 100%;
      height: 100%;
    }
  }

  .cross {
    cursor: url("@/assets/clarity_cursor-hand-line.svg"), auto;
    position: absolute;
    top: 8px;
    right: 8px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    background-color: transparent;
    border: none;
    background-image: url("@/assets/cross.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
  }
  section {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    .header,
    .text {
      margin: 0;
      background: linear-gradient(
        90deg,
        #3c3c3c 0%,
        #444444 51.04%,
        #333333 100%
      );
      color: transparent;
      width: fit-content;
    }
    .header {
      border-radius: 8px;
      font-size: 16px;
      margin-bottom: 8px;
    }
    .text {
      border-radius: 4px;
      font-size: 8px;
    }
  }
  .del_btn {
    cursor: url("@/assets/clarity_cursor-hand-line.svg"), auto;
    width: 100%;
    height: 40px;
    min-height: 40px;
    border: none;
    background-color: #fa7272;
    border-radius: 8px;
    color: white;
  }
  .confirm_footer {
    display: flex;
    flex-direction: column;
    gap: 20px;
    input {
      width: 100%;
      height: 40px;
      padding: 12px;
      color: #ffffff66;
      border: 1px solid #4d4d4d;
      background-color: #262626;
      border-radius: 4px;
      outline: none;
    }
    input[type="number"] {
      -moz-appearance: textfield;
      -webkit-appearance: textfield;
      appearance: textfield;
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      display: none;
    }
    .btns {
      display: flex;
      flex-direction: row;
      gap: 10px;
      .dismiss_btn {
        cursor: url("@/assets/clarity_cursor-hand-line.svg"), auto;
        display: flex;
        align-items: center;
        vertical-align: middle;
        padding: 8px 12px 10px;
        height: 40px;
        border: none;
        font-size: 14px;
        background: #ffffff;
        box-shadow: 0px 0px 14px 1px white;
        border-radius: 8px;
      }
      .confirm_btn {
        cursor: url("@/assets/clarity_cursor-hand-line.svg"), auto;
        display: flex;
        align-items: center;
        color: white;
        padding: 8px 12px 10px;
        height: 40px;
        border: none;
        font-size: 14px;
        background: #fa7272;
        box-shadow: 0px 0px 14px 1px #fa7272;
        border-radius: 8px;
      }
    }
  }
}
.br {
  width: 100%;
  height: 0;
  border-bottom: 1px solid #4d4d4d;
  margin: 16px 0;
}
</style>
