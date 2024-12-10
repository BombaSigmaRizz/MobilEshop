<template>
  <div class="contact">
    <form>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <textarea placeholder="Message" required></textarea>
      <input type="submit">
    </form>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

.contact {
  display: flex;
  height: calc(100vh - 4.2rem);
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin: 1rem;
    height: 1.5rem;
    padding: 0.8rem;
    width: 35rem;
    outline: none;
    border: none;
    background-color: var(--bg0);
    color: white;
    appearance: none;
    border-bottom: 2px solid var(--border);
    font-size: 2rem;
    margin-top: 4rem;

    &::placeholder {
      color: var(--bg-l);
    }
  }

  input[type="submit"] {
    cursor: pointer;
    background-color: var(--border);
    color: white;
    font-weight: bold;
    width: 35rem;
    height: 5rem;
    border: none;
    border-radius: 10rem;
    transition: all 0.3s;

    &:hover {
      background-color: white;
      color: black;
    }
  }

  textarea {
    resize: none;
    height: 5rem;
  }
}
</style>