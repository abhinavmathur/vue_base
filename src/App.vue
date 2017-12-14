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
              <v-list-tile
                v-for="note in sortedNotes"
                :key="note.id"
                @click="selectNote(note)"
                :class="{vf_selected: note === selectedNote}">
                <v-list-tile-content>
                  <v-list-tile-title>{{ note.title }}</v-list-tile-title>
                </v-list-tile-content>
                <v-icon color="grey lighten-1" v-if="note.favorite">star</v-icon>
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
            <v-btn flat color="danger" @click="favoriteNote" title="Favorite note"><i
              class="material-icons">{{ selectedNote.favorite ? 'star' :
              'star_border' }}</i></v-btn>
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
            <span>Created on - {{ selectedNote.created | proper_date }}</span>
            <br>
            <span>Lines Count - {{ this.linesCount }}</span>
            <br>
            <span>Words Count - {{ this.wordsCount }}</span>
            <br>
            <span>Character Count - {{ this.characterCount }}</span>
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
  import moment from 'moment'

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
      characterCount (){
        if(this.selectedNote){
          return this.selectedNote.content.split('').length
        }
      },
      linesCount () {
        if (this.selectedNote) {
          // Count the number of new line characters
          return this.selectedNote.content.split(/\r\n|\r|\n/).length
        }
      },

      wordsCount () {
        if (this.selectedNote) {
          var s = this.selectedNote.content
          // Turn new line characters into white-spaces
          s = s.replace(/\n/g, ' ')
          // Exclude start and end white-spaces
          s = s.replace(/(^\s*)|(\s*$)/gi, '')
          // Turn 2 or more duplicate white-spaces into 1
          s = s.replace(/\s\s+/gi, ' ')
          // Return the number of spaces
          return s.split(' ').length
        }
      },

      sortedNotes () {
        return this.notes.slice()
          .sort((a, b) => a.created - b.created)
          .sort((a, b) => (a.favorite === b.favorite)? 0
            : a.favorite? -1
              : 1)
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
    filters: {
      proper_date(time){
        return moment(time).format('DD/MM/YY, HH:mm')
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
      },
      favoriteNote(){
        this.selectedNote.favorite ^= true
      }
    }
  }
</script>

<style>
  @import '../node_modules/vuetify/dist/vuetify.min.css';

  .vf_selected {
    background-color: lightblue;
  }
</style>
