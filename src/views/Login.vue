<template>
  <div>
    <h2 class="container">Login</h2><br>
    <form id="form-login" class="container" @submit.prevent="login">
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            v-model="email_login"
            placeholder="Type an email"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            v-model="password_login"
            placeholder="Type password"
            required
          />
        </div>
        <button type="submit" class="btn btn-dark w-20">Login</button>
      </form>
  </div>
</template>

<script>


export default {
    name: 'Login',
    data() {
        return {
            email_login: '',
            password_login: ''
        };
    },
    methods: {
        login(){
          this.$emit('userLogin', {
            email: this.email_login,
            password: this.password_login
          })
          this.email_login = ''
          this.password_login = ''
        }
    }
};
</script>

<style scoped>
</style>