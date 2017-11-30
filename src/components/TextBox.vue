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
        <add-quote-btn></add-quote-btn>
      </div>
    </div>
  </div>

</template>

<script>

  import AddQuoteBtn from './AddQuoteBtn.vue'
  export default {
    data(){
      return {
        text: ''
      }
    },
    components: {
      addQuoteBtn: AddQuoteBtn
    }
  }
</script>
