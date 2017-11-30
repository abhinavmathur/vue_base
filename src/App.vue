<template>
  <div id="app">
    <progress-bar></progress-bar>
    <br>
    <br>
    <text-box></text-box>
    <br>
    <hr>
    <br>
    <quote-container></quote-container>
  </div>
</template>

<script>

  import ProgressBar from './components/ProgressBar.vue'
  import TextBox from './components/TextBox.vue'
  import QuoteContainer from './components/QuoteContainer.vue'
  import { eventBus } from './main'

  export default {
    name: 'app',
    data(){
      return {

      }
    },
    created(){
      eventBus.$on('add_button_clicked', () => {
        this.add_quote();
      })
    },
    components: {
      progressBar: ProgressBar,
      textBox: TextBox,
      quoteContainer: QuoteContainer
    },
    methods: {
      add_quote(){

      }
    }
  }
</script>

<style>

</style>
