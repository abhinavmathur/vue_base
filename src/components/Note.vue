<template>
  <v-card color="grey lighten-4" class="pa-4 mt-4">
    <v-text-field
      name="input-7-1"
      label="Label Text"
      v-model="content"
      multi-line
    ></v-text-field>
  </v-card>
</template>

<script>
  import Marked from 'marked';
  import { eventBus } from "../main";

  export default {
    data(){
      return {
        content: ''
      }
    },
    created(){
      this.content = localStorage.getItem('content') || 'You can write in **markdown**'

    },
    watch: {
      content: {
        handler(val, oldVal){
          eventBus.$emit('markdown', Marked(val));
          localStorage.setItem('content', val)
        }
      }
    }
  }
</script>
