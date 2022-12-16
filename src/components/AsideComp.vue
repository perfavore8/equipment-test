<template>
  <aside>
    <img src="@/assets/Img.jpg" />
    <section>
      <label class="header">headerheaderheaderheader</label>
      <p class="text">
        texttexttexttext texttexttext texttexttext texttexttext
      </p>
      <p class="text">texttexttexttext texttexttext texttexttext</p>
      <p class="text">
        texttexttexttext texttexttext texttexttext texttexttext
      </p>
      <p class="text">texttexttexttext texttexttext texttexttext</p>
    </section>
  </aside>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
aside {
  height: 100%;
  width: 236px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 16px;
  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
  box-sizing: border-box;

  img {
    border-radius: 10px;
    backdrop-filter: blur(6px);
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    .header,
    .text {
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
}
</style>
