<template>
  <li class="todoItem">
    <h2 style="display:flex">
      {{ todo.title }}
    </h2>

    <template v-if="todo.isPendding">
      <span>
        <Loader :spinnerColor="spinnerBGColor" />
      </span>
    </template>
    <template v-else>
      <div class="actions">
        <button
          :disable="todo.isPendding"
          class="btnDelete"
          @click="onDelete(todo)"
        >
          Delete</button
        ><button
          :disable="todo.isPendding"
          v-bind:class="[todo.completed ? 'btnIncomplete' : 'btnComplete']"
          @click="onToggle(todo)"
        >
          {{ todo.completed ? "Mark as incomplete" : "Mark as completed" }}
        </button>
      </div>
    </template>
  </li>
</template>

<script>
import { mapActions } from "vuex";
import Loader from "./Loader";

export default {
  data: () => ({
    spinnerBGColor: "#ff0",
  }),
  props: {
    todo: Object,
  },
  components: { Loader },

  methods: {
    ...mapActions(["deleteTodo", "ToggleTodo", "setTodoAsPendding"]),
    onToggle(todo) {
      this.spinnerBGColor = todo.completed ? "#343a40" : "#007bff";
      this.setTodoAsPendding(todo);
      this.ToggleTodo({
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      });
    },
    onDelete(todo) {
      this.spinnerBGColor = "#dc3545";
      this.setTodoAsPendding(todo);
      console.log(todo);
      this.deleteTodo(todo.id);
    },
  },
};
</script>

<style lang="scss">
.todoItem {
  border: 1px gray solid;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
