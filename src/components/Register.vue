<template>
  <v-card class="mr-5">
    <v-card-title>
      <h4 class="headline mb-0">Registered Users</h4>
    </v-card-title>
    <v-card-text>
      <v-list subheader>
        <v-subheader>Users</v-subheader>
        <v-list-tile avatar v-for="user in registrations" :key="user.id">
          <v-list-tile-content>
            <v-list-tile-title v-html="user.name"></v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn flat @click="unregister(user)">Unregister</v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>

  export default {
    props: ['registrations'],

    methods: {
      unregister(user) {
        {
          this.$emit('unregister', user);
        }
      }
    }
  }
</script>

<style scoped>

</style>
