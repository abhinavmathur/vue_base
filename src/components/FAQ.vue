<template>
  <main class="faq">
    <h1>Frequently Asked Questions</h1>
    <Loading v-if="remoteDataBusy"></Loading>
    <div class="error" v-if="error">
      Can't load the questions
    </div>

    <section class="list">
      <article v-for="question of questionList">
        <h2 v-html="question.title"></h2>
        <p v-html="question.content"></p>
      </article>
    </section>
  </main>
</template>


<script>
  import RemoteData from '../mixins/RemoteData'
  import Loading from './Loading'

  export default {
    data() {
      return {
        questions: [],
        error: null
      }
    },
    mixins: [RemoteData({
      questionList: 'questions'
    })],
    created(){
      this.loading()
    },
    components: {
      Loading
    },
    methods: {

      async loading() {
        this.load = true;
        try {
          this.questions = await this.$fetch('questions')
        } catch (e) {
          this.error = e
        }
        this.load = false
      }
    }
  }
</script>
