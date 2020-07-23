<template>
  <div class="home">
    <todo-list/>
  </div>
</template>

<script>
// @ is an alias to /src
import Stats from '@/components/Stats.vue';
import TodoList from '@/components/TodoList.vue';
import { mapState, mapMutations, mapActions } from 'vuex';
// window.axios = require ('axios');

export default {
  name: 'Home',
  components: {
    TodoList,
  },
};
</script>
