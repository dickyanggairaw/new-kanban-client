<template>
    <div>
        <div class="container-fluid">
            <nav>
                <ul>
                    <li><a href="#" @click.prevent="home">Home</a></li>
                    <li><a href="#" @click.prevent="login" v-if="!isLogin">Login</a></li>
                    <li><a href="#" @click.prevent="register" v-if="!isLogin">Register</a></li>
                </ul>
                <a href="" v-if="isLogin" @click.prevent="logout">Log out</a>
            </nav>
        </div><br><br>
        <Home v-if="page === 'home'" :dataTask="data" :userEmail="userEmail" :userLogin="isLogin" :changeDataLogin="changeLogin" v-on:deletedTask="deleteTask" v-on:editTask="editTask"></Home>
        <Login v-else-if="page === 'login'" v-on:userLogin="userLogin"></Login>
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
        editData: {}
        };
    },
    components: {
        Home,
        Login,
        Register,
        Create,
        Edit
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
        logout(){
            this.isLogin = false
            localStorage.removeItem('access_token')   
            this.page = 'home'    
            this.userEmail = ''     
        },
        changeLogin(value, page){
            this.isLogin = value
            this.page = page
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
        getPage(value){
            this.page = value
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
                console.log(err)
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
                console.log(err)
            })
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
}
</style>