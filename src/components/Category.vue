<template>
    <div class="col-6 col-sm-3">
        <div class="title">
            <h2>{{title}}</h2>
            <div class="card" v-for="data in datas" :key="data.id">
                <div class="card-body">
                    <CardTask :title="data.title" :email="data.User" :id="data.id" v-on:emitDelete="emitDelete" v-on:editTask="editTask"></CardTask>    
                </div>            
            </div>
        </div>
    </div>
</template>

<script>

import CardTask from './CardTask.vue'

export default {
    name: 'Category',
    props:['title', 'datas'],
    data(){
        return {
            backlog: "Backlog",

        }
    },
    components:{
        CardTask
    },
    methods:{
        emitDelete(id){
            this.$emit('deleteTask', id)
        },
        editTask(id){
            this.$emit('editTask', id)
        }
    }
}
</script>

<style scoped>
    h2{
        text-align: center;
        position: relative;
    }
    .title{
        background-color: orange;
        padding: 10px;
        border-radius: 10px;
        height: 550px;
        overflow: scroll;
        margin-bottom: 10px;
    }
    .card{
        margin-bottom: 10px;
    }
</style>