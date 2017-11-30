<template>
  <div>
    <h3>New Quote</h3>
    <strong>{{ counter }}</strong>
    <button @click="counter++">Increase</button>
  </div>
</template>

<script>
  export default {
    name: 'New Quote',
    data(){
      return {
        counter: 0
      }
    }
  }
</script>

<style scoped>

</style>
