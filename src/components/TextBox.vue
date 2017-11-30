<template>
  <div>
    <div class="row">
      <div class="col-md-4 offset-md-4">
        <b-form-textarea v-model="text"
                         placeholder="Enter a Quote"
                         :rows="3">
        </b-form-textarea>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-md-12 text-center">
        <add-quote-btn v-on:add_button_clicked="create_box()"></add-quote-btn>
      </div>
    </div>
  </div>

</template>

<script>

  import AddQuoteBtn from './AddQuoteBtn.vue'
  import { eventBus } from './../main'

  export default {
    data(){
      return {
        text: ''
      }
    },
    methods: {
      create_box(){
        eventBus.$emit('quote_text', this.text)
        this.text = ''
      }
    },
    components: {
      addQuoteBtn: AddQuoteBtn
    }
  }
</script>
