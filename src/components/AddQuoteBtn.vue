<template>
  <div>
    <b-button variant="success" @click="add_quote">Add Quote</b-button>
  </div>
</template>

<script>
  import { eventBus } from '../main'
  export default {
    methods: {
      add_quote(){
        eventBus.$emit('add_button_clicked', null);
        this.$emit('add_button_clicked')
      }
    }
  }
</script>
