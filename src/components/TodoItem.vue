<template>
    <div class="item-container" :class="todo.isCompleted ? 'complete' : ''">
        <div class="id">
            {{ idx + 1 }}
        </div>
        <div class="desc">
            {{ todo.desc }}
        </div>
        <div class="action">
            <button
                class="btn btn-check"
                @click="completed"
                :class="todo.isCompleted ? 'hidden' : ''"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check-circle-fill"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                    />
                </svg>
            </button>
            <button class="btn btn-delete" @click="deleteItem">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash-fill"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                    />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["todo", "idx"],
    methods: {
        deleteItem() {
            this.$emit("deleteItem", this.todo.id);
        },
        completed() {
            this.$emit("completed", this.todo.id);
        },
    },
};
</script>

<style lang="scss" scoped>
.item-container {
    display: flex;
    border: 1px solid dodgerblue;
    align-items: center;
    > div {
        padding: 10px;
        button {
            margin: 5px;
        }
    }
    &.complete {
        background-color: hsla(100, 50%, 50%, 0.493);
        border: 1px solid hsl(100, 50%, 50%);
    }
}
.desc {
    flex: 1;
    text-align: left;
    max-width: 300px;
}
.btn {
    border: 0;
    outline: 0;
    background-color: unset;
}
.btn-delete {
    color: rgb(211, 16, 16);
}
.btn-check {
    color: rgb(17, 95, 10);
}
.hidden {
    opacity: 0;
}
</style>
