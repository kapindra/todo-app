<template>
  <div class="todos">
    <!-- <span class="todo-task"
      :class="{completed: todo.completed}"
      @click="toggleTodoStatus()"
    > -->
    <span class="todo-task"
      :class="{completed: todo.completed}"
      @click="todoStatus(todo)"
    >
      {{ todo.title }}
    </span>
    <!-- <button @click="deleteTodoItem()"> -->
    <button @click="deleteTodo(todo)">
      Delete
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: [
    'todo'
  ],
  methods: {
    // This code 

    // deleteTodoItem() {
    //   this.$store.dispatch('deleteTodo', this.todo);
    // },
    // toggleTodoStatus() {
    //   this.$store.dispatch('todoStatus', this.todo);
    // }

    // Replaced with

    ...mapActions({
      deleteTodo: 'deleteTodo',
      todoStatus: 'todoStatus',
    })
  }
}
</script>

<style>
  .todos {
    text-align: left;
    margin: 0 auto;
    width: 400px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .todo-task {
    display: inline-block;
  }
  .completed {
    text-decoration: line-through;
  }
</style>