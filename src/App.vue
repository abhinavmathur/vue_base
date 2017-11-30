<template>
  <div id="app">
    <progress-bar></progress-bar>
    <br>
    <br>
    <text-box></text-box>
    <br>
  </div>
</template>

<script>

  import ProgressBar from './components/ProgressBar.vue'
  import TextBox from './components/TextBox.vue'

  export default {
    name: 'app',
    data(){
      return {}

    },
    components: {
      progressBar: ProgressBar,
      textBox: TextBox

    }
  }
</script>

<style>

</style>
