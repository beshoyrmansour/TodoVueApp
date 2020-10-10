<template>
  <div>
    <h1>AllTodos</h1>
    <ul class="todosList">
      <li class="todoItem" v-for="todo in allTodos" :key="todo.id">
        <h2>{{ todo.title }}</h2>
        <div class="actions">
          <button class="btnDelete" @click="onDelete(todo)">Delete</button
          ><button
            v-bind:class="[todo.completed ? 'btnIncomplete' : 'btnComplete']"
            @click="onToggle(todo)"
          >
            {{ todo.completed ? "Mark as incomplete" : "Mark as completed" }}
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AllTodos",
  computed: { ...mapGetters(["allTodos"]) },

  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "ToggleTodo"]),
    onToggle(todo) {
      this.ToggleTodo({
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      });
    },
    onDelete(todo) {
      console.log(todo.id);
      this.deleteTodo(todo.id);
    },
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
}
.todoItem {
  border: 1px gray solid;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}
.actions {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .btnDelete {
    color: #dc3545;
    background-color: transparent;
    background-image: none;
    border: 1px solid #dc3545;
  }
  .btnComplete {
    color: #fff;
    background-color: #007bff;

    border: 1px solid #98a5b3;
  }
  .btnIncomplete {
    color: #343a40;
    background-color: transparent;
    background-image: none;

    border: 1px solid #343a40;
  }
}
</style>
