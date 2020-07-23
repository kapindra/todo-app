<template>
  <div class="todo-list">
    <h2> Completed: {{ completedTodos }}</h2>
    <h2> Pending: {{ pendingTodos }} </h2>
    <h1 class="title">
      Add new todo
    </h1>
    <todo-form />
    <h2>
      Todos
    </h2>
    <todo
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import Todo from '@/components/Todo.vue';
import TodoForm from '@/components/TodoForm.vue';

export default {
  components: {
    Todo,
    TodoForm,
  },
  computed: {
    // This code

    // todos() {
    //   return this.$store.state.todos
    // },
    
    // Replaced with

    ...mapState({
      todos: 'todos',
    }),

    // This code 

    // completedTodos() {
    //   return this.$store.getters.completedTodos;
    // },
    // pendingTodos() {
    //   return this.$store.getters.pendingTodos;
    // }

    // Replaced with

    ...mapGetters({
      completedTodos: 'completedTodos',
      pendingTodos: 'pendingTodos',
    })
  },
};
</script>

<style>

</style>