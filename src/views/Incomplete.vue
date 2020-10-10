<template>
  <div>
    <h1>Incomplete Todos</h1>

    <ul class="todosList">
      <TodoItem v-for="todo in allTodos" :key="todo.id" :todo="todo" />
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TodoItem from "../components/TodoItem";
export default {
  name: "AllTodos",
  components: { TodoItem },

  computed: { ...mapGetters(["allTodos"]) },

  methods: {
    ...mapActions(["fetchInCompleteTodos"]),
  },
  created() {
    this.fetchInCompleteTodos();
  },
};
</script>

<style lang="scss">
.todosList {
  display: grid;
  grid-template-columns: repeat(1fr);
  list-style: none;
  grid-gap: 1rem;
}
</style>
