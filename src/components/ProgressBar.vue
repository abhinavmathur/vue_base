<template>
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <h3>Quotes Added</h3>
      <b-progress :value="counter"
                  :max="max"
                  :measure_progress="measureProgress(counter)"
                  :show-progress="showProgress"
                  :animated="isAnimated"></b-progress>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        counter: 20,
        showProgress: true,
        max: 100,
        isAnimated: true,
      }
    },
    methods: {
      measureProgress(data){
        console.log(data)
      }
    }
  }
</script>
<style scoped>
  .row {
    margin-top: 50px;
  }
</style>
