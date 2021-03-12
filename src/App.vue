<template>
    <div>
        <div class="container-fluid">
            <nav class="navbar">
                <ul>
                    <li><a href="#" @click.prevent="home">Home</a></li>
                    <li><a href="#" @click.prevent="login" v-if="!isLogin">Login</a></li>
                    <li><a href="#" @click.prevent="register" v-if="!isLogin">Register</a></li>
                </ul>
                <a href="" class="m-0" v-if="isLogin" @click.prevent="logout">Log out</a>
                <!-- <GoogleLogin v-if="isLogin" :params="params" :logoutButton=true @click.prevent="logout">Logout</GoogleLogin> -->
            </nav>
        </div><br><br>
        <Home v-if="page === 'home'" :dataTask="data" :userLogin="isLogin" v-on:createTask="createTask" v-on:deletedTask="deleteTask" v-on:editTask="editTask"></Home>
        <Login v-else-if="page === 'login'" v-on:userLogin="userLogin" v-on:idToken="loginGoogle"></Login>
        <Register v-else-if="page === 'register'" v-on:userRegister="userRegister"></Register>
        <Create v-else-if="page === 'create'" v-on:createTask="create"></Create>
        <Edit v-else-if="page === 'edit'" :editData="editData" v-on:editingTask="editingTask"></Edit>
    </div>
</template>

<script>
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Create from './views/Create.vue'
import Edit from './views/Edit.vue'
import axios from 'axios'

export default {
    data() {
        return {
        isLogin: false,
        page: 'home',
        url: "http://localhost:3000",
        data: [],
        editData: {},
        params: {
                client_id: "96197829282-e627910rfp7jeftvbodcgj3ulgbprapl.apps.googleusercontent.com"
            },
        renderParams: {
                width: 250,
                height: 50,
                longtitle: true
            }
        };
    },
    components: {
        Home,
        Login,
        Register,
        Create,
        Edit,
    },
    methods:{
        home(){
            this.page = 'home'
        },
        login(){
            this.page = 'login'
        },
        register(){
            this.page = 'register'
        },
        createTask(){
            this.page = 'create'
        },
        logout(){
            console.log('bisa')
            this.isLogin = false
            localStorage.removeItem('access_token')   
            this.page = 'home'    
            this.userEmail = ''     
        },
        fetchData(){
            axios({
                method: 'GET',
                url: this.url + '/task',
                headers: {access_token: localStorage.access_token}
            })
                .then(response=>{
                    this.data = response.data
                })
                .catch(error =>{
                    console.log(error)
                })
        },
        deleteTask(id){
            axios({
                method: 'DELETE',
                url: this.url + '/task/delete/' + id,
                headers: {access_token: localStorage.access_token}
            })
                .then(()=>{
                    this.page = 'home'
                    this.fetchData()
                })
                .catch(error=>{
                    console.log(error)
                })
        },
        editTask(id){
            axios({
                method: 'GET',
                url: this.url + '/task/' + id,
                headers: {access_token: localStorage.access_token}
            })
                .then(response=>{
                    this.editData = response.data
                    this.page = 'edit'
                })
                .catch(error=>{
                    console.log(error)
                })
        },
        editingTask(data){
            axios({
                method: 'PATCH',
                url: this.url + '/task/edit/' + data.id,
                headers: {access_token: localStorage.access_token},
                data: {
                    title: data.title,
                    category: data.category
                }
            })
                .then(()=>{
                    this.page = 'home'
                    this.fetchData()
                })
                .catch(error=>{
                    console.log(error)
                })
        },
        create(data){
            axios({
                method: 'POST',
                url: this.url + '/task/create',
                headers: {
                    access_token: localStorage.access_token
                },
                data:{
                    title: data.title,
                    category: data.category
                }
            })
                .then(response => {
                    this.page = 'home'
                    this.fetchData()
                })
                .catch(error=>{
                    console.log(error)
                })
        },
        userLogin(data){
            axios({
                method: 'POST',
                url: this.url + '/login',
                data: {
                    email: data.email,
                    password: data.password
                }
            })
            .then(respone=>{
                console.log(respone)
                localStorage.setItem("access_token", respone.data.access_token)
                this.isLogin = true
                this.page = 'home'
                this.fetchData()
            })
            .catch(err=>{
                alert("Email or Password wrong")
            })
        },
        userRegister(data){
            axios({
                method: 'POST',
                url: this.url + '/register',
                data: {
                    email: data.email,
                    password: data.password
                }
            })
            .then(respone=>{
                this.page = 'login'
            })
            .catch(err=>{
                alert("email must be unique")
            })
        },
        loginGoogle(id_token) {
            // This only gets the user information: id, name, imageUrl and email
            axios({
                method: 'POST',
                url: this.url + '/oauth',
                data: {
                    id_token
                }
            })
                .then((res)=>{
                    // console.log(res.data.access_token)
                    localStorage.setItem('access_token', res.data.access_token)
                    this.isLogin = true
                    this.page = 'home'
                    this.fetchData()
                })
                .catch(err=>{
                    console.log(err)
                })
        },
        onFailure(){

        }
    },
    created(){
        if(localStorage.access_token){
            this.isLogin = true
            this.fetchData()
        }        
    },
};
</script>

<style scoped>
nav{
    background-color: black;
    display: flex;
}
nav ul{
    display: flex;
}

nav ul li{
    display: inline;
    color: white;
    padding: 10px 10px;
}

nav ul li a{
    text-decoration: none;
    color: white;
}
nav a{
    padding: 10px;
    text-decoration: none;
    color: white; 
    text-align: right;
}
</style>