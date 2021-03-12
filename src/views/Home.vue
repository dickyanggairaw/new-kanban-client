<template>
    <div>
        <div v-if="userLogin" class="container">
            <button type="submit" class="btn btn-dark w-10" @click="$emit('createTask', 'create')">Create Task</button>
        </div><br>
        <div v-if="userLogin" class="container">
            <div class="row">
                <Category :title="backlog" :datas="dataBacklog" v-on:deleteTask="deleteTask" v-on:editTask="editTask"></Category>
                <Category :title="product" :datas="dataProduct" v-on:deleteTask="deleteTask" v-on:editTask="editTask"></Category>
                <Category :title="development" :datas="dataDevelopment" v-on:deleteTask="deleteTask" v-on:editTask="editTask"></Category>
                <Category :title="done" :datas="dataDone" v-on:deleteTask="deleteTask" v-on:editTask="editTask"></Category>
            </div>
        </div>
        <div v-if="!userLogin" class="container">
            <h1>Selamat Datang di Kanban Board</h1>
        </div>
    </div>  
</template>


<script>

import Category from '../components/Category.vue'

export default {
    name: 'Home',
    props:['dataTask', 'userLogin'],
    data() {
        return {
            backlog: "Backlog",
            product: "Product",
            development: "Development",
            done: "Done"
        };
    },
    components:{
        Category
    },
    methods: {
        deleteTask(id){
            this.$emit('deletedTask', id)
        },
        editTask(id){
            this.$emit('editTask', id)
        }
    },
    computed: {
        dataBacklog(){
            return this.dataTask.filter(el => el.category.toLowerCase() == 'backlog')
        },
        dataProduct(){
            return this.dataTask.filter(el => el.category.toLowerCase() == 'product')
        },
        dataDevelopment(){
            return this.dataTask.filter(el => el.category.toLowerCase() == 'development')
        },
        dataDone(){
            return this.dataTask.filter(el => el.category.toLowerCase() == 'done')
        }
    }
    
};
</script>

<style scoped>

</style>