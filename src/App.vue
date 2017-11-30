<template>
  <div id="app">
    <button @click="selectedComponent = 'appQuote'">Quote</button>
    <button @click="selectedComponent = 'appNew'">New</button>
    <button @click="selectedComponent = 'appAuthor'">Author</button>
    <br>


    <component :is="selectedComponent">
      hello world
    </component>
  </div>
</template>

<script>
  import Quote from './components/Quote.vue'
  import New from './components/New.vue'
  import Author from './components/Author.vue'

  export default {
    data(){
      return {
        selectedComponent: 'appQuote'
      }
    },
    components: {
      appQuote: Quote,
      appAuthor: Author,
      appNew: New
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
