<template>
  <div>
    <slot name="title"></slot>
    <hr>
    <slot name="description"></slot>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      quote: String
    }
  }
</script>

<style scoped>
  div {
    border: 1px solid white;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: auto;
  }
</style>
