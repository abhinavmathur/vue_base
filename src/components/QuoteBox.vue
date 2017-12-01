<template>
  <b-card class="text-center vf-card">
    <p>{{ text }}</p>
    <b-modal v-model="modalShow"
             title="Edit Quote"
             hide-header-close="true"
             @change="alert('hello world')"
             hide-footer="true">
      <b-form-textarea id="textarea1"
                       v-model="text"
                       placeholder="Enter something"
                       :rows="3"
                       :max-rows="6">
      </b-form-textarea>
      <br>
      <b-btn class="mt-3" variant="success" :disabled="check_edit" block @click="hideModal">Edit Quote</b-btn>
    </b-modal>
    <b-button-group size="sm" class="vf-btn">
      <b-button variant="info" @click="modalShow = !modalShow">Edit</b-button>
      <b-button variant="danger" @click="delete_quote_signal">Delete</b-button>
    </b-button-group>
  </b-card>

</template>

<script>
  export default {
    props: {
      position: String
    },
    created(){
      this.previousText = this.position;
      this.text = this.position;
    },
    data(){
      return {
        modalShow: false,
        previousText: '',
        text: ''
      }
    },
    computed: {
      check_edit(){
        if(this.previousText === this.text){
          return true;
        }
        else if(this.text === ''){
          return true;
        }
        return false;
      }
    },
    methods: {
      delete_quote_signal(){
        this.$emit('delete_quote', this.position)
      },
      hideModal () {
        if(this.text === ''){
          alert('hello')
          this.text = this.previousText
        } else {
          this.$emit('handle_quote_edit', [this.previousText, this.text]);
          this.position = this.text;
          this.modalShow = false;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .vf-btn {
    display: none
  }
  a {
    @extend .vf-btn
  }
  .vf-card {
    min-height: 100px;
    margin-bottom: 30px;
    &:hover {
      .vf-btn {
        display: block
      }
    }
  }
</style>
