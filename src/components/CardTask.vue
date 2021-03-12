<template>
    <div>
        <div class="card-body rounded-3">
            <h5>{{title}}</h5>
            <p>Assign To : <span>{{ email }}</span></p>
            <button v-on:click="$emit('emitDelete', id)" class="btn btn-sm btn-danger w-20">Delete</button>
            <button v-on:click="$emit('editTask', id)" class="btn btn-sm btn-primary w-20">Edit</button>
        </div>
  </div>
</template>

<script>
export default {
    name: 'CardTask',
    props:['title', 'email', 'id'],
    data(){
        return {}
    }
}
</script>

<style scoped>

</style>