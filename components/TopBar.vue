<template>
  <div class="topbar">
    <div class="left">
      <div class="logo">img</div>
    </div>
    <div class="middle">
      <div class="link link-home">Home</div>
    </div>
    <div class="right">
      <div class="contact">Contact</div>
      <div class="account">Account</div>
      <div class="basket"><Icon name="ph:basket" size="2.5rem"/></div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.topbar {
  display: flex;
  position: fixed;
  justify-content: space-between;
  top: 0;
  left: 0;
  background-color: var(--bg-l);
  width: 100%;
  height: 3.2rem;
  box-sizing: border-box;
  padding: 0 1rem;
  outline: 2px solid var(--border);
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .left {
    display: flex
  }
  .middle {
    display: flex;
  }
  .right {
    // margin-left: auto;
    display: flex;
    gap: 1rem;
  }
}
</style>