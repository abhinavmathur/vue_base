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
    props: ['noteContent', 'noteId'],
    created(){
      this.content = this.noteContent;
    },
    data(){
      return {
        content: ''
      }
    },
    watch: {
      noteContent:  {
        handler(val, oldVal){
          localStorage.setItem(this.noteId, val)
        }
      }
    }

  }
</script>
