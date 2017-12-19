<template>
  <v-app>
    <v-container>
      <v-layout row wrap>
        <v-flex xs6>
          <register @unregister="handle_unregister" :registrations="registrations"></register>
        </v-flex>
        <v-flex xs6>
          <unregister @register="handle_register" :users="users"></unregister>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  import Register from './components/Register'
  import Unregister from './components/Unregister'
  export default {
    name: 'Basic',
    data(){
      return {
        registrations: [],
        users:
          [
            { id: 1, name: 'Anna', registered: false },
            { id: 2, name: 'Mat', registered: false },
            { id: 3, name: 'Hannah', registered: false },
            { id: 4, name: 'Sam', registered: false }
          ]
      }
    },
    components: {
      Register,
      Unregister
    },
    methods: {
      handle_register(user){

        const date = new Date();

        let obj = {
          user_id: user.id,
          name: user.name,
          date: date.getMonth()
        }
        this.registrations.push(obj)
        this.users.splice(this.users.indexOf(user), 1)

      },
      handle_unregister(user){
        const selected_user = this.registrations.find((arr_user) => {
          return arr_user.user_id === user.user_id
        });
        this.users.push({ id: selected_user.user_id, name: selected_user.name, registered: false })

        this.registrations.splice(this.registrations.indexOf(selected_user), 1)
      }
    }
  }
</script>

<style>

</style>
