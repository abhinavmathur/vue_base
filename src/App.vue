<template>
  <v-app>
    <toolbar></toolbar>
    <v-container-fluid>
      <v-layout row wrap grid-list-sm>
        <v-flex md2 lg2>
          <v-navigation-drawer class="mt-4">
            <v-list dense class="pt-0">
              <v-list-tile v-for="item in items" :key="item.title" @click="">
                <v-list-tile-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-navigation-drawer>
        </v-flex>
        <v-flex md4 lg4 offset-lg1 offset-md1>
          <note></note>
        </v-flex>
        <v-flex md4 lg4 offset-lg1 offset-md1>
          <preview></preview>
        </v-flex>
      </v-layout>
    </v-container-fluid>
  </v-app>
</template>

<script>

  import Toolbar from './Toolbar';
  import Note from './components/Note';
  import Preview from './components/Preview'
  export default {
    name: 'app',
    data(){
      return {
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ]
      }
    },
    components: {
      Toolbar,
      Note,
      Preview
    }
  }
</script>

<style>
  @import '../node_modules/vuetify/dist/vuetify.min.css';
</style>
