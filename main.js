var app = new Vue({
    el: '#app',
    data: {
        home: 'home',
        inputTodo: "",
        inputDescription: "",
        inputAssign:"",
        backlogs: [
            {
                id:1,
                todo: "Bootstrap",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quod veritatis hic, libero nihil eos fuga expedita, saepe reprehenderit, voluptas beatae! Quod ex quaerat voluptatem ullam fugiat perspiciatis rerum dicta?"
            },
            {
                id:2,
                todo: "Vue",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quod veritatis hic, libero nihil eos fuga expedita, saepe reprehenderit, voluptas beatae! Quod ex quaerat voluptatem ullam fugiat perspiciatis rerum dicta?"
            },
            {
                id:3,
                todo: "CCS",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quod veritatis hic, libero nihil eos fuga expedita, saepe reprehenderit, voluptas beatae! Quod ex quaerat voluptatem ullam fugiat perspiciatis rerum dicta?"
            }
        ],
        todos: [
            {
                id:1,
                todo: "express",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quod veritatis hic, libero nihil eos fuga expedita, saepe reprehenderit, voluptas beatae! Quod ex quaerat voluptatem ullam fugiat perspiciatis rerum dicta?"
            },
            {
                id:2,
                todo: "Sequelize",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quod veritatis hic, libero nihil eos fuga expedita, saepe reprehenderit, voluptas beatae! Quod ex quaerat voluptatem ullam fugiat perspiciatis rerum dicta?"
            },
            {
                id:3,
                todo: "PG",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quod veritatis hic, libero nihil eos fuga expedita, saepe reprehenderit, voluptas beatae! Quod ex quaerat voluptatem ullam fugiat perspiciatis rerum dicta?"
            }
        ],
        developments: [
            {
                id:1,
                todo: "NodeJs",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quod veritatis hic, libero nihil eos fuga expedita, saepe reprehenderit, voluptas beatae! Quod ex quaerat voluptatem ullam fugiat perspiciatis rerum dicta?"
            },
            {
                id:2,
                todo: "Belajar",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quod veritatis hic, libero nihil eos fuga expedita, saepe reprehenderit, voluptas beatae! Quod ex quaerat voluptatem ullam fugiat perspiciatis rerum dicta?"
            }
        ],
        dones: [
            {
                id:1,
                todo: "NodeJs",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quod veritatis hic, libero nihil eos fuga expedita, saepe reprehenderit, voluptas beatae! Quod ex quaerat voluptatem ullam fugiat perspiciatis rerum dicta?"
            }
        ]
    },
    methods:{
        addTask(){
            let create = {
                id: this.backlogs[this.backlogs.length-1].id + 1,
                todo: this.inputTodo,
                description: this.inputDescription,
                assign: this.inputAssign
            }
            this.backlogs.push(create)
        },
        deleteTask(id){
            console.log(`delete task dengan id ${id}`)
        },
        toProduct(id){
            console.log(`delete task backlog, dan mimindahkan ke product dengan id ${id}`)
        },
        toBacklog(id){
            console.log(`back to backlog ${id}`)
        },
        toDevelopment(id){
            console.log(`To development ${id}`)
        },
        backProduct(id){
            console.log(` back to Product ${id}`)
        },
        toDone(id){
            console.log(`to Complete ${id}`)
        },
        backDevelopment(id){
            console.log(`back to development ${id}`)
        },
        toComplete(id){
            console.log(`complete ${id}`)
        }
    }
})