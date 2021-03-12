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
      <div class="container">
        <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
      </div>
     
  </div>
</template>

<script>

import GoogleLogin from 'vue-google-login';

export default {
    name: 'Login',
    data() {
        return {
            email_login: '',
            password_login: '',
            params: {
                client_id: "96197829282-e627910rfp7jeftvbodcgj3ulgbprapl.apps.googleusercontent.com"
            },
            renderParams: {
                    width: 250,
                    height: 50,
                    longtitle: true
                }
            }
        },
    methods: {
      login(){
        this.$emit('userLogin', {
          email: this.email_login,
          password: this.password_login
        })
        this.email_login = ''
        this.password_login = ''  
      },    
      onSuccess(googleUser) {
        const id_token = googleUser.getAuthResponse().id_token;
        this.$emit('idToken', id_token)
      },
      onFailure(){

      }
    },
    components:{
      GoogleLogin
    }
};
</script>

<style scoped>
</style>