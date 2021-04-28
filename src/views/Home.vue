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
import { v4 as uuidv4 } from "uuid";

export default {
    data() {
        return {
            isAdding: false,
            todos: [],
        };
    },
    components: { InputTodo, TodoItem },
    methods: {
        submitted(desc) {
            this.isAdding = true;
            this.todos.push({
                id: uuidv4(),
                desc: desc,
                isCompleted: false,
            });
            this.isAdding = false;
        },
        deleteItem(id) {
            this.todos = this.todos.filter((item) => {
                return item.id !== id;
            });
        },
        completed(id) {
            this.todos.forEach((item) => {
                if (item.id === id) {
                    item.isCompleted = true;
                }
            });
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
