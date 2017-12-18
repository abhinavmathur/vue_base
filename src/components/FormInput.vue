<template>
  <div class="row">
    <component
      :is="element"
      class="input"
      :class="inputClass"
      :name="name"
      :type="type"
      :value.prop="text"
      @input="update"
      v-bind="$attrs"
      :placeholder="placeholder"
    ></component>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String
      },
      type: {
        type: String,
        default: 'text'
      },
      text: {
        required: true
      },
      placeholder: {
        type: String
      },
      invalid: {
        type: Boolean,
        default: false
      },

    },
    computed: {
      inputClass(){
        return {
          'invalid': this.invalid
        }
      },
      element(){
        return this.type === 'textarea' ? this.type : 'input'
      }
    },
    model: {
      prop: 'text',
      event: 'update'
    },
    methods: {
      update(event){
        this.$emit('update', event.currentTarget.value)
      }
    }
  }
</script>
