<template>
  <div class="new-ticket">
    <h1>New Ticket</h1>

    <SmartForm
    title="New Ticket"
    :operation="operation"
    :valid="valid"
    >
      <FormInput
        name="title"
        type="input"
        v-model="title"
        rows="4"
        placeholder="Title of the ticket"
        required
      >
      </FormInput>
      <FormInput
        name="description"
        type="textarea"
        v-model="description"
        rows="4"
        placeholder="Short Description (max 100 chars)"
        maxlength="100"
        required
      >
      </FormInput>

      <template slot="actions">
        <router-link
        tag="button"
        :to="{ name: 'tickets'}"
        class="secondary"
        >Go Back</router-link>
        <button
        type="submit"
        :disabled="!valid"
        >Send Ticket</button>
      </template>

    </SmartForm>
  </div>
</template>

<script>
  import Loading from './Loading'
  import PersistentData from '../mixins/persistentData'


  export default {
    data(){
      return {
        title: '',
        description: ''
      }
    },
    components: {
      Loading
    },
    mixins: [PersistentData('NewTicket',['title', 'description'])],
    computed: {
      valid(){
        return !!this.title && !!this.description
      }
    },
    methods: {
      async operation(){
        const result = await this.$fetch('tickets/new', {
          method: 'POST',
          body: JSON.stringify({
            title: this.title,
            description: this.description
          })
        })
        this.title = this.description = ''
      }
    }
  }
</script>
