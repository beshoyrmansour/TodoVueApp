<template>
  <div>
    <h2>AllTodos</h2>
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
    ...mapActions(["fetchTodos"]),
  },
  created() {
    this.fetchTodos();
  },
};
</script>

<style lang="scss">
.todosList {
  display: grid;
  grid-template-columns: repeat(1fr);
  list-style: none;
  grid-gap: 1rem;
  @media (min-width: 600px) {
    grid-template-columns: auto auto;
  }
  @media (min-width: 900px) {
    grid-template-columns: auto auto auto;
  }
  @media (min-width: 1400px) {
    grid-template-columns: auto auto auto auto;
  }
}
</style>
