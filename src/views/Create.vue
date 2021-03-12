<template>
    <div>
        <form id="form-create" class="container" @submit.prevent="create">
        <div class="form-group">
          <input
            type="title"
            class="form-control"
            v-model="title"
            placeholder="Type an title"
            required
          />
        </div>
        <div class="form-group">
          <label for="category">Category</label>

            <select v-model="selected" required>
            <option disabled value="">Please select one</option>
                <option>Backlog</option>
                <option>Product</option>
                <option>Development</option>
                <option>Done</option>
            </select>
        </div>
        <button type="submit" class="btn btn-dark w-20">Create</button>
      </form>
    </div>
</template>

<script>


export default {
    data(){
        return {
            title:'',
            selected: ''
        }
    },
    methods: {
        create(){
            this.$emit('createTask', {
                title: this.title,
                category: this.selected
            })
            this.title = ''
            this.selected = ''
        }
    }
}
</script>

<style>

</style>