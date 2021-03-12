<template>
  <div>
    <h2 class="container">Register</h2><br>
    <form id="form-register" class="container" @submit.prevent="register">
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            v-model="email_register"
            placeholder="Type an email"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            v-model="password_register"
            placeholder="Type password"
            required
          />
        </div>
        <button type="submit" class="btn btn-dark w-20">Register</button>
      </form>
  </div>
</template>

<script>

export default {
    name: 'Register',
    props:['baseUrl', 'page'],
    data() {
        return {
            email_register: '',
            password_register: ''
        };
    },
    methods:{
        register(){
          this.$emit('userRegister', {
            email: this.email_register,
            password: this.password_register
          })
          this.email_register = ''
          this.password_register = ''
        }
    }
};
</script>

<style scoped>
</style>