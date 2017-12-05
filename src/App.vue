<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Filters and Mixins</h1>
        <input type="text" v-model="text">
        <p>{{ text | reverseText }}</p>
        <p>{{ text | display_length }}</p>
        <p v-text="reversedText"></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return {
        text: 'hello world',
        fruits: ['Apple', 'Orange', 'Banana', 'Grape'],
        text: ''
      }
    },
    filters: {
      reverseText(value){
        if(value.length !== 0){
          let str = value.split('').reverse().join('').toLocaleLowerCase();
          return str.charAt(0).toUpperCase() + str.slice(1)
        }

      }
    },
    computed: {
      reversedText() {
        if(this.text !== 0){
          let str = this.text.split('').reverse().join('').toLocaleLowerCase();
          return str.charAt(0).toUpperCase() + str.slice(1)
        }
      }
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
