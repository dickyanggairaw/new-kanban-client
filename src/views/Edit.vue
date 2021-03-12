<template>
    <div>
        <form id="form-create" class="container" @submit.prevent="edit">
        <div class="form-group col-6">
          <input
            type="title"
            class="form-control"
            v-model="title"
          />
        </div>
        <div class="form-group">
          <label for="category">Category</label>

            <select v-model="selected">
            <option disabled value="">Please select one</option>
                <option>Backlog</option>
                <option>Product</option>
                <option>Development</option>
                <option>Done</option>
            </select>
        </div>
        <button type="submit" class="btn btn-sm btn-dark w-20">Edit</button>
      </form>
    </div>
</template>

<script>

export default {
    data(){
        return {
            title: this.editData.title,
            selected: this.editData.category
        }
    },
    props: ['editData'],
    methods: {
        edit(){
            this.$emit('editingTask', {title: this.title,category: this.selected, id: this.editData.id})
            this.title = ''
            this.selected = ''
        }
    }
}
</script>

<style>

</style>