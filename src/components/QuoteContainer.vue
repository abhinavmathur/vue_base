<template>
  <div class="container-fluid">
    <div v-if="quote_data.length > 0">
      <div class="row">
        <div class="col-md-3" v-for="quote in quote_data" :key="quote">
          <quote-box :position="quote" @delete_quote="delete_quote($event)">
            <p slot="description">{{ quote }}</p>
          </quote-box>
        </div>
      </div>
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

  import { eventBus } from './../main'
  import QuoteBox from './QuoteBox.vue'

  export default {

    data(){
      return {
        quote_data: []
      }
    },
    created(){
      eventBus.$on('quote_text', (text) => {
        if(text === ''){
          alert('Please enter some text');
        } else if(this.quote_data.length < 10) {
          this.quote_data.push(text);
          eventBus.$emit('quote_added', this.quote_data.length)
        }
        else {
          alert('maximum 10 quotes')
        }
      })
    },
    components: {
      quoteBox: QuoteBox
    },
    methods: {
      delete_quote(value){
        let quote_index = this.quote_data.indexOf(value);
        if(quote_index !== -1){
          this.quote_data.splice(quote_index, 1);
          eventBus.$emit('quote_added', this.quote_data.length)
        }
      }
    }
  }
</script>
