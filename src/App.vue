<template>
  <v-container fluid>
    <v-layout row>
      <v-flex md4>
        <v-btn block color="green" @click="addNote()" :title="notesTitle">Add Note</v-btn>
        <br>
        <v-card>
          <v-toolbar color="blue" light>
            <v-toolbar-title>My Notes</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-icon></v-icon>
          </v-toolbar>
          <v-list two-line>
            <template>
              <template v-if="notes.length === 0">
                <v-subheader>You have no notes</v-subheader>
              </template>
              <template v-else>
                <v-subheader>Notes List</v-subheader>
              </template>
              <v-divider></v-divider>
              <v-list-tile v-for="note in notes" :key="note.id" @click="selectNote(note)">
                <v-list-tile-content>
                  <v-list-tile-title>{{ note.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-flex>
      <template v-if="notes.length !== 0">
        <v-flex md4 class="ml-2">
          <br><br><br><br>
          <v-card class="pa-2">
            <v-text-field
              label="Edit Name"
              v-model="selectedNote.title"
            ></v-text-field>
            <v-btn flat @click="deleteNote">Delete This Note</v-btn>
            <v-text-field
              label="Write your note in MarkDown"
              v-model="selectedNote.content"
              multi-line
            ></v-text-field>
          </v-card>
        </v-flex>
        <v-flex md4 class="ml-2">
          <br><br><br><br>
          <v-card class="pa-2">
            <p v-html="notePreview"></p>
          </v-card>
        </v-flex>
      </template>
      <template v-else>
        <v-flex md8 text-center>
          <br><br><br><br>
          <v-card text-md-center class="pa-5 ml-2">
            <h2 text-center>Seems like you have no notes here</h2>
          </v-card>
        </v-flex>
      </template>

    </v-layout>
  </v-container>
</template>

<script>
  import Marked from 'marked'
  export default {
    data(){
      return {
        notes: JSON.parse(localStorage.getItem('notes')) || [],
        selectedId: localStorage.getItem('selected-id') || null
      }
    },
    computed: {
      notePreview(){
        return this.selectedNote ? Marked(this.selectedNote.content) : ''
      },
      notesTitle(){
        if(this.notes.length !== 0){
          return 'You have '+ this.notes.length + ' notes'
        } else {
          return 'Click here to add your first note!'
        }
      },
      selectedNote(){
        if(this.notes.length !== 0){
          return this.notes.find((note) => {
            return note.id === this.selectedId
          })
        } else {
          return {
            id: String(Date.now()),
            title: 'New note ' + (this.notes.length + 1),
            content: '**Hi!** This notebook is using [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for formatting!',
            created: Date.now(),
            favorite: false
          }
        }
      }
    },
    watch: {
      notes: {
        handler: 'saveNotes',
        deep: true
      }
    },
    methods: {
      addNote(){
        const time = Date.now();
        const note = {
          id: String(time),
          title: 'New note ' + (this.notes.length + 1),
          content: '**Hi!** This notebook is using [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for formatting!',
          created: time,
          favorite: false
        };

        this.notes.push(note);
        this.selectNote(note)
      },
      selectNote(note){
        this.selectedId = note.id;
        localStorage.setItem('selected-id', note.id)
      },
      saveNotes(){
        localStorage.setItem('notes', JSON.stringify(this.notes))
      },
      deleteNote(){
        let vm = this;
        if(this.selectedNote && confirm('Delete this note?')){
          let index = this.notes.indexOf(this.selectedNote);
          if(index !== -1){
            if(vm.notes.length === 1) {
              vm.selectedId = null;
              localStorage.setItem('selected-id', null)
            } else if(vm.notes[0].id === this.selectedNote.id){
              vm.selectedId = vm.notes[1].id;
              localStorage.setItem('selected-id', vm.notes[1].id)
            } else {
              vm.selectedId = vm.notes[0].id;
              localStorage.setItem('selected-id', vm.notes[0].id)
            }
            this.notes.splice(index, 1)
          }
        }
      }
    }
  }
</script>

<style>
  @import '../node_modules/vuetify/dist/vuetify.min.css';
</style>
