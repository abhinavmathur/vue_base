<template>
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <h3>Quotes Added</h3>
      <b-progress :value="value"
                  :max="max"
                  :variant="variant_value"
                  :show-progress="showProgress"
                  :animated="isAnimated"></b-progress>
    </div>
  </div>
</template>

<script>
  import { eventBus } from './../main'

  export default {
    data(){
      return {
        max: 10,
        value: 0,
        showProgress: true,
        variant_value: 'default',
        isAnimated: true,
      }
    },
    created(){
      eventBus.$on('quote_added', (number) => {
        this.control_progress_bar(number);
      })
    },
    methods: {
      control_progress_bar(value){
        this.value = value;
        if(value === 10){
          this.showProgress = false;
          this.variant_value = 'success';
          this.isAnimated = false;
        } else {
          this.showProgress = true;
          this.variant_value = 'default';
          this.isAnimated = true;
        }
      }
    }
  }
</script>
<style scoped>
  .row {
    margin-top: 50px;
  }
</style>
