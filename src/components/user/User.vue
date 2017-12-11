<template>
  <div>
    <h1>{{ messenger }}</h1>
    <br>
    <input v-model="title">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'User',
    data(){
      return {
        title: '',
      }
    },
    computed: {
      messenger(){
        if(this.title === ''){
          return 'Type in your name below'
        } else {
          return 'Hello, ' + this.title
        }
      }
    }
  }
</script>
