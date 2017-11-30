<template>
  <div class="container-fluid">
    <div v-if="quote_data.length > 0">
      <quote-box v-for="quote in quote_data" :key="Math.random()"></quote-box>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-md-4 offset-md-4">
          <div class="text-center">
            <p>Seems like you have no quotes. Add a quote in the box above to start</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import QuoteBox from './QuoteBox.vue'

  export default {

    data(){
      return {
        quote_data: []
      }
    },
    components: {
      quoteBox: QuoteBox
    }
  }
</script>
