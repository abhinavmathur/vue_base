<template>
  <main class="login">
    <h1>Please Login to continue</h1>
    <SmartForm
      class="form"
      :title="title"
      :operation="operation"
      :valid="valid">
      <FormInput
        name="username"
        v-model="username"
        placeholder="Username"
      ></FormInput>
      <FormInput
        name="password"
        type="password"
        v-model="password"
        placeholder="Password" ></FormInput>
      <template v-if="mode === 'signup'">
        <FormInput
          name="verify-password"
          type="password"
          v-model="password2"
          placeholder="Retype Password"
          :invalid="retypePasswordError" ></FormInput>
        <FormInput
          name="email"
          type="email"
          v-model="email"
          placeholder="Email" ></FormInput>
      </template>
      <template slot="actions">
        <template v-if="mode === 'login'">
          <button
            type="button"
            class="secondary"
            @click="mode = 'signup'">
            Sign up
          </button>
          <button
            type="submit"
            @click="login"
            >
            Login
          </button>
        </template>
        <template v-else-if="mode === 'signup'">
          <button
            type="button"
            class="secondary"
            @click="mode = 'login'">
            Back to login
          </button>
          <button
            type="submit"
            @click="signup"
            >
            Create account
          </button>
        </template>
      </template>
    </SmartForm>
  </main>
</template>

<script>


  export default {
    data(){
      return {
        username: '',
        mode: 'login',
        password: '',
        password2: '',
        email: ''
      }
    },
    computed: {
      title(){
        switch(this.mode) {
          case 'login': return 'Login';
          case 'signup': return 'Create a new Account'
        }
      },
      retypePasswordError (){
        return this.password2 && this.password2 !== this.password;
      },
      signupValid () {
        this.password2 && this.email && !this.retypePasswordError
      },
      valid(){
        this.username && this.password && (this.mode !== 'signup' || this.signupValid)
      }
    },
    methods: {
      async operation(){

      },
      async login(){
        this.$state.user = await this.$fetch('login', {
          method: 'POST',
          body: JSON.stringify({
            username: this.username,
            password: this.password
          })
        });
        this.$router.replace(this.$route.params.wantedRoute || { name: 'home' })
      },
      async signup(){
        await this.$fetch('signup', {
          method: 'POST',
          body: JSON.stringify({
            username: this.username,
            password: this.password,
            email: this.email
          })
        })
        this.mode = 'login'
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .content {
    max-width: 400px;
  }

</style>
