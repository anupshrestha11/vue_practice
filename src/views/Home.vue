<template>
    <div class="container">
        <h1 class="title">
            TODO LIST
        </h1>
        <div>
            <input-todo
                v-on:submitted="submitted"
                :isAdding="isAdding"
            ></input-todo>
            <div class="todo-list" v-if="todos.length">
                <todo-item
                    v-for="(todo, idx) in todos"
                    :key="todo.key"
                    :todo="todo"
                    :idx="idx"
                    v-on:deleteItem="deleteItem"
                    v-on:completed="completed"
                ></todo-item>
            </div>
        </div>
    </div>
</template>

<script>
import InputTodo from "../components/InputTodo.vue";
import TodoItem from "../components/TodoItem.vue";

export default {
    data() {
        return {
            isAdding: false,
        };
    },
    computed: {
        todos() {
            return this.$store.state.todos;
        },
    },
    components: { InputTodo, TodoItem },
    methods: {
        submitted(desc) {
            this.isAdding = true;
            this.$store.dispatch("addTodo", desc);
            this.isAdding = false;
        },
        deleteItem(id) {
            this.$store.dispatch("removeTodo", id);
        },
        completed(id) {
            this.$store.dispatch("completedTodo", id);
        },
    },
};
</script>

<style lang="scss">
.container {
    display: grid;
    place-content: center;
}
.title {
    color: dodgerblue;
}
</style>
