<template>
  <div class="shop-sidebar">
    
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.shop-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100%;
  color: var(--text);
  z-index: 100;
  border-right: 2px solid transparent;
  border-image: linear-gradient(45deg, var(--border-highlight), var(--contrast)) 1 100%;
}
</style>