<template>
  <b-card class="text-center vf-card">
    <slot name="description"></slot>
    <a href="#" class="btn btn-danger btn-sm" @click.prevent="delete_quote_signal">Delete</a>
  </b-card>

</template>

<script>
  export default {
    props: {
      position: Number
    },
    methods: {
      delete_quote_signal(){
        this.$emit('delete_quote', this.position)
      }
    }
  }
</script>

<style lang="scss" scoped>
  a {
    display: none
  }
  .vf-card {
    min-height: 100px;
    margin-bottom: 30px;
    &:hover {
      a {
        display: block
      }
    }
  }
</style>
