<template>
  <div id="app">
    <h1 class="text-center">Main Page</h1>
    <app-header></app-header>
    <router-view></router-view>

  </div>
</template>

<script>
  import Header from './Header'
  export default {
    name: 'app',
    components: {
      appHeader: Header
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
