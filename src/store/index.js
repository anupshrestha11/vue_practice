import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from "uuid";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [],
    },
    mutations: {
        ADD_TODO(state, newTodo) {
            state.todos.push(newTodo);
        },
        REMOVE_TODO(state, id) {
            state.todos = state.todos.filter((item) => {
                return item.id !== id;
            });
        },
        COMPLETED_TODO(state, id) {
            state.todos.forEach((item) => {
                if (item.id === id) {
                    item.isCompleted = true;
                }
            });
        },
    },
    actions: {
        addTodo({ commit }, desc) {
            let newTodo = {
                id: uuidv4(),
                desc: desc,
                isCompleted: false,
            };
            commit("ADD_TODO", newTodo);
        },
        removeTodo({ commit }, id) {
            commit("REMOVE_TODO", id);
        },
        completedTodo({ commit }, id) {
            commit("COMPLETED_TODO", id);
        },
    },
    modules: {},
});
