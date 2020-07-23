import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: 'Go to shop',
        completed: true,
      },
      {
        id: 2,
        title: 'Do assignments',
        completed: false,
      },
      {
        id: 3,
        title: 'Cook Food',
        completed: true,
      }
    ]
  },
  getters: {
    completedTodos(state) {
      return state.todos.filter(todo => {
        return todo.completed === true;
      }).length;
    },
    pendingTodos(state) {
      return state.todos.filter(todo => {
        return todo.completed === false;
      }).length;
    }
  },
  mutations: {
    // Yo function chai action le trigger gareko ho
    NEW_TODO(state, todoItem) {
      state.todos.push({
        title: todoItem,
        completed: false,
      });
    },
    DELETE_TODO(state, todoItem) {
      let index = state.todos.indexOf(todoItem);
      state.todos.splice(index, 1);
    },
    TODO_STATUS(state, todoItem) {
      todoItem.completed = !todoItem.completed;
    },
  },
  actions: {

    // Yo action chai utaa TodoForm.vue baata dispatch gareko kura receive garchha.
    addNewTodo({commit}, todoItem) {
      commit('NEW_TODO', todoItem);
    },
    deleteTodo({commit}, todoItem) {
      commit('DELETE_TODO', todoItem);
    },
    todoStatus({commit}, todoItem) {
      commit('TODO_STATUS', todoItem);
    }
  },
  modules: {

  },
});
