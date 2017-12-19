<template>
  <v-card class="vf-card">
    <v-card-title>
      <h4 class="headline mb-0">Unregistered Users</h4>
    </v-card-title>
    <v-card-text>
      <template v-if="users.length === 0">
        <p class="text-xs-center">No unregistered users</p>
      </template>
      <template v-else>
        <v-list subheader>
          <v-subheader>Unregistered Users</v-subheader>
          <v-list-tile avatar v-for="user in users" :key="user.id">
            <v-list-tile-content>
              <v-list-tile-title v-html="user.name"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn flat @click="registerUser(user)">Register</v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </template>
    </v-card-text>
  </v-card>
</template>

<script>

  export default {
    props: {
      users: {
        type: Array
      }
    },
    methods: {
      registerUser(user){
        this.$set(user, 'register', true)
        this.$emit('register', user)
      }
    }
  }

</script>

<style scoped>
  .vf-card {
    min-height: 200px;
  }
</style>
