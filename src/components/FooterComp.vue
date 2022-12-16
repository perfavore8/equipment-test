<template>
  <footer>
    <label class="text"
      >texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</label
    >
    <button class="cross"><span>+</span></button>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  box-sizing: border-box;
  width: 100%;
  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
  position: relative;
  padding: 18px;
  .text {
    background: linear-gradient(
      90deg,
      #3c3c3c 0%,
      #444444 51.04%,
      #333333 100%
    );
    color: transparent;
    width: fit-content;
    border-radius: 12px;
    font-size: 24px;
  }
  .cross {
    cursor: pointer;
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
    span {
      color: white;
      font-size: 24px;
      font-weight: 300;
      transform: rotate(45deg);
    }
  }
}
</style>
